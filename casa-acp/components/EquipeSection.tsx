"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";

type Profissional = {
  id: string;
  nome: string;
  crp: string;
  areas: string[];
  foto: string; 
};

const EQUIPE: Profissional[] = [
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
    foto: "/Eveline.jpeg",
  },
  {
    id: "hanna",
    nome: "Hanna",
    crp: "CRP 04/51491",
    areas: ["Psicologia Clínica · ACP", "Infância, Adolescência e Adultos"],
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


const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

// Cada card entra de baixo para cima.
const item: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function EquipeSection() {
  return (
    <section id="equipe" className="bg-creme">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        
        {/* ── Cabeçalho centralizado ── */}
        <motion.div
          className="mx-auto max-w-2xl text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
            Sala de Estar
          </p>
          <h2 className="mt-4 font-playfair text-3xl leading-tight text-marrom md:text-5xl">
            Quem cuida desta Casa
          </h2>
          
          {/* Linha divisória (rule) */}
          <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>

          <p className="mt-8 font-lato text-base leading-[1.9] text-marrom md:text-lg">
            Quatro psicólogas que encontraram na Abordagem Centrada na Pessoa não
            apenas uma prática, mas uma forma de ver e de estar no mundo. Uma
            casa pensada, gerada e construída por mãos amigas.
          </p>
        </motion.div>

        {/* ── Grade de cards com entrada escalonada ── */}
        <motion.div
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {EQUIPE.map((prof) => (
            <motion.div
              key={prof.nome}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="group overflow-hidden rounded-2xl bg-bege shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* O Link envolve toda a área do card para facilitar o clique */}
              <Link href={`/equipe/${prof.id}`} className="block h-full">
                
                {/* Foto */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-marrom/5">
                  <Image
                    src={prof.foto} // <-- 3. Agora ele puxa a foto específica de cada uma
                    alt={`Retrato de ${prof.nome}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-6 text-center">
                  <h3 className="font-playfair text-2xl text-marrom">
                    {prof.nome}
                  </h3>
                  <p className="mt-1 font-lato text-[11px] font-semibold uppercase tracking-widest text-terracota/70">
                    {prof.crp}
                  </p>
                  
                  <div className="mt-4 space-y-0.5 font-lato text-sm font-light leading-relaxed text-marrom/80">
                    {prof.areas.map((area, index) => (
                      <p key={index}>{area}</p>
                    ))}
                  </div>
                </div>

              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}