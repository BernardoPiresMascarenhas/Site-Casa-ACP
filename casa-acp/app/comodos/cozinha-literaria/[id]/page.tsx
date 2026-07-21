"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import { getArtigoPorId, nomesAutores } from "@/lib/cozinhaLiteraria";

export default function ArtigoPage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) return null;

  const artigo = getArtigoPorId(id);

  if (!artigo) {
    notFound();
  }

  const autoresComPagina = artigo.autores.filter((autor) => autor.equipeId);

  return (
    <main className="min-h-screen bg-creme pt-40 pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/comodos/cozinha-literaria"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Cozinha Literária
          </Link>
        </motion.div>

        {/* ── Artigo ── */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center justify-between border-b border-marrom/10 pb-4">
            <span className="rounded-full bg-terracota/10 px-3 py-1 font-lato text-xs font-bold uppercase tracking-widest text-terracota">
              {artigo.categoria}
            </span>
            {artigo.data && (
              <div className="flex items-center gap-2 font-lato text-xs text-marrom/50">
                <Calendar className="h-4 w-4" />
                {artigo.data}
              </div>
            )}
          </div>

          <h1 className="mb-6 font-playfair text-4xl leading-tight text-marrom md:text-5xl">
            {artigo.titulo}
          </h1>

          <p className="mb-12 font-playfair text-lg italic text-marrom/70">
            Por {nomesAutores(artigo, true)}
          </p>

          {/* ── Renderização inteligente do texto ── */}
          <div className="font-lato text-base leading-[2] text-marrom/90 text-justify md:text-lg">
            {artigo.conteudo.map((paragrafo, i) => {
              
              // 1. Detecção do destaque Verde Sálvia (Títulos com ## )
              if (paragrafo.startsWith("## ")) {
                return (
                  <h2 key={i} className="mt-12 mb-6 font-playfair text-2xl md:text-3xl text-salvia">
                    {paragrafo.replace("## ", "").trim()}
                  </h2>
                );
              }

              // 2. Detecção de subtítulos menores em negrito (Títulos com ** **)
              if (paragrafo.startsWith("**") && paragrafo.endsWith("**")) {
                return (
                  <h3 key={i} className="mt-10 mb-4 font-playfair text-xl md:text-2xl text-marrom font-bold">
                    {paragrafo.replace(/\*\*/g, "").trim()}
                  </h3>
                );
              }

              // 3. Detecção do destaque de citação (Blockquote)
              if (paragrafo.startsWith(">")) {
                return (
                  <blockquote
                    key={i}
                    className="my-10 border-l-4 border-terracota pl-6 font-playfair text-xl italic leading-relaxed text-terracota/90 md:text-2xl"
                  >
                    {paragrafo.replace(">", "").trim()}
                  </blockquote>
                );
              }

              // 4. Parágrafo padrão
              return (
                <p key={i} className="mb-6">
                  {paragrafo}
                </p>
              );
            })}
          </div>
        </motion.article>

        {/* ── Sobre a Autoria ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 flex flex-col items-center gap-3 rounded-3xl border border-marrom/5 bg-white p-10 text-center shadow-sm"
        >
          <p className="font-lato text-sm text-marrom/60">Escrito por</p>
          <h3 className="font-playfair text-2xl text-marrom">{nomesAutores(artigo, true)}</h3>

          {autoresComPagina.length > 0 && (
            <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
              {autoresComPagina.map((autor) => (
                <Link
                  key={autor.equipeId}
                  href={`/equipe/${autor.equipeId}`}
                  className="inline-flex items-center gap-2 rounded-full bg-salvia px-6 py-2.5 font-lato text-sm font-medium text-creme transition-colors hover:bg-marrom"
                >
                  Conhecer {autor.nome}
                </Link>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </main>
  );
}