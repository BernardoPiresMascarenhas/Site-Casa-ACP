"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProximoEncontro } from "@/components/ProximoEncontro";
import { TOPICOS_JARDIM } from "@/lib/jardim";

export default function JardimPage() {
  return (
    <main className="min-h-screen bg-creme pt-40 pb-24 overflow-hidden relative">
      
      {/* Elementos decorativos de fundo simulando "ar livre" e "folhas" */}
      <div className="absolute top-40 -right-32 h-96 w-96 rounded-full bg-salvia/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-20 -left-32 h-80 w-80 rounded-full bg-terracota/5 blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#comodos" 
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-salvia"
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
              Jardim
            </p>
            <h1 className="mt-4 max-w-3xl font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Ações de escuta e encontro ao céu aberto.
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-salvia/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto do Jardim */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-salvia/10 shadow-sm md:w-1/2">
              <Image
                src="/Jardim.webp"
                alt="Jardim da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                O jardim da Casa ACP cresce para além das paredes. São práticas que habitam a praça, a rua, a
                comunidade, porque a escuta também floresce sob o sol.
              </p>
              <p>
                Aqui você encontra o Plantão Psicológico na Praça, escuta aberta, disponível a quem chega. Rodas
                de conversa ao ar livre, com temas que pedem espaço e vento. Ações que levam cuidado para a cidade.
              </p>
              <p className="pt-4 font-playfair text-xl italic text-salvia md:text-2xl">
                A Casa se estende para além dos muros, até onde a escuta alcançar.
              </p>
            </div>
          </div>
        </motion.section>

        <ProximoEncontro slug="jardim" accent="salvia" />

        {/* ── Cards de Ações ao Ar Livre ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {TOPICOS_JARDIM.map((topico, index) => (
            <motion.div
              key={topico.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-3xl bg-white p-8 shadow-sm border border-salvia/10 transition-all hover:shadow-md hover:border-salvia/30"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-salvia/10 text-salvia transition-colors group-hover:bg-salvia group-hover:text-white">
                <topico.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 font-playfair text-2xl text-marrom">{topico.titulo}</h3>
              <p className="mb-6 font-lato text-base leading-[1.8] text-marrom/80">
                {topico.resumo}
              </p>
              <Link
                href={`/comodos/jardim/${topico.slug}`}
                className="mt-auto inline-flex items-center gap-2 font-lato text-sm font-semibold text-salvia transition-all hover:gap-3"
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