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

const DESCRICAO =
  "Um espaço para pensar, encontrar e acolher a vida. Inspirada na Abordagem " +
  "Centrada na Pessoa, a Casa ACP reúne clínica, formação e encontro em Belo Horizonte.";

export const metadata: Metadata = {
  // Base para transformar os caminhos relativos abaixo em URLs absolutas —
  // WhatsApp, Facebook e LinkedIn exigem URL absoluta na imagem de preview.
  metadataBase: new URL("https://casaacp.com.br"),

  title: {
    default: "Casa ACP",
    template: "%s · Casa ACP",
  },
  description: DESCRICAO,
  alternates: {
    canonical: "/",
  },

  // Preview ao compartilhar o link (WhatsApp, Instagram, Facebook, LinkedIn…)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "Casa ACP",
    title: "Casa ACP — Clínica, Formação e Encontro",
    description: DESCRICAO,
    // PNG sem perdas, 1200x630: WhatsApp e Facebook ignoram previews em WebP.
    // Gerada a partir da logo (public/logocomfundo.webp), centralizada sobre o creme do fundo.
    images: [
      {
        url: "/og-casa-acp-logo.png",
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Casa ACP — um espaço para pensar, encontrar e acolher a vida.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Casa ACP — Clínica, Formação e Encontro",
    description: DESCRICAO,
    images: ["/og-casa-acp-logo.png"],
  },

  // O favicon e os ícones vêm das convenções de arquivo do App Router:
  // app/favicon.ico, app/icon.png e app/apple-icon.png.
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