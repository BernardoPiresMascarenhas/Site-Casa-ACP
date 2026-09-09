import { CONTEUDOS } from "@/lib/salaDeEstudos";
import ConteudoEstudoClient from "./ConteudoEstudoClient";

// Gera uma página estática para cada conteúdo da Sala de Estudos no build.
export function generateStaticParams() {
  return CONTEUDOS.map((conteudo) => ({ slug: conteudo.slug }));
}

export const dynamicParams = false;

export default function ConteudoEstudoPage() {
  return <ConteudoEstudoClient />;
}
