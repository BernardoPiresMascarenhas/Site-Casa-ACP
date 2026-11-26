import { EB_Garamond } from "next/font/google";

// Fonte das artes da Coleção 2027 (títulos e itálicos), conforme o briefing.
// Usada apenas na página /presentes-2027: as fontes globais do site
// (Playfair Display e Lato) não mudam.
export const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

/** Classe utilitária do Tailwind para aplicar a fonte da campanha. */
export const FONTE_GARAMOND = "font-[family-name:var(--font-garamond)]";
