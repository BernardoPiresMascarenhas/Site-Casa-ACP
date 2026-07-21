"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Tv, Mic, Music, PlayCircle, Headphones } from "lucide-react";

export default function SalaDeTvPage() {
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
              Sala de TV
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Vozes da Casa em imagem e som.
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Sala de TV */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/saladetv.png"
                alt="Sala de TV da Casa ACP"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                A Sala de TV é o espaço audiovisual da Casa. Onde a voz, o rosto e o pensamento das integrantes
                chegam a quem não está presente fisicamente.
              </p>
              <p>
                Aqui, as melodias, histórias e cantos aquecem a nossa casa. Um espaço pensado em promover
                acolhimento, reflexões e para nos lembrar que a arte também é caminho para o encontro
                humano e o cuidado.
              </p>
            </div>
          </div>
        </motion.section>

        <div className="space-y-12">
          {/* ── 1. Canal no YouTube ── */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-3xl bg-white border border-marrom/5 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-10 md:p-14">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-terracota/10 text-terracota">
                  <Tv className="h-7 w-7" />
                </div>
                <h2 className="mb-4 font-playfair text-3xl text-marrom md:text-4xl">
                  Canal no YouTube
                </h2>
                <p className="mb-8 font-playfair text-xl italic text-terracota">
                  Venha conhecer nosso espaço vivo de aprendizagem!
                </p>
                <ul className="space-y-4 font-lato text-base text-marrom/80 mb-10">
                  <li className="flex items-start gap-3">
                    <PlayCircle className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                    <span>Vídeos sobre ACP, encontros clínicos e reflexões sobre o humano.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PlayCircle className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                    <span>Registros de eventos, seminários e rodas de conversa.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <PlayCircle className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                    <span>Entrevistas e conversas entre as integrantes.</span>
                  </li>
                </ul>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-terracota px-8 py-3.5 font-lato text-sm font-medium text-white transition-colors hover:bg-marrom"
                >
                  Acessar Canal
                </a>
              </div>
              <div className="relative min-h-[300px] bg-bege/50 lg:min-h-full flex items-center justify-center p-8 border-t lg:border-t-0 lg:border-l border-marrom/5">
                {/* Espaço reservado para o vídeo mais recente ou thumbnail */}
                <div className="aspect-video w-full max-w-md overflow-hidden rounded-2xl bg-marrom/5 shadow-inner flex items-center justify-center relative group cursor-pointer">
                  <Tv className="h-16 w-16 text-terracota/40 transition-transform group-hover:scale-110 group-hover:text-terracota" />
                  <span className="absolute bottom-4 left-0 right-0 text-center font-lato text-sm text-marrom/40 uppercase tracking-widest">
                    Último Vídeo
                  </span>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ── Grade Inferior: Podcast & Playlist ── */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            
            {/* 2. Podcast (Em Breve) */}
            <motion.section 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex flex-col overflow-hidden rounded-3xl bg-salvia p-10 md:p-14 text-creme shadow-sm"
            >
              {/* Badge Em Breve */}
              <div className="absolute top-8 right-8 rounded-full bg-creme/20 backdrop-blur-sm px-4 py-1.5 font-lato text-xs font-bold uppercase tracking-widest text-creme border border-creme/30">
                Em breve
              </div>
              
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-creme/10 text-creme">
                <Mic className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-playfair text-3xl md:text-4xl">
                Podcast da Casa
              </h2>
              <p className="mb-8 font-playfair text-lg italic text-creme/90">
                Ouça nosso podcast e leve a ACP com você: conversas, reflexões e encontros que inspiram presença e cuidado.
              </p>
              <ul className="space-y-4 font-lato text-base text-creme/80 flex-1">
                <li className="flex items-start gap-3">
                  <Headphones className="h-5 w-5 shrink-0 text-creme/60 mt-0.5" />
                  <span>Conversas longas e presentes sobre psicologia humanista.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Headphones className="h-5 w-5 shrink-0 text-creme/60 mt-0.5" />
                  <span>Formação clínica, travessias humanas e o que nos move.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Headphones className="h-5 w-5 shrink-0 text-creme/60 mt-0.5" />
                  <span>Episódios com convidados e entre as integrantes.</span>
                </li>
              </ul>
            </motion.section>

            {/* 3. Playlist da Casa */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col overflow-hidden rounded-3xl bg-white border border-marrom/5 shadow-sm p-10 md:p-14"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-marrom/5 text-marrom">
                <Music className="h-7 w-7" />
              </div>
              <h2 className="mb-4 font-playfair text-3xl text-marrom md:text-4xl">
                Playlist da Casa
              </h2>
              <p className="mb-8 font-playfair text-lg italic text-marrom/80">
                Explore a playlist da nossa Casa: canções escolhidas para acolher, inspirar e acompanhar momentos do seu cotidiano.
              </p>
              
              <div className="mb-8 font-lato text-sm text-marrom/70 space-y-2 flex-1">
                <p>Curadoria de músicas que representa a essência da Casa ACP.</p>
                <p>A mesma trilha sonora que toca na nossa sala de espera.</p>
              </div>

              {/* Placeholder para iframe do Spotify/YouTube Music */}
              <div className="mt-auto aspect-[4/1] w-full rounded-2xl bg-bege flex flex-col items-center justify-center border border-marrom/10 text-marrom/40">
                <Music className="h-6 w-6 mb-2 opacity-50" />
                <span className="font-lato text-xs uppercase tracking-widest">Player Musical</span>
              </div>
            </motion.section>

          </div>
        </div>
      </div>
    </main>
  );
}