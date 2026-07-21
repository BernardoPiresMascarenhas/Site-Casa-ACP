"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavLink {
  id: string;
  label: string;
  isRoute: boolean;
  path?: string;
}

const navLinks: NavLink[] = [
  { id: "chao-da-casa", label: "Chão", isRoute: false },
  { id: "comodos", label: "Cômodos", isRoute: false },
  { id: "equipe", label: "Sala de Estar", isRoute: false },
  { id: "cozinha-literaria", label: "Cozinha Literária", isRoute: false },
  { id: "varanda", label: "Varanda", isRoute: false },
  { id: "contato", label: "Contato", isRoute: false },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const isSolid = scrolled || !isHome;


  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Bloqueia a verificação se não estiver na página Home
      if (window.location.pathname !== "/") {
        setActiveSection("");
        return;
      }

      const anchorLinks = navLinks.filter((l) => !l.isRoute);
      const scrollPos = window.scrollY + window.innerHeight / 3;
      
      let currentSection = "";
      for (let i = anchorLinks.length - 1; i >= 0; i--) {
        const sec = document.getElementById(anchorLinks[i].id);
        // Usando offsetTop novamente: super leve, não engasga a tela e devolve o "deslizamento" fluido!
        if (sec && sec.offsetTop <= scrollPos) {
          currentSection = anchorLinks[i].id;
          break;
        }
      }
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    setTimeout(onScroll, 100); 
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: any) => {
    if (isMenuOpen) setIsMenuOpen(false);

    if (link.isRoute) return; 

    e.preventDefault();

    if (pathname === "/") {
      const element = document.getElementById(link.id);
      if (element) {
        const headerOffset = 96;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    } else {
      router.push(`/#${link.id}`);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isSolid
            ? "bg-creme/90 backdrop-blur-xl shadow-sm border-b border-marrom/10"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div
            className={`flex justify-between items-center transition-all duration-500 ${
              scrolled ? "h-20 md:h-24" : "h-24 md:h-32"
            }`}
          >
            {/* ── Esquerda: Logo ── */}
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === "/") handleNavClick(e, { id: "home", isRoute: false });
              }}
              className="group flex items-center gap-4 transition-transform duration-300 hover:scale-[1.02]"
              aria-label="Página inicial"
            >
              <Image
                src="/logo3.png"
                alt="Logo Casa ACP"
                width={160}
                height={160}
                priority
                className={`h-auto object-contain transition-all duration-500 ${
                  scrolled ? "w-16 md:w-20" : "w-24 md:w-32"
                }`}
              />
              <div className="hidden sm:flex flex-col leading-tight">
                <span className={`font-playfair font-medium text-marrom transition-all duration-500 ${
                  scrolled ? "text-2xl md:text-3xl" : "text-3xl md:text-4xl"
                }`}>
                  Casa ACP
                </span>
              </div>
            </Link>

            {/* ── Direita: Navegação + Redes + CTA ── */}
            <div className="hidden lg:flex items-center gap-8">
              
              <nav className="flex items-center gap-2">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.id}
                      href={link.path || "/"}
                      className="relative px-4 py-2 font-lato text-[15px] font-medium transition-colors rounded-full text-marrom/80 hover:text-terracota"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      key={link.id}
                      href={`/#${link.id}`}
                      onClick={(e) => handleNavClick(e, link)}
                      className={`relative px-4 py-2 font-lato text-[15px] font-medium transition-colors rounded-full ${
                        activeSection === link.id
                          ? "text-terracota"
                          : "text-marrom/80 hover:text-terracota"
                      }`}
                    >
                      {link.label}
                      {/* Removido o bloqueio extra do JSX, deixando a animação livre para deslizar */}
                      {activeSection === link.id && (
                        <motion.span
                          layoutId="activePill"
                          className="absolute inset-0 -z-10 rounded-full bg-terracota/10"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </a>
                  )
                ))}
              </nav>

              <div className="h-6 w-[1px] bg-marrom/20"></div>

              <div className="flex items-center gap-5">
                <a
                  href="https://instagram.com/casaacp"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center rounded-full text-marrom/60 hover:text-terracota hover:bg-terracota/10 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                
                <a
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 bg-salvia text-creme text-[14px] font-medium rounded-full hover:bg-terracota transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-creme/80 backdrop-blur text-marrom hover:bg-terracota/10 transition-colors border border-marrom/10"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-creme/98 backdrop-blur-xl pt-28 px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="flex flex-col items-start gap-2 max-w-md mx-auto"
            >
              {navLinks.map((link, idx) => {
                const isAnchor = !link.isRoute;
                const active = isAnchor && activeSection === link.id;
                
                const linkContent = (
                  <>
                    <span className="text-sm text-marrom/40 mr-4 align-middle font-lato font-normal">
                      0{idx + 1}
                    </span>
                    {link.label}
                  </>
                );

                const linkClasses = `w-full py-5 px-4 rounded-2xl font-playfair text-3xl font-medium transition-all border-b border-marrom/10 ${
                  active ? "text-terracota" : "text-marrom hover:text-terracota"
                }`;

                return isAnchor ? (
                  <motion.a
                    key={link.id}
                    href={`/#${link.id}`}
                    onClick={(e) => handleNavClick(e, link)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + idx * 0.05, duration: 0.4 }}
                    className={linkClasses}
                  >
                    {linkContent}
                  </motion.a>
                ) : (
                  <Link
                    key={link.id}
                    href={link.path || "/"}
                    onClick={() => setIsMenuOpen(false)}
                    className={linkClasses}
                  >
                    {linkContent}
                  </Link>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="w-full mt-10 space-y-4"
              >
                <a
                  href="https://wa.me/5531999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-salvia text-creme text-lg font-medium rounded-full hover:bg-terracota transition-colors"
                >
                  Falar no WhatsApp
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;