"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Calendar, Sparkles, Layers } from "lucide-react";
import { getConteudoPorSlug } from "@/lib/salaDeEstudos";
import { ProximoEncontro } from "@/components/ProximoEncontro";

export default function ConteudoEstudoPage() {
  const params = useParams();
  const slug = params?.slug as string;

  if (!slug) return null;

  const conteudo = getConteudoPorSlug(slug);

  if (!conteudo) {
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
            href="/comodos/sala-de-estudos"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Sala de Estudos
          </Link>
        </motion.div>

        {/* ── Cabeçalho do Tópico ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${conteudo.bgClass} ${conteudo.colorClass}`}>
            <conteudo.icon className="h-8 w-8" />
          </div>
          <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-marrom/50">
            Sala de Estudos
          </p>
          <h1 className="mt-4 max-w-2xl font-playfair text-4xl leading-tight text-marrom md:text-5xl">
            {conteudo.titulo}
          </h1>
          <div className={`mt-8 h-[1px] w-16 ${conteudo.bgClass}`}></div>
          <p className="mx-auto mt-8 max-w-2xl font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            {conteudo.descricaoCompleta}
          </p>
        </motion.section>

        <ProximoEncontro topico={conteudo.slug} accent="salvia" compact />

        {/* ── Cursos e Minicursos ── */}
        {conteudo.tipo === "cursos" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            {/* ── Destaque: Formação Continuada em ACP ── */}
            <div className="relative mb-14 overflow-hidden rounded-3xl bg-salvia p-10 text-center text-creme shadow-lg md:p-16">
              <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-creme/5 blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-creme/5 blur-3xl"></div>

              <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-creme/10 backdrop-blur-sm">
                  <Layers className="h-8 w-8 text-creme" />
                </div>
                <h2 className="mb-6 font-playfair text-3xl md:text-4xl lg:text-5xl">
                  Formação Continuada em ACP
                </h2>
                <div className="mb-8 h-[1px] w-24 bg-creme/20"></div>
                <p className="font-lato text-base leading-[1.9] text-creme/90 md:text-lg lg:text-xl">
                  Percursos formativos voltados ao aprofundamento da Abordagem Centrada na Pessoa,
                  integrando fundamentos teóricos, experiência vivencial e prática clínica.
                </p>
              </div>
            </div>

            <h2 className="mb-8 font-playfair text-2xl text-marrom md:text-3xl">
              Cursos e minicursos disponíveis
            </h2>

            {conteudo.cursos && conteudo.cursos.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {conteudo.cursos.map((curso, index) => (
                  <motion.div
                    key={curso.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col rounded-3xl border border-marrom/5 bg-white p-8 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-4 w-fit rounded-full bg-marrom/5 px-3 py-1 font-lato text-[10px] font-bold uppercase tracking-widest text-marrom/60">
                      {curso.psicologa}
                    </div>
                    <h3 className="mb-3 font-playfair text-xl text-marrom">{curso.titulo}</h3>
                    <p className="mb-6 flex-1 font-lato text-base leading-relaxed text-marrom/80">
                      {curso.descricao}
                    </p>
                    <a
                      href={curso.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-marrom px-5 py-2.5 font-lato text-sm font-semibold text-white transition-colors hover:bg-terracota"
                    >
                      {curso.linkLabel ?? "Acessar curso"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-marrom/5 bg-white p-10 text-center shadow-sm">
                <Sparkles className="h-6 w-6 text-marrom/40" />
                <p className="max-w-xl font-lato text-base leading-relaxed text-marrom/70">
                  Em breve, os cursos e minicursos oferecidos pelas psicólogas da Casa serão publicados aqui.
                </p>
              </div>
            )}
          </motion.section>
        )}

        {/* ── Edições Anteriores ── */}
        {conteudo.tipo === "eventos" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-8 font-playfair text-2xl text-marrom md:text-3xl">
              Edições anteriores
            </h2>

            {conteudo.edicoesPassadas && conteudo.edicoesPassadas.length > 0 ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {conteudo.edicoesPassadas.map((edicao, index) => (
                  <motion.div
                    key={edicao.titulo}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="overflow-hidden rounded-3xl border border-marrom/5 bg-white shadow-sm transition-all hover:shadow-md"
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
              <div className="flex flex-col items-center gap-4 rounded-3xl border border-marrom/5 bg-white p-10 text-center shadow-sm">
                <Sparkles className="h-6 w-6 text-marrom/40" />
                <p className="max-w-xl font-lato text-base leading-relaxed text-marrom/70">
                  Em breve, os registros das rodas de conversa já realizadas — com relatos e fotos —
                  aparecerão aqui.
                </p>
              </div>
            )}
          </motion.section>
        )}

        {/* ── Conteúdo geral (a definir) ── */}
        {conteudo.tipo === "geral" && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center gap-4 rounded-3xl border border-marrom/5 bg-white p-10 text-center shadow-sm"
          >
            <Sparkles className="h-6 w-6 text-marrom/40" />
            <p className="max-w-xl font-lato text-base leading-relaxed text-marrom/70">
              Em breve, mais conteúdo sobre {conteudo.titulo.toLowerCase()} será publicado aqui.
            </p>
          </motion.section>
        )}

      </div>
    </main>
  );
}
