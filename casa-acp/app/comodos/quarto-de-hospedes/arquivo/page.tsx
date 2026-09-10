"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, History } from "lucide-react";
import { hospedesPorData } from "@/lib/hospedes";

export default function ArquivoDeHospedesPage() {
  const hospedes = hospedesPorData();

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
            href="/comodos/quarto-de-hospedes"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o Quarto de Hóspedes
          </Link>
        </motion.div>

        {/* ── Cabeçalho ── */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
            Quarto de Hóspedes
          </p>
          <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl">
            Conheça os hóspedes que passaram pela Casa
          </h1>
          <p className="mt-6 max-w-2xl font-lato text-base leading-[1.9] text-marrom/70">
            As vozes que habitaram este quarto, das mais recentes às primeiras. Cada residência
            deixou textos, encontros e afetos que seguem morando por aqui.
          </p>
          <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
        </motion.header>

        {/* ── Lista de hóspedes em ordem de residência ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-16"
        >
          {hospedes.length > 0 ? (
            <div className="mx-auto max-w-3xl space-y-12">
              {hospedes.map((hospede) => (
                <div key={hospede.id}>
                  <p className="mb-4 font-lato text-[11px] font-semibold uppercase tracking-[0.2em] text-salvia">
                    {hospede.periodo}
                  </p>

                  <div className="flex flex-col items-center gap-6 rounded-3xl border border-marrom/5 bg-white p-6 text-center shadow-sm sm:flex-row sm:items-center sm:p-8 sm:text-left">
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-marrom/10 sm:h-24 sm:w-24">
                      <Image
                        src={hospede.foto}
                        alt={`Retrato de ${hospede.nome}`}
                        fill
                        sizes="96px"
                        className="object-cover object-top"
                      />
                    </div>

                    <div>
                      <h2 className="font-playfair text-xl text-marrom md:text-2xl">
                        {hospede.nome}
                      </h2>
                      <p className="mt-1 font-lato text-sm font-semibold text-terracota">
                        {hospede.titulo}
                      </p>
                      <Link
                        href={`/comodos/quarto-de-hospedes/${hospede.id}`}
                        className="mt-3 inline-flex items-center gap-2 font-lato text-sm font-semibold uppercase tracking-wider text-terracota transition-colors hover:text-marrom"
                      >
                        Conhecer {hospede.nome.split(" ")[0]}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="mx-auto flex w-full max-w-xl flex-col items-center justify-center rounded-3xl border border-marrom/5 bg-white p-10 text-center shadow-sm">
              <History className="mb-6 h-10 w-10 text-marrom/30" />
              <h2 className="mb-3 font-playfair text-2xl text-marrom">Nenhum hóspede ainda</h2>
              <p className="font-lato text-base text-marrom/70">
                Em breve, as histórias de quem passou por aqui estarão disponíveis.
              </p>
            </div>
          )}
        </motion.section>

      </div>
    </main>
  );
}
