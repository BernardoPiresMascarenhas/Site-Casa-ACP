"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, ExternalLink } from "lucide-react";
import { agendaPorComodo } from "@/lib/agenda";

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
  slug: string;
  accent?: keyof typeof ACCENTS;
}

// Mostra, dentro da página do cômodo, os encontros da Varanda que acontecem ali.
export function ProximoEncontro({ slug, accent = "terracota" }: ProximoEncontroProps) {
  const eventos = agendaPorComodo(slug);
  if (eventos.length === 0) return null;

  const cores = ACCENTS[accent];

  return (
    <div className="mb-24 space-y-8">
      {eventos.map((evento, index) => (
        <motion.section
          key={evento.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className={`overflow-hidden rounded-3xl border bg-white shadow-sm ${cores.border}`}
        >
          <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center">
            {evento.imagem ? (
              <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-2xl md:w-48">
                <Image
                  src={evento.imagem}
                  alt={evento.titulo}
                  fill
                  sizes="(min-width: 768px) 192px, 100vw"
                  className="object-cover"
                />
              </div>
            ) : (
              <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${cores.bg} ${cores.text}`}>
                <Calendar className="h-6 w-6" />
              </div>
            )}

            <div className="flex-1">
              <p className={`mb-2 font-lato text-xs font-bold uppercase tracking-widest ${cores.text}`}>
                {index === 0 ? "Próximo encontro" : "Também por aqui"} · {evento.data}
              </p>
              <h3 className="mb-2 font-playfair text-xl text-marrom md:text-2xl">{evento.titulo}</h3>
              <div className="mb-4 flex items-center gap-2 font-lato text-xs font-medium text-marrom/60">
                <MapPin className="h-3.5 w-3.5" />
                <span>{evento.local}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {evento.inscricaoLink && (
                  <a
                    href={evento.inscricaoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-lato text-sm font-semibold text-white transition-colors ${cores.solid} ${cores.solidHover}`}
                  >
                    Realizar inscrição
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {evento.detalhes && (
                  <Link
                    href={`/comodos/varanda/agenda/${evento.id}`}
                    className={`inline-flex items-center gap-2 font-lato text-sm font-semibold ${cores.text} transition-all hover:gap-3`}
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
                className={`flex h-10 w-10 shrink-0 items-center justify-center self-end rounded-full ${cores.bg} ${cores.text} transition-all hover:opacity-80 md:self-center`}
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
