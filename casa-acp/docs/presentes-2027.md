# Campanha de Natal · Coleção 2027 — guia de operação

Página: `/presentes-2027` · Banner na home: logo após o Hero.
Toda a configuração fica em `lib/presentes2027.ts`.

> Documento interno. Não é servido pelo site (fica fora de `public/`).

---

## 1. Onde o site está hospedado hoje

Verificado em 25/11/2026 com `curl -I`:

| URL | Resposta |
|---|---|
| `http://casaacp.com.br/` | 308 → `https://casaacp.com.br/` (`server: Vercel`) |
| `https://casaacp.com.br/` | 308 → `https://www.casaacp.com.br/` (`server: Vercel`) |
| `https://www.casaacp.com.br/` | 200 (`server: Vercel`, `x-vercel-cache: HIT`) |

- **O domínio canônico real é `https://www.casaacp.com.br`.**
- **A produção atual responde pela Vercel**, não pelo cPanel. Antes de publicar,
  confirme com o responsável pela hospedagem qual ambiente vai receber o deploy
  (a seção 3 cobre os dois casos).

---

## 2. Arquivos para download (originais, sem nenhuma modificação)

Origem: `assets-originais/materiais-campanha-2027/` (pasta ignorada pelo Git).

| Arquivo | Bytes | SHA-256 |
|---|---:|---|
| casa-acp-calendario-2027-impressao.pdf | 11928293 | fdd4da924600d4fb46fb6b2acdc1f4b8bf5ba1110c22ddd19c9a8ea767c05b00 |
| casa-acp-calendario-2027-preenchivel.pdf | 12023770 | 7299089805856beedcfe2ec2b50142b944280038ce61c6dd98df2f9ee2963c3e |
| casa-acp-calendario-2027-editavel.pptx | 7872824 | 4daa9734189e3704839307f03648624af6f273de7552d393446f570b5a1c1b72 |
| casa-acp-planner-2027-impressao.pdf | 3840039 | c6c3197646c04d565cfc0f8f7013c82320ca0c3bd2d6261e2945da9fc98103ae |
| casa-acp-planner-2027-preenchivel.pdf | 3861553 | 206ea7680da05ea003ae5e2e8a7291e4f7a3db961b8ac90a369f2bd32b9ca59a |
| casa-acp-planner-2027-editavel.pptx | 4533022 | 6874314b7740fe73275500a661e61a71088e31e37d9032014b5bd3d29a34cf5b |
| casa-acp-complementos-2027-impressao.pdf | 1151442 | 0423e02bd687a8d0a2eb05b47b10cdd119e7651bdde080cd54a749abe662ce3e |
| casa-acp-complementos-2027-preenchivel.pdf | 1155743 | 69314fb3a94ee93e2159a543b9a2b8fad9e8804c9842f405bae9d558b2cdb95e |
| casa-acp-complementos-2027-editavel.pptx | 31519 | 4b6fe083d0d2cbca9c1083b4dbce926adcde87562784072dd0be2075a6a07874 |

Total: ~46 MB (9 arquivos). O PDF de impressão dos complementos foi entregue em 25/11/2026.

**Nunca** reexporte, comprima, "otimize" ou passe os PDFs por conversores: isso
pode apagar os campos preenchíveis (calendário: 365 campos, planner: 80,
complementos: 11).

Não publique: `Briefing_e_textos_para_site.txt`, `Casa_ACP_Simulacao_Pagina_Site_2027.docx`,
os banners `.jpg.jpeg` originais nem qualquer ZIP do kit.

### Se algum arquivo for substituído

1. Coloque o arquivo novo em `assets-originais/materiais-campanha-2027/`, com o mesmo nome.
2. Calcule tamanho e hash: `stat -c %s ARQUIVO && sha256sum ARQUIVO`.
3. Atualize `bytes` e `sha256` do item em `lib/presentes2027.ts` e a tabela acima.
4. Envie o arquivo novo para o armazenamento de produção (seção 3).

Para desativar temporariamente um botão sem gerar link quebrado, use
`disponivel: false` no item correspondente.

---

## 3. Publicar os arquivos

Os botões apontam para `DOWNLOADS_BASE_URL + "/" + nome do arquivo`.
Padrão de produção: **`/downloads/presentes-2027`** (mesmo domínio).
Para usar outro endereço (ex.: CDN), defina antes do build:

```
NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL=https://exemplo.com/pasta
```

A pasta `public/downloads/` está no `.gitignore` de propósito, para que os
arquivos pesados não entrem no repositório por engano.

### 3A. Se a produção continuar na Vercel

Opção recomendada: **Vercel Blob** (ou outro storage com CDN, como Cloudflare R2).
1. Envie os 9 arquivos com os nomes exatos da tabela, com leitura pública.
2. Configure em *Project → Settings → Environment Variables* (Production):
   `NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL=<URL pública da pasta>`.
3. Faça um novo deploy (variáveis `NEXT_PUBLIC_` são fixadas no build).

Alternativa simples: versionar os arquivos em `public/downloads/presentes-2027/`
(tire a linha `/public/downloads/` do `.gitignore`). A Vercel serve esses
arquivos pela CDN, sem passar por função, mas o repositório cresce ~45 MB.

Nos dois casos, cada download conta na transferência de dados do plano Vercel
(no plano Hobby, 100 GB/mês, o que dá cerca de 2.000 downloads do kit completo).

### 3B. Se a produção for o cPanel (Phusion Passenger)

O objetivo é que o **Apache/LiteSpeed** entregue os arquivos sem acordar o
processo Node. Isso depende de como o app Node foi montado no cPanel, por isso
**teste antes de confiar**.

1. No Gerenciador de Arquivos, abra a raiz do domínio (geralmente `public_html/`
   ou o diretório indicado em *Setup Node.js App → Application URL*).
2. Crie `downloads/presentes-2027/` e envie os 9 arquivos (modo binário, se usar FTP).
3. Dentro de `downloads/presentes-2027/`, crie um `.htaccess`:

   ```apache
   # Downloads estáticos da Coleção 2027
   Options -Indexes
   AddType application/pdf .pdf
   AddType application/vnd.openxmlformats-officedocument.presentationml.presentation .pptx
   <IfModule mod_headers.c>
     <FilesMatch "\.(pdf|pptx)$">
       Header set Content-Disposition "attachment"
       Header set X-Content-Type-Options "nosniff"
       Header set Cache-Control "public, max-age=604800"
     </FilesMatch>
   </IfModule>
   # Se o Passenger estiver ativo na raiz, desliga-o só nesta pasta:
   <IfModule mod_passenger.c>
     PassengerEnabled off
   </IfModule>
   ```

   Se o servidor recusar a diretiva `PassengerEnabled` (erro 500), remova o
   bloco `<IfModule mod_passenger.c>` e refaça o teste do passo 4.

4. **Verifique quem está respondendo:**

   ```bash
   curl -sI https://www.casaacp.com.br/downloads/presentes-2027/casa-acp-planner-2027-impressao.pdf
   ```

   - Esperado: `HTTP 200`, `Content-Type: application/pdf`,
     `Content-Disposition: attachment`, `Last-Modified` e `Accept-Ranges: bytes`,
     sem cabeçalhos do Next (`x-nextjs-*`, `Vary: RSC…`).
   - `404` com o HTML do site significa que o Node respondeu: a pasta está no
     lugar errado ou o Passenger está interceptando. Não publique o banner até resolver.

5. **Confira a integridade:** baixe cada arquivo e compare com a tabela:
   `sha256sum *.pdf *.pptx`.

6. Confirme que a listagem está bloqueada: `https://www.casaacp.com.br/downloads/presentes-2027/`
   deve responder 403/404, nunca uma lista de arquivos.

---

## 4. Testar localmente (sem copiar arquivos para o projeto)

1. Terminal 1, servidor de downloads só para testes (entrega apenas os 9 nomes
   públicos, direto da pasta original):
   ```bash
   node scripts/servir-presentes-2027.mjs
   ```
2. O arquivo `.env.development.local` (ignorado pelo Git) já aponta para ele:
   ```
   NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL=http://localhost:4027
   ```
   Ele só é lido pelo `next dev`. O `next build` ignora esse arquivo, então
   o build de produção continua apontando para `/downloads/presentes-2027`.
3. Terminal 2: `npm run dev` e abra `http://localhost:3000/presentes-2027`.

---

## 5. Retirar o banner da home depois do Natal

Em `lib/presentes2027.ts`:

```ts
export const BANNER_HOME_ATIVO = false;
```

Build e deploy. A página `/presentes-2027` continua no ar e indexável durante
2027. Não há expiração automática.

---

## 6. Checklist antes de publicar

- [ ] Aprovação visual das clientes (desktop e celular).
- [ ] Autorização e fidelidade das citações de Carl Rogers (o briefing cita
      `notas-editoriais-internas.txt`, que **não veio no kit**).
- [ ] Ambiente de produção confirmado (Vercel ou cPanel) e arquivos enviados (seção 3).
- [ ] Hashes conferidos depois do upload.
- [ ] Os 9 links testados em janela anônima, no computador e no celular.
- [ ] Um campo preenchido e salvo em cada PDF preenchível, reaberto no Adobe Acrobat Reader.
- [ ] Prévia de compartilhamento conferida (WhatsApp / Facebook Sharing Debugger).
