"use client";

import Link from "next/link";
import { motion, MotionConfig } from "framer-motion";
import { ArrowRight } from "lucide-react";
import BannerCampanhaImagem from "./BannerCampanhaImagem";
import { ROTA_PRESENTES } from "@/lib/presentes2027";

// Banner da Coleção 2027 na página inicial, logo após o Hero.
// Liga/desliga em lib/presentes2027.ts (BANNER_HOME_ATIVO).
//
// O cartão inteiro é um único link. A arte fica intacta em cima e a chamada
// "Conheça nossos presentes de Natal" vive numa faixa própria logo abaixo,
// no mesmo marfim do fundo da arte, para nunca sobrepor o desenho.
export default function BannerHomePresentes() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="banner-presentes-cta" className="bg-creme px-4 pb-20 pt-4 sm:px-6 md:px-10 md:pb-28 md:pt-8">
        <motion.div
          className="mx-auto max-w-7xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href={ROTA_PRESENTES}
            aria-labelledby="banner-presentes-cta"
            className="group block overflow-hidden rounded-[1.75rem] border border-marrom/10 bg-[#F8F0E3] shadow-[0_24px_60px_-36px_rgba(75,58,42,0.45)] outline-none transition-[box-shadow,transform] duration-500 ease-out hover:shadow-[0_32px_70px_-34px_rgba(75,58,42,0.55)] focus-visible:ring-2 focus-visible:ring-terracota focus-visible:ring-offset-4 focus-visible:ring-offset-creme active:scale-[0.995] motion-reduce:transition-none"
          >
            <div className="overflow-hidden">
              <BannerCampanhaImagem className="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.012] motion-reduce:transition-none motion-reduce:group-hover:scale-100" />
            </div>

            <div className="flex items-center justify-between gap-4 border-t border-marrom/10 px-5 py-4 sm:px-8 md:px-10 md:py-5">
              <span
                id="banner-presentes-cta"
                className="font-lato text-[15px] font-semibold text-marrom [text-wrap:balance] sm:tracking-wide transition-colors duration-300 group-hover:text-terracota md:text-base"
              >
                Conheça nossos presentes de Natal
              </span>
              <span
                aria-hidden="true"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-terracota/40 text-terracota transition-all duration-300 group-hover:border-terracota group-hover:bg-terracota group-hover:text-creme"
              >
                <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transition-none" />
              </span>
            </div>
          </Link>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
