import type { LucideIcon } from "lucide-react";
import { MessageCircle, Mic, BookOpen, Book, GraduationCap, Compass } from "lucide-react";

export interface Curso {
  titulo: string;
  psicologa: string;
  descricao: string;
  link: string;
  // Texto do botão, quando "Acessar curso" não descreve o destino do link
  // (ex.: um formulário de interesse para uma turma ainda em formação).
  linkLabel?: string;
}

export interface EdicaoPassada {
  titulo: string;
  data: string;
  descricao: string;
  imagem?: string;
}

// "cursos" e "eventos" têm seção própria na página de detalhe; "geral" mostra só a descrição.
export type TipoConteudo = "cursos" | "eventos" | "geral";

export interface ConteudoEstudo {
  slug: string;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  icon: LucideIcon;
  colorClass: string;
  bgClass: string;
  tipo: TipoConteudo;
  cursos?: Curso[];
  edicoesPassadas?: EdicaoPassada[];
}

// ── Conteúdos da Sala de Estudos ──
// Cada tópico tem sua própria página em /comodos/sala-de-estudos/[slug].
export const CONTEUDOS: ConteudoEstudo[] = [
  {
    slug: "rodas-de-conversa",
    titulo: "Rodas de conversa",
    resumo: "Diálogo, escuta e partilha em torno de temas que atravessam a vida.",
    descricaoCompleta: "Um espaço de encontro, diálogo e partilha, onde diferentes experiências se entrelaçam em torno de temas que atravessam a vida. Conduzida por um facilitador humanista. A roda de conversa favorece a escuta, a reflexão e a construção de sentidos, fortalecendo o contato consigo, com o outro e com novas possibilidades de ser.",
    icon: MessageCircle,
    colorClass: "text-terracota",
    bgClass: "bg-terracota/10",
    tipo: "eventos",
    edicoesPassadas: [],
  },
  {
    slug: "seminarios-clinicos",
    titulo: "Seminários clínicos",
    resumo: "Aprofundamento teórico e diálogo entre a Psicologia Humanista e áreas afins.",
    descricaoCompleta: "Os Seminários Clínicos promovem o aprofundamento teórico e o diálogo entre a Psicologia Humanista e áreas afins, abordando temas contemporâneos e suas diferentes aplicações na prática profissional. Destinam-se a psicólogos(as), estudantes de Psicologia e demais profissionais interessados no desenvolvimento humano.",
    icon: Mic,
    colorClass: "text-salvia",
    bgClass: "bg-salvia/10",
    tipo: "geral",
  },
  {
    slug: "grupos-de-estudo",
    titulo: "Grupos de estudo",
    resumo: "Estudo e reflexão compartilhada sobre temas da Psicologia Humanista.",
    descricaoCompleta: "Encontros voltados ao estudo e à reflexão compartilhada sobre temas da Psicologia Humanista, favorecendo o aprofundamento teórico e o diálogo entre diferentes perspectivas.",
    icon: BookOpen,
    colorClass: "text-marrom",
    bgClass: "bg-marrom/10",
    tipo: "geral",
  },
  {
    slug: "clube-de-leitura",
    titulo: "Clube de leitura",
    resumo: "Leitura e conversa a partir de obras que tocam nossa natureza humana.",
    descricaoCompleta: "Um espaço de leitura, conversa e construção de sentidos, a partir de obras literárias que iluminam e nos colocam em contato com o que toca a nossa natureza humana.",
    icon: Book,
    colorClass: "text-salvia",
    bgClass: "bg-salvia/10",
    tipo: "geral",
  },
  {
    slug: "cursos-e-minicursos",
    titulo: "Cursos e minicursos",
    resumo: "Aprendizagem entre teoria, prática e reflexão, com as psicólogas da Casa.",
    descricaoCompleta: "Experiências de aprendizagem que favorecem o encontro entre teoria, prática e reflexão, ampliando a compreensão da Psicologia Humanista e da Abordagem Centrada na Pessoa.",
    icon: GraduationCap,
    colorClass: "text-marrom",
    bgClass: "bg-marrom/10",
    tipo: "cursos",
    cursos: [],
  },
  {
    slug: "supervisoes",
    titulo: "Supervisões",
    resumo: "Acompanhamento e reflexão sobre a prática clínica.",
    descricaoCompleta: "Espaços de acompanhamento e reflexão sobre a prática clínica, promovendo o desenvolvimento profissional por meio do diálogo, da escuta e da construção compartilhada de compreensões.",
    icon: Compass,
    colorClass: "text-terracota",
    bgClass: "bg-terracota/10",
    tipo: "geral",
  },
];

export function getConteudoPorSlug(slug: string): ConteudoEstudo | undefined {
  return CONTEUDOS.find((item) => item.slug === slug);
}
