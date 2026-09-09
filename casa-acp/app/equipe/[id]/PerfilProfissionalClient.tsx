"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, MapPin } from "lucide-react";
import { EQUIPE_DETALHES } from "@/lib/equipe";


export default function PerfilProfissionalPage() {
  const params = useParams();
  const id = params?.id as string;

  // Se o Next.js ainda não injetou o ID, esperamos um milissegundo para não quebrar a tela
  if (!id) return null;

  const prof = EQUIPE_DETALHES[id as keyof typeof EQUIPE_DETALHES];

  // Se a pessoa digitou um link de profissional que não existe, aí sim chamamos o 404
  if (!prof) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <Link 
          href="/comodos/sala-de-estar" 
          className="mb-10 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a Sala de Estar
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          
          {/* ── Coluna Esquerda: Foto e Contatos (Sticky) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-36 lg:h-fit"
          >
            <div className="overflow-hidden rounded-2xl bg-bege border border-marrom/5 shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={prof.foto}
                  alt={`Retrato de ${prof.nome}`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="font-playfair text-2xl text-marrom">{prof.nome}</h1>
                <p className="mt-1 font-lato text-[11px] font-semibold uppercase tracking-widest text-terracota/70">
                  {prof.crp}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`https://wa.me/${prof.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-salvia px-4 py-3 font-lato text-sm font-medium text-creme transition-colors hover:bg-marrom"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar pelo WhatsApp
                  </a>
                  
                  {prof.instagram && (
                    <a
                      href={prof.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-marrom/10 bg-white px-4 py-3 font-lato text-sm font-medium text-marrom transition-colors hover:border-terracota hover:bg-terracota/5 hover:text-terracota"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      Acompanhar no Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Coluna Direita: Currículo e Mapa ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col pt-4"
          >
            <h2 className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sobre mim
            </h2>
            <div className="mt-6 space-y-6 font-lato text-base leading-[1.9] text-marrom md:text-lg">
              {prof.bio.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}
            </div>

            <div className="mt-16 h-[1px] w-full bg-marrom/5"></div>

            {/* Mapa da Clínica */}
            <div className="mt-16">
              <h2 className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
                Onde atendo
              </h2>
              <div className="mt-6 flex items-start gap-3 text-marrom">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracota" />
                <p className="font-lato text-base leading-[1.6]">
                  {prof.endereco}
                </p>
              </div>

              {/* Iframe do Google Maps */}
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-marrom/10 bg-bege">
                {prof.mapaUrl ? (
                  <iframe
                    src={prof.mapaUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-marrom/40">
                    Mapa em construção
                  </div>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}