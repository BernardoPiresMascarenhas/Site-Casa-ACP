"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Armchair,
  Heart,
  BookOpen,
  Castle,
  Tv,
  DoorOpen,
  Bed,
  Sprout,
  CookingPot ,
  type LucideIcon,
} from "lucide-react";

type Comodo = {
  nome: string;
  subtitulo: string;
  destaque: string;
  descricao: string;
  rota: string;
  icon: LucideIcon;
};

const COMODOS: Comodo[] = [
  {
    nome: "Sala de Estar",
    subtitulo: "Quem cuida desta casa",
    destaque: "Entre, tome um café",
    descricao:
      "Conheça Dalissa, Eveline, Hanna e Lilian — as vozes e mãos desta Casa.",
    rota: "/comodos/sala-de-estar",
    icon: Armchair,
  },
  {
    nome: "Sala da Escuta",
    subtitulo: "Cuidado clínico e presença",
    destaque: "Espaços de cuidado",
    descricao:
      "Atendimento psicológico · Clínica Social · Plantão Psicológico.",
    rota: "/comodos/sala-da-escuta",
    icon: Heart,
  },
  {
    nome: "Sala de Estudos",
    subtitulo: "Formação e aprofundamento",
    destaque: "Formação em ACP",
    descricao:
      "Rodas de conversa · seminários · grupos de estudo · cursos · supervisões.",
    rota: "/comodos/sala-de-estudos",
    icon: BookOpen,
  },
  {
    nome: "Jardim",
    subtitulo: "Ao céu aberto",
    destaque: "Escuta na praça",
    descricao:
      "Plantão Psicológico · rodas de conversa · ações comunitárias.",
    rota: "/comodos/jardim",
    icon: Sprout,
  },
  {
    nome: "Quarto de Brincar e Crescer",
    subtitulo: "Infância e adolescência",
    destaque: "Cuidado com famílias",
    descricao:
      "Atendimento infantil e adolescente · acolhimento a pais · rodas com famílias.",
    rota: "/comodos/quarto-de-brincar",
    icon: Castle,
  },
  {
    nome: "Cozinha Literária",
    subtitulo: "Textos e reflexões",
    destaque: "Onde o pensamento fermenta",
    descricao:
      "Textos autorais · artigos · reflexões sobre ACP · dicas de leitura.",
    rota: "/comodos/cozinha-literaria",
    icon: CookingPot,
  },
  {
    nome: "Sala Multimídia",
    subtitulo: "YouTube e podcast",
    destaque: "Vozes da Casa",
    descricao:
      "Conteúdo audiovisual sobre ACP, encontros e travessias humanas.",
    rota: "/comodos/sala-de-tv",
    icon: Tv,
  },
  {
    nome: "Varanda",
    subtitulo: "Agenda e novidades",
    destaque: "O que está em movimento",
    descricao:
      "Eventos · convites · parceiros · movimentos das integrantes.",
    rota: "/comodos/varanda",
    icon: DoorOpen,
  },
  {
    nome: "Quarto de Hóspedes",
    subtitulo: "Vozes convidadas",
    destaque: "Residências temporárias",
    descricao:
      "Colegas que habitam a Casa por um ciclo — contribuem, partilham e partem.",
    rota: "/comodos/quarto-de-hospedes",
    icon: Bed,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25, delayChildren: 0.2 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function GradeDeComodos() {
  return (
    <section id="comodos" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <motion.p
          className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        >
          Os Cômodos da Casa
        </motion.p>
        <motion.h2
          className="mt-5 max-w-xl font-playfair text-3xl leading-tight text-marrom md:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
        >
          Cada ambiente abriga uma forma de cuidado.
        </motion.h2>

        {/* Grade 3×3 no desktop, coluna única no mobile */}
        <motion.div
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
        >
          {COMODOS.map((comodo) => (
            <motion.div key={comodo.rota} variants={item}>
            <Link
              href={comodo.rota}
              className="group relative flex flex-col overflow-hidden rounded-xl bg-creme border border-marrom/5 shadow-sm transition-all hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota md:min-h-[260px]"
            >
              {/* ── Topo: ícone + nome + subtítulo (sempre visível) ── */}
              <div className="flex flex-1 flex-col p-6">
                <comodo.icon
                  className="mb-4 h-10 w-10 text-salvia"
                  aria-hidden="true"
                />
                <h3 className="font-playfair text-lg text-marrom">
                  {comodo.nome}
                </h3>
                <p className="mt-1 font-lato text-sm font-normal text-marrom/70">
                  {comodo.subtitulo}
                </p>
              </div>

              {/*
                ── Painel sálvia (destaque + descrição) ──
                Mobile  : fica no fluxo, logo abaixo do título → sempre visível.
                Desktop : vira overlay ancorado no fundo (bottom-0), escondido abaixo da base,
                          e desliza parcialmente para cima no hover do card.
              */}
              <div
                className="bg-salvia p-6 text-creme md:absolute md:inset-x-0 md:bottom-0 md:flex md:translate-y-full md:flex-col md:transition-transform md:duration-300 md:ease-out md:group-hover:translate-y-0 md:motion-reduce:transition-none"
              >
                <p className="font-lato font-semibold leading-snug">
                  {comodo.destaque}
                </p>
                <p className="mt-2 font-lato text-sm font-normal leading-relaxed text-creme/90">
                  {comodo.descricao}
                </p>
              </div>
            </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}