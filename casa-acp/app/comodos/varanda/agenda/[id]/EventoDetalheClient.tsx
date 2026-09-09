"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";
import { getEventoPorId, rotuloDeData } from "@/lib/agenda";

// Ícone e cor de cada tópico de informação, na ordem em que aparecem em `detalhes.info`.
const INFO_ICONS = [Calendar, Clock, MapPin, Users];
const INFO_STYLES = [
  "bg-terracota/10 text-terracota",
  "bg-salvia/10 text-salvia",
  "bg-marrom/10 text-marrom",
  "bg-terracota text-creme",
];

export default function EventoDetalhePage() {
  const params = useParams();
  const id = params?.id as string;

  if (!id) return null;

  const evento = getEventoPorId(id);

  if (!evento || !evento.detalhes) {
    notFound();
  }

  const { detalhes } = evento;

  return (
    <main className="min-h-screen bg-creme pt-40 pb-24">
      <div className="mx-auto max-w-4xl px-6 md:px-10">

        {/* Botão Voltar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/comodos/varanda"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Varanda
          </Link>
        </motion.div>

        {/* ── Cabeçalho ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full bg-marrom/5 px-3 py-1 font-lato text-[10px] font-bold uppercase tracking-widest text-marrom/60">
              {evento.origem}
            </span>
            <span className="flex items-center gap-2 font-lato text-xs font-bold uppercase tracking-widest text-terracota">
              <Calendar className="h-3.5 w-3.5" />
              {rotuloDeData(evento)}
            </span>
          </div>
          <h1 className="max-w-2xl font-playfair text-4xl leading-tight text-marrom md:text-5xl">
            {evento.titulo}
          </h1>
          <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
        </motion.section>

        {/* ── Imagem em destaque ── */}
        {evento.imagem && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto mt-14 aspect-video w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-md"
          >
            <Image
              src={evento.imagem}
              alt={evento.titulo}
              fill
              sizes="(min-width: 896px) 896px, 100vw"
              quality={95}
              priority
              style={{ objectPosition: evento.imagemPosicao }}
              className="object-cover"
            />
          </motion.div>
        )}

        {/* ── Texto completo ── */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-14 max-w-2xl space-y-6 font-lato text-base leading-[2] text-marrom/90 md:text-lg"
        >
          {detalhes.conteudo.map((paragrafo, i) => {
            if (paragrafo.startsWith("## ")) {
              return (
                <p key={i} className="font-playfair text-xl font-semibold text-salvia md:text-2xl">
                  {paragrafo.slice(3)}
                </p>
              );
            }

            if (paragrafo.startsWith("- ")) {
              return (
                <ul key={i} className="list-disc space-y-2 pl-6 marker:text-terracota">
                  {paragrafo.split("\n").map((item, j) => (
                    <li key={j}>{item.replace(/^- /, "")}</li>
                  ))}
                </ul>
              );
            }

            const [primeiraLinha, ...resto] = paragrafo.split("\n");
            const ehPergunta = resto.length > 0 && primeiraLinha.trim().endsWith("?");

            if (ehPergunta) {
              return (
                <div key={i}>
                  <p className="font-playfair text-xl font-semibold text-salvia md:text-2xl">
                    {primeiraLinha}
                  </p>
                  <p className="mt-2 whitespace-pre-line">{resto.join("\n")}</p>
                </div>
              );
            }

            return (
              <p key={i} className="whitespace-pre-line">
                {paragrafo}
              </p>
            );
          })}
        </motion.article>

        {/* ── Informações em destaque ── */}
        {detalhes.info.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {detalhes.info.map((item, index) => {
              const Icon = INFO_ICONS[index % INFO_ICONS.length];
              return (
                <div
                  key={item.label}
                  className={`flex items-start gap-4 rounded-2xl p-6 ${INFO_STYLES[index % INFO_STYLES.length]}`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <div>
                    <p className="font-lato text-xs font-bold uppercase tracking-widest opacity-80">
                      {item.label}
                    </p>
                    <p className="mt-1 font-playfair text-lg leading-snug">{item.valor}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}

        {/* ── Inscrição e cômodo de origem ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-14 flex flex-col items-center gap-4"
        >
          {evento.inscricaoLink && (
            <a
              href={evento.inscricaoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-terracota px-8 py-3.5 font-lato text-sm font-semibold text-white transition-colors hover:bg-terracota/90"
            >
              {evento.inscricaoLinkLabel ?? "Realizar inscrição"}
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
          <Link
            href={`/comodos/${evento.origemSlug}`}
            className="font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            Ver mais sobre {evento.origem}
          </Link>
        </motion.div>

      </div>
    </main>
  );
}
