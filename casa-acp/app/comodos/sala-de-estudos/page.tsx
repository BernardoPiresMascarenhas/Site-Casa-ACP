"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProximoEncontro } from "@/components/ProximoEncontro";
import { CONTEUDOS } from "@/lib/salaDeEstudos";

export default function SalaDeEstudosPage() {
  return (
    <main className="min-h-screen bg-creme pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#comodos" 
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para os Cômodos
          </Link>
        </motion.div>

        {/* ── Cabeçalho e Introdução ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col items-center text-center">
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sala de Estudos
            </p>
            <h1 className="mt-4 max-w-4xl font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Formação, aprofundamento e partilha em Psicologia Humanista
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Sala de Estudos */}
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/Sala de estudos.webp"
                alt="Sala de Estudos da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                Na Sala de Estudos, o conhecimento é cultivado pelo encontro, pelo diálogo e pela reflexão
                compartilhada.
              </p>
              <p>
                Esta sala abriga cursos, grupos de estudo, seminários e outras experiências formativas que
                integram teoria, prática e vivência, e que potencializam uma formação profissional centrada
                na pessoa.
              </p>
              <p className="font-playfair text-xl italic text-terracota">
                Um cultivo que fortalece uma atuação alicerçada na ética do cuidado e na escuta sensível.
              </p>
            </div>
          </div>
        </motion.section>

        <ProximoEncontro slug="sala-de-estudos" accent="salvia" />

        {/* ── Grade de Conteúdos ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {CONTEUDOS.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-marrom/5 hover:shadow-md transition-shadow"
            >
              <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${item.bgClass} ${item.colorClass}`}>
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-4 font-playfair text-2xl text-marrom">{item.titulo}</h3>
              <p className="mb-6 font-lato text-sm md:text-base leading-[1.8] text-marrom/80">
                {item.resumo}
              </p>
              <Link
                href={`/comodos/sala-de-estudos/${item.slug}`}
                className={`mt-auto inline-flex items-center gap-2 font-lato text-sm font-semibold ${item.colorClass} transition-all hover:gap-3`}
              >
                Saiba mais
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ))}
        </motion.section>

      </div>
    </main>
  );
}