import { HOSPEDES } from "@/lib/hospedes";
import HospedeClient from "./HospedeClient";

// Gera uma página estática (HTML pronto) para cada hóspede no build.
export function generateStaticParams() {
  return HOSPEDES.map((hospede) => ({ id: hospede.id }));
}

// Qualquer id fora da lista vira 404 estático, sem custo de servidor.
export const dynamicParams = false;

export default function HospedePage() {
  return <HospedeClient />;
}
