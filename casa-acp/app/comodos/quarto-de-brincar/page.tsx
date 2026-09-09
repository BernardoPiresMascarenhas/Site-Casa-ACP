"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Puzzle, Sprout, Users, HeartHandshake, BookOpen, MessageCircle } from "lucide-react";
import { ProximoEncontro } from "@/components/ProximoEncontro";

export default function QuartoBrincarCrescerPage() {
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
            {/* Acento Terracota já na Tag principal */}
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
              Quarto de Brincar e Crescer
            </p>
            <h1 className="mt-4 max-w-4xl font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Cuidado com crianças, adolescentes e famílias.
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto do Quarto de Brincar e Crescer */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/Quartodebrincar.webp"
                alt="Quarto de Brincar e Crescer da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                Este cômodo abriga crianças, adolescentes e famílias. Aqui, o lúdico encontra o cuidado.
                Brincar é uma forma de ser, de se expressar e de descobrir o mundo, e cada criança é convidada
                a explorar, criar e experimentar no seu próprio tempo, sentindo-se acolhida em sua singularidade.
              </p>
              <p>
                Crescer traz suas próprias perguntas e desafios. A adolescência tem direito à sua complexidade,
                e é recebida aqui com a mesma importância que se dedica a qualquer outra fase da vida.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            <p>
              Cuidar de quem cresce é também cuidar de quem acompanha esse crescimento: pais e famílias
              encontram aqui espaço para atividades, escuta e orientação.
            </p>
            <p className="pt-4 font-playfair text-xl italic text-terracota md:text-2xl">
              Quando o cuidado caminha ao lado do brincar e do crescer, florescem a aprendizagem, a
              criatividade, a autonomia e novas possibilidades de encontro consigo, com o outro e com o mundo.
            </p>
          </div>
        </motion.section>

        <ProximoEncontro slug="quarto-de-brincar" accent="terracota" />

        {/* ── Lados do Cômodo: Crianças/Adolescentes vs Pais ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12"
        >
          {/* Lado 1: Espaço da Criança e Adolescente */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-white p-10 shadow-sm border border-marrom/5 transition-all hover:shadow-md">
            {/* Detalhe visual sutil */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-terracota/5 transition-transform duration-700 group-hover:scale-150"></div>
            
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracota/10 text-terracota">
                  <Puzzle className="h-7 w-7" />
                </div>
                <h2 className="font-playfair text-2xl text-marrom md:text-3xl">Espaço da criança e adolescente</h2>
              </div>
              
              <ul className="mt-8 space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracota/20 p-1.5 text-terracota">
                    <Sprout className="h-4 w-4" />
                  </div>
                  <p className="font-lato text-base leading-relaxed text-marrom/80">
                    <strong className="text-marrom font-semibold">Atendimento psicológico infantil e adolescente:</strong> Um olhar atento e respeitoso para cada fase do desenvolvimento.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracota/20 p-1.5 text-terracota">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  <p className="font-lato text-base leading-relaxed text-marrom/80">
                    <strong className="text-marrom font-semibold">Linguagem calorosa sem infantilizar:</strong> Comunicação autêntica que valida a inteligência e as emoções dos mais jovens.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracota/20 p-1.5 text-terracota">
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <p className="font-lato text-base leading-relaxed text-marrom/80">
                    <strong className="text-marrom font-semibold">Conteúdos sobre desenvolvimento:</strong> Reflexões e orientações sobre escola, vínculos e crescimento emocional.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-terracota/20 p-1.5 text-terracota">
                    <Users className="h-4 w-4" />
                  </div>
                  <p className="font-lato text-base leading-relaxed text-marrom/80">
                    <strong className="text-marrom font-semibold">Adolescência e identidade:</strong> Referências seguras e acolhimento para a construção da própria identidade.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Lado 2: Espaço para os Pais */}
          <div className="group relative flex flex-col overflow-hidden rounded-3xl bg-terracota/5 p-10 shadow-sm border border-terracota/20 transition-all hover:shadow-md hover:bg-terracota/10">
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-terracota text-white shadow-sm">
                  <HeartHandshake className="h-7 w-7" />
                </div>
                <h2 className="font-playfair text-2xl text-terracota md:text-3xl">Espaço para os pais</h2>
              </div>
              
              <p className="mb-8 font-lato text-base leading-relaxed text-marrom/80">
                Porque cuidar de quem cuida é o que sustenta o crescimento saudável. Um ambiente para trocar, aprender e encontrar apoio.
              </p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-terracota/30 text-terracota">
                    <span className="block h-1.5 w-1.5 rounded-full bg-terracota"></span>
                  </div>
                  <p className="font-lato text-base font-medium leading-relaxed text-marrom">
                    Orientação a pais e cuidadores
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-terracota/30 text-terracota">
                    <span className="block h-1.5 w-1.5 rounded-full bg-terracota"></span>
                  </div>
                  <p className="font-lato text-base font-medium leading-relaxed text-marrom">
                    Rodas de conversa com famílias
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-terracota/30 text-terracota">
                    <span className="block h-1.5 w-1.5 rounded-full bg-terracota"></span>
                  </div>
                  <p className="font-lato text-base font-medium leading-relaxed text-marrom">
                    Apoio e fortalecimento do vínculo família–escola
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </motion.section>

      </div>
    </main>
  );
}