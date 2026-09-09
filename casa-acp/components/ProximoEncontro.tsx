"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { agendaPorComodo, agendaPorTopico, rotuloDeData } from "@/lib/agenda";

const ACCENTS = {
  terracota: {
    text: "text-terracota",
    bg: "bg-terracota/10",
    border: "border-terracota/20",
    solid: "bg-terracota",
    solidHover: "hover:bg-terracota/90",
  },
  salvia: {
    text: "text-salvia",
    bg: "bg-salvia/10",
    border: "border-salvia/20",
    solid: "bg-salvia",
    solidHover: "hover:bg-salvia/90",
  },
} as const;

interface ProximoEncontroProps {
  // Filtra pelo cômodo de origem do evento (ex.: "sala-de-estudos").
  slug?: string;
  // Filtra por um tópico específico dentro do cômodo (ex.: "clube-de-leitura").
  topico?: string;
  accent?: keyof typeof ACCENTS;
  // Versão reduzida do cartão, usada quando o evento aparece dentro da página de um tópico.
  compact?: boolean;
}

// Mostra, dentro da página do cômodo (ou de um tópico específico), os encontros da Varanda que acontecem ali.
export function ProximoEncontro({ slug, topico, accent = "terracota", compact = false }: ProximoEncontroProps) {
  const eventos = topico ? agendaPorTopico(topico) : slug ? agendaPorComodo(slug) : [];
  if (eventos.length === 0) return null;

  const cores = ACCENTS[accent];

  return (
    <div className={compact ? "mb-12 space-y-4" : "mb-24 space-y-8"}>
      {eventos.map((evento, index) => (
        <motion.section
          key={evento.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${cores.border}`}
        >
          <div className={`flex flex-col md:flex-row md:items-center ${compact ? "gap-4 p-5" : "gap-6 p-8"}`}>
            {evento.imagem ? (
              <div className={`relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl ${compact ? "md:w-32" : "md:w-48"}`}>
                <Image
                  src={evento.imagem}
                  alt={evento.titulo}
                  fill
                  sizes={compact ? "(min-width: 768px) 128px, 100vw" : "(min-width: 768px) 192px, 100vw"}
                  style={{ objectPosition: evento.imagemPosicao }}
                  className="object-cover"
                />
              </div>
            ) : (
              <div className={`flex shrink-0 items-center justify-center rounded-full ${cores.bg} ${cores.text} ${compact ? "h-10 w-10" : "h-14 w-14"}`}>
                <Calendar className={compact ? "h-4 w-4" : "h-6 w-6"} />
              </div>
            )}

            <div className="flex-1">
              <p className={`mb-2 font-lato font-bold uppercase tracking-widest ${cores.text} ${compact ? "text-[11px]" : "text-xs"}`}>
                {evento.data
                  ? `${index === 0 ? "Próximo encontro" : "Também por aqui"} · ${evento.data}`
                  : rotuloDeData(evento)}
              </p>
              <h3 className={`mb-2 font-playfair text-marrom ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>{evento.titulo}</h3>
              <div className={`flex items-center gap-2 font-lato text-xs font-medium text-marrom/60 ${compact ? "mb-3" : "mb-4"}`}>
                <MapPin className="h-3.5 w-3.5" />
                <span>{evento.local}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {evento.inscricaoLink && (
                  <a
                    href={evento.inscricaoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full font-lato font-semibold text-white transition-colors ${cores.solid} ${cores.solidHover} ${compact ? "px-4 py-2 text-xs" : "px-5 py-2.5 text-sm"}`}
                  >
                    {evento.inscricaoLinkLabel ?? "Realizar inscrição"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {evento.detalhes && (
                  <Link
                    href={`/comodos/varanda/agenda/${evento.id}`}
                    className={`inline-flex items-center gap-2 font-lato font-semibold ${cores.text} transition-all hover:gap-3 ${compact ? "text-xs" : "text-sm"}`}
                  >
                    Saiba mais
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </div>

            {evento.detalhes && (
              <Link
                href={`/comodos/varanda/agenda/${evento.id}`}
                className={`flex shrink-0 items-center justify-center self-end rounded-full ${cores.bg} ${cores.text} transition-all hover:opacity-80 md:self-center ${compact ? "h-8 w-8" : "h-10 w-10"}`}
                aria-label={`Ver detalhes do evento ${evento.titulo}`}
              >
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
}
