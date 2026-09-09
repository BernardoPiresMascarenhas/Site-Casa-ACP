"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Clock, ArrowLeft, ArrowRight, Shield, Users, Sparkles } from "lucide-react";

export default function SalaDaEscutaPage() {
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
              Sala da Escuta
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Espaços de cuidado e presença
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Sala da Escuta */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/saladeescuta.webp"
                alt="Sala da Escuta da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                A Sala da Escuta habita as modalidades de cuidado psicológico que a Casa oferece.
                Neste cômodo, o tempo funciona de outro jeito. Aqui, cada pessoa pode chegar no seu
                tempo e do seu jeito.
              </p>
              <p>
                Escuta qualificada, ética e pautada na Abordagem Centrada na Pessoa, para que cada
                pessoa seja acolhida em suas necessidades no momento em que está.
              </p>
              <p className="font-medium text-terracota">
                Este cômodo existe para que você possa se olhar e se cuidar.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Cards de Serviços (Transformando a Tabela em Layout) ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Card Atendimento Psicológico */}
          <Link
            href="/comodos/sala-da-escuta/atendimento-psicologico"
            className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-marrom/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-salvia/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salvia/10 text-salvia">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="font-playfair text-2xl text-marrom">Atendimento Psicológico</h2>
            </div>
            <ul className="space-y-4 font-lato text-sm md:text-base text-marrom/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Público:</strong> Adultos, casais, crianças e adolescentes</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Modalidade:</strong> Presencial ou Online</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Dinâmica:</strong> Processo psicoterapêutico contínuo</span>
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 font-lato text-sm font-semibold text-salvia transition-transform group-hover:translate-x-1">
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          {/* Card Plantão Psicológico */}
          <Link
            href="/comodos/sala-da-escuta/plantao-psicologico"
            className="group flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-marrom/5 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-terracota/30"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracota/10 text-terracota">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="font-playfair text-2xl text-marrom">Plantão Psicológico</h2>
            </div>
            <ul className="space-y-4 font-lato text-sm md:text-base text-marrom/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Público:</strong> Maiores de 18 anos</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Modalidade:</strong> Presencial ou Online</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Dinâmica:</strong> Atendimento pontual (não substitui processo contínuo)</span>
              </li>
            </ul>
            <span className="mt-6 inline-flex items-center gap-2 font-lato text-sm font-semibold text-terracota transition-transform group-hover:translate-x-1">
              Saiba mais
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </motion.section>

      </div>
    </main>
  );
}