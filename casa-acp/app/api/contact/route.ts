import { NextResponse } from "next/server";

// Endpoint da API do Resend chamado direto via fetch.
// Não usamos o SDK oficial aqui porque ele não expõe `signal` nas opções de
// envio (CreateEmailRequestOptions só aceita query/headers/idempotencyKey),
// então não havia como impor um timeout — e um fetch pendurado prende o worker
// do Passenger indefinidamente, derrubando o site inteiro com 503.
const RESEND_ENDPOINT = "https://api.resend.com/emails";

// Se o Resend não responder nesse prazo, abortamos e devolvemos erro ao
// visitante. O AbortSignal fecha o socket de saída de verdade (um Promise.race
// devolveria a resposta mas deixaria a conexão vazando em background).
const TIMEOUT_MS = 10_000;

// O corpo é lido em pedaços e cortado assim que passa deste limite, antes de
// qualquer parse. Um formulário legítimo não chega perto disso.
const MAX_BODY_BYTES = 20 * 1024;

// Limites por campo, aplicados depois do parse.
const LIMITES = {
  nome: 120,
  email: 254,
  telefone: 40,
  assunto: 150,
  mensagem: 5_000,
} as const;

const DESTINATARIO = process.env.CONTACT_TO_EMAIL ?? "contatocasaacp@gmail.com";
const REMETENTE = process.env.CONTACT_FROM_EMAIL ?? "Acme <onboarding@resend.dev>";

/** Escapa o que vem do formulário antes de interpolar no HTML do e-mail. */
function escaparHtml(valor: string): string {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Remove quebras de linha de valores que vão para cabeçalhos (evita header injection). */
function linhaUnica(valor: string): string {
  return valor.replace(/[\r\n]+/g, " ").trim();
}

/**
 * Lê o corpo em streaming e aborta assim que ultrapassa `maxBytes`.
 * Diferente de `request.json()`, que bufferiza tudo na heap antes de validar —
 * caminho curto para estourar a memória do worker no cPanel.
 * Retorna null quando o corpo é grande demais.
 */
async function lerCorpoLimitado(request: Request, maxBytes: number): Promise<string | null> {
  const declarado = request.headers.get("content-length");
  if (declarado && Number(declarado) > maxBytes) return null;

  if (!request.body) return "";

  const reader = request.body.getReader();
  const partes: Uint8Array[] = [];
  let total = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      total += value.byteLength;
      if (total > maxBytes) {
        // Cancela o stream para não ficar drenando o socket do cliente.
        await reader.cancel();
        return null;
      }
      partes.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  return new TextDecoder().decode(Buffer.concat(partes));
}

/** Normaliza o campo para string; qualquer outro tipo vira string vazia. */
function campoTexto(valor: unknown): string {
  return typeof valor === "string" ? valor.trim() : "";
}

export async function POST(request: Request) {
  // A chave é lida aqui dentro, e não no escopo do módulo: se ela faltar no
  // ambiente do cPanel, queremos um 500 com log explícito, e não uma exceção
  // na avaliação do módulo que quebra a rota antes do handler rodar.
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY ausente no ambiente.");
    return NextResponse.json(
      { error: "Erro interno ao enviar a mensagem." },
      { status: 500 }
    );
  }

  const bruto = await lerCorpoLimitado(request, MAX_BODY_BYTES);
  if (bruto === null) {
    return NextResponse.json({ error: "Mensagem grande demais." }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(bruto);
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const dados = body as Record<string, unknown>;
  const campos = {
    nome: campoTexto(dados.nome),
    email: campoTexto(dados.email),
    telefone: campoTexto(dados.telefone),
    assunto: campoTexto(dados.assunto) || "Contato pelo site",
    mensagem: campoTexto(dados.mensagem),
  };
  const { nome, email, telefone, assunto, mensagem } = campos;

  if (!nome || !email || !mensagem) {
    return NextResponse.json(
      { error: "Por favor, preencha todos os campos." },
      { status: 400 }
    );
  }

  // Checado separadamente do obrigatório para que a mensagem de erro diga o que
  // de fato aconteceu, em vez de pedir para preencher um campo já preenchido.
  const longoDemais = (Object.keys(LIMITES) as Array<keyof typeof LIMITES>).find(
    (campo) => campos[campo].length > LIMITES[campo]
  );
  if (longoDemais) {
    return NextResponse.json(
      { error: `O campo "${longoDemais}" é longo demais.` },
      { status: 400 }
    );
  }

  // Checagem de formato deliberadamente frouxa: só barra o que claramente não
  // é um endereço, sem rejeitar e-mails válidos e incomuns.
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "E-mail inválido." }, { status: 400 });
  }

  const html = `
        <div style="font-family: sans-serif; color: #4A3C31; max-width: 600px; padding: 20px;">
          <h2 style="color: #9A5A4A;">Novo contato via Casa ACP</h2>
          <p>Você recebeu uma nova mensagem pelo formulário do site.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />

          <p><strong>Nome:</strong> ${escaparHtml(nome)}</p>
          <p><strong>E-mail:</strong> ${escaparHtml(email)}</p>
          ${telefone ? `<p><strong>Telefone:</strong> ${escaparHtml(telefone)}</p>` : ""}
          <p><strong>Assunto:</strong> ${escaparHtml(assunto)}</p>

          <h3 style="margin-top: 24px;">Mensagem:</h3>
          <p style="background-color: #f9fafb; padding: 16px; border-radius: 8px; font-style: italic;">
            ${escaparHtml(mensagem).replace(/\n/g, "<br/>")}
          </p>
        </div>
      `;

  let resposta: Response;
  try {
    resposta = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: REMETENTE,
        to: [DESTINATARIO],
        reply_to: email,
        subject: `Nova mensagem pelo site: ${linhaUnica(assunto)}`,
        html,
      }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (error) {
    // TimeoutError vem do AbortSignal.timeout; o resto é falha de rede/DNS.
    const expirou = error instanceof Error && error.name === "TimeoutError";
    console.error(
      expirou
        ? `[contact] Resend não respondeu em ${TIMEOUT_MS}ms; requisição abortada.`
        : "[contact] Falha de rede ao chamar o Resend:",
      error
    );
    return NextResponse.json(
      { error: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes." },
      { status: 504 }
    );
  }

  if (!resposta.ok) {
    // Erros de API (401 chave inválida, 403 domínio não verificado, 422, 429…)
    // precisam ser tratados explicitamente: antes eles passavam como sucesso e
    // a mensagem do visitante sumia em silêncio.
    const detalhe = await resposta.text().catch(() => "");
    console.error(`[contact] Resend respondeu ${resposta.status}: ${detalhe}`);
    return NextResponse.json(
      { error: "Não conseguimos enviar sua mensagem agora. Tente novamente em instantes." },
      { status: 502 }
    );
  }

  // Só devolvemos o id — o payload completo do Resend não interessa ao cliente.
  const { id } = (await resposta.json().catch(() => ({}))) as { id?: string };
  return NextResponse.json({ success: true, id });
}
