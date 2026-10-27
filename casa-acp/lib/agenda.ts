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
  // "- " para renderizar o parágrafo como lista. Trechos no formato
  // "[rótulo](destino)" viram links (caminhos internos ou endereços externos).
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
  // Slug em /comodos/quarto-de-hospedes/[id], quando o encontro é conduzido por
  // uma hóspede. Faz o evento aparecer entre as contribuições dela.
  hospedeId?: string;
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
  // Marca o evento como atual: aparece na Varanda da página inicial e na seção
  // "Acontecendo agora" da Varanda. Sem a marca, o evento vai para "Já passaram".
  atual?: boolean;
  // Coloca o evento em primeiro lugar entre os atuais da Varanda (página inicial e cômodo).
  destaque?: boolean;
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
    inscricaoLinkLabel: "Formulário de interesse",
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
  {
    id: "5",
    data: "10 Out 2026",
    mes: "Outubro 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "rodas-de-conversa",
    hospedeId: "aline",
    titulo: "Cuidar de quem cuida",
    imagem: "/evento5.webp",
    descricao:
      "ACP, políticas públicas e relações de cuidado. Na primeira edição do Casa em Prosa, Aline Calisto conduz uma roda de conversa sobre o trabalho de quem cuida, os atravessamentos institucionais, a clínica ampliada e as possibilidades de escuta nas políticas públicas.",
    local: "On-line",
    inscricaoLink: "https://www.sympla.com.br/preview-online/3c6110015283339ab6d2a77fb4441480",
    inscricaoLinkLabel: "Participar da roda",
    detalhes: {
      conteudo: [
        "## Algumas experiências de cuidado também pedem um lugar para serem cuidadas.",
        "Nesta primeira edição do Casa em Prosa, Aline Calisto nos convida a uma roda de conversa sobre o trabalho de quem cuida, os atravessamentos institucionais, a clínica ampliada e as possibilidades de escuta nas políticas públicas.",
        "Uma conversa que nasce de [seu texto](/comodos/cozinha-literaria/14), escrito durante sua passagem pelo nosso Quarto de Hóspedes, e que agora segue para a Sala de Estudos.",
      ],
      info: [
        { label: "Data", valor: "10 de outubro" },
        { label: "Horário", valor: "Das 9h às 10h30" },
        { label: "Onde", valor: "On-line" },
        { label: "Facilitação", valor: "Aline Calisto" },
      ],
    },
  },
  {
    id: "6",
    data: "31 Out 2026",
    mes: "Outubro 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "rodas-de-conversa",
    hospedeId: "bruno",
    titulo: "Os desafios da presença paterna no período da gestação e puerpério da mulher",
    atual: true,
    imagem: "/evento6.webp",
    descricao:
      "Uma roda de conversa com o psicólogo e professor Bruno Martins sobre os desafios e as possibilidades do envolvimento paterno durante a gestação e o puerpério, com facilitação de Hanna Luiza e Lilian Tarabal.",
    local: "On-line",
    inscricaoLink: "https://www.sympla.com.br/evento-online/roda-de-conversa-os-desafios-da-presenca-paterna-na-gestacao-e-no-puerperio-da-mulher/3620146",
    inscricaoLinkLabel: "Participar da roda",
    detalhes: {
      conteudo: [
        "A roda de conversa “Os desafios da presença paterna no período da gestação e puerpério da mulher” propõe um espaço de escuta, diálogo e reflexão sobre os desafios e as possibilidades do envolvimento paterno durante esse período tão significativo para a mulher, o bebê e a família.",
        "A gestação e o puerpério são períodos de intensas transformações físicas, emocionais e relacionais. Embora frequentemente o olhar se volte para a experiência da mulher, a presença paterna também é atravessada por expectativas, dúvidas, mudanças e desafios que merecem espaço de acolhimento e reflexão.",
        "## Como se constrói a presença paterna durante a gestação e após a chegada de um filho? Quais fatores favorecem ou dificultam o envolvimento do pai? Como os aspectos culturais, emocionais e relacionais atravessam essa experiência?",
        "A partir dessas e de outras questões, o encontro busca ampliar o olhar sobre a paternidade, reconhecendo a importância dos vínculos, da corresponsabilidade no cuidado e da construção de uma rede de apoio que considere as necessidades da mulher, do bebê e de quem também está vivenciando a chegada de uma criança.",
        "A proposta é favorecer uma conversa aberta, que acolha diferentes experiências e perspectivas, contribuindo para a construção de reflexões sobre a presença paterna e suas possibilidades durante a gestação e o puerpério.",
        "Para quem é este encontro?\nO encontro é destinado a pais, futuros pais, gestantes, puérperas, casais, familiares e profissionais interessados em refletir sobre a presença paterna, o cuidado e as relações familiares durante a gestação e o puerpério.",
        "O encontro será introduzido e facilitado por Hanna Luiza e Lilian Tarabal, com a participação do psicólogo e professor Bruno Martins.",
        "Nos encontramos lá 🧡",
      ],
      info: [
        { label: "Data", valor: "31 de outubro" },
        { label: "Horário", valor: "Das 9h às 10h30" },
        { label: "Onde", valor: "On-line" },
        { label: "Facilitação", valor: "Hanna Luiza e Lilian Tarabal" },
        { label: "Participação", valor: "Bruno Martins" },
        { label: "Certificado", valor: "Haverá emissão de certificado" },
      ],
    },
  },
  {
    // Notícia sobre o grupo em andamento do evento 3, não um novo encontro.
    id: "7",
    data: "19 Out 2026",
    mes: "Outubro 2026",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "supervisoes",
    titulo: "Universo da Criança e do Adolescente: a clínica também precisa de um lugar para ser cuidada",
    atual: true,
    imagem: "/evento7.webp",
    descricao:
      "Notícias da Supervisão Clínica e Estudos em Abordagem Centrada na Pessoa: um espaço onde teoria e experiência caminham juntas, para cuidar de quem cuida de crianças, adolescentes e suas famílias.",
    local: "Online",
    detalhes: {
      conteudo: [
        "## A clínica também precisa de um lugar para ser cuidada.",
        "O que a supervisão propõe?\nCaminhar pela clínica para além das respostas prontas.",
        "Nos encontros, teoria e experiência caminham juntas: estudamos, compartilhamos e refletimos sobre o fazer clínico, deixando-nos atravessar pelas perguntas que a prática produz.",
        "Um espaço para compreender, questionar e construir possibilidades a partir da Abordagem Centrada na Pessoa.",
        "Como olhamos para a clínica?\nPartimos da compreensão de que crianças e adolescentes são pessoas ativas e protagonistas de suas próprias experiências, constituídas e transformadas nas relações que estabelecem com o mundo e com aqueles que as cercam.",
        "Por isso, nosso olhar se amplia:",
        "## criança • adolescente • família • escola • contexto • relações",
        "Buscamos compreender a experiência da criança e do adolescente sem perder de vista a complexidade de suas relações, oferecendo condições facilitadoras para que diferentes perspectivas possam ser acolhidas, compreendidas e ressignificadas. Olhando também com cuidado para o psicoterapeuta.",
        "## Estudo, reflexão e construção de sentidos",
        "O estudo é parte fundamental do nosso percurso. É por meio do diálogo com a literatura, da reflexão compartilhada e da aproximação entre teoria e prática que ampliamos nosso olhar para as experiências que chegam à clínica.",
        "Estudar a clínica com crianças e adolescentes possibilita compreender que ninguém se constitui isoladamente. As relações participam da construção das experiências, dos sentidos e das possibilidades de ser.",
        "É a partir dessa compreensão que buscamos sustentar uma prática clínica atenta à singularidade de cada pessoa e aos contextos relacionais que atravessam sua existência.",
        "Nosso convite é para que o estudo não se limite à busca por respostas, mas se torne abertura para novas perguntas, outros modos de compreender e possibilidades de encontro.",
        "Tem sido incrível esse momento de trocas!!",
        "Nosso espaço espera por você: um lugar para cuidar de quem cuida. Conheça o [Universo da Criança e do Adolescente](https://forms.gle/Whnjo4TemDSW9CJDA).",
        "Com carinho,\nHanna Luiza e Lilian Tarabal",
      ],
      info: [
        { label: "Grupo", valor: "Universo da Criança e do Adolescente" },
        { label: "Proposta", valor: "Supervisão Clínica e Estudos em Abordagem Centrada na Pessoa" },
        { label: "Onde", valor: "Online" },
        { label: "Facilitação", valor: "Hanna Luiza e Lilian Tarabal" },
      ],
    },
  },
  {
    id: "8",
    data: "26 Fev 2027",
    mes: "Fevereiro 2027",
    origem: "Sala de Estudos",
    origemSlug: "sala-de-estudos",
    topicoSlug: "cursos-e-minicursos",
    titulo: "Formação em Abordagem Centrada na Pessoa | Turma 2027–2028",
    atual: true,
    destaque: true,
    imagem: "/evento8.jpeg",
    descricao:
      "Um percurso de estudo, experiência e encontro: proposta teórico-vivencial que articula os fundamentos da Abordagem Centrada na Pessoa, a reflexão sobre a prática clínica e a pessoa do profissional. Presencial em Belo Horizonte, com atividades on-line complementares.",
    local: "Belo Horizonte",
    inscricaoLink: "https://forms.gle/MGVYFBEqSt4V58Pq8",
    detalhes: {
      conteudo: [
        "Na Sala de Estudos da Casa ACP, nosso Curso de Formação acontece como um percurso de estudo, experiência e encontro.",
        "Nossa proposta teórico-vivencial articula os fundamentos da Abordagem Centrada na Pessoa, a reflexão sobre a prática clínica e experiências significativas de aprendizagem, valorizando também a pessoa do profissional.",
        "Com início em 26 de fevereiro de 2027, o curso acontecerá presencialmente em Belo Horizonte, com atividades on-line complementares.",
        "## As inscrições estão abertas!",
        "Conheça nossa proposta e, se este percurso faz sentido para você, será uma alegria receber sua inscrição. [Acesse o formulário de inscrição](https://forms.gle/MGVYFBEqSt4V58Pq8).",
        "Para mais informações:\nWhatsApp: [(31) 99633-0001](https://wa.me/5531996330001)\nE-mail: [casaacpformacao@gmail.com](mailto:casaacpformacao@gmail.com)",
      ],
      info: [
        { label: "Início", valor: "26 de fevereiro de 2027" },
        { label: "Turma", valor: "2027–2028" },
        { label: "Onde", valor: "Presencial em Belo Horizonte, com atividades on-line complementares" },
        { label: "Contato", valor: "(31) 99633-0001 · casaacpformacao@gmail.com" },
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

// Encontros conduzidos por uma hóspede, exibidos entre as contribuições dela.
export function agendaPorHospede(hospedeId: string): AgendaEvento[] {
  return AGENDA.filter((evento) => evento.hospedeId === hospedeId);
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

// Eventos atuais (marcados com `atual`), em ordem cronológica.
export function agendaAtual(): AgendaEvento[] {
  return agendaOrdenadaPorData().filter((evento) => evento.atual);
}

// Eventos atuais para a Varanda (página inicial e cômodo): os em destaque primeiro,
// depois os demais em ordem cronológica.
export function agendaAtualComDestaque(): AgendaEvento[] {
  const atuais = agendaAtual();
  return [...atuais.filter((evento) => evento.destaque), ...atuais.filter((evento) => !evento.destaque)];
}

// Eventos que já passaram, do mais recente para o mais antigo.
export function agendaPassada(): AgendaEvento[] {
  return agendaOrdenadaPorData()
    .filter((evento) => !evento.atual)
    .reverse();
}
