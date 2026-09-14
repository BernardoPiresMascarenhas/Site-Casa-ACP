"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen, Calendar } from "lucide-react";
import { getHospedePorId, contribuicoesDoHospede, encontrosDoHospede } from "@/lib/hospedes";
import { rotuloDeData } from "@/lib/agenda";

export default function HospedeClient() {
  const params = useParams();
  const id = params?.id as string;

  // Enquanto o Next não injeta o id na primeira renderização, não desenhamos nada.
  if (!id) return null;

  const hospede = getHospedePorId(id);

  if (!hospede) {
    notFound();
  }

  const contribuicoes = contribuicoesDoHospede(hospede.id);
  const encontros = encontrosDoHospede(hospede.id);
  const primeiroNome = hospede.nome.split(" ")[0];

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

        {/* ── Chamada da seção ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:gap-8"
        >
          <h1 className="font-playfair text-3xl text-marrom md:text-4xl">Hóspedes da Casa.</h1>
          <p className="font-lato text-base leading-[1.8] text-marrom/70 md:max-w-xl md:border-l md:border-terracota/30 md:pl-8">
            Pessoas que chegam com suas histórias, experiências e modos singulares de estar no
            mundo e que, por algum tempo, habitam conosco diferentes espaços da Casa.
          </p>
        </motion.div>

        {/* ── Cartão do Hóspede (sobre o fundo decorativo) ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative mb-24 overflow-hidden rounded-3xl border border-marrom/5 bg-[#FBF6EF] shadow-sm"
        >
          {/* Fundo com as folhagens: some no mobile, onde o recorte ficaria apertado */}
          <Image
            src="/fundoHospede.webp"
            alt=""
            aria-hidden
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
            className="hidden object-cover md:block"
          />

          {/* O recuo lateral em % mantém o conteúdo dentro da moldura do fundo,
              longe das folhagens desenhadas nas bordas. */}
          <div className="relative flex flex-col gap-10 p-8 md:flex-row md:items-center md:gap-12 md:py-20 md:pl-[12%] md:pr-[10%] lg:gap-14 lg:py-24">
            {/* Retrato */}
            <div className="md:w-[38%] lg:w-[34%]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-marrom/5 shadow-sm">
                <Image
                  src={hospede.foto}
                  alt={`Retrato de ${hospede.nome}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover"
                />
              </div>

              {hospede.citacao && (
                <p className="mt-6 font-playfair text-lg italic leading-relaxed text-terracota/80">
                  “{hospede.citacao}”
                </p>
              )}
            </div>

            {/* Apresentação */}
            <div className="md:flex-1">
              <div className="mb-5 flex flex-wrap items-center gap-4">
                <span className="rounded-full bg-salvia/15 px-4 py-1.5 font-lato text-xs font-bold uppercase tracking-widest text-salvia">
                  Quarto de Hóspedes
                </span>
                <span className="font-playfair text-base italic text-marrom/60">
                  {hospede.periodo}
                </span>
              </div>

              <h2 className="font-playfair text-4xl leading-tight text-marrom md:text-5xl">
                {hospede.nome}
              </h2>
              <p className="mt-2 font-lato text-lg font-semibold text-terracota md:text-xl">
                {hospede.titulo}
              </p>

              <div className="mt-8 space-y-5 font-lato text-base leading-[1.9] text-marrom/90 md:text-lg">
                {hospede.bio.map((paragrafo, index) => (
                  <p key={index}>{paragrafo}</p>
                ))}
              </div>

              {hospede.site && (
                <a
                  href={hospede.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center gap-3 rounded-full bg-terracota px-8 py-4 font-lato text-sm font-semibold uppercase tracking-wider text-creme transition-colors hover:bg-marrom"
                >
                  Conheça mais sobre {primeiroNome}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </motion.section>

        {/* ── Contribuições ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-10 border-b border-marrom/10 pb-6">
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Contribuições
            </p>
            <h2 className="mt-3 font-playfair text-3xl text-marrom md:text-4xl">
              O que {primeiroNome} deixa na Casa
            </h2>
            <p className="mt-4 font-lato text-base leading-[1.8] text-marrom/70 md:max-w-2xl">
              Textos, encontros e cursos partilhados durante a residência. Aos poucos, este espaço
              vai guardando os rastros de sua passagem por aqui.
            </p>
          </div>

          {contribuicoes.length + encontros.length > 0 ? (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {encontros.map((evento) => (
                <div
                  key={`evento-${evento.id}`}
                  className="group flex flex-col bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-1.5 w-full bg-salvia transition-colors group-hover:bg-terracota"></div>

                  <div className="flex flex-1 flex-col border border-t-0 border-marrom/5 p-8">
                    <div className="mb-4 flex items-center justify-between border-b border-marrom/10 pb-4">
                      <span className="font-lato text-xs font-bold uppercase tracking-widest text-salvia">
                        Encontro
                      </span>
                      <span className="flex items-center gap-2 font-lato text-xs text-marrom/40">
                        <Calendar className="h-3.5 w-3.5" />
                        {rotuloDeData(evento)}
                      </span>
                    </div>

                    <h3 className="mb-4 font-playfair text-2xl leading-snug text-marrom transition-colors group-hover:text-terracota">
                      {evento.titulo}
                    </h3>

                    <p className="mb-8 font-lato text-base leading-relaxed text-marrom/70 line-clamp-4">
                      {evento.descricao}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-marrom/5 pt-6">
                      <span className="font-playfair text-sm italic text-marrom/80">
                        {evento.origem}
                      </span>
                      <Link
                        href={
                          evento.detalhes
                            ? `/comodos/varanda/agenda/${evento.id}`
                            : `/comodos/${evento.origemSlug}`
                        }
                        className="font-lato text-sm font-semibold uppercase tracking-wider text-terracota transition-colors group-hover:text-salvia"
                      >
                        Ver encontro
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {contribuicoes.map((artigo) => (
                <div
                  key={artigo.id}
                  className="group flex flex-col bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="h-1.5 w-full bg-terracota transition-colors group-hover:bg-salvia"></div>

                  <div className="flex flex-1 flex-col border border-t-0 border-marrom/5 p-8">
                    <div className="mb-4 flex items-center justify-between border-b border-marrom/10 pb-4">
                      <span className="font-lato text-xs font-bold uppercase tracking-widest text-terracota">
                        {artigo.categoria}
                      </span>
                      {artigo.data && (
                        <span className="flex items-center gap-2 font-lato text-xs text-marrom/40">
                          <Calendar className="h-3.5 w-3.5" />
                          {artigo.data}
                        </span>
                      )}
                    </div>

                    <h3 className="mb-4 font-playfair text-2xl leading-snug text-marrom transition-colors group-hover:text-terracota">
                      {artigo.titulo}
                    </h3>

                    <p className="mb-8 font-lato text-base leading-relaxed text-marrom/70 line-clamp-4">
                      {artigo.resumo}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-marrom/5 pt-6">
                      <span className="font-playfair text-sm italic text-marrom/80">
                        Cozinha Literária
                      </span>
                      <Link
                        href={`/comodos/cozinha-literaria/${artigo.id}`}
                        className="font-lato text-sm font-semibold uppercase tracking-wider text-terracota transition-colors group-hover:text-salvia"
                      >
                        Ler Texto
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-3xl border border-marrom/5 bg-white py-20 text-center shadow-sm">
              <BookOpen className="mb-4 h-12 w-12 text-marrom/20" />
              <h3 className="font-playfair text-2xl text-marrom">Nada por aqui ainda</h3>
              <p className="mt-2 font-lato text-marrom/60">
                As partilhas desta residência aparecerão em breve.
              </p>
            </div>
          )}
        </motion.section>

      </div>
    </main>
  );
}
