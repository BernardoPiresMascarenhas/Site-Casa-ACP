"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { agendaOrdenadaPorData } from "@/lib/agenda";

const AGENDA = agendaOrdenadaPorData();

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

            {/* Botão extra para Desktop */}
            <div className="hidden lg:block mt-12">
              <Link
                href="/comodos/varanda"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-terracota/40 bg-transparent px-8 py-3.5 font-lato text-sm font-medium text-terracota transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota/5 hover:shadow-sm"
              >
                Visitar a Varanda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>

          {/* ── Coluna Direita: Agenda de Eventos ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-6"
          >
            {AGENDA.map((evento) => (
              <motion.div
                key={evento.id}
                variants={itemVariants}
                className="group relative flex items-center gap-4 rounded-2xl bg-bege p-6 shadow-sm transition-all duration-300 hover:shadow-md sm:gap-6"
              >
                <div className="flex-1">
                  {/* Indicador de Data */}
                  <div className="mb-1 flex items-center gap-2 text-terracota">
                    <Calendar className="h-4 w-4" />
                    <span className="font-lato text-sm font-bold uppercase tracking-wider">
                      {evento.data}
                    </span>
                  </div>

                  {/* Tópico do Evento */}
                  <h3 className="font-playfair text-xl font-medium text-marrom transition-colors group-hover:text-terracota">
                    {evento.titulo}
                  </h3>
                </div>

                {/* Redireciona para a página do evento, quando houver, senão para o cômodo */}
                <Link
                  href={evento.detalhes ? `/comodos/varanda/agenda/${evento.id}` : `/comodos/${evento.origemSlug}`}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-marrom/5 text-marrom transition-all group-hover:bg-terracota group-hover:text-white"
                  aria-label={evento.detalhes ? `Ver detalhes do evento ${evento.titulo}` : `Ver o cômodo ${evento.origem}`}
                >
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}

            {/* Botão para Mobile */}
            <motion.div variants={itemVariants} className="block lg:hidden pt-6">
              <Link
                href="/comodos/varanda"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-terracota/40 bg-transparent px-8 py-3.5 font-lato text-sm font-medium text-terracota transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota/5 hover:shadow-sm"
              >
                Visitar a Varanda
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}