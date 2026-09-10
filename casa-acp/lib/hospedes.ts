// ── FONTE ÚNICA DOS HÓSPEDES DA CASA ──
// Usada pela página do Quarto de Hóspedes e pela página de cada hóspede.
// Mantido fora do Client Component para que "app/comodos/quarto-de-hospedes/[id]/page.tsx"
// (Server Component) consiga ler as chaves em generateStaticParams no build.

import { ARTIGOS, type Artigo } from "./cozinhaLiteraria";

export interface Hospede {
  id: string;
  nome: string;
  // Como a pessoa se apresenta (ex.: "Psicóloga e Psicoterapeuta").
  titulo: string;
  // Período da residência na Casa (ex.: "Setembro de 2026").
  periodo: string;
  // Início da residência em formato ordenável (AAAA-MM), usado no arquivo de ciclos.
  inicio: string;
  foto: string;
  // Site/portfólio externo da hóspede, exibido no botão "Conheça mais".
  site?: string;
  bio: string[];
  // Resumo curto do currículo, usado no cartão do Quarto de Hóspedes.
  resumo?: string;
  // Frase curta que a Casa empresta à hóspede, exibida ao lado do retrato.
  citacao?: string;
}

export const HOSPEDES: Hospede[] = [
  {
    id: "aline",
    nome: "Aline Calisto",
    titulo: "Psicóloga e Psicoterapeuta",
    periodo: "Setembro de 2026",
    inicio: "2026-09",
    foto: "/Aline.webp",
    site: "https://share.google/4oB9S6jRbUEILdcWs",
    bio: [
      "Graduada em Psicologia pela PUC-Minas, mestre em Desenvolvimento Sustentável e Extensão pela UFLA, especialista em Gestão de Saúde pela UFSJ, com formação em Psicoterapia Centrada na Pessoa pelo CPH-Minas. Atualmente cursa especialização em Psicologia Clínica na Perspectiva Fenomenológico-Existencial pelo IFEN. Sua pesquisa e atuação dialogam com feminismo, cuidado, políticas públicas e a clínica ampliada.",
    ],
    resumo:
      "Psicóloga pela PUC-Minas, mestre pela UFLA e formada em Psicoterapia Centrada na Pessoa (CPH-Minas). Pesquisa cuidado, feminismo e clínica ampliada.",
    citacao: "Ideias que fermentam. Palavras que ganham forma.",
  },
];

export function getHospedePorId(id: string): Hospede | undefined {
  return HOSPEDES.find((hospede) => hospede.id === id);
}

// Hóspede em residência no momento: por ora, sempre o primeiro da lista.
export function hospedeAtual(): Hospede | undefined {
  return HOSPEDES[0];
}

// Todos os hóspedes em ordem de residência, do mais recente para o mais antigo.
export function hospedesPorData(): Hospede[] {
  return [...HOSPEDES].sort((a, b) => b.inicio.localeCompare(a.inicio));
}

// Textos que a hóspede deixou na Cozinha Literária.
// No futuro entram aqui também cursos e encontros conduzidos por ela.
export function contribuicoesDoHospede(id: string): Artigo[] {
  return ARTIGOS.filter((artigo) => artigo.autores.some((autor) => autor.hospedeId === id));
}
