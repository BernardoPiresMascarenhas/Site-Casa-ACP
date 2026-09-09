import { AGENDA } from "@/lib/agenda";
import EventoDetalheClient from "./EventoDetalheClient";

// Gera uma página estática para cada evento da Agenda no build.
export function generateStaticParams() {
  return AGENDA.map((evento) => ({ id: evento.id }));
}

export const dynamicParams = false;

export default function EventoDetalhePage() {
  return <EventoDetalheClient />;
}
