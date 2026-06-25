"use client";

import { motion, type Variants } from "framer-motion";
import { Calendar } from "lucide-react";

type Evento = {
  id: string;
  data: string;
  titulo: string;
  descricao: string;
  badge: string;
};

const EVENTOS: Evento[] = [
  {
    id: "inauguracao",
    data: "Jun 2025",
    titulo: "Inauguração da Casa ACP",
    descricao: "Um começo que acontece primeiro por dentro",
    badge: "Casa",
  },
  {
    id: "plantao",
    data: "Em breve",
    titulo: "Plantão Psicológico na Praça",
    descricao: "Escuta ao céu aberto · Belo Horizonte",
    badge: "Jardim",
  },
  {
    id: "estudos",
    data: "Em breve",
    titulo: "Grupo de Estudos ACP — 1ª turma",
    descricao: "Formação, aprofundamento e partilha",
    badge: "Estudos",
  },
  {
    id: "hospedes",
    data: "Em breve",
    titulo: "Primeiro Ciclo de Hóspedes",
    descricao: "Chamada para colegas da abordagem",
    badge: "Hóspedes",
  },
];

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function VarandaSection() {
  return (
    <section id="varanda" className="bg-creme py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* ── Coluna Esquerda: Texto ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col"
          >
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              A Varanda
            </p>
            <h2 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl">
              O que está em <br /> movimento
            </h2>
            
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
            
            <p className="mt-8 font-lato text-base leading-[1.9] text-marrom md:text-lg">
              A varanda é onde a vida da Casa aparece para quem passa. Eventos,
              encontros, novidades, convites — o que está em movimento por aqui.
            </p>
          </motion.div>

          {/* ── Coluna Direita: Agenda de Eventos ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-6"
          >
            {EVENTOS.map((evento) => (
              <motion.div
                key={evento.id}
                variants={itemVariants}
                className="group relative flex flex-col justify-between gap-4 rounded-2xl bg-bege p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:flex-row sm:items-center sm:gap-6"
              >
                {/* Indicador de Data */}
                <div className="flex w-32 shrink-0 items-center gap-2 text-terracota">
                  <Calendar className="h-4 w-4" />
                  <span className="font-lato text-sm font-bold uppercase tracking-wider">
                    {evento.data}
                  </span>
                </div>

                {/* Conteúdo (Título e Descrição) */}
                <div className="flex-1">
                  <h3 className="font-playfair text-xl font-medium text-marrom transition-colors group-hover:text-terracota">
                    {evento.titulo}
                  </h3>
                  <p className="mt-1 font-lato text-sm leading-relaxed text-marrom/80">
                    {evento.descricao}
                  </p>
                </div>

                {/* Badge da Categoria */}
                <div className="shrink-0 pt-2 sm:pt-0">
                  <span className="inline-flex items-center rounded-full bg-salvia/10 px-3 py-1 font-lato text-[11px] font-semibold uppercase tracking-widest text-salvia">
                    {evento.badge}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}