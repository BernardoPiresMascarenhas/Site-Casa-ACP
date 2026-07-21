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

export default function Home() {
  return (
    <>
      
      <main>
        <HeroSection />
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
