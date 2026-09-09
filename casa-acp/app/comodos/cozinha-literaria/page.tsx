"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, Filter, BookOpen } from "lucide-react";
import { ProximoEncontro } from "@/components/ProximoEncontro";
import { ARTIGOS, nomesAutores } from "@/lib/cozinhaLiteraria";

const CATEGORIAS = ["Todas", "ACP", "Clínica Viva", "Envelhecimento", "Infância", "Plantão", "Formação", "Vida Cotidiana"];
const AUTORAS = ["Todas", "Dalissa", "Eveline", "Hanna", "Lilian", "Hóspedes"];

export default function CozinhaLiterariaPage() {
  const [busca, setBusca] = useState("");
  const [catSelecionada, setCatSelecionada] = useState("Todas");
  const [autoraSelecionada, setAutoraSelecionada] = useState("Todas");

  // Lógica de Filtro e Busca Integrada
  const artigosFiltrados = useMemo(() => {
    return ARTIGOS.filter((artigo) => {
      const matchBusca = artigo.titulo.toLowerCase().includes(busca.toLowerCase()) ||
                         artigo.resumo.toLowerCase().includes(busca.toLowerCase());
      const matchCat = catSelecionada === "Todas" || artigo.categoria === catSelecionada;
      const matchAutora =
        autoraSelecionada === "Todas" ||
        (autoraSelecionada === "Hóspedes"
          ? artigo.autores.some((autor) => autor.hospedeId)
          : artigo.autores.some((autor) => autor.nome === autoraSelecionada));
      
      return matchBusca && matchCat && matchAutora;
    });
  }, [busca, catSelecionada, autoraSelecionada]);

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

        {/* ── Cabeçalho da Revista Literária ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-marrom/10 pb-16"
        >
          <div className="flex flex-col gap-10 md:flex-row md:items-center">
            <div className="md:w-1/2">
              <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota mb-4">
                Cozinha Literária
              </p>
              <h1 className="font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
                Textos autorais, reflexões e partilhas da Casa.
              </h1>
              <p className="mt-8 font-lato text-lg leading-[1.8] text-marrom/80 text-justify md:text-left">
                Na nossa cozinha, o pensamento fermenta devagar. Aqui vivem os textos que nascem da prática, da
                escuta, vivências e estudos. Um espaço onde as ideias podem apurar com calma.
              </p>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/Cozinhaliteraria.webp"
                alt="Cozinha Literária da Casa ACP"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </motion.section>

        <ProximoEncontro slug="cozinha-literaria" accent="terracota" />

        {/* ── Área de Filtros e Busca ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16 flex flex-col gap-6 rounded-2xl bg-white p-6 shadow-sm border border-marrom/5 md:p-8"
        >
          {/* Busca */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-marrom/40" />
            <input 
              type="text" 
              placeholder="Buscar palavras-chave nos textos..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full rounded-xl bg-bege/50 py-4 pl-12 pr-4 font-lato text-marrom placeholder-marrom/40 outline-none focus:ring-2 focus:ring-terracota/20 transition-all"
            />
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12">
            {/* Filtro: Categoria */}
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4 text-terracota" />
                <span className="font-lato text-sm font-bold uppercase tracking-widest text-marrom">Temas</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {CATEGORIAS.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setCatSelecionada(cat)}
                    className={`rounded-full px-4 py-1.5 font-lato text-xs font-medium transition-all ${
                      catSelecionada === cat 
                        ? "bg-terracota text-white" 
                        : "bg-creme text-marrom/70 hover:bg-terracota/10 hover:text-terracota"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtro: Autor */}
            <div className="flex-1 border-t border-marrom/10 pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-12">
              <div className="mb-3 flex items-center gap-2">
                <Filter className="h-4 w-4 text-salvia" />
                <span className="font-lato text-sm font-bold uppercase tracking-widest text-marrom">Autores</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {AUTORAS.map(autora => (
                  <button
                    key={autora}
                    onClick={() => setAutoraSelecionada(autora)}
                    className={`rounded-full px-4 py-1.5 font-lato text-xs font-medium transition-all ${
                      autoraSelecionada === autora 
                        ? "bg-salvia text-white" 
                        : "bg-creme text-marrom/70 hover:bg-salvia/10 hover:text-salvia"
                    }`}
                  >
                    {autora}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* ── Grade Editorial (Artigos) ── */}
        <section className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {artigosFiltrados.length > 0 ? (
              <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
                {artigosFiltrados.map((artigo) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={artigo.id}
                    className="group flex flex-col bg-white shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    {/* Borda superior Terracota exigida */}
                    <div className="h-1.5 w-full bg-terracota transition-colors group-hover:bg-salvia"></div>
                    
                    <div className="flex flex-1 flex-col p-8 border border-t-0 border-marrom/5">
                      <div className="mb-4 flex items-center justify-between border-b border-marrom/10 pb-4">
                        <span className="font-lato text-xs font-bold uppercase tracking-widest text-terracota">
                          {artigo.categoria}
                        </span>
                        {artigo.data && (
                          <span className="font-lato text-xs text-marrom/40">
                            {artigo.data}
                          </span>
                        )}
                      </div>

                      <h2 className="mb-4 font-playfair text-2xl leading-snug text-marrom transition-colors group-hover:text-terracota">
                        {artigo.titulo}
                      </h2>

                      <p className="mb-8 font-lato text-base leading-relaxed text-marrom/70 line-clamp-4">
                        {artigo.resumo}
                      </p>

                      <div className="mt-auto flex items-center justify-between pt-6 border-t border-marrom/5">
                        <span className="font-playfair text-sm italic text-marrom/80">
                          Feito por {nomesAutores(artigo)}
                        </span>
                        <Link
                          href={`/comodos/cozinha-literaria/${artigo.id}`}
                          className="font-lato text-sm font-semibold uppercase tracking-wider text-terracota transition-colors group-hover:text-salvia"
                        >
                          Ler Texto
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <BookOpen className="mb-4 h-12 w-12 text-marrom/20" />
                <h3 className="font-playfair text-2xl text-marrom">Nenhum texto encontrado</h3>
                <p className="mt-2 font-lato text-marrom/60">
                  Tente ajustar sua busca ou mudar os filtros de tema e autor.
                </p>
                <button 
                  onClick={() => { setBusca(""); setCatSelecionada("Todas"); setAutoraSelecionada("Todas"); }}
                  className="mt-6 font-lato text-sm font-semibold uppercase tracking-widest text-terracota underline decoration-terracota/30 underline-offset-4 hover:decoration-terracota"
                >
                  Limpar Filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </div>
    </main>
  );
}