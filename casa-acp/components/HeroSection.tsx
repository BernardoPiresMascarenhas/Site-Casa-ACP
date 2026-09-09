"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

// ── Lista de Imagens do Carrossel ──
const HERO_IMAGES = [
  "/grupo.webp",
  "/hero.webp",
  "/hero2.webp", // Substitua pelo nome da sua segunda imagem
];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Efeito para alternar as imagens a cada 4 segundos (4000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === HERO_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="relative overflow-hidden bg-creme">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 px-6 pt-36 pb-20 md:flex-row lg:gap-16 md:px-10 md:pt-48 md:pb-28">
        
        {/* ── Coluna esquerda: conteúdo ── */}
        <motion.div 
          className="w-full md:w-1/2 lg:w-5/12 pt-2"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p 
            variants={itemVariants}
            className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota"
          >
            Clínica · Formação · Encontro
          </motion.p>

          <motion.h1 
            variants={itemVariants}
            className="mt-6 font-playfair text-4xl leading-[1.15] text-marrom md:text-[3.5rem] lg:text-[3.5rem]"
          >
            Um espaço para <br />
            <em className="font-medium italic text-salvia not-italic md:italic">pensar, encontrar</em> <br />
            e acolher a vida.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="mt-6 max-w-lg font-lato text-base leading-[1.8] text-marrom md:text-lg"
          >
            Inspirada na Abordagem Centrada na Pessoa, a Casa ACP nasce como um espaço de encontros, escuta, reflexão e cuidado — uma casa que começou por dentro.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/#chao-da-casa"
              className="inline-flex items-center justify-center rounded-full bg-salvia px-8 py-3.5 font-lato text-sm font-medium text-creme shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-marrom hover:shadow-md"
            >
              Conheça a Casa
            </Link>
            <Link
              href="/#contato"
              className="inline-flex items-center justify-center rounded-full border border-terracota/40 bg-transparent px-8 py-3.5 font-lato text-sm font-medium text-terracota transition-all duration-300 hover:-translate-y-1 hover:border-terracota hover:bg-terracota/5 hover:shadow-sm"
            >
              Fale conosco
            </Link>
          </motion.div>
        </motion.div>

        {/* ── Coluna direita: Imagem maior, clicável e com carrossel ── */}
        <motion.div 
          className="relative flex w-full justify-center md:w-1/2 lg:w-7/12"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <div className="relative w-full">
            
            {/* Moldura decorativa no fundo */}
            <div className="absolute -inset-4 hidden translate-x-4 translate-y-4 rounded-2xl border border-terracota/30 lg:block"></div>
            
            <Link 
              href="/#comodos"
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-bege shadow-sm md:aspect-[3/2] cursor-pointer"
              aria-label="Ir para a seção de cômodos"
            >
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={HERO_IMAGES[currentImageIndex]}
                    alt={`Imagem da Casa ACP ${currentImageIndex + 1}`}
                    fill
                    priority={currentImageIndex === 0}
                    // A MUDANÇA ESTÁ AQUI NA CLASSNAME ABAIXO:
                    className={`object-cover transition-transform duration-[10000ms] ease-linear group-hover:scale-110 ${
                      currentImageIndex === 0 ? "object-[center_42%]" : "object-center"
                    }`}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </motion.div>
              </AnimatePresence>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}