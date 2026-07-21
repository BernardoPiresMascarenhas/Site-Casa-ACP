"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ARTIGOS, nomesAutores } from "@/lib/cozinhaLiteraria";

// Por enquanto mostra os 3 primeiros artigos; quando houver textos de outras psicólogas,
// trocar por uma seleção manual (um de cada autora).
const POSTS = ARTIGOS.slice(0, 3);
const LINK_TEXTOS = ["Ler texto", "Ler artigo", "Ver reflexão"];

// Orquestração das animações
const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function CozinhaSection() {
  return (
    <section id="cozinha-literaria" className="bg-bege">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        
        {/* ── Cabeçalho da Seção ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
            Cozinha Literária
          </p>
          <h2 className="mt-4 font-playfair text-3xl leading-tight text-marrom md:text-5xl">
            Onde o pensamento fermenta
          </h2>
          
          <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          
          <p className="mt-8 max-w-2xl font-lato text-base leading-[1.9] text-marrom md:text-lg">
            Textos autorais, reflexões e partilhas da Casa. Na cozinha, o pensamento
            fermenta devagar. Aqui vivem os textos que nascem da prática, da escuta
            e do estudo.
          </p>
        </motion.div>

        {/* ── Grade de Posts ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {POSTS.map((post, index) => (
            <motion.div key={post.id} variants={itemVariants} className="h-full">
              <Link
                href={`/comodos/cozinha-literaria/${post.id}`} // Direciona direto para o texto do artigo
                className="group flex h-full flex-col justify-between rounded-2xl bg-creme p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-terracota border-t-4 border-transparent hover:border-terracota"
              >
                {/* Categoria e Título */}
                <div>
                  <span className="font-lato text-[11px] font-semibold uppercase tracking-widest text-salvia">
                    {post.categoria}
                  </span>
                  <h3 className="mt-4 font-playfair text-2xl leading-snug text-marrom transition-colors duration-300 group-hover:text-terracota">
                    {post.titulo}
                  </h3>
                  <p className="mt-4 font-lato text-sm font-light leading-relaxed text-marrom/70">
                    {post.resumo}
                  </p>
                </div>

                {/* Autora e Call to Action */}
                <div className="mt-10 flex items-center justify-between">
                  <span className="font-playfair text-sm italic text-marrom/60">
                    Por {nomesAutores(post)}
                  </span>
                  <div className="flex items-center gap-2 font-lato text-sm font-medium text-terracota">
                    <span>{LINK_TEXTOS[index % LINK_TEXTOS.length]}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Botão para ver todos os posts (leva para a página principal da Cozinha) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/comodos/cozinha-literaria"
            className="inline-flex items-center justify-center rounded-full border border-terracota/40 bg-transparent px-8 py-3.5 font-lato text-sm font-medium text-terracota transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota/5 hover:shadow-sm"
          >
            Ver todos os textos
          </Link>
        </motion.div>

      </div>
    </section>
  );
}