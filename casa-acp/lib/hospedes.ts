// ── FONTE ÚNICA DOS HÓSPEDES DA CASA ──
// Usada pela página do Quarto de Hóspedes e pela página de cada hóspede.
// Mantido fora do Client Component para que "app/comodos/quarto-de-hospedes/[id]/page.tsx"
// (Server Component) consiga ler as chaves em generateStaticParams no build.

import { agendaPorHospede, type AgendaEvento } from "./agenda";
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
  {
    id: "elen",
    nome: "Elen Zazá",
    titulo: "Psicóloga Clínica • Psicoterapeuta de adultos e idosos",
    periodo: "Outubro de 2026",
    inicio: "2026-10",
    foto: "/Elen.webp",
    // Elen não tem site: o botão "Conheça mais" abre uma conversa no WhatsApp.
    site: "https://wa.me/5531987973664",
    bio: [
      "Graduada em Psicologia pelo Centro Universitário Newton Paiva, em 2004. Pós-graduada em Neuropsicologia pela FUMEC, em 2005; em Gestão Estratégica de Pessoas pelo Senac, em 2011; e em Psicologia Clínica Humanista-Existencial-Fenomenológica pelo UNI-BH, em 2020. Possui formação em Psicologia Clínica na Abordagem Centrada na Pessoa pelo CPH Minas, em 2017, e em Focalização, como Focusing Trainer, pelo The International Focusing Institute, em 2019. Tem experiência em atendimentos clínicos em consultório particular e em clínica de saúde, em atuação junto à equipe multiprofissional de equoterapia e em gestão estratégica de pessoas em empresas.",
    ],
    resumo:
      "Psicóloga pela Newton Paiva, formada na Abordagem Centrada na Pessoa (CPH Minas) e Focusing Trainer pelo The International Focusing Institute. Atende adultos e idosos.",
  },
  {
    id: "bruno",
    nome: "Bruno Martins",
    titulo: "Psicólogo • Mestre em Psicologia • Docente da PUC Minas",
    periodo: "Outubro de 2026",
    inicio: "2026-10",
    foto: "/Bruno.webp",
    bio: [
      "Bruno Martins é pai do Saulo. Psicólogo (CRP 04/38519). Especialista em Psicoterapia Humanista Fenomenológica Existencial pela FUMEC. Mestre em Psicologia pela UFMG. Docente de Psicologia da PUC Minas. Focusing Trainer (Focalização), certificado pelo Instituto Brasileiro de Focusing.",
    ],
    resumo:
      "Psicólogo, mestre em Psicologia pela UFMG e docente da PUC Minas. Especialista em Psicoterapia Humanista Fenomenológica Existencial (FUMEC) e Focusing Trainer.",
  },
];

export function getHospedePorId(id: string): Hospede | undefined {
  return HOSPEDES.find((hospede) => hospede.id === id);
}

// Hóspedes em residência no momento, na ordem em que foram cadastradas.
export function hospedesAtuais(): Hospede[] {
  return HOSPEDES;
}

// Todos os hóspedes em ordem de residência, do mais recente para o mais antigo.
export function hospedesPorData(): Hospede[] {
  return [...HOSPEDES].sort((a, b) => b.inicio.localeCompare(a.inicio));
}

// Textos que a hóspede deixou na Cozinha Literária.
// No futuro entram aqui também os cursos conduzidos por ela.
export function contribuicoesDoHospede(id: string): Artigo[] {
  return ARTIGOS.filter((artigo) => artigo.autores.some((autor) => autor.hospedeId === id));
}

// Encontros da agenda conduzidos pela hóspede (ex.: uma roda de conversa na Sala de Estudos).
export function encontrosDoHospede(id: string): AgendaEvento[] {
  return agendaPorHospede(id);
}
