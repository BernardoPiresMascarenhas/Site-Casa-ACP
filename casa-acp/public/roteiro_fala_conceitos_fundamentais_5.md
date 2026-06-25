# Roteiro de Fala — Conceitos Fundamentais (Slides 6 a 11)
### Versão simples e explicativa

**Como usar:** texto para *falar*, não para ler. Como o slide é enxuto, é a sua fala que explica os termos — e já está tudo embutido aqui, com exemplos do dia a dia. Onde tiver `(pausa)`, segure meio segundo.

**Sua parte abre a seção e entrega para o Benchmark (slide 12).**

---

## Slide 6 — Conceitos Fundamentais *(sua abertura)*

> Antes de mostrar os números, eu preciso explicar cinco ideias básicas. Elas são a fundação do artigo: `(pausa)` se ficarem claras agora, todo o resto da apresentação fica fácil de acompanhar. Vou explicar cada uma com exemplos simples.

*Avance o slide.*

---

## Slide 7 — Servidor Físico e Bare Metal

> A primeira ideia é o **bare metal**. Bare metal, ou "metal nu", é quando o programa roda direto no hardware do computador, sem nada no meio. É o jeito mais rápido possível de rodar qualquer coisa — não tem ninguém roubando desempenho no caminho. `(pausa)` Por isso o artigo usa o bare metal como referência: ele é o **100%**, a nota máxima. Toda vez que eu disser "perdeu tantos por cento de desempenho", é sempre comparando com esse 100% do bare metal.
>
> Do lado direito está a **configuração da máquina** usada no experimento. Três coisas importam aqui: ela tem **16 núcleos** de processamento — que, com uma tecnologia chamada hyperthreading, se comportam como 32; tem **96 GB de memória RAM**; e usa um programa de virtualização chamado **KVM**. Tem ainda duas regiões de memória, os **nós NUMA** — esse nome vai voltar lá no fim, então só guardem ele por enquanto.

*Transição:* "E o que permite dividir essa máquina física em várias? A virtualização."

---

## Slide 8 — Virtualização e o Hypervisor

> A segunda ideia é a **virtualização**. Virtualizar é pegar um servidor físico — um computador potente — e dividir ele em vários computadores menores e independentes, que repartem o mesmo hardware. Cada pedacinho desses funciona como se fosse uma máquina separada.
>
> Quem faz e controla essa divisão é um programa chamado **hypervisor**. No experimento, é o KVM, que apareceu no slide anterior. `(pausa)` Pensem no hypervisor como um **síndico**: ele decide quem usa qual recurso e quando.
>
> E aqui está o problema — esse em vermelho no slide: ter esse síndico no meio custa tempo. Toda vez que uma máquina virtual quer usar o hardware, o pedido passa pelo hypervisor primeiro. Isso gera um **pequeno atraso**, e esse atraso tem nome: **overhead de virtualização**. O artigo inteiro é uma busca por reduzir esse overhead.

*Transição:* "Mas existe mais de um jeito de virtualizar — e a diferença entre eles é o coração do artigo."

---

## Slide 9 — Máquinas Virtuais e Containers *(o mais importante)*

> A terceira ideia é a diferença entre **máquina virtual** e **container**. Vou usar uma comparação com moradia pra ficar claro.
>
> Primeiro, dois termos rápidos. O **servidor host** é a máquina física de verdade, aquela que hospeda tudo — "host" quer dizer anfitrião. E o **kernel** é o núcleo do sistema operacional: é a parte que conversa direto com o hardware, que controla a memória, o processador e o disco. `(pausa)` Na comparação com um prédio: o host é o **prédio inteiro**, e o kernel é a **infraestrutura dele** — o encanamento e a parte elétrica.
>
> A **máquina virtual** é como alugar um **apartamento completo**. Ela tem o próprio sistema operacional inteiro, só dela. Por isso tem **isolamento forte**: se der um problema dentro de uma VM — uma falha, um programa travando, uma invasão — esse problema fica preso ali e não afeta as outras, porque cada apartamento tem encanamento e elétrica próprios. A desvantagem é que isso é pesado.
>
> O **container** é como alugar um **quarto num apartamento compartilhado**. Em vez de ter sistema operacional próprio, ele **compartilha o kernel** da máquina física — usa o encanamento e a elétrica do prédio junto com os outros. Isso deixa ele muito mais leve e rápido. Em troca, ele separa só o essencial: o programa que está rodando e os arquivos que esse programa precisa, e nada mais. O isolamento é mais fraco, porque a estrutura por baixo é compartilhada. As ferramentas mais usadas são o **Docker** e o **LXC**.

*Transição:* "Colocando os dois lado a lado, fica mais fácil ver onde cada um ganha e perde."

---

## Slide 10 — Comparação: VM x Container *(tabela)*

> Essa tabela junta tudo lado a lado. Reparem nas diferenças: a VM tem sistema próprio, pesa gigabytes e demora minutos pra ligar; o container compartilha o kernel, pesa megabytes e liga em segundos. Como acabei de explicar, o isolamento é forte na VM e mais fraco no container. E a VM precisa do hypervisor; o container não.
>
> A linha mais importante é a do **overhead** — a perda de desempenho. `(pausa)` A VM perde mais, de 5 a 17%; o container perde menos, de 2 a 13%. Guardem isso, porque é uma prévia da conclusão do artigo: o container chega mais perto do bare metal, simplesmente porque tem menos camadas no caminho.

*Transição:* "Por último, falta o lugar onde tudo isso roda: a nuvem."

---

## Slide 11 — Cloud Computing e OpenStack *(seu fechamento)*

> A última ideia é a **nuvem**. Computação em nuvem é usar computadores de outra pessoa pela internet, pagando só pelo que usar — em vez de comprar e manter os seus.
>
> A vantagem principal é a **elasticidade**. Cada máquina virtual ou container que está rodando se chama **instância**. Elasticidade é poder criar e destruir essas instâncias na hora: `(pausa)` precisou de mais poder de processamento, você sobe mais instâncias; terminou o trabalho, você derruba e para de gastar.
>
> E o programa que organiza tudo isso é o **OpenStack**. Duas características dele: é uma **nuvem privada** — montada e usada só pela própria instituição, não aberta ao público como a Amazon ou a Google; e é **open source**, que quer dizer **código aberto e gratuito** — qualquer um pode ver, usar e modificar, sem pagar licença. É o OpenStack que cria e gerencia as VMs e os containers em cima das máquinas físicas.
>
> Com essas cinco ideias na mão — bare metal, virtualização, máquina virtual, container e nuvem — `(pausa)` a próxima parte mostra **como** o desempenho de tudo isso foi medido: com o benchmark HEPSPEC06.

*(Olhe para quem assume a próxima seção ao dizer a última frase.)*

---

## Glossário que você explica falando (resumo)

| Termo | Como você explica na hora |
|---|---|
| Bare metal | rodar direto no hardware, sem nada no meio — é o 100% |
| Hypervisor | o "síndico" que divide a máquina; introduz o overhead |
| Host | a máquina física real (o "prédio") |
| Kernel | núcleo do SO que fala com o hardware (a "infraestrutura do prédio") |
| VM | apartamento completo — isolamento forte, mas pesado |
| Container | quarto compartilhado — leve, mas isolamento mais fraco |
| Instância | uma VM/container ligada e rodando |
| Open source | código aberto e gratuito |

---

## Três dicas de entrega

1. **As analogias são suas âncoras.** Síndico (slide 8) e apartamento/quarto (slide 9) carregam a explicação inteira. Diga-as devagar.
2. **"Overhead" é o fio condutor.** Aparece nos slides 8 e 10 — repetir com firmeza mostra que você domina o tema.
3. **Na tabela do slide 10, não leia célula por célula.** Conte a história (VM pesada vs. container leve) e aponte só a linha do overhead.

**Tempo estimado:** ~6 a 7 minutos. Se precisar encurtar, corte as glosas dos termos que a outra pessoa já tiver explicado antes.
