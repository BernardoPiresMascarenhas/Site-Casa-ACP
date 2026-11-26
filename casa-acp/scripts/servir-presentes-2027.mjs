// Servidor de downloads APENAS PARA TESTES LOCAIS da página /presentes-2027.
//
// Serve os PDFs/PPTX direto da pasta original (ignorada pelo Git), sem copiar
// nada para public/ — assim os arquivos pesados não entram no repositório nem
// no pacote de deploy. Só entrega os nomes de arquivo da coleção: o briefing,
// a simulação e qualquer outro arquivo da pasta respondem 404.
//
// Uso (em um terminal separado do `npm run dev`):
//   node scripts/servir-presentes-2027.mjs
// e, em .env.development.local:
//   NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL=http://localhost:4027
//
// Não usar em produção. Veja docs/presentes-2027.md.

import { createServer } from "node:http";
import { createReadStream, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const PORTA = Number(process.env.PORTA_PRESENTES) || 4027;
const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..", "assets-originais", "materiais-campanha-2027");

// Somente os arquivos públicos da coleção.
const PERMITIDO = /^casa-acp-(calendario|planner|complementos)-2027-(impressao|preenchivel)\.pdf$|^casa-acp-(calendario|planner|complementos)-2027-editavel\.pptx$/;

const MIME = {
  pdf: "application/pdf",
  pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};

createServer((req, res) => {
  const nome = decodeURIComponent(new URL(req.url ?? "/", "http://localhost").pathname.replace(/^\/+/, ""));

  if (!["GET", "HEAD"].includes(req.method ?? "") || !PERMITIDO.test(nome)) {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Não encontrado");
    return;
  }

  const caminho = join(RAIZ, nome);
  let tamanho;
  try {
    tamanho = statSync(caminho).size;
  } catch {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }).end("Arquivo ausente na pasta original");
    return;
  }

  res.writeHead(200, {
    "Content-Type": MIME[nome.split(".").pop()],
    "Content-Length": tamanho,
    "Content-Disposition": `attachment; filename="${nome}"`,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store",
  });
  if (req.method === "HEAD") return res.end();
  createReadStream(caminho).pipe(res);
}).listen(PORTA, () => {
  console.log(`[presentes-2027] Downloads locais em http://localhost:${PORTA} (pasta: ${RAIZ})`);
});
