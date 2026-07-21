// ── FONTE ÚNICA DOS ARTIGOS DA COZINHA LITERÁRIA ──
// Usada pela página da Cozinha, pela página de cada artigo e pela seção da home.

export interface AutorArtigo {
  // Nome curto, usado em filtros e nos cards (ex.: "Dalissa").
  nome: string;
  // Nome completo, mostrado abaixo do título na página do artigo.
  nomeCompleto: string;
  // Slug em /equipe/[id], quando a pessoa faz parte do time da Casa.
  equipeId?: string;
}

export interface Artigo {
  id: string;
  titulo: string;
  categoria: string;
  autores: AutorArtigo[];
  // Alguns textos ainda não têm data definida pela autora.
  data?: string;
  resumo: string;
  conteudo: string[];
}

const DALISSA: AutorArtigo = { nome: "Dalissa", nomeCompleto: "Dalissa Vieira Teixeira", equipeId: "dalissa" };
const MARIA_LUIZA: AutorArtigo = { nome: "Maria", nomeCompleto: "Maria Luiza Rocha de Andrade" };

export const ARTIGOS: Artigo[] = [
  {
    id: "1",
    titulo: "Hoje, recebi a notícia de que meu cliente partiu…",
    categoria: "Clínica",
    autores: [DALISSA],
    data: "23 Out 2024",
    resumo: "No primeiro momento, fiquei perplexa. Em seguida, um calor e uma pressão no peito tomaram conta, acompanhados de uma lágrima tímida e solitária.",
    conteudo: [
      "No primeiro momento, fiquei perplexa. Em seguida, um calor e uma pressão no peito tomaram conta, acompanhados de uma lágrima tímida e solitária.",
      "O dia foi correndo e, com ele, minhas checagens constantes. Eu queria verificar o que estava ali, me acompanhando.",
      "Quando fiz uma pausa, ao meio-dia, escolhi um cantinho que gosto e fiquei ali, quieta, fazendo companhia para aquela sensação turva, estranha, porém presente.",
      "Conforme fui abrindo mais e mais espaço para o desconhecido, fui me recordando dos nossos encontros, da relação terapêutica singular que construímos ao longo do tempo. Lembrei-me do seu rosto, das suas angústias, lágrimas, do seu sorriso, da sua gargalhada…",
      "E, de repente, bingo! Me dei conta de que, de alguma forma, eu me tornara guardiã de muitas das suas pérolas, dos seus tesouros, de fragmentos e nuances do seu existir, que são especialmente capturados pelo olhar interessado e disponível do psicoterapeuta.",
      "Me emocionei, lembrando da sua entrega ao seu processo, e me senti grata por ter tido a oportunidade de acompanhá-lo. Talvez tenha me dado conta, em certa medida, de que a psicoterapia transcende o tempo e o espaço e permite que o encontro permaneça vivo dentro de quem o vivenciou.",
      "De certa forma, a nossa conexão seguirá viva em mim, fazendo-me recordar que somos passagem e transcendência, e que, por isso, vale muito a pena buscar viver a vida sendo quem se é.",
    ],
  },
  {
    id: "2",
    titulo: "Natal Intergeracional",
    categoria: "Vida Cotidiana",
    autores: [DALISSA],
    data: "21 Dez 2024",
    resumo: "O Natal é muito mais do que um feriado tradicional. É um convite para renovarmos laços e reencontrarmos nossa essência coletiva, atravessando gerações.",
    conteudo: [
      "O Natal, celebrado anualmente em 25 de dezembro, é muito mais do que um feriado cristão tradicional. É um convite para renovarmos laços e reencontrarmos nossa essência coletiva, atravessando gerações com amor, partilha e cuidado. Apesar de suas origens estarem enraizadas em tradições antigas, como o festival romano do Sol Invictus — o Sol Invencível —, e de sua ressignificação pela Igreja Católica no século IV, essa data transcende rótulos religiosos, oferecendo um momento de profunda conexão humana.",
      "Hoje, o Natal une cristãos e não cristãos em torno de símbolos universais de generosidade e esperança. Seja por meio da troca de presentes, da Ceia de Natal ou da magia do Papai Noel, essas tradições refletem um legado compartilhado, passado de geração em geração, onde histórias, valores e afetos são transmitidos e atualizados. Nesse cenário, surge a beleza da intergeracionalidade — o encontro entre diferentes idades e experiências, formando uma rica teia de aprendizados e vínculos.",
      "O Natal é, por excelência, um espaço intergeracional. Em torno da mesa, bisavós, avós, filhos, netos e amigos compartilham memórias, risadas e sonhos. Cada prato típico carrega o sabor de lembranças, e cada conversa revive histórias que moldam identidades. Para quem envelhece, é uma oportunidade de compartilhar sabedoria, reviver momentos e sentir-se parte de uma vida pulsante. Para os mais jovens, é um momento de ouvir e aprender, mas também de contribuir com novas perspectivas, compartilhar sonhos e dialogar com as trajetórias que pavimentaram o caminho que hoje percorrem.",
      "Ao rompermos nossas bolhas geracionais, criamos uma espuma humana — viçosa e brilhante — formada pelo diálogo, pelo afeto e pelas trocas que o encontro entre diferentes gerações pode proporcionar. Cada partilha enriquece o outro, fazendo do Natal não apenas uma celebração, mas um movimento vivo de construção de vínculos e significados.",
      "Nas brincadeiras, como o amigo oculto, nos momentos musicais ouvindo juntos uma canção, seja nova ou antiga, ou até em simples reflexões sobre o ano que passou, podemos cultivar esse sentido de união, reafirmando que ninguém caminha sozinho. Assim, o Natal torna-se uma celebração de histórias e esperanças compartilhadas, uma oportunidade de ouvir e ser ouvido, de ensinar e aprender e, acima de tudo, de renovar a força das relações humanas.",
      "É o momento de viver o presente — não apenas aquele que está debaixo da árvore, mas a dádiva da convivência, onde cada geração enriquece a outra. Que nessa festa possamos perpetuar tradições, criar memórias e construir juntos uma espuma que nos envolva de maneira carinhosa, unindo-nos com amor, respeito e a beleza de sermos, ao mesmo tempo, distintos e interdependentes.",
    ],
  },
  {
    id: "3",
    titulo: "Arquitetura Existencial: redesenhando um novo envelhecer",
    categoria: "Envelhecimento",
    autores: [DALISSA],
    data: "14 Ago 2025",
    resumo: "O aumento da longevidade nos convida a pensar uma outra arquitetura existencial: menos rígida, mais orgânica; menos estrada reta, mais jardim.",
    conteudo: [
      "Ainda carregamos no corpo e na mente um modelo de vida herdado de nossos pais e avós: primeiro aprendemos, depois trabalhamos e, ao fim, descansamos. Uma sequência quase sempre linear, clara, previsível, como se o tempo humano pudesse ser guardado em três gavetas estanques.",
      "Esse roteiro fazia sentido quando a expectativa de vida era curta e os ciclos sociais obedeciam a ritmos mais rígidos. Mas hoje vivemos mais e, talvez o mais importante, vivemos de forma mais complexa, mais imprevisível e mais diversa. Talvez o paradigma de uma vida tricompartimentada já não nos sirva mais…",
      "O aumento da longevidade nos convida a pensar uma outra arquitetura existencial: menos rígida, mais orgânica; menos estrada reta, mais jardim. O New Map of Life, proposto pelo Stanford Center on Longevity, aponta que não basta viver até os 80, 90 ou 100 anos: é preciso viver com sentido, com presença e com vínculos que sustentem nossa existência no mundo.",
      "Essa nova cartografia da vida pede que distribuamos aprendizado, trabalho e descanso ao longo de toda a existência, como ciclos que se renovam e se entrelaçam. Aos 60, não estamos no epílogo; muitas vezes, estamos no início de novos capítulos tão criativos, férteis e transformadores quanto qualquer juventude.",
      "O envelhecer, assim, deixa de ser árido e passa a ser território vivo: um espaço para reinventar papéis, abrir janelas, restaurar alicerces e cultivar novas paisagens internas. Não se trata apenas de prolongar o tempo, mas de ampliar a experiência, permitindo que a identidade siga plástica, mutável e poética.",
      "Repensar o envelhecer é, no fundo, um exercício de criatividade. É reconhecer que cada fase da vida pode abrigar novos começos. É aceitar que nosso mapa não está pronto e que nossa casa interna pode ser redesenhada, tantas vezes quanto for necessário, para que possamos viver com liberdade, cuidado, autenticidade e imaginação.",
    ],
  },
  {
    id: "4",
    titulo: "O que dá sentido à sua vida?",
    categoria: "Vida Cotidiana",
    autores: [DALISSA, MARIA_LUIZA],
    resumo: "Uma reflexão sobre escolhas feitas por consciência própria — ou por valores que não são nossos — e sobre o caminho do autorrespeito, da autoestima e do autocuidado.",
    conteudo: [
      "Você prefere usar um salto ou uma rasteirinha? Ser uma empresária, uma escritora renomada, uma celebridade ou cuidar da sua família, ter tempo para preparar um lanche saudável, colocar na lancheira e levar o(s) filho(s) à escola; esperar pela hora do retorno, sentindo-se plena e feliz? Ah! Talvez você não tenha filhos, mas se sinta igualmente realizada ao cuidar de si, de sua casa, dos seus afetos. Bem… talvez você ainda prefira conciliar sua vida profissional, seu relacionamento amoroso, filhos, estudos, etc. Perfeito!",
      "Mas essas escolhas foram feitas de forma consciente? Você se ouviu para escolher, ou simplesmente tomou decisões pautadas em valores que não são seus, pensando ter que cumprir objetivos que nem lhe são importantes, que não falam de você, mas, ao contrário, roubam-lhe vida, energia e tempo para viver o que realmente dá sentido à sua existência?",
      "Há determinados valores, padrões de comportamentos e até mesmo exigências sociais que vão sendo transmitidos de geração em geração e, de repente, viramos “heroínas”, pela capacidade de fazermos várias tarefas ao mesmo tempo, pela abnegação, pela força na busca de nossas conquistas, pela marca de “guerreira” estigmatizada em cada uma de nós que faz das tripas coração na busca de superação. E quantas se deixam iludir, sem se perguntar se realmente é isso que estão escolhendo! Embarcam nesse trem, amontoado de estranhas bagagens e de destino duvidoso.",
      "Quantas gostariam de dizer – sem culpa –: eu não dou conta de tudo isso, eu gostaria de ter um final de semana só pra mim, eu quero renunciar a essa escolha. Para isso, é preciso acolher a condição de seres humanos, com todas as nuances e cores que isso implica; depois, a condição de ser mulher! Não há uma receita (Deus me livre se houvesse!), mas há uma possibilidade de caminho, que é o do autorrespeito, da autoestima, do autocuidado. Há que se aprender a SER! De maneira natural e autêntica!",
      "Como disse Rosa Luxemburgo: “Que sejamos socialmente iguais, humanamente diferentes e totalmente livres”.",
    ],
  },
  {
    id: "5",
    titulo: "Ousar é preciso",
    categoria: "Reflexão",
    autores: [DALISSA, MARIA_LUIZA],
    resumo: "Uma reflexão profunda sobre romper o conformismo e as pressões sociais para adotar a postura de 'rebeldes saudáveis', resgatando a nossa autenticidade.",
    conteudo: [
      "Na batalha constante chamada “vida”, procuramos estabelecer um código de conduta, de acordo com a sociedade onde fomos criados. Aceitamos um padrão de comportamento como parte de nossa tradição. Esperamos que alguém nos diga o que é certo ou errado, justo ou injusto e, na observação deste padrão, nossa conduta se torna mecânica, automática. Acabamos sendo o resultado de toda uma gama de influências, cerceando a nossa autenticidade, forçando a nossa individualidade a ajustar-se a padrões estabelecidos.",
      "O conformismo acaba fazendo parte (muitas vezes) do nosso dia a dia. Eis que este ponto de atuação pode ser transmutado. De conformistas insatisfeitos, podemos adotar a postura de rebeldes saudáveis, rebeldes com causa, certamente uma enorme transformação. Rebeldia! Parece ser a palavra da vez. A rebeldia pode nos oferecer maior clareza e coragem no enfrentamento das mais diversas temeridades.",
      "Muitas atitudes são consideradas rebeldes, pois vão contra os limites que a sociedade impõe ao ser humano. Entretanto, a rebeldia só pode existir com ousadia que, por sua vez, depende da coragem e da responsabilidade (consigo e com o outro). Há necessidade de planejamento e consciência do limite que nos colocamos. Quem ousa acredita naquilo que pode executar e se lança ao novo intuito com mais força e presença.",
      "Podemos ousar ser o que construímos e o que imaginamos. Apenas nós mesmos podemos romper os antagonismos que ainda nos tornam escravos. Devemos examinar o que ainda nos mantém encarcerados, o que nos impede de ousar ser uma pessoa melhor; o que nos coloca numa situação limitada. Somos seres dotados de potencialidades e, portanto, podemos alçar voos mais altos e panorâmicos. Na vida pessoal, na profissão, nas relações interpessoais, na política, não importa a área, devemos ousar fazer aquilo que julgamos mais coerente conosco, evitando repetir padrões antigos impostos por nós mesmos ou pelos outros.",
      "Sejamos ousados na criação de nosso Eu. Só poderemos estar inteiros e íntegros se escutarmos a nossa própria consciência e se decidirmos agir por este viés.",
      "É hora de ousar! É hora de mudar! É hora de acreditar em nós mesmos como criadores das nossas próprias experiências.",
      "> “Ao aceitarmos as concepções dos outros como se fossem nossas, perdemos contato com a sabedoria potencial de nosso funcionamento e perdemos a confiança em nós mesmos.” — Carl Rogers",
    ],
  },
  {
    id: "6",
    titulo: "Somos plural",
    categoria: "Reflexão",
    autores: [DALISSA, MARIA_LUIZA],
    resumo: "Uma reflexão sobre a interdependência humana e como a presença e o encontro com o outro são fundamentais para nos constituirmos como um 'EU'.",
    conteudo: [
      "Ao nascer, o ser humano não sabe se alimentar, se mover, se comunicar, se proteger, manter a saúde. É mais dependente e por mais tempo do que qualquer outro animal. Mesmo quando cresce, sozinho não é capaz de prover a si mesmo das necessidades mais elementares. Ter um abrigo, alimento apropriado, condições essenciais para o seu desenvolvimento biopsicossocial. Ele precisa de um outro que o confirme em sua existência, precisa experimentar a afetividade sadia para então desenvolver autoconfiança e autoamor. Precisa ser inserido em uma cultura para vivenciar o pertencimento e realizar as suas potencialidades em um grupo.",
      "Durante toda a vida vão tecendo-se teias de relações interpessoais, onde todos têm sua importância, mas nem todos percebem esta importante dinâmica existencial. Precisamos uns dos outros em maior ou menor escala, mas precisamos do outro, até e principalmente, para nos constituirmos como um EU. Preciso, dentro de um espaço de autonomia e liberdade, que o outro me veja para que eu me sinta presente. É a presença do outro que oferece significado à existência, e pode facilitar minhas realizações e bem-estar.",
      "Ao contemplar as várias maneiras pelas quais me beneficio das contribuições de inúmeras pessoas, inclusive de estranhos, reconheço que é a presença do outro que torna a minha vida possível. Na liberdade e responsabilidade de me tornar um existente, no dever de realizar o meu projeto existencial, sou sozinho, mas é a presença do outro que me confirma na minha existência. Somos plural!",
      "De qual entrelaçamento inimaginável entre pessoas e relações dependo para que minha vida seja possível momento a momento? Refletir sobre isso me protege do isolamento e do autocentramento.",
      "> “O ser humano se torna eu pela relação com o você; à medida que me torno eu, digo você. Todo viver real é encontro.” — Martin Buber",
    ],
  },
  {
    id: "8",
    titulo: "Diálogo: a arte do encontro",
    categoria: "Reflexão",
    autores: [DALISSA, MARIA_LUIZA],
    resumo: "Uma reflexão sobre a verdadeira arte de conversar, que exige não apenas falar, mas a escuta genuína e a pausa necessária para o verdadeiro encontro.",
    conteudo: [
      "Uma das melhores coisas da vida é uma boa conversa, de preferência ao vivo!",
      "Saber dialogar é sinal de maturidade, sabedoria e liberdade para expressar nossa humanidade. Na abertura para o diálogo, nos lançamos ao encontro com o outro e com o mundo. Mas, antes, o diálogo significa saber ouvir, pois a palavra primeira que nos chega é através desse sentido. Ouvir demonstra interesse genuíno pelas pessoas, um movimento de perguntar e esperar respostas, fazer reflexões no embalo do silêncio, evitar julgamentos apressados… Para ouvir verdadeiramente alguém, é preciso fazer uma pausa, “deixar de ter boca”, como dizia Rubem Alves, e estar aberto para o outro.",
      "Nos consideramos comunicativos, escrevemos, falamos e somos até capazes de manter diversas conversas em paralelo, mas, apesar das aparências, parecemos ter esquecido como nos comunicar, no sentido mais amplo da palavra. Na maioria das vezes, os problemas relacionais são, na verdade, problemas de comunicação. Estaremos perdendo essa habilidade de troca, de semeadura de novos olhares e contextos comuns?",
      "Existem modalidades de “diálogos” que na verdade são monólogos, em que ninguém ouve de verdade, pois os interlocutores estão muito ocupados pensando na própria fala. Estabelece-se um padrão que mais parece uma competição. Em vez de ouvir com entrega e atenção, permanecem condicionados a esperar por “sua vez de falar” ou apenas “rebater argumentos” de forma agressiva. Nesses exemplos NÃO HÁ ESCUTA; consequentemente, não haverá diálogo, uma vez que o diálogo aponta para uma interação entre dois ou mais indivíduos.",
      "O diálogo é a verdadeira arte do encontro, da comunicação e da compreensão recíproca. E, por falar em encontro, disse Carl Gustav Jung: “o encontro de duas personalidades assemelha-se ao contato de duas substâncias químicas: se alguma reação ocorre, ambos sofrem uma transformação”. Entramos “lagartas” e saímos borboletas. Após uma conversa autêntica e acolhedora, não seremos mais os mesmos. Se há relação, afetamos e somos afetados pelo outro. Nesse caso, o diálogo poderá promover transformação e aprendizado.",
      "Aprender, desenvolver e praticar a arte do diálogo facilita as interações e melhora os relacionamentos. O mundo fica muito mais interessante, tolerante e humano. É também a arte do silêncio para a compreensão, do relativismo para a empatia, da coragem para a autenticidade. A arte do diálogo é feita por ideias e verdades que se deixam tocar sem qualquer medo de mudança. Somos seres relacionais, portanto, necessitamos de uma comunicação mais limpa de ruídos, mais clara e autêntica.",
      "> “A maioria das pessoas imagina que o mais importante no diálogo é a palavra. Engano: o importante é a pausa. É na pausa que duas pessoas se entendem e entram em comunhão.” — Nelson Rodrigues",
    ],
  },
  {
    id: "9",
    titulo: "Carl Rogers",
    categoria: "Biografia",
    autores: [DALISSA],
    resumo: "Um resgate histórico sobre a vida, a trajetória e o legado de Carl Ransom Rogers, o fundador da Abordagem Centrada na Pessoa.",
    conteudo: [
      "Fundador da Abordagem Centrada na Pessoa, Carl Ransom Rogers foi um dos mais influentes psicólogos americanos do século XX. No contexto da psicologia clínica, foi um dos primeiros psicólogos, em uma época em que a psicoterapia era território de médicos, a exercer a função de psicoterapeuta, e o pioneiro na pesquisa científica em psicoterapia, tendo sido o primeiro a gravar e estudar sistematicamente sessões terapêuticas. Como integrante do movimento humanista, contribuiu para a consolidação dos princípios da Psicologia Humanista, fundando uma abordagem terapêutica que acredita no potencial humano, na sua capacidade de modificar-se e atualizar-se no sentido do crescimento saudável.",
      "## Raízes: solidão, borboletas e agricultura",
      "Carl Ransom Rogers nasceu no dia 8 de janeiro de 1902, em Oak Park, nos arredores de Chicago, Estados Unidos, e cresceu numa família de fortes princípios religiosos. Diferente da maioria das famílias da redondeza, os Rogers tinham uma vida social restrita, quase exclusivamente dedicada ao trabalho. A atmosfera familiar era afetuosa, mas sem convivência profunda, o que, somado à pouca vida social, fazia o menino sentir-se solitário e refugiar-se na leitura incessante (Rogers, 2001). Quando os filhos chegaram à adolescência, a família mudou-se para uma fazenda, afastando-se ainda mais dos centros urbanos. Nesse período, Rogers interessou-se pelo estudo das borboletas noturnas e pela agricultura científica, duas atividades que, curiosamente, deixariam marcas no futuro psicólogo e pesquisador: a observação paciente dos processos de transformação e o rigor metodológico (Rogers, 2001).",
      "## Da religião à psicologia",
      "Rogers foi para a Universidade de Wisconsin estudar agricultura. Decorridos dois anos, passou a interessar-se pela religião e optou pelo sacerdócio, migrando para a história como preparação. Ainda na graduação, foi escolhido, com outros estudantes, para uma viagem à China, onde entrou em contato com religiões orientais e libertou-se da visão religiosa de seus pais (Rogers, 2001).",
      "Em 1924, ingressou no Union Theological Seminary, o seminário mais liberal da época nos Estados Unidos. Ali, junto com alguns colegas, participou da organização do que se poderia considerar o primeiro seminário centrado no grupo: um seminário sem orientador, voltado à exploração de questões de interesse dos próprios participantes. Nessa experiência, que se revelou altamente satisfatória e enriquecedora, Rogers decidiu desistir da vida religiosa para encontrar uma área em que a livre expressão fosse possível, um caminho em que pudesse compreender a si mesmo sem que Deus estivesse, obrigatoriamente, presente na caminhada (Rogers, 2001).",
      "No próprio Union, começou a frequentar as conferências de psicologia e psiquiatria que ali se iniciavam. Fez diversos cursos no Teachers College da Universidade de Colúmbia, trabalhou com filosofia da religião e, em seguida, realizou trabalhos clínicos práticos com crianças. Daí a tornar-se psicólogo foi apenas um passo, decorrente da escolha pelas atividades que lhe despertavam genuíno interesse (Rogers, 2001). Foi aceito como interno no Instituto para a Orientação da Criança, onde entrou em contato com as ideias psicanalíticas, uma visão completamente diferente das técnicas científicas rigorosas que estudara até então. Esse choque o impulsionou a buscar sua própria síntese (Rogers, 2001).",
      "## Rochester: aprendendo com a experiência",
      "Em busca de trabalho para sustentar seu doutorado, empregou-se no Child Study Department, em Rochester. Durante doze anos, trabalhou com crianças encaminhadas pelo Estado, sem condições financeiras para tratamento particular. Como não havia método pronto, seu modo de trabalhar foi sendo construído a partir da experiência, entre erros e acertos, até a conclusão que mudaria a história da psicoterapia: o melhor era deixar que o cliente desse “a direção do movimento do processo terapêutico” (Rogers, 2001, p. 13).",
      "Naquela época, foi percebendo que seu trabalho se afastava das atividades típicas da psicologia, cheias de regras e métricas, e se aproximava da assistência social. Chegou a duvidar de que fosse um psicólogo, mas seguiu deixando-se guiar pela própria experiência, independentemente dos colegas e do grupo. Começou a lecionar no curso de Sociologia sobre o tratamento de crianças-problema; depois, na Pedagogia e, mais tarde, no Instituto de Psicologia de Rochester. Nessa época, teve seus dois filhos, o que, segundo ele, ensinou-lhe muito sobre o indivíduo, seu desenvolvimento e suas relações.",
      "## O nascimento de uma nova psicoterapia",
      "Em 1939, publicou sua primeira obra, The Clinical Treatment of the Problem Child, e, no ano seguinte, tornou-se professor efetivo na Universidade Estadual de Ohio. No contato com os estudantes, percebeu o quanto havia desenvolvido, ao longo dos anos de prática, uma perspectiva própria de trabalho (Rogers, 2001). Mas só teve consciência da originalidade do seu pensamento quando confrontado com as reações à conferência que proferiu na Universidade de Minnesota, em 11 de dezembro de 1940, data considerada o marco de nascimento da terapia centrada no cliente. Nesse dia, Rogers tornou pública sua proposta de um novo modelo de psicoterapia, cujo objetivo principal era contribuir com o processo de crescimento das pessoas, e não apenas solucionar um problema em particular.",
      "Acreditando ter algo a comunicar, escreveu em 1942 seu segundo livro, Counseling and Psychotherapy, o primeiro sobre o aconselhamento centrado no cliente. No início, a obra deixou o editor em dúvida quanto à demanda, mas se tornou um sucesso de vendas (Rogers, 2001).",
      "Rogers construiu seu diferencial sustentado em quatro pilares: a existência de uma tendência individual ao crescimento e à saúde; a ênfase nos elementos emocionais, em detrimento dos intelectuais; a priorização do presente, em detrimento do passado; e o reconhecimento do papel da relação terapêutica na experiência de crescimento. Em defesa da ideia de que a personalidade humana tende à saúde e ao bem-estar, desenvolveu atitudes facilitadoras que permitem o resgate do potencial realizador existente em todo ser humano. Sua proposta transfere a importância da técnica para as atitudes do terapeuta, prioriza a capacidade do cliente de atualizar suas potencialidades e valoriza, enfim, a potencialidade terapêutica da relação.",
      "## Da terapia centrada no cliente à Abordagem Centrada na Pessoa",
      "A partir de 1940, verifica-se a consolidação e a evolução de suas ideias em inúmeras publicações, entre livros e artigos científicos. Dos dezesseis livros publicados, destacam-se Terapia Centrada no Cliente (1951), Tornar-se Pessoa (1961) e Um Jeito de Ser (1980). Em Terapia Centrada no Cliente, desenvolve de forma mais completa as ideias apresentadas inicialmente, reconhecendo que seus princípios podem ser aplicados a outros campos (Rogers, 2005).",
      "A partir do final da década de 1960, radicado na Califórnia, no Center for Studies of the Person, Rogers ampliou sua proposta para além do consultório: sua filosofia passou a ser compreendida não apenas como um modelo de psicoterapia, mas como uma abordagem eficaz em todas as relações humanas, sejam elas de ajuda, pedagógicas, pessoais ou políticas, dando origem ao que se consagrou como Abordagem Centrada na Pessoa. Nesse período, dedicou-se intensamente ao trabalho com grupos e à convicção de que sua proposta poderia contribuir com a sociedade como um todo, na resolução de conflitos internacionais e na busca pela paz.",
      "## Últimos anos",
      "Nos últimos anos de vida, principalmente após a morte de sua esposa, Helen, Rogers desenvolveu maior interesse pela dimensão espiritual do ser humano, num espírito de liberdade e tolerância, guardando sua confiança num futuro melhor, sem ignorar o sofrimento que faz parte de nossas trajetórias.",
      "Em 1987, seu nome foi indicado ao Prêmio Nobel da Paz, poucos dias antes de sua morte, na cidade de La Jolla, Califórnia, em 4 de fevereiro de 1987. Envelheceu como viveu: crescendo.",
      "> “Descobri que sou mais eficaz quando posso ouvir a mim mesmo aceitando-me, e quando posso ser eu mesmo. (…) Julgo que aprendi isto com meus clientes, bem como através da minha experiência pessoal: não podemos mudar, não podemos nos afastar do que somos enquanto não aceitarmos profundamente o que somos.” — Carl Rogers",
      "## Referências",
      "ROGERS, C. R. Tornar-se pessoa. 5. ed. Tradução de Manuel José do Carmo Ferreira e Alvamar Lamparelli. São Paulo: Martins Fontes, 2001.",
      "ROGERS, C. R. Um jeito de ser. Tradução de Maria Cristina Machado Kupfer, Heloísa Lebrão e Yone Souza Patto. São Paulo: E.P.U., 2005.",
      "ROGERS, C. R.; ROSENBERG, R. L. A pessoa como centro. São Paulo: E.P.U., 1977."
    ],
  },
  {
    id: "10",
    titulo: "A vida não cabe em caixas",
    categoria: "Reflexão",
    autores: [DALISSA],
    resumo: "Uma reflexão sobre a efemeridade da vida, os objetos que deixamos para trás e as verdadeiras marcas que não podem ser encaixotadas.",
    conteudo: [
      "Moro em um bairro de Belo Horizonte onde a presença dos mais velhos desenha a paisagem cotidiana, e, sempre que o tempo permite, gosto de trocar um papo ou outro. No meu caminhar diário, indo ao mercado, à frutaria, às lojinhas locais, aprendi a reconhecer que cada rua é feita também das histórias de quem a habita.",
      "De uns tempos para cá, percebo que algo se repete diante dos prédios: caixas organizadas nas calçadas, repletas dos mais variados objetos. Revistas, fotografias, pequenas esculturas, medalhas, potes… fragmentos de uma vida.",
      "Alguém sempre comenta: “É de fulana, que se foi.” E esse “se foi” pode significar tanta coisa… mudou de casa, foi morar com os filhos, foi para uma instituição, ou simplesmente partiu deste mundo. Partiu.",
      "Essas caixas me detêm. Paro por um instante e deixo que minha curiosidade olhe para elas como quem contempla um retrato. Penso em como uma vida inteira poderia se resumir naqueles recipientes de papelão, mas também em como não cabe. Porque o que realmente fica — o jeito de ser, o gesto, a palavra, o toque, a presença; aquilo que se viveu e sentiu — não se encaixota.",
      "Talvez seja porque a vida, no fundo, não caiba nas coisas. O que nos ocupa mais profundamente não é palpável: a forma como alguém nos afetou, a palavra que nos sustentou, a emoção que se experimentou, a presença que nos aqueceu e acolheu.",
      "As caixas apenas nos lembram de que estamos por aqui de passagem. O que permanece é o modo como habitamos o nosso mundo e o mundo do outro. São essas marcas que permanecem vivas, mesmo quando já não estamos mais.",
      "E talvez seja por isso que o importante seja viver buscando ocupar os verdadeiros espaços, aqueles que não podem ser encaixotados, mas vividos, sentidos e compartilhados."
    ],
  },
  {
    id: "11",
    titulo: "O Envelhecer e a Solidão: Quando a Memória se Dissolve no Tempo",
    categoria: "Envelhecimento",
    autores: [DALISSA],
    resumo: "Uma reflexão sensível sobre o envelhecimento, o Alzheimer e a importância da presença genuína para dissolver a solidão e honrar a dignidade de quem amamos.",
    conteudo: [
      "Gene Hackman, um dos grandes nomes do cinema, partiu recentemente. Seus últimos dias foram marcados por um silêncio melancólico, pela sombra do Alzheimer e por uma solidão que nos faz refletir sobre o envelhecimento em nossa sociedade. “Era como se vivesse em um filme que se repetia”, disseram aqueles que acompanharam seus derradeiros anos.",
      "A frase, carregada de dor e poesia, traduz a experiência de tantas pessoas que convivem com o Alzheimer e outras formas de demência. Para quem está do lado de fora, a vida parece presa a um ciclo de repetições: as mesmas perguntas, os mesmos relatos, a perda gradual da identidade tal como a conhecemos. Para quem está do lado de dentro, o mundo pode tornar-se um emaranhado de sensações desconexas, onde o passado se mistura ao presente e o futuro se desfaz antes mesmo de chegar.",
      "E a solidão, esse fio quase invisível, vai se entranhando na trama do envelhecimento. Muitas vezes, ela se disfarça no zelo de quem cuida, na pressa de quem visita, na ausência de quem já não vem. Outras vezes, surge como um eco interno, quando o mundo ao redor se desfaz em lembranças esmaecidas e o próprio rosto no espelho já não traz o mesmo reconhecimento.",
      "Na Abordagem Centrada na Pessoa, acreditamos que, mesmo diante da perda cognitiva e das limitações impostas pelo envelhecimento, a essência da pessoa continua presente. A tendência atualizante permanece atuante enquanto há vida. Para além das histórias, afetos, dores e desejos que merecem ser reconhecidos e considerados, precisamos frequentemente nos lembrar de que a pessoa é mais do que seu diagnóstico, mais do que qualquer limitação.",
      "Mas como podemos desenvolver um olhar mais cuidadoso e acolhedor para aqueles que vivem esse processo?",
      "Primeiro, é essencial reconhecermos que cada um de nós também é passagem e transcendência, que estamos todos envelhecendo, e que é importante abrir espaço para abordarmos a temática do envelhecimento e da morte com mais naturalidade. Afinal, vida e morte fazem parte da existência.",
      "Outro aspecto importante é rompermos com o abandono emocional que tantas vezes acompanha o envelhecimento. Não basta oferecer cuidado físico; é necessário olhar nos olhos, escutar com presença, validar emoções, mesmo quando as palavras e o tempo se perdem.",
      "Também é fundamental que a pessoa seja reconhecida como sujeito e não apenas como portadora de uma doença. Esse reconhecimento é essencial, não apenas pela família, mas também pelas pessoas que oferecem suporte. A solidão se dissolve quando há presença genuína, quando alguém segura a mão e diz: “estou aqui”. Os vínculos podem ser cultivados para que a existência continue significativa, mesmo que momento a momento, até o último dia. Afinal, quem somos nós sem as relações que nos nutrem?",
      "O fim da vida, como disse Rogers, pode ser uma “abertura à experiência”. E, apesar das limitações e desafios que cada qual experimente, pode ser vivido com respeito, presença e dignidade.",
      "A história de Gene Hackman nos lembra da fragilidade da memória e da urgência do afeto. Que possamos ser presença na vida dos que envelhecem ao nosso lado, não apenas como cuidadores, mas como testemunhas de sua história, como guardiões de sua humanidade."
    ],
  },
];

export function getArtigoPorId(id: string): Artigo | undefined {
  return ARTIGOS.find((artigo) => artigo.id === id);
}

// Nomes para exibição: curto ("Dalissa e Maria") ou completo ("Dalissa Vieira Teixeira e Maria Luiza Rocha de Andrade").
export function nomesAutores(artigo: Artigo, completo = false): string {
  return artigo.autores.map((autor) => (completo ? autor.nomeCompleto : autor.nome)).join(" e ");
}
