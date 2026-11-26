// ─────────────────────────────────────────────────────────────────────────────
// Campanha de Natal 2026 · Coleção 2027 — configuração central
//
// Tudo o que pode mudar na campanha fica aqui: o banner da home, o endereço
// dos arquivos para download e a lista de materiais. A página /presentes-2027
// e o banner leem apenas deste arquivo.
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Liga/desliga o banner da campanha na página inicial.
 * Mudar para `false` remove só o banner; a página /presentes-2027 continua no ar.
 */
export const BANNER_HOME_ATIVO = true;

/** Rota da página dedicada. */
export const ROTA_PRESENTES = "/presentes-2027";

/**
 * Domínio público real do site. Hoje `casaacp.com.br` redireciona (308) para o
 * www, por isso a página nova usa o www no canonical e no Open Graph.
 */
export const SITE_URL = "https://www.casaacp.com.br";

/**
 * Onde ficam os PDFs e PPTX. Os arquivos NÃO fazem parte do repositório.
 *
 * - Produção: caminho estático no próprio domínio (ver docs/presentes-2027.md).
 * - Testes locais: defina NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL em
 *   `.env.development.local` (lido só pelo `next dev`, nunca pelo build).
 * - Se os arquivos forem para outro armazenamento (ex.: CDN), basta apontar a
 *   mesma variável para a URL pública da pasta antes do build.
 */
export const DOWNLOADS_BASE_URL = (
  process.env.NEXT_PUBLIC_PRESENTES_2027_DOWNLOADS_URL || "/downloads/presentes-2027"
).replace(/\/+$/, "");

export type FormatoArquivo = "pdf" | "pptx";

export type Arquivo = {
  /** Texto do botão, conforme o briefing. */
  rotulo: string;
  /** Nome curto da versão, exibido em destaque. */
  versao: "Para impressão" | "Preenchível" | "Editável";
  formato: FormatoArquivo;
  nomeArquivo: string;
  /** Tamanho real do arquivo original, em bytes. */
  bytes: number;
  /** SHA-256 do arquivo original, para conferir o upload. */
  sha256: string;
  /**
   * `false` quando o arquivo ainda não foi entregue. O botão aparece
   * desativado e sem link, para não publicar um link quebrado.
   */
  disponivel: boolean;
};

export type Imagem = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Material = {
  id: "calendario" | "planner" | "complementos";
  titulo: string;
  subtitulo: string;
  descricao: string;
  detalhes: string;
  orientacao: "horizontal" | "vertical" | "par";
  imagens: Imagem[];
  arquivos: Arquivo[];
};

export function urlDoArquivo(arquivo: Arquivo): string {
  const url = `${DOWNLOADS_BASE_URL}/${arquivo.nomeArquivo}`;
  // Em outro domínio (Vercel Blob), o navegador ignora o atributo `download`.
  // O `?download=1` faz o Blob responder com Content-Disposition: attachment.
  return /^https?:\/\//.test(DOWNLOADS_BASE_URL) ? `${url}?download=1` : url;
}

/** Tamanho legível em pt-BR, no mesmo padrão exibido pelo Windows/macOS. */
export function tamanhoLegivel(bytes: number): string {
  const kb = bytes / 1024;
  if (kb < 1024) return `${Math.round(kb)} KB`;
  const mb = kb / 1024;
  return `${mb.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} MB`;
}

export const MATERIAIS: Material[] = [
  {
    id: "calendario",
    titulo: "Calendário Casa ACP 2027",
    subtitulo: "Um ano para habitar a vida.",
    descricao:
      "Doze meses, doze imagens da nossa Casa e reflexões na companhia de Carl Rogers. " +
      "Com feriados, datas significativas e espaço para registrar seus compromissos.",
    detalhes: "14 páginas · A4 horizontal",
    orientacao: "horizontal",
    imagens: [
      {
        src: "/presentes-2027/capa-calendario-2027.webp",
        alt: "Capa do Calendário Casa ACP 2027: varanda da Casa com buganvílias e o título “Um ano para habitar a vida”.",
        width: 1600,
        height: 1132,
      },
    ],
    arquivos: [
      {
        rotulo: "Baixar calendário para impressão",
        versao: "Para impressão",
        formato: "pdf",
        nomeArquivo: "casa-acp-calendario-2027-impressao.pdf",
        bytes: 11928293,
        sha256: "fdd4da924600d4fb46fb6b2acdc1f4b8bf5ba1110c22ddd19c9a8ea767c05b00",
        disponivel: true,
      },
      {
        rotulo: "Baixar calendário preenchível",
        versao: "Preenchível",
        formato: "pdf",
        nomeArquivo: "casa-acp-calendario-2027-preenchivel.pdf",
        bytes: 12023770,
        sha256: "7299089805856beedcfe2ec2b50142b944280038ce61c6dd98df2f9ee2963c3e",
        disponivel: true,
      },
      {
        rotulo: "Baixar calendário editável",
        versao: "Editável",
        formato: "pptx",
        nomeArquivo: "casa-acp-calendario-2027-editavel.pptx",
        bytes: 7872824,
        sha256: "4daa9734189e3704839307f03648624af6f273de7552d393446f570b5a1c1b72",
        disponivel: true,
      },
    ],
  },
  {
    id: "planner",
    titulo: "Planner Casa ACP 2027",
    subtitulo: "Meus compromissos com a vida.",
    descricao:
      "Um espaço para organizar seus compromissos, cultivar intenções e registrar experiências " +
      "e aprendizagens significativas. Com duas páginas por mês, visão anual e convites à reflexão.",
    detalhes: "30 páginas · A4 vertical",
    orientacao: "vertical",
    imagens: [
      {
        src: "/presentes-2027/capa-planner-2027.webp",
        alt: "Capa do Planner Casa ACP 2027: buganvílias, montanhas ao fundo e o título “Meus compromissos com a vida”.",
        width: 1000,
        height: 1415,
      },
    ],
    arquivos: [
      {
        rotulo: "Baixar planner para impressão",
        versao: "Para impressão",
        formato: "pdf",
        nomeArquivo: "casa-acp-planner-2027-impressao.pdf",
        bytes: 3840039,
        sha256: "c6c3197646c04d565cfc0f8f7013c82320ca0c3bd2d6261e2945da9fc98103ae",
        disponivel: true,
      },
      {
        rotulo: "Baixar planner preenchível",
        versao: "Preenchível",
        formato: "pdf",
        nomeArquivo: "casa-acp-planner-2027-preenchivel.pdf",
        bytes: 3861553,
        sha256: "206ea7680da05ea003ae5e2e8a7291e4f7a3db961b8ac90a369f2bd32b9ca59a",
        disponivel: true,
      },
      {
        rotulo: "Baixar planner editável",
        versao: "Editável",
        formato: "pptx",
        nomeArquivo: "casa-acp-planner-2027-editavel.pptx",
        bytes: 4533022,
        sha256: "6874314b7740fe73275500a661e61a71088e31e37d9032014b5bd3d29a34cf5b",
        disponivel: true,
      },
    ],
  },
  {
    id: "complementos",
    titulo: "Complementos do planner",
    subtitulo: "Minha semana e Minhas travessias.",
    descricao:
      "Duas páginas reutilizáveis para organizar a semana ou escrever livremente. Imprima ou salve " +
      "cópias independentes quantas vezes desejar; no PowerPoint, duplique os slides para personalizar " +
      "o número de páginas.",
    detalhes: "Duas páginas reutilizáveis",
    orientacao: "par",
    imagens: [
      {
        src: "/presentes-2027/complementos-minha-semana-2027.webp",
        alt: "Página “Minha semana”: espaços para cada dia, de segunda-feira a domingo.",
        width: 800,
        height: 1132,
      },
      {
        src: "/presentes-2027/complementos-minhas-travessias-2027.webp",
        alt: "Página “Minhas travessias”: folha pautada para escrever livremente.",
        width: 800,
        height: 1132,
      },
    ],
    arquivos: [
      {
        rotulo: "Baixar complementos para impressão",
        versao: "Para impressão",
        formato: "pdf",
        nomeArquivo: "casa-acp-complementos-2027-impressao.pdf",
        bytes: 1151442,
        sha256: "0423e02bd687a8d0a2eb05b47b10cdd119e7651bdde080cd54a749abe662ce3e",
        disponivel: true,
      },
      {
        rotulo: "Baixar complementos preenchíveis",
        versao: "Preenchível",
        formato: "pdf",
        nomeArquivo: "casa-acp-complementos-2027-preenchivel.pdf",
        bytes: 1155743,
        sha256: "69314fb3a94ee93e2159a543b9a2b8fad9e8804c9842f405bae9d558b2cdb95e",
        disponivel: true,
      },
      {
        rotulo: "Baixar complementos editáveis",
        versao: "Editável",
        formato: "pptx",
        nomeArquivo: "casa-acp-complementos-2027-editavel.pptx",
        bytes: 31519,
        sha256: "4b6fe083d0d2cbca9c1083b4dbce926adcde87562784072dd0be2075a6a07874",
        disponivel: true,
      },
    ],
  },
];

/** Banners originais das clientes, convertidos para WebP sem recorte. */
export const BANNER = {
  alt:
    "Da nossa Casa para a sua. Coleção 2027, com as capas do calendário e do planner da Casa ACP, " +
    "flores de buganvília e montanhas ao fundo.",
  desktop: { src: "/presentes-2027/banner-desktop-2027.webp", width: 1800, height: 900 },
  mobile: { src: "/presentes-2027/banner-mobile-2027.webp", width: 1080, height: 1350 },
} as const;
