import type { LucideIcon } from "lucide-react";
import { Sun, Users, TreeDeciduous } from "lucide-react";

export interface EdicaoPassada {
  titulo: string;
  data: string;
  descricao: string;
  imagem?: string;
}

export interface TopicoJardim {
  slug: string;
  titulo: string;
  resumo: string;
  descricaoCompleta: string;
  icon: LucideIcon;
  edicoesPassadas: EdicaoPassada[];
}

// ── Tópicos do Jardim ──
// Cada tópico tem sua própria página em /comodos/jardim/[slug].
export const TOPICOS_JARDIM: TopicoJardim[] = [
  {
    slug: "plantao-psicologico-na-praca",
    titulo: "Plantão Psicológico na Praça",
    resumo:
      "Um espaço de escuta psicológica aberto à comunidade, gratuito e sem necessidade de agendamento. Um encontro de cuidado e acolhimento para quem deseja ser ouvido, exatamente como chegar.",
    descricaoCompleta:
      "O Plantão Psicológico na Praça leva a escuta para fora das paredes da Casa. É uma modalidade de atendimento que oferece acolhimento no momento mais próximo da necessidade da pessoa, favorecendo que ela reconheça seus recursos, limites e possibilidades diante daquilo que está vivendo. Gratuito, sem necessidade de agendamento e aberto a quem chegar.",
    icon: Sun,
    edicoesPassadas: [],
  },
  {
    slug: "rodas-de-conversa-na-praca",
    titulo: "Rodas de Conversa na Praça",
    resumo:
      "Encontros ao ar livre que promovem diálogo, reflexão e partilha de experiências em torno de temas que atravessam a vida, fortalecendo os vínculos entre as pessoas e a comunidade.",
    descricaoCompleta:
      "As Rodas de Conversa na Praça acontecem ao ar livre e reúnem pessoas em torno de temas que atravessam a vida cotidiana. Em roda, sob o céu aberto, a conversa favorece a escuta, a reflexão e a construção de sentidos, fortalecendo os vínculos entre quem participa e a comunidade ao redor.",
    icon: Users,
    edicoesPassadas: [],
  },
  {
    slug: "acoes-comunitarias",
    titulo: "Ações Comunitárias",
    resumo:
      "Iniciativas que levam a Psicologia Humanista e a Abordagem Centrada na Pessoa para diferentes contextos, promovendo cuidado, diálogo e presença em parceria com instituições, grupos e comunidades.",
    descricaoCompleta:
      "As Ações Comunitárias levam a Psicologia Humanista e a Abordagem Centrada na Pessoa para diferentes contextos da cidade, em parceria com instituições, grupos e comunidades. São iniciativas que promovem cuidado, diálogo e presença onde a escuta se fizer necessária.",
    icon: TreeDeciduous,
    edicoesPassadas: [],
  },
];

export function getTopicoJardimPorSlug(slug: string): TopicoJardim | undefined {
  return TOPICOS_JARDIM.find((item) => item.slug === slug);
}
