"use client";

import Link from "next/link";
import { ArrowUp, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    // Só intercepta o clique para fazer o scroll suave se já estivermos na Home
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 96; // Compensação do tamanho do Header fixo
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <footer className="bg-marrom pt-20 text-creme">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-16">
        
        {/* ── Grid Principal ── */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">
          
          {/* Coluna 1: Marca e Descrição */}
          <div className="flex flex-col">
            <span className="font-playfair text-3xl font-medium tracking-wide text-bege">
              Casa ACP
            </span>
            <p className="mt-6 max-w-xs font-lato text-sm font-light leading-relaxed text-creme/70">
              Um espaço para pensar, encontrar e acolher a vida. Inspirada na Abordagem Centrada na Pessoa.
            </p>
            
            {/* Redes Sociais */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://instagram.com/casaacp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-creme/5 transition-colors hover:bg-terracota hover:text-creme text-creme/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/playlist/2k8wVbrVNPaQUfK9w9kxxo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-creme/5 transition-colors hover:bg-terracota hover:text-creme text-creme/70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M7.5 9.5c3-1 7-.8 9.5.8"/>
                  <path d="M8 13c2.5-.8 5.8-.6 7.8.9"/>
                  <path d="M8.5 16.3c2-.6 4.5-.5 6.1.7"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="flex flex-col">
            <h4 className="font-lato text-xs font-semibold uppercase tracking-widest text-salvia">
              Navegação
            </h4>
            <nav className="mt-6 flex flex-col gap-3 font-lato text-sm font-light text-creme/70">
              <Link 
                href="/#chao-da-casa" 
                onClick={(e) => handleScroll(e, "chao-da-casa")}
                className="w-fit transition-colors hover:text-terracota"
              >
                O Chão da Casa
              </Link>
              <Link 
                href="/#comodos" 
                onClick={(e) => handleScroll(e, "comodos")}
                className="w-fit transition-colors hover:text-terracota"
              >
                Os Cômodos
              </Link>
              <Link 
                href="/#equipe" 
                onClick={(e) => handleScroll(e, "equipe")}
                className="w-fit transition-colors hover:text-terracota"
              >
                Sala de Estar (Equipe)
              </Link>
              <Link 
                href="/#cozinha-literaria" 
                onClick={(e) => handleScroll(e, "cozinha-literaria")}
                className="w-fit transition-colors hover:text-terracota"
              >
                Cozinha Literária
              </Link>
              <Link 
                href="/#varanda" 
                onClick={(e) => handleScroll(e, "varanda")}
                className="w-fit transition-colors hover:text-terracota"
              >
                Varanda
              </Link>
              <Link 
                href="/#contato" 
                onClick={(e) => handleScroll(e, "contato")}
                className="w-fit transition-colors hover:text-terracota"
              >
                Contato
              </Link>
            </nav>
          </div>

          {/* Coluna 3: Contato */}
          <div className="flex flex-col">
            <h4 className="font-lato text-xs font-semibold uppercase tracking-widest text-salvia">
              Fale Conosco
            </h4>
            <div className="mt-6 flex flex-col gap-4 font-lato text-sm font-light text-creme/70">
              <a href="mailto:contato@casaacp.com.br" className="flex items-center gap-3 transition-colors hover:text-terracota">
                <Mail className="h-4 w-4 shrink-0" />
                <span>contatocasaacp@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Belo Horizonte, <br /> Minas Gerais</span>
              </div>
            </div>
          </div>

        </div>

        {/* ── Base do Rodapé (Copyright e Voltar ao topo) ── */}
        <div className="mt-20 flex flex-col items-center justify-between border-t border-creme/10 py-8 md:flex-row">
          <p className="font-lato text-xs font-light text-creme/50">
            © {new Date().getFullYear()} Casa ACP. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="group mt-6 flex items-center gap-2 font-lato text-xs font-light text-creme/50 transition-colors hover:text-terracota md:mt-0"
          >
            <span>Voltar ao topo</span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-creme/5 transition-transform group-hover:-translate-y-1 group-hover:bg-terracota/20">
              <ArrowUp className="h-4 w-4" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}