import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChaoDaCasaSection from "@/components/ChaoDaCasaSection";
import GradeDeComodos from "@/components/GradeDeComodos";
import EquipeSection from "@/components/EquipeSection";
import CozinhaSection from "@/components/CozinhaSection";
import ContatoSection from "@/components/ContatoSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VarandaSection from "@/components/VarandaSection";
import BannerHomePresentes from "@/components/presentes-2027/BannerHomePresentes";
import { BANNER_HOME_ATIVO } from "@/lib/presentes2027";

export default function Home() {
  return (
    <>
      
      <main>
        <HeroSection />
        {/* Campanha de Natal · Coleção 2027 — desligar em lib/presentes2027.ts */}
        {BANNER_HOME_ATIVO && <BannerHomePresentes />}
        <ChaoDaCasaSection />
        <GradeDeComodos />
        <EquipeSection />
        <CozinhaSection />
        <VarandaSection />
        <ContatoSection />
        <WhatsAppButton />
      </main>
    </>
  );
}
