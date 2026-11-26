"use client";

import { motion, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

type RevelarProps = {
  children: ReactNode;
  className?: string;
  /** Atraso em segundos, para escalonar elementos vizinhos. */
  atraso?: number;
  /** Deslocamento vertical inicial em px. */
  y?: number;
  as?: "div" | "section" | "article" | "li";
};

// Entrada suave ao rolar a página, no mesmo ritmo das seções da home
// (fade + leve subida, uma única vez). Com "reduzir movimento" ativo no
// sistema, o Framer Motion desliga o deslocamento e mantém só a opacidade.
export default function Revelar({ children, className, atraso = 0, y = 24, as = "div" }: RevelarProps) {
  const Componente = motion[as];
  return (
    <MotionConfig reducedMotion="user">
      <Componente
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: atraso }}
      >
        {children}
      </Componente>
    </MotionConfig>
  );
}
