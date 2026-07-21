"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Sparkles } from "lucide-react";
import { getTopicoJardimPorSlug } from "@/lib/jardim";

export default function TopicoJardimPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) return null;

  const topico = getTopicoJardimPorSlug(slug);

  if (!topico) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-creme pt-40 pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-10">

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/comodos/jardim"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-salvia"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Jardim
          </Link>
        </motion.div>

        {/* ── Cabeçalho do Tópico ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-salvia/10 text-salvia">
            <topico.icon className="h-8 w-8" />
          </div>
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-marrom/50">
            Jardim
          </p>
          <h1 className="mt-4 max-w-2xl font-playfair text-4xl leading-tight text-marrom md:text-5xl">
            {topico.titulo}
          </h1>
          <div className="mt-8 h-[1px] w-16 bg-salvia/40"></div>
          <p className="mx-auto mt-8 max-w-2xl font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            {topico.descricaoCompleta}
          </p>
        </motion.section>

        {/* ── Edições Anteriores ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-8 font-playfair text-2xl text-marrom md:text-3xl">
            Edições anteriores
          </h2>

          {topico.edicoesPassadas.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {topico.edicoesPassadas.map((edicao, index) => (
                <motion.div
                  key={edicao.titulo}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="overflow-hidden rounded-3xl border border-salvia/10 bg-white shadow-sm transition-all hover:shadow-md"
                >
                  {edicao.imagem && (
                    <div className="relative aspect-video w-full">
                      <Image src={edicao.imagem} alt={edicao.titulo} fill className="object-cover" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="mb-3 flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-widest text-terracota">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{edicao.data}</span>
                    </div>
                    <h3 className="mb-3 font-playfair text-xl text-marrom">{edicao.titulo}</h3>
                    <p className="font-lato text-base leading-relaxed text-marrom/80">
                      {edicao.descricao}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center gap-4 rounded-3xl border border-salvia/10 bg-white p-10 text-center shadow-sm">
              <Sparkles className="h-6 w-6 text-marrom/40" />
              <p className="max-w-xl font-lato text-base leading-relaxed text-marrom/70">
                Em breve, os registros das edições já realizadas de {topico.titulo.toLowerCase()} —
                com relatos e fotos — aparecerão aqui.
              </p>
            </div>
          )}
        </motion.section>

      </div>
    </main>
  );
}
