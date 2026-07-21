"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";

// Base de dados da equipe com os WhatsApps individuais adicionados
const EQUIPE = [
  {
    id: "dalissa",
    nome: "Dalissa",
    crp: "CRP 04/49035",
    areas: ["Psicologia Clínica · ACP", "Gerontologia · Plantão Psicológico"],
    foto: "/dalissa.jpeg",
    whatsapp: "5531994437456",
  },
  {
    id: "eveline",
    nome: "Eveline",
    crp: "CRP 04/5824",
    areas: ["Psicologia Clínica · ACP", "Saúde Mental · Plantão Psicológico"],
    foto: "/Eveline2.jpeg",
    whatsapp: "5531998341105",
  },
  {
    id: "hanna",
    nome: "Hanna",
    crp: "CRP 04/51491",
    areas: ["Psicologia Clínica · ACP", "Crianças, Adolescentes e Adultos"],
    foto: "/hanna.jpeg",
    whatsapp: "5531987848320",
  },
  {
    id: "lilian",
    nome: "Lilian",
    crp: "CRP 04/47161",
    areas: ["Psicóloga · ACP", "Ludoterapia · Focalização"],
    foto: "/lilian.jpeg",
    whatsapp: "5531993059596",
  },
];

export default function SalaDeEstarPage() {
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
        
        {/* ── Seção 1: História da Construção Coletiva ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col items-center text-center">
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sala de Estar
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Entre. A Casa é sua!
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Sala de Estar */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/Sala de estar.png"
                alt="Sala de estar da Casa ACP"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-7 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg text-justify sm:text-center md:text-left">
              <p>
                A sala de estar é o nosso primeiro espaço de encontro. É aqui que gostamos de receber
                quem chega, sem pressa, com um café passado na hora, uma boa conversa e a atenção
                que toda história merece. Sente-se conosco. Tome um café e conheça quem cuida desta Casa.
              </p>
              <p>
                Somos quatro psicólogas, amigas e companheiras de caminhada, unidas pela
                Abordagem Centrada na Pessoa, que se tornou um dos pilares de nossa formação, de
                nossa prática e, sobretudo, da maneira como escolhemos estar no mundo e nos
                relacionar com as pessoas.
              </p>
              <p>
                Esta Casa nasceu do desejo de construir um espaço onde o acolhimento é uma
                experiência vivida e não apenas discurso. Acreditamos que cada pessoa merece ser
                recebida com respeito, presença, escuta e autenticidade.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-7 text-center font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            <p>
              Aqui você encontra nossa história, nossos caminhos, aquilo que nos inspira e o que
              sustenta este projeto: o sentido que nos move e o compromisso que assumimos com
              uma prática humana, ética e profundamente comprometida com o encontro.
            </p>

            {/* Adicionado o &nbsp; entre "primeiro" e "instante" para evitar a palavra sozinha */}
            <p className="pt-4 font-playfair text-xl italic text-terracota md:text-2xl">
              Fique à vontade. Esta sala foi preparada para que você se sinta em casa desde o primeiro&nbsp;instante.
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
                      href={`https://wa.me/${prof.whatsapp}`} 
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