# Slides 6 a 11 — Texto revisado (para colar no deck existente)

**Princípio:** glosa curta no slide, explicação na fala. Nada de parágrafo na tela.
As mudanças estão marcadas com → . O que não aparece aqui, mantenha como está.

---

## Slide 6 — Conceitos Fundamentais *(divisor)*

Adicionar um subtítulo curto, só pra orientar a plateia sobre o que vem:

→ **Subtítulo:** "Bare metal, virtualização, VMs, containers e nuvem — a base para entender os resultados."

---

## Slide 7 — Servidor Físico e Bare Metal

**Antes:**
- Bare metal: execução direta no hardware, sem camadas de abstração. É o teto de desempenho;

**Depois:**
- → Bare metal: o programa roda **direto no hardware, sem virtualização no meio**. É o teto de desempenho (referência de 100%);
- Referência máxima usada em todas as comparações do artigo; *(mantém)*

**Tabela:** na linha "Núcleos Físicos", trocar para deixar o HT correto:
- → **Núcleos:** 16 físicos (32 lógicos com HT)

*(HT não cria núcleo físico, só lógico — assim ninguém te corrige na banca.)*

---

## Slide 8 — Virtualização e o Hypervisor

**Antes:**
- Hypervisor (KVM): software que gerencia essa divisão.
- *(vermelho)* O uso do Hypervisor introduz latência (overhead de virtualização)

**Depois:**
- → Hypervisor (KVM): software que **fica entre o hardware e as máquinas virtuais** e gerencia essa divisão;
- → *(vermelho)* O hypervisor introduz um **pequeno atraso** — é o **overhead de virtualização**

*(Trocar "latência" por "atraso" — mesma ideia, palavra que todo mundo entende.)*

---

## Slide 9 — Máquinas Virtuais e Containers *(o mais importante)*

**Coluna VM — antes:**
- Isolamento forte: cada VM é independente das demais, mesmo compartilhando o mesmo hardware físico;

**Coluna VM — depois:**
- Computador completo simulado, com **sistema operacional próprio** e vCPUs alocadas; *(mantém)*
- → **Isolamento forte:** cada VM é independente — um problema numa VM não afeta as outras;
- Roda sobre um hypervisor, que traduz seus pedidos para o hardware real; *(mantém)*

**Coluna Container — antes:**
- Compartilha o kernel do sistema operacional do host, sem simular hardware completo;
- Isola apenas processos e dependências da aplicação;

**Coluna Container — depois:**
- → Compartilha o **kernel** (o núcleo do SO que controla o hardware) da **máquina física**, sem simular hardware completo;
- → **Isola só o programa em execução e seus arquivos** — não uma máquina inteira;
- Tecnologias mais usadas: Docker e LXC; *(mantém)*

*(Duas glosas curtas resolvem: "kernel" ganha 6 palavras de definição, e "host" vira "máquina física". O resto você explica falando.)*

---

## Slide 10 — Comparação: VM x Container *(tabela)*

Na linha **Isolamento**, deixar a glosa coerente com o slide 9:

**Antes:** Forte (hardware separado) | Moderado (processos separados)

**Depois:** → Forte (cada VM é isolada) | Moderado (kernel compartilhado)

*(O resto da tabela está claro. Não precisa mexer.)*

---

## Slide 11 — Cloud Computing e OpenStack

**Antes:**
- Elasticidade: VMs e containers são criados e destruídos dinamicamente conforme a necessidade do workload científico;
- OpenStack: plataforma de nuvem privada open source usada para orquestrar VMs e contêineres no experimento;

**Depois:**
- → **Elasticidade:** as VMs e containers (**instâncias**) são criados e destruídos conforme a necessidade — sobe quando precisa de mais poder, derruba quando termina;
- → **OpenStack:** plataforma de **nuvem privada** (usada só pela instituição, não pelo público) e **open source** (código aberto e gratuito), que **cria e gerencia** as VMs e containers no experimento;

*(Trocas: "orquestrar" → "criar e gerencia"; glosa em "privada", "open source" e "instâncias".)*

---

## Resumo das glosas adicionadas

| Termo | Glosa curta no slide |
|---|---|
| kernel | núcleo do SO que controla o hardware |
| host | máquina física |
| instância | a VM/container em execução |
| open source | código aberto e gratuito |
| nuvem privada | usada só pela instituição |
| HT (núcleos) | 16 físicos / 32 lógicos |

Tudo o mais — o aprofundamento de cada conceito — continua na sua fala, não no slide.
