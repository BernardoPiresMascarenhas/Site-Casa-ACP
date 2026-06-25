import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializa o Resend com a chave do arquivo .env
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Pega os dados enviados pelo formulário do Front-end
    const body = await request.json();
    const { nome, email, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !mensagem) {
      return NextResponse.json(
        { error: "Por favor, preencha todos os campos." },
        { status: 400 }
      );
    }

    // Dispara o e-mail via Resend
    const data = await resend.emails.send({
      // IMPORTANTE: Durante os testes no Resend, use este e-mail de onboarding.
      // Depois que você verificar o domínio (casaacp.com.br), mude para algo como 'site@casaacp.com.br'
      from: "Acme <onboarding@resend.dev>",
      
      // Coloque aqui o e-mail de vocês que VAI RECEBER as mensagens do formulário
      to: ["contato@casaacp.com.br"], 
      
      subject: `Nova mensagem pelo site: ${assunto}`,
      
      // O corpo do e-mail formatado em HTML
      html: `
        <div style="font-family: sans-serif; color: #4A3C31; max-width: 600px; padding: 20px;">
          <h2 style="color: #9A5A4A;">Novo contato via Casa ACP</h2>
          <p>Você recebeu uma nova mensagem pelo formulário do site.</p>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
          
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Assunto:</strong> ${assunto}</p>
          
          <h3 style="margin-top: 24px;">Mensagem:</h3>
          <p style="background-color: #f9fafb; padding: 16px; border-radius: 8px; font-style: italic;">
            ${mensagem.replace(/\n/g, "<br/>")}
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Erro no envio do e-mail:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar a mensagem." },
      { status: 500 }
    );
  }
}