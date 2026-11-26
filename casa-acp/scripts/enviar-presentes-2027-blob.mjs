// Envia os 9 arquivos da Coleção 2027 para o Vercel Blob, com os nomes exatos.
//
// Uso:
//   BLOB_READ_WRITE_TOKEN=vercel_blob_rw_... node scripts/enviar-presentes-2027-blob.mjs
//
// O token fica em Vercel → Storage → (seu Blob store) → .env.local / Settings.
// Ao final, o script imprime o valor para NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL.

import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { put } from "@vercel/blob";

const PASTA_LOCAL = "assets-originais/materiais-campanha-2027";
const PREFIXO = "presentes-2027";

const ARQUIVOS = [
  "casa-acp-calendario-2027-impressao.pdf",
  "casa-acp-calendario-2027-preenchivel.pdf",
  "casa-acp-calendario-2027-editavel.pptx",
  "casa-acp-planner-2027-impressao.pdf",
  "casa-acp-planner-2027-preenchivel.pdf",
  "casa-acp-planner-2027-editavel.pptx",
  "casa-acp-complementos-2027-impressao.pdf",
  "casa-acp-complementos-2027-preenchivel.pdf",
  "casa-acp-complementos-2027-editavel.pptx",
];

const MIME = {
  ".pdf": "application/pdf",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
};

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  console.error("Defina BLOB_READ_WRITE_TOKEN antes de rodar (ver comentário no topo).");
  process.exit(1);
}

let base = "";
for (const nome of ARQUIVOS) {
  const dados = await readFile(path.join(PASTA_LOCAL, nome));
  const sha = createHash("sha256").update(dados).digest("hex");
  const blob = await put(`${PREFIXO}/${nome}`, dados, {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: MIME[path.extname(nome)],
    cacheControlMaxAge: 60 * 60 * 24, // 1 dia: substituições aparecem rápido
  });
  base = blob.url.slice(0, blob.url.lastIndexOf("/"));
  console.log(`ok  ${nome}  ${dados.length} bytes  sha256 ${sha}`);
}

console.log(`\nNEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL=${base}`);
