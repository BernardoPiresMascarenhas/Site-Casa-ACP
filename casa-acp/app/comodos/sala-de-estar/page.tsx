"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

// Aqui reutilizamos a base de dados da equipe
const EQUIPE = [
  {
    id: "dalissa",
    nome: "Dalissa",
    crp: "CRP 04/49035",
    areas: ["Psicologia Clínica · ACP", "Gerontologia · Plantão Psicológico"],
    foto: "/dalissa.jpeg",
  },
  {
    id: "eveline",
    nome: "Eveline",
    crp: "CRP 04/5824",
    areas: ["Psicologia Clínica · ACP", "Saúde Mental · Plantão Psicológico"],
    foto: "/Eveline2.jpeg",
  },
  {
    id: "hanna",
    nome: "Hanna",
    crp: "CRP 04/·····",
    areas: ["Psicóloga · ACP", "Clínica e Comunidade"],
    foto: "/hanna.jpeg",
  },
  {
    id: "lilian",
    nome: "Lilian",
    crp: "CRP 04/47161",
    areas: ["Psicóloga · ACP", "Ludoterapia · Focalização"],
    foto: "/lilian.jpeg",
  },
];

export default function SalaDeEstarPage() {
  return (
    <main className="min-h-screen bg-creme pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* ── Seção 1: História da Construção Coletiva ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex flex-col items-center text-center"
        >
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
            Sala de Estar
          </p>
          <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
            A história da nossa Casa
          </h1>
          <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          
          <div className="mt-10 max-w-3xl space-y-6 font-lato text-base leading-[1.9] text-marrom md:text-lg">
            {/* COLE O TEXTO DA HISTÓRIA AQUI */}
            <p>
              [Texto placeholder: Aqui entrará a breve história da construção coletiva da Casa ACP. 
              Um espaço pensado com cuidado, onde a psicologia humanista ganha contornos reais 
              e as relações encontram um solo fértil para se desenvolverem.]
            </p>
            <p>
              [Uma casa que começou por dentro, tecida por diferentes mãos e vozes que acreditam 
              na Abordagem Centrada na Pessoa como um modo de ser e de estar no mundo.]
            </p>
          </div>
        </motion.section>

        {/* ── Seção 2: Grade Horizontal das Psicólogas ── */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="mb-10 text-center font-playfair text-3xl text-marrom md:text-4xl">
            Quem cuida desta Casa
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {EQUIPE.map((prof, index) => (
              <motion.div
                key={prof.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-marrom/5 transition-shadow hover:shadow-xl"
              >
                {/* Foto */}
                <div className="relative aspect-square w-full overflow-hidden bg-bege">
                  <Image
                    src={prof.foto}
                    alt={prof.nome}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Infos */}
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="font-playfair text-2xl text-marrom">{prof.nome}</h3>
                  <span className="mt-1 font-lato text-[11px] font-semibold uppercase tracking-widest text-terracota/70">
                    {prof.crp}
                  </span>
                  
                  <div className="mt-4 mb-8 space-y-1 font-lato text-sm text-marrom/80">
                    {prof.areas.map((area, i) => (
                      <p key={i}>{area}</p>
                    ))}
                  </div>

                  {/* Botões de Ação no rodapé do card */}
                  <div className="mt-auto flex flex-col gap-3">
                    <Link
                      href={`/equipe/${prof.id}`}
                      className="inline-flex w-full items-center justify-center rounded-full bg-salvia px-4 py-2.5 font-lato text-sm font-medium text-creme transition-colors hover:bg-marrom"
                    >
                      Saiba mais
                    </Link>
                    <a
                      href="https://wa.me/5531996330001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-marrom/10 bg-transparent px-4 py-2.5 font-lato text-sm font-medium text-marrom transition-colors hover:bg-terracota/5 hover:text-terracota"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </div>
    </main>
  );
}