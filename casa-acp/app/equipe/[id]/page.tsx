import { EQUIPE_DETALHES } from "@/lib/equipe";
import PerfilProfissionalClient from "./PerfilProfissionalClient";

// Gera uma página estática (HTML pronto) para cada profissional no build.
// Sem isto, o Next renderizava esta rota no servidor a CADA acesso.
export function generateStaticParams() {
  return Object.keys(EQUIPE_DETALHES).map((id) => ({ id }));
}

// Qualquer id fora da lista vira 404 estático, sem custo de servidor.
export const dynamicParams = false;

export default function PerfilProfissionalPage() {
  return <PerfilProfissionalClient />;
}
