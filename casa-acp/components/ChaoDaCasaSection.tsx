"use client";

import { motion, Variants } from "framer-motion"; 

export default function ChaoDaCasaSection() {
  const containerVariants: Variants = { 
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = { 
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="chao-da-casa" className="relative overflow-hidden bg-bege">
      
      {/* ── Elementos decorativos de fundo ── */}
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-terracota/10 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-salvia/10 blur-3xl"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-10 md:py-32"
      >
        {/* ── Coluna Esquerda ── */}
        <div className="flex flex-col space-y-6">
          <motion.div variants={itemVariants}>
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-terracota">
              O chão desta Casa
            </p>
            <h2 className="mt-4 font-playfair text-3xl leading-tight text-marrom md:text-5xl">
              A Abordagem <br /> Centrada na Pessoa
            </h2>
            {/* Linha decorativa (rule) */}
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="font-lato text-base leading-[1.9] text-marrom md:text-lg"
          >
            A Casa ACP nasce inspirada pela perspectiva desenvolvida por Carl
            Rogers, sustentada por uma profunda confiança no humano e nas
            condições relacionais que favorecem crescimento, elaboração e maior
            aproximação de si.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-lato text-base leading-[1.9] text-marrom md:text-lg"
          >
            Esse olhar nos convida a relações menos baseadas em controle e mais
            enraizadas em presença, empatia, autenticidade e aceitação.
          </motion.p>

          <motion.blockquote
            variants={itemVariants}
            className="mt-6 border-l-2 border-terracota pl-6 font-playfair text-xl italic leading-relaxed text-marrom md:text-2xl"
          >
            "O crescimento humano floresce quando há compreensão empática,
            consideração positiva incondicional e congruência — algo na pessoa
            pode se reorganizar por dentro."
          </motion.blockquote>
        </div>

        {/* ── Coluna Direita ── */}
        <div className="flex flex-col space-y-6 md:pt-4">
          <motion.p
            variants={itemVariants}
            className="font-lato text-base leading-[1.9] text-marrom md:text-lg"
          >
            Na Abordagem Centrada na Pessoa, a relação ocupa um lugar central: é
            nela que a pessoa pode se sentir recebida, escutada e acompanhada em
            sua travessia, reconhecendo com mais liberdade aquilo que sente,
            deseja, teme e busca.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-lato text-base leading-[1.9] text-marrom md:text-lg"
          >
            A experiência encontra espaço, a palavra encontra passagem, e a vida
            — mesmo em seus momentos mais difíceis — pode retomar movimento.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="font-lato text-base leading-[1.9] text-marrom md:text-lg"
          >
            É sobre esse chão que a Casa ACP está sendo construída: um chão
            feito de escuta, presença, confiança e compromisso com uma
            psicologia profundamente humana.
          </motion.p>

          {/* Bloco de fechamento com destaque */}
          <motion.div
            variants={itemVariants}
            className="mt-6 rounded-r-xl border-l-4 border-salvia bg-salvia/10 p-6 backdrop-blur-sm"
          >
            <p className="font-playfair text-lg font-medium leading-snug text-marrom md:text-xl">
              É desse chão que nasce a Casa. E é dele que também nasce a escuta
              que desejamos cultivar por aqui.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}