"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Shield, Sparkles, Users } from "lucide-react";

export default function PlantaoPsicologicoPage() {
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
            href="/comodos/sala-da-escuta"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Sala da Escuta
          </Link>
        </motion.div>

        {/* ── Cabeçalho ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-terracota/10 text-terracota">
              <Clock className="h-8 w-8" />
            </div>
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sala da Escuta
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Plantão Psicológico
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-12 flex justify-center">
            <ul className="grid w-full max-w-3xl grid-cols-1 gap-4 rounded-2xl bg-white p-8 shadow-sm border border-marrom/5 font-lato text-sm md:grid-cols-3 md:text-base text-marrom/80">
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
          </div>
        </motion.section>

        {/* ── O Plantão Psicológico ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-bege p-10 md:p-16 border border-marrom/10"
        >
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl text-marrom md:text-4xl">O Plantão Psicológico</h2>
            <p className="mt-4 font-lato text-lg text-marrom/70 max-w-2xl mx-auto">
              É um atendimento pontual, de escuta e acolhimento, e não substitui o processo
              psicoterapêutico contínuo nem atendimento emergencial médico ou psiquiátrico.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">O que é?</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                O Plantão Psicológico é um tipo de intervenção que acolhe a pessoa no momento mais próximo de
                sua necessidade, ajudando-a a lidar melhor com seus recursos e limites. A ideia central desta
                modalidade é oferecer a quem procura, a possibilidade de ser acolhida e de ser ouvida para, então, ir
                compreendendo como está diante de sua própria vida e ter a chance de despertar para os devidos
                cuidados para consigo mesma.
              </p>
            </div>

            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">A quem é destinado?</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                Às pessoas que buscam apoio emocional, um espaço de escuta sensível onde possam ouvir a si
                mesmas, acompanhadas por um(a) profissional, onde possam compartilhar seus sentimentos e
                experiências no momento mais próximo de sua urgência.
              </p>
              <p className="mt-4 font-lato text-sm font-semibold text-terracota">
                *Atendimento destinado para maiores de 18 anos.
              </p>
            </div>

            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">Sobre o atendimento</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                Não é necessário agendamento prévio. O atendimento será realizado por ordem de chegada, dentro
                dos dias e horários disponibilizados em nosso calendário.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
