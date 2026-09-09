// Dados dos perfis da equipe.
// Mantido fora do Client Component para que "app/equipe/[id]/page.tsx"
// (Server Component) consiga ler as chaves em generateStaticParams no build.
export const EQUIPE_DETALHES = {
  dalissa: {
    nome: "Dalissa Vieira Teixeira",
    crp: "CRP 04/49035",
    foto: "/dalissa02.webp",
    whatsapp: "5531994437456", 
    instagram: "https://instagram.com/dalissa.psi", 
    endereco: "Rua Barão de Macaúbas, 460 - Sala 1604, Santo Antônio, Belo Horizonte - MG (CEP: 30350-090)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Barao+de+Macaubas,+460+-+Santo+Antonio,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed",
    bio: [
      "Psicóloga clínica, psicoterapeuta e plantonista.",
      "Especialista em Psicologia Clínica pela Universidade Federal de Minas Gerais (UFMG) e em Saúde do Idoso pela Pontifícia Universidade Católica do Paraná (PUC-PR).",
      "Possui formação em Psicoterapia Centrada no Cliente pelo CPHMINAS, em Terapia Breve pelo Abrangente – Centro Mineiro de Terapia Breve, em Antroposofia pela Associação Brasileira de Medicina Antroposófica e em Gerontologia pela UFMG.",
      "Atua como docente em cursos de pós-graduação nas áreas de Psicologia Clínica Existencial e Humanista, Abordagem Centrada na Pessoa e Psicologia Hospitalar.",
      "Possui experiência em Psicologia Clínica, Psicologia Hospitalar e Psicogerontologia, com atuação, nos últimos anos, especialmente nos seguintes temas: Abordagem Centrada na Pessoa, envelhecimento, plantão psicológico, emergências e desastres."
    ]
  },
  eveline: {
    nome: "Eveline Alves de Abreu",
    crp: "CRP 04/50824",
    foto: "/eveline0.webp",
    whatsapp: "5531998341105",
    instagram: "https://instagram.com/evelinealvespsi",
    endereco: "Rua Progresso, 1272 - Sala 106, Padre Eustáquio, Belo Horizonte - MG (CEP: 30720-320)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Progresso,+1272+-+Padre+Eustaquio,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed", 
    bio: [
      "Psicóloga Clínica, Psicoterapeuta e Plantonista.",
      "Graduanda na Pós-Graduação em Fenomenologia, Psicopatologia e Saúde Mental no Instituto Sapientia Cordis.",
      "Possui formação em Psicoterapia Centrada no Cliente pelo CPHMINAS e atuou como Focusing Trainer pelo IBF - Instituto Brasileiro de Focalização.",
      "Psicóloga responsável pela implantação do setor de Psicologia do Projeto Assistencial Novo Céu.",
      "Possui experiência em Psicologia Clínica, Psicologia Hospitalar e Pré-Terapia, com atuação, nos últimos anos, especialmente nos seguintes eixos: Psicopatologia, Saúde Mental, Abordagem Centrada na Pessoa e Plantão Psicológico."
    ]
  },
  lilian: {
    nome: "Lilian Maria Ribeiro Tarabal Silva",
    crp: "CRP 04/47161",
    foto: "/lilian0.webp",
    whatsapp: "5531993059596",
    instagram: "", 
    endereco: "R. Rodrigues Caldas, 670 - Santo Agostinho, Belo Horizonte - MG, 30190-120",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.8568976744405!2d-43.955739300000005!3d-19.930434299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6976ee2fd039d%3A0xd3964bdb18729b2a!2sR.%20Rodrigues%20Caldas%2C%20670%20-%20Santo%20Agostinho%2C%20Belo%20Horizonte%20-%20MG%2C%2030190-120!5e0!3m2!1spt-BR!2sbr!4v1786383957300!5m2!1spt-BR!2sbr", 
    bio: [
      "Psicóloga, palestrante e psicoterapeuta de Crianças e Adultos.",
      "Especialista em Fenomenologia e Saúde Mental pela FCMMG. Possui formação em Psicoterapia Centrada no Cliente e em Ludoterapia pelo CPHMINAS.",
      "Possui experiência em Psicologia Clínica, atuando nos últimos anos especialmente nas seguintes temáticas: Abordagem Centrada na Pessoa, Ludoterapia, Psicoterapia Experiencial, Focalização, Saúde Mental e psicologia perinatal."
    ]
  },
  hanna: {
    nome: "Hanna Luiza Oliveira Santos Nonato",
    crp: "CRP 04/51491",
    foto: "/hanna0.webp",
    whatsapp: "5531987848320",
    instagram: "https://instagram.com/hannasantospsi",
    endereco: "Rua Dr. Jarbas Vidal Gomes, 30 - Sala 813, Cidade Nova, Belo Horizonte - MG (CEP: 31700-070)",
    mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.754656998171!2d-43.93025042388619!3d-19.892579137146132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69a6ba6415555%3A0x3e0958ae3b35e072!2sRua%3A%20Dr.%20Jarbas%20Vidal%20Gomes%2C%2030%20-%20Cidade%20Nova%2C%20Belo%20Horizonte%20-%20MG%2C%2031170-070!5e0!3m2!1spt-BR!2sbr!4v1785438257363!5m2!1spt-BR!2sbr",
    bio: [
      "Psicóloga clínica, plantonista e psicoterapeuta de crianças, adolescentes e adultos.",
      "Graduada em Psicologia pela Faculdade Pitágoras (MG), com formação em Psicoterapia Centrada no Cliente pelo CPHMINAS, MBA em Psicologia Organizacional e Liderança Estratégica pela UNA e especialização em Neurociência e Educação pela UNOPAR.",
      "Atua como palestrante e tem experiência nas áreas de Psicologia Clínica e Educacional, com foco na Abordagem Centrada na Pessoa, Plantão Psicológico, universo da criança e do adolescente, lutos não reconhecidos na perinatalidade e imagem feminina."
    ]
  }
};
