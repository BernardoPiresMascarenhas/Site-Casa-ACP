// ── FONTE ÚNICA DA AGENDA DA CASA ──
// Usada pela Varanda e pelos cômodos de origem de cada evento.

// Informações rápidas de um evento (Início, Horário, Onde, Formato...), exibidas em destaque na página de detalhe.
export interface AgendaEventoInfo {
  label: string;
  valor: string;
}

// Conteúdo completo de um evento, usado na sua página de detalhe própria.
export interface AgendaEventoDetalhes {
  // Parágrafos do texto completo. Prefixe com "## " para um destaque isolado
  // (ex.: "## Um encontro para se ouvir"), ou use "Pergunta?\nResposta" para
  // destacar uma pergunta seguida de sua resposta.
  conteudo: string[];
  info: AgendaEventoInfo[];
}

export interface AgendaEvento {
  id: string;
  data: string;
  mes: string;
  origem: string;
  origemSlug: string;
  titulo: string;
  // Resumo curto, usado nos cards da Varanda e do cômodo de origem.
  descricao: string;
  local: string;
  // Link externo (ex.: Google Forms) para eventos que exigem inscrição prévia.
  inscricaoLink?: string;
  // Imagem/cartaz de divulgação do evento (proporção 16:9 renderiza melhor).
  imagem?: string;
  // Quando presente, o evento ganha uma página própria em /comodos/varanda/agenda/[id].
  detalhes?: AgendaEventoDetalhes;
}

export const AGENDA: AgendaEvento[] = [
  {
    id: "1",
    data: "29 Ago 2026",
    mes: "Agosto 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    titulo: "A Casa abre a Sala de Estudos",
    imagem: "/evento1.jpeg",
    descricao:
      "O primeiro Clube de Leitura da Casa ACP nasce com um convite: ler juntos. Vamos ler \"Cuidar da solidão até virar encontro\", de Alexandre Coimbra Amaral, em seis encontros aos sábados, em roda.",
    local: "Bairro Santo Antônio, Belo Horizonte",
    // TODO: substituir pelo link real do formulário de inscrição.
    inscricaoLink: "https://forms.gle/rN3UiU7gRdYEx2dG9",
    detalhes: {
      conteudo: [
        "A Casa abre a Sala de Estudos.\nE começa com um convite: ler juntos.",
        "O primeiro Clube de Leitura da Casa ACP nasce com um livro que fala do nosso tempo: Cuidar da solidão até virar encontro, de Alexandre Coimbra Amaral.",
        "Alexandre é mineiro, e seu livro acabou de chegar ao mundo, com lançamento em Belo Horizonte. A Casa, que também nasce em solo mineiro, sorriu com esse encontro: nossa primeira leitura vem de perto.",
        "Serão seis encontros aos sábados, de agosto a outubro. A conversa acontecerá em roda, com café passado na hora, chá e pão de queijo na mesa. Leremos com calma, no ritmo de quem saboreia as palavras. E, entre uma página e outra, abriremos espaço para aquilo que a leitura despertar em cada pessoa e no grupo. Um livro sobre solidão, lido em companhia!",
        "Se algo em você se acendeu ao ler este convite, acesse o link de inscrição. No formulário, você encontrará o calendário completo dos encontros, o investimento e as formas de pagamento.",
      ],
      info: [
        { label: "Início", valor: "29 de agosto" },
        { label: "Horário", valor: "Sábados, das 9h às 11h" },
        { label: "Onde", valor: "Bairro Santo Antônio, Belo Horizonte" },
        { label: "Formato", valor: "Presencial, em roda, com apenas seis vagas" },
      ],
    },
  },
  {
    id: "2",
    data: "22 Ago 2026",
    mes: "Agosto 2026",
    origem: "Jardim",
    origemSlug: "jardim",
    titulo: "Escuta na Praça",
    imagem: "/evento2.jpeg",
    descricao:
      "A primeira edição do Escuta na Praça — Plantão Psicológico da Casa ACP, um espaço de escuta psicológica aberto à comunidade, gratuito e sem necessidade de agendamento.",
    local: "Praça da Liberdade, Belo Horizonte",
    detalhes: {
      conteudo: [
        "## Um encontro para se ouvir",
        "No dia 22 de agosto, das 8h às 12h, o Jardim da Casa ACP se estende até a Praça da Liberdade, em Belo Horizonte, para realizar a primeira edição do Escuta na Praça — Plantão Psicológico da Casa ACP.",
        "Um espaço de escuta psicológica aberto à comunidade, gratuito e sem necessidade de agendamento. Uma presença disponível para acolher quem deseja falar sobre aquilo que está vivendo, no momento em que sente necessidade.",
        "O que é o Plantão Psicológico?\nO Plantão Psicológico é uma modalidade de atendimento que oferece escuta no momento mais próximo da necessidade da pessoa, favorecendo que ela reconheça seus recursos, limites e possibilidades diante daquilo que está vivendo.",
        "A proposta é oferecer a quem procura o serviço a possibilidade de ser acolhido e ouvido por um profissional da Psicologia. Nesse encontro, a pessoa pode se aproximar da própria experiência, compreender melhor como está diante de sua vida e reconhecer os cuidados de que necessita naquele momento.",
        "A quem se destina?\nÀs pessoas que buscam apoio emocional e um espaço de escuta sensível, no qual possam falar sobre seus sentimentos e experiências e, acompanhadas por uma psicóloga ou um psicólogo, ouvir a si mesmas no momento mais próximo de sua urgência.",
        "Atendimento destinado a pessoas maiores de 18 anos.",
        "Como funciona?\nOs atendimentos serão realizados por psicólogas e psicólogos voluntários, identificados com o jaleco do projeto.",
        "Ao chegar à Praça da Liberdade, procure a sinalização do Escuta na Praça ou uma pessoa da equipe da Casa ACP. Os atendimentos acontecerão individualmente e por ordem de chegada, conforme a disponibilidade dos plantonistas.",
        "Não é necessário preencher inscrição ou agendar horário previamente.",
        "A escuta também floresce sob o céu!",
      ],
      info: [
        { label: "Data", valor: "22 de agosto" },
        { label: "Horário", valor: "Das 8h às 12h" },
        { label: "Local", valor: "Praça da Liberdade, Belo Horizonte" },
        { label: "Atendimento", valor: "Voluntário e gratuito" },
        { label: "Participação", valor: "Por ordem de chegada" },
        { label: "Agendamento", valor: "Não é necessário" },
      ],
    },
  },
];

// Eventos de um cômodo específico, em ordem cronológica.
export function agendaPorComodo(slug: string): AgendaEvento[] {
  return AGENDA.filter((evento) => evento.origemSlug === slug);
}

// Busca um evento pelo id, usado na sua página de detalhe.
export function getEventoPorId(id: string): AgendaEvento | undefined {
  return AGENDA.find((evento) => evento.id === id);
}

const MESES_ABREVIADOS: Record<string, number> = {
  Jan: 0, Fev: 1, Mar: 2, Abr: 3, Mai: 4, Jun: 5,
  Jul: 6, Ago: 7, Set: 8, Out: 9, Nov: 10, Dez: 11,
};

// Converte "29 Ago 2026" em timestamp, para ordenação cronológica.
function timestampDoEvento(data: string): number {
  const [dia, mesAbrev, ano] = data.split(" ");
  const mes = MESES_ABREVIADOS[mesAbrev] ?? 0;
  return new Date(Number(ano), mes, Number(dia)).getTime();
}

// Todos os eventos, ordenados cronologicamente.
export function agendaOrdenadaPorData(): AgendaEvento[] {
  return [...AGENDA].sort((a, b) => timestampDoEvento(a.data) - timestampDoEvento(b.data));
}
