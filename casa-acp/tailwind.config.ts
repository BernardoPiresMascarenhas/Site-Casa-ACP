import type { Config } from "tailwindcss";
 
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        creme: "#FAF5EE",     // fundo principal
        bege: "#F3E8DC",      // fundo de seções alternadas
        marrom: "#4B3A2A",    // texto / títulos
        salvia: "#7C8468",    // primária
        terracota: "#C16A4A", // destaque / links / CTA secundário
      },
      fontFamily: {
        // injetadas via next/font em app/layout.tsx
        playfair: ["var(--font-playfair)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
 
export default config;