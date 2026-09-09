import { TOPICOS_JARDIM } from "@/lib/jardim";
import TopicoJardimClient from "./TopicoJardimClient";

// Gera uma página estática para cada tópico do Jardim no build.
export function generateStaticParams() {
  return TOPICOS_JARDIM.map((topico) => ({ slug: topico.slug }));
}

export const dynamicParams = false;

export default function TopicoJardimPage() {
  return <TopicoJardimClient />;
}
