"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, DoorOpen } from "lucide-react";
import { hospedeAtual } from "@/lib/hospedes";

export default function QuartoDeHospedesPage() {
  const hospede = hospedeAtual();

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
              Quarto de Hóspedes
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Vozes convidadas em residência temporária
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto do Quarto de Hóspedes */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/quartodehospedes1.webp"
                alt="Quarto de Hóspedes da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p className="font-playfair text-xl italic text-terracota md:text-2xl">
                Toda casa que vive, recebe.
              </p>
              <p>
                Este é o cômodo que não pertence a nenhuma de nós sozinha. Pertence a quem, de
                tempos em tempos, é convidado a habitá-lo. Aqui passam convidados queridos: pesquisadores,
                autores, vozes que têm algo a dizer e que a Casa escolhe ouvir de perto.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-6 text-center font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            <p>
              A hospitalidade que oferecemos é intelectual e afetiva. Quem chega traz suas ideias,
              mas também é acolhido em quem é. Um ciclo de encontros, uma aula aberta, o lançamento de
              um livro. Cada hóspede fica pelo tempo de sua estadia e parte deixando a Casa um pouco
              mais rica do que encontrou.
            </p>
            <p className="font-semibold text-marrom">
              A Casa acolhe quem chega.
            </p>
          </div>
        </motion.section>

        {/* ── Hóspede Atual ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24"
        >
          <h2 className="mb-8 text-center font-playfair text-3xl text-marrom">
            Hóspede Atual
          </h2>

          {hospede ? (
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-marrom/5 bg-white p-8 text-center shadow-sm sm:flex-row sm:items-start sm:gap-10 sm:p-10 sm:text-left">
              {/* Retrato da hóspede */}
              <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border border-marrom/10 sm:h-36 sm:w-36">
                <Image
                  src={hospede.foto}
                  alt={`Retrato de ${hospede.nome}`}
                  fill
                  sizes="144px"
                  className="object-cover object-top"
                />
              </div>

              {/* Informações da Residência */}
              <div className="flex flex-col items-center sm:items-start">
                <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.2em] text-salvia">
                  Residência temporária · {hospede.periodo}
                </span>

                <h3 className="mt-3 font-playfair text-2xl text-marrom md:text-3xl">
                  {hospede.nome}
                </h3>
                <p className="mt-1 font-lato text-sm font-semibold text-terracota">
                  {hospede.titulo}
                </p>

                <p className="mt-4 font-lato text-sm leading-relaxed text-marrom/70">
                  {hospede.resumo ?? hospede.bio[0]}
                </p>

                <Link
                  href={`/comodos/quarto-de-hospedes/${hospede.id}`}
                  className="mt-6 inline-flex items-center gap-2 font-lato text-sm font-semibold uppercase tracking-wider text-terracota transition-colors hover:text-marrom"
                >
                  Ver hóspede
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 rounded-3xl border border-marrom/5 bg-white p-8 text-center shadow-sm sm:flex-row sm:items-start sm:gap-10 sm:p-10 sm:text-left">
              {/* Espaço da Foto - design de "Aguardando" */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border border-marrom/10 bg-bege/50 sm:h-36 sm:w-36">
                <DoorOpen className="h-12 w-12 text-terracota/30" strokeWidth={1} />
              </div>

              <div className="flex flex-col items-center sm:items-start">
                <span className="font-lato text-[11px] font-semibold uppercase tracking-[0.2em] text-salvia">
                  Residência temporária · Em breve
                </span>
                <h3 className="mt-3 font-playfair text-2xl text-marrom md:text-3xl">
                  Aguardando nosso próximo hóspede
                </h3>
                <p className="mt-4 font-lato text-sm leading-relaxed text-marrom/70">
                  A cama está feita, os livros estão na mesa de cabeceira e a escuta está
                  preparada. Em breve, este cômodo ganhará uma nova voz convidada.
                </p>
              </div>
            </div>
          )}
        </motion.section>

        {/* ── Estrutura do Ciclo ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 rounded-3xl bg-salvia/5 p-10 md:p-16 border border-salvia/10"
        >
          <div className="mb-12 text-center">
            <h2 className="font-playfair text-3xl text-marrom md:text-4xl">Estrutura do Ciclo</h2>
            <p className="mt-4 font-lato text-base text-marrom/70">Como funciona a residência em nossa Casa</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 relative">
            {/* Linha conectora invisível no mobile, visível no desktop */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-marrom/10 -z-10"></div>

            {/* Passo 01 */}
            <div className="flex flex-col items-center text-center bg-salvia/5 md:bg-transparent p-6 rounded-2xl md:p-0 md:rounded-none">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-playfair text-salvia shadow-sm border border-salvia/20">
                01
              </div>
              <h3 className="mb-3 font-playfair text-xl text-marrom">Curadoria</h3>
              <p className="font-lato text-sm leading-relaxed text-marrom/70">
                Temática definida + convidado escolhido. O alinhamento inicial do que será partilhado.
              </p>
            </div>

            {/* Passo 02 */}
            <div className="flex flex-col items-center text-center bg-salvia/5 md:bg-transparent p-6 rounded-2xl md:p-0 md:rounded-none">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-playfair text-salvia shadow-sm border border-salvia/20">
                02
              </div>
              <h3 className="mb-3 font-playfair text-xl text-marrom">Habitação</h3>
              <p className="font-lato text-sm leading-relaxed text-marrom/70">
                Textos, encontros e partilhas. O período em que o convidado reside ativamente na Casa.
              </p>
            </div>

            {/* Passo 03 */}
            <div className="flex flex-col items-center text-center bg-salvia/5 md:bg-transparent p-6 rounded-2xl md:p-0 md:rounded-none">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl font-playfair text-salvia shadow-sm border border-salvia/20">
                03
              </div>
              <h3 className="mb-3 font-playfair text-xl text-marrom">Partida</h3>
              <p className="font-lato text-sm leading-relaxed text-marrom/70">
                Rastros, afetos e o que o ciclo plantou. O que fica de herança para nossa comunidade.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Chamada para a página dos hóspedes anteriores ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-terracota/15 bg-gradient-to-b from-bege/50 to-white px-8 py-14 text-center shadow-sm md:px-16">
            {/* Círculos decorativos, bem suaves, atrás do conteúdo */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-salvia/10 blur-2xl"
            ></div>
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-terracota/10 blur-2xl"
            ></div>

            <div className="relative flex flex-col items-center">
              <p className="font-lato text-[11px] font-semibold uppercase tracking-[0.25em] text-salvia">
                Vozes em residência
              </p>

              <h3 className="mt-4 max-w-lg font-playfair text-2xl leading-snug text-marrom md:text-3xl">
                Conheça os hóspedes que passaram pela Casa
              </h3>

              <div className="mt-6 h-[1px] w-12 bg-terracota/40"></div>

              <p className="mt-6 max-w-md font-lato text-base leading-[1.9] text-marrom/70">
                As vozes que já habitaram este quarto e o que cada residência deixou por aqui.
              </p>

              <Link
                href="/comodos/quarto-de-hospedes/arquivo"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-terracota px-8 py-3.5 font-lato text-sm font-semibold uppercase tracking-wider text-creme shadow-sm transition-colors hover:bg-marrom"
              >
                Conhecer hóspedes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}