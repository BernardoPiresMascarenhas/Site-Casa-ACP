import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

// IMPORTANTE: Verifique se o caminho da sua pasta components está correto.
// Se os componentes estiverem na raiz (fora de app), use "@/components/Header"
import Header from "@/components/Header"; 
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Títulos H1/H2 — regular + itálico (usado nas citações)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Corpo e botões
// Corpo e botões
const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"], // Pesos oficiais suportados pela Lato
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa ACP",
  description: "Um espaço para pensar, encontrar e acolher a vida.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${lato.variable} scroll-smooth`}>
      <body className="bg-creme font-lato text-marrom antialiased flex min-h-screen flex-col">
        <Header />
        
        {/* O main com flex-1 empurra o Footer sempre para o final da tela */}
        <main className="flex-1">
          {children}
        </main>
        
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}