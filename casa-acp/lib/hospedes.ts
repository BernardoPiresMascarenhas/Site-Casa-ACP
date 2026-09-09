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
  foto: string;
  // Site/portfólio externo da hóspede, exibido no botão "Conheça mais".
  site?: string;
  bio: string[];
  // Frase curta que a Casa empresta à hóspede, exibida ao lado do retrato.
  citacao?: string;
}

export const HOSPEDES: Hospede[] = [
  {
    id: "aline",
    nome: "Aline Calisto",
    titulo: "Psicóloga e Psicoterapeuta",
    periodo: "Setembro de 2026",
    foto: "/Aline.webp",
    site: "https://share.google/4oB9S6jRbUEILdcWs",
    bio: [
      "Graduada em Psicologia pela PUC-Minas, mestre em Desenvolvimento Sustentável e Extensão pela UFLA, especialista em Gestão de Saúde pela UFSJ, com formação em Psicoterapia Centrada na Pessoa pelo CPH-Minas. Atualmente cursa especialização em Psicologia Clínica na Perspectiva Fenomenológico-Existencial pelo IFEN. Sua pesquisa e atuação dialogam com feminismo, cuidado, políticas públicas e a clínica ampliada.",
    ],
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

// Textos que a hóspede deixou na Cozinha Literária.
// No futuro entram aqui também cursos e encontros conduzidos por ela.
export function contribuicoesDoHospede(id: string): Artigo[] {
  return ARTIGOS.filter((artigo) => artigo.autores.some((autor) => autor.hospedeId === id));
}
