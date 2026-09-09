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
  // (ex.: "## Um encontro para se ouvir"), use "Pergunta?\nResposta" para
  // destacar uma pergunta seguida de sua resposta, ou comece cada linha com
  // "- " para renderizar o parágrafo como lista.
  conteudo: string[];
  info: AgendaEventoInfo[];
}

export interface AgendaEvento {
  id: string;
  // Ausentes quando a data ainda não foi definida (ex.: turma em formação).
  // Nesse caso, use `rotuloDeData` para exibir o texto correto.
  data?: string;
  mes?: string;
  origem: string;
  origemSlug: string;
  // Slug do tópico específico dentro do cômodo de origem (ex.: "clube-de-leitura"
  // na Sala de Estudos), quando o evento também deve aparecer na página desse tópico.
  topicoSlug?: string;
  titulo: string;
  // Resumo curto, usado nos cards da Varanda e do cômodo de origem.
  descricao: string;
  local: string;
  // Link externo (ex.: Google Forms) para eventos que exigem inscrição prévia.
  inscricaoLink?: string;
  // Texto do botão do link, quando "Realizar inscrição" não descreve o destino
  // (ex.: um link de contato via WhatsApp em vez de um formulário).
  inscricaoLinkLabel?: string;
  // Imagem/cartaz de divulgação do evento (proporção 16:9 renderiza melhor).
  imagem?: string;
  // `object-position` do cartaz nos cards 16:9, para escolher o que fica visível
  // quando a imagem não é 16:9 e precisa ser cortada. Padrão: "50% 50%" (centro).
  // Ex.: "50% 25%" desce a imagem, revelando mais do topo.
  imagemPosicao?: string;
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
    topicoSlug: "clube-de-leitura",
    titulo: "A Casa abre a Sala de Estudos",
    imagem: "/evento1.webp",
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
    imagem: "/evento2.webp",
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
  {
    id: "3",
    data: "19 Ago 2026",
    mes: "Agosto 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "supervisoes",
    titulo: "Universo da Criança e do Adolescente",
    imagem: "/evento3.webp",
    descricao:
      "Supervisão Clínica e Estudos em Abordagem Centrada na Pessoa: um espaço de encontro, supervisão, estudo e aprofundamento da prática clínica com crianças, adolescentes e suas famílias. Encontros quinzenais, às quartas-feiras, em grupo fechado.",
    local: "Online",
    inscricaoLink: "https://forms.gle/Whnjo4TemDSW9CJDA",
    detalhes: {
      conteudo: [
        "## A clínica também precisa de um lugar para ser cuidada.",
        "A prática clínica com crianças e adolescentes é feita de encontros singulares. Cada pessoa que chega nos convida a ampliar a escuta, sustentar dúvidas, rever compreensões e confiar na potencialidade do processo terapêutico.",
        "Quem acompanha também precisa de um espaço onde possa pensar sua prática, compartilhar experiências e continuar se desenvolvendo.",
        "A supervisão nasce desse desejo: oferecer um espaço continuado de supervisão clínica e estudos em Abordagem Centrada na Pessoa, no qual teoria, experiência e construção compartilhada possam caminhar juntas.",
        "Acreditamos que a clínica não precisa ser uma travessia solitária. Na presença do outro e na troca cuidadosa, novas compreensões podem surgir, fortalecendo uma prática cada vez mais ética, sensível e coerente com a ACP.",
        "Os encontros acontecem quinzenalmente, intercalando momentos de Supervisão Clínica e Estudos em Abordagem Centrada na Pessoa.",
        "Nos encontros de supervisão, os participantes poderão compartilhar casos clínicos e refletir sobre os processos terapêuticos, as relações com as famílias e as questões éticas presentes no acompanhamento de crianças e adolescentes.",
        "Os encontros de estudo serão intercalados às supervisões, aproximando teoria e experiência por meio de leituras, temas clínicos e materiais complementares.",
        "O grupo reduzido favorece a construção de vínculos, a continuidade e a criação de um espaço seguro para compartilhar inquietações e ampliar compreensões sobre a prática clínica.",
        "## Cronograma",
        "- 19 de agosto — Supervisão Clínica\n- 2 de setembro — Supervisão Clínica\n- 16 de setembro — Supervisão Clínica\n- 30 de setembro — Estudos em Abordagem Centrada na Pessoa\n- 7 de outubro — Supervisão Clínica\n- 14 de outubro — Estudos em Abordagem Centrada na Pessoa\n- 28 de outubro — Supervisão Clínica\n- 11 de novembro — Supervisão Clínica\n- 25 de novembro — Estudos em Abordagem Centrada na Pessoa",
        "## Neste espaço, você encontrará",
        "- Supervisão clínica em grupo;\n- Estudos em Abordagem Centrada na Pessoa;\n- Compartilhamento e aprofundamento de casos clínicos;\n- Leituras e materiais complementares;\n- Grupo exclusivo de comunicação entre participantes;\n- Prioridade de inscrição nas atividades da Casa ACP;\n- Condição especial para ex-alunos do Universo da Criança e do Adolescente.",
        "Um espaço pensado para aqueles que desejam aprofundar sua prática com crianças e adolescentes, ampliar sua compreensão da Abordagem Centrada na Pessoa e caminhar ao lado de outros profissionais.",
      ],
      info: [
        { label: "Início", valor: "19 de agosto" },
        { label: "Horário", valor: "Quartas-feiras, das 20h às 21h30" },
        { label: "Onde", valor: "Online" },
        { label: "Formato", valor: "Grupo fechado, de 8 a 10 participantes" },
      ],
    },
  },
  {
    id: "4",
    data: "29 Ago 2026",
    mes: "Agosto 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "supervisoes",
    titulo: "Vivendo a Clínica: Grupo de Supervisão e Leituras Reflexivas",
    imagem: "/evento4.webp",
    descricao:
      "Um ciclo de quatro encontros para quem deseja cuidar de si e da escuta que oferece a outras pessoas, aproximando experiência clínica, supervisão e leitura. Encontros presenciais, aos sábados, em Belo Horizonte.",
    local: "Belo Horizonte",
    inscricaoLink: "https://www.sympla.com.br/evento/vivendo-a-clinica---grupo-de-supervisao-e-leituras-reflexivas/3549099",
    inscricaoLinkLabel: "Realizar inscrição",
    detalhes: {
      conteudo: [
        "Neste mês, a Casa ACP abre a sua Sala de Estudos para um ciclo de quatro encontros do Vivendo a Clínica: Grupo de Supervisão e Leituras Reflexivas.",
        "Uma proposta para quem deseja cuidar de si e da escuta que oferece a outras pessoas, aproximando experiência clínica, supervisão e leitura. Vamos compartilhar, em roda, provocações que atravessam a nossa prática, buscando ampliar compreensões, construir sentidos e cultivar uma clínica viva, coletiva e inspirada pela Abordagem Centrada na Pessoa.",
        "Serão quatro encontros presenciais, aos sábados, em Belo Horizonte.",
        "Quem sentir vontade de participar ou quiser mais informações, é só entrar em contato pelo link.",
      ],
      info: [
        { label: "Datas", valor: "29 de agosto, 19 de setembro, 10 de outubro e 7 de novembro" },
        { label: "Horário", valor: "Sábados, das 9h às 11h" },
        { label: "Onde", valor: "Belo Horizonte" },
        { label: "Facilitação", valor: "Dalissa Vieira" },
        { label: "Vagas", valor: "6" },
      ],
    },
  },
];

// Texto de data exibido nos cards e na página de detalhe do evento.
export function rotuloDeData(evento: AgendaEvento): string {
  return evento.data ?? "Data a definir";
}

// Eventos de um cômodo específico, em ordem cronológica.
export function agendaPorComodo(slug: string): AgendaEvento[] {
  return AGENDA.filter((evento) => evento.origemSlug === slug);
}

// Eventos ligados a um tópico específico dentro de um cômodo (ex.: Clube de Leitura).
export function agendaPorTopico(topicoSlug: string): AgendaEvento[] {
  return AGENDA.filter((evento) => evento.topicoSlug === topicoSlug);
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
// Eventos sem data definida vão para o fim da lista.
function timestampDoEvento(data?: string): number {
  if (!data) return Number.MAX_SAFE_INTEGER;
  const [dia, mesAbrev, ano] = data.split(" ");
  const mes = MESES_ABREVIADOS[mesAbrev] ?? 0;
  return new Date(Number(ano), mes, Number(dia)).getTime();
}

// Todos os eventos, ordenados cronologicamente.
export function agendaOrdenadaPorData(): AgendaEvento[] {
  return [...AGENDA].sort((a, b) => timestampDoEvento(a.data) - timestampDoEvento(b.data));
}
