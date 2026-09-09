import { ARTIGOS } from "@/lib/cozinhaLiteraria";
import ArtigoClient from "./ArtigoClient";

// Gera uma página estática para cada artigo da Cozinha Literária no build.
export function generateStaticParams() {
  return ARTIGOS.map((artigo) => ({ id: artigo.id }));
}

export const dynamicParams = false;

export default function ArtigoPage() {
  return <ArtigoClient />;
}
