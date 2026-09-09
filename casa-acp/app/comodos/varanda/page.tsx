"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { agendaOrdenadaPorData, rotuloDeData } from "@/lib/agenda";

const AGENDA = agendaOrdenadaPorData();

export default function VarandaPage() {
  return (
    // Fundo padrão da Casa (creme) e textos em marrom
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
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
              Varanda
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Notícias, movimentos e encontros
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Varanda */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/Varanda.webp"
                alt="Varanda da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                A varanda é o espaço onde a vida da Casa se revela. É o lugar que acolhe quem chega e
                também quem apenas passa, convidando cada pessoa a se aproximar e a conhecer o que
                pulsa em nossa comunidade.
              </p>
              <p>
                É na varanda que compartilhamos os acontecimentos, as experiências e os encontros que
                dão vida à Casa. Aqui, você encontra notícias sobre nossos eventos, projetos, formações e
                alguns dos movimentos que atravessam a comunidade da Abordagem Centrada na Pessoa.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-3xl space-y-6 text-center font-lato text-base leading-[2] text-marrom/90 md:text-lg">
            <p>
              Mais do que um espaço de informações, a varanda é um lugar de conexão, arejado como só
              uma varanda pode ser. É por meio dela que permanecemos próximos do que acontece na
              comunidade ACP, no Brasil e no mundo.
            </p>
            <p className="pt-4 font-playfair text-xl italic text-terracota md:text-2xl">
              Sentindo o vento que vem de fora e fortalecendo os laços que nos unem, cultivando um
              sentimento de pertencimento a uma rede viva.
            </p>
          </div>
        </motion.section>

        {/* ── Grade de Notícias e Agenda ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {AGENDA.map((noticia, index) => (
            <motion.div
              key={noticia.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              // Card no padrão dos outros cômodos
              className="group flex flex-col overflow-hidden rounded-3xl bg-white border border-marrom/5 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              {/* Cartaz do evento, quando houver */}
              {noticia.imagem && (
                <div className="relative aspect-video w-full">
                  <Image
                    src={noticia.imagem}
                    alt={noticia.titulo}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    style={{ objectPosition: noticia.imagemPosicao }}
                    className="object-cover"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-center justify-between border-b border-marrom/10 pb-4">
                  {/* Data em Terracota */}
                  <div className="flex items-center gap-2 font-lato text-sm font-bold text-terracota">
                    <Calendar className="h-4 w-4" />
                    <span>{rotuloDeData(noticia)}</span>
                  </div>
                  {/* Badge do Cômodo de Origem */}
                  <div className="rounded-full bg-marrom/5 px-3 py-1 font-lato text-[10px] font-bold uppercase tracking-widest text-marrom/60">
                    {noticia.origem}
                  </div>
                </div>

                {/* Título em Playfair */}
                <h3 className="mb-4 font-playfair text-2xl text-marrom transition-colors group-hover:text-terracota">
                  {noticia.titulo}
                </h3>

                {/* Texto em Marrom */}
                <p className="mb-8 font-lato text-base leading-relaxed text-marrom/80 flex-1">
                  {noticia.descricao}
                </p>

                <div className="mb-6 flex flex-wrap items-center gap-4">
                  {noticia.inscricaoLink && (
                    <a
                      href={noticia.inscricaoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center gap-2 rounded-full bg-terracota px-5 py-2.5 font-lato text-sm font-semibold text-white transition-colors hover:bg-terracota/90"
                    >
                      {noticia.inscricaoLinkLabel ?? "Realizar inscrição"}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}

                  {noticia.detalhes && (
                    <Link
                      href={`/comodos/varanda/agenda/${noticia.id}`}
                      className="inline-flex w-fit items-center gap-2 font-lato text-sm font-semibold text-terracota transition-all hover:gap-3"
                    >
                      Saiba mais
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>

                <div className="mt-auto flex items-center justify-between pt-4">
                  <div className="flex items-center gap-2 font-lato text-xs font-medium text-marrom/60">
                    <MapPin className="h-4 w-4" />
                    <span>{noticia.local}</span>
                  </div>
                  <Link
                    href={noticia.detalhes ? `/comodos/varanda/agenda/${noticia.id}` : `/comodos/${noticia.origemSlug}`}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-marrom/5 text-marrom transition-all group-hover:bg-terracota group-hover:text-white"
                    aria-label={noticia.detalhes ? `Ver detalhes do evento ${noticia.titulo}` : `Ver o cômodo ${noticia.origem}`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.section>

      </div>
    </main>
  );
}