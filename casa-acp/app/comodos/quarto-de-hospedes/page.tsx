"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, DoorOpen, History } from "lucide-react";
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
          <h2 className="mb-8 font-playfair text-3xl text-marrom text-center md:text-left">
            Hóspede Atual
          </h2>

          {hospede ? (
            <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-marrom/5 md:flex-row">
              {/* Retrato da hóspede */}
              <div className="relative min-h-[380px] w-full border-b border-marrom/10 md:w-2/5 md:border-b-0 md:border-r">
                <Image
                  src={hospede.foto}
                  alt={`Retrato de ${hospede.nome}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top"
                />
              </div>

              {/* Informações da Residência */}
              <div className="flex w-full flex-col justify-center p-10 md:w-3/5 lg:p-16">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-salvia/10 px-3 py-1 font-lato text-xs font-bold uppercase tracking-widest text-salvia">
                    Residência Temporária
                  </span>
                  <span className="font-lato text-sm font-semibold text-marrom/40">
                    {hospede.periodo}
                  </span>
                </div>

                <h3 className="mb-2 font-playfair text-3xl text-marrom md:text-4xl">
                  {hospede.nome}
                </h3>
                <p className="mb-6 font-lato text-base font-semibold text-terracota">
                  {hospede.titulo}
                </p>

                <p className="font-lato text-base leading-relaxed text-marrom/70 line-clamp-5">
                  {hospede.bio[0]}
                </p>

                <Link
                  href={`/comodos/quarto-de-hospedes/${hospede.id}`}
                  className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-terracota px-8 py-3.5 font-lato text-sm font-semibold uppercase tracking-wider text-creme transition-colors hover:bg-marrom"
                >
                  Ver Hóspede
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm border border-marrom/5 md:flex-row">
              {/* Espaço da Foto - design de "Aguardando" */}
              <div className="flex min-h-[300px] w-full flex-col items-center justify-center bg-bege/50 p-8 md:w-2/5 border-b md:border-b-0 md:border-r border-marrom/10">
                <DoorOpen className="mb-4 h-16 w-16 text-terracota/30" strokeWidth={1} />
                <span className="font-lato text-sm font-semibold uppercase tracking-widest text-marrom/40 text-center">
                  Quarto sendo preparado
                </span>
              </div>

              <div className="flex w-full flex-col justify-center p-10 md:w-3/5 lg:p-16">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full bg-salvia/10 px-3 py-1 font-lato text-xs font-bold uppercase tracking-widest text-salvia">
                    Residência Temporária
                  </span>
                  <span className="font-lato text-sm font-semibold text-marrom/40">
                    Em breve
                  </span>
                </div>
                <h3 className="mb-4 font-playfair text-3xl text-marrom md:text-4xl">
                  Aguardando nosso próximo hóspede
                </h3>
                <p className="font-lato text-base leading-relaxed text-marrom/70">
                  A cama está feita, os livros estão na mesa de cabeceira e a escuta está 
                  preparada. Em breve, este cômodo ganhará uma nova voz convidada. 
                  Fique atento à nossa Varanda para saber quem será!
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

        {/* ── Arquivo e Formulário de Candidatura ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          {/* Arquivo de Ciclos Anteriores */}
          <div className="flex w-full max-w-xl flex-col items-center justify-center rounded-3xl bg-white p-10 text-center shadow-sm border border-marrom/5">
            <History className="mb-6 h-10 w-10 text-marrom/30" />
            <h3 className="mb-3 font-playfair text-2xl text-marrom">Arquivo de Ciclos</h3>
            <p className="mb-8 font-lato text-base text-marrom/70">
              Nossa biblioteca de vozes que já passaram por aqui. Em breve, as histórias dos nossos antigos hóspedes estarão disponíveis.
            </p>
            <button disabled className="cursor-not-allowed rounded-full bg-marrom/5 px-6 py-2.5 font-lato text-sm font-medium text-marrom/40">
              Arquivo Vazio
            </button>
          </div>
        </motion.section>

      </div>
    </main>
  );
}