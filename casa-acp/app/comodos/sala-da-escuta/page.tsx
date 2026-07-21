"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Clock, ArrowLeft, Shield, Users, Sparkles } from "lucide-react";

export default function SalaDaEscutaPage() {
  return (
    <main className="min-h-screen bg-creme pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            href="/#comodos" 
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para os Cômodos
          </Link>
        </motion.div>

        {/* ── Cabeçalho e Introdução ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col items-center text-center">
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sala da Escuta
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Espaços de cuidado e presença
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-14 flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
            {/* Foto da Sala da Escuta */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-marrom/5 shadow-sm md:w-1/2">
              <Image
                src="/saladeescuta.png"
                alt="Sala da Escuta da Casa ACP"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-6 font-lato text-base leading-[2] text-marrom/90 md:w-1/2 md:text-lg">
              <p>
                A Sala da Escuta habita as modalidades de cuidado psicológico que a Casa oferece.
                Neste cômodo, o tempo funciona de outro jeito. Aqui, cada pessoa pode chegar no seu
                tempo e do seu jeito.
              </p>
              <p>
                Escuta qualificada, ética e pautada na Abordagem Centrada na Pessoa, para que cada
                pessoa seja acolhida em suas necessidades no momento em que está.
              </p>
              <p className="font-medium text-terracota">
                Este cômodo existe para que você possa se olhar e se cuidar.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Cards de Serviços (Transformando a Tabela em Layout) ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-24 grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {/* Card Atendimento Psicológico */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-marrom/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-salvia/10 text-salvia">
                <Heart className="h-6 w-6" />
              </div>
              <h2 className="font-playfair text-2xl text-marrom">Atendimento Psicológico</h2>
            </div>
            <ul className="space-y-4 font-lato text-sm md:text-base text-marrom/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Público:</strong> Adultos, crianças e adolescentes</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Modalidade:</strong> Presencial ou Online</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Dinâmica:</strong> Processo psicoterapêutico contínuo</span>
              </li>
            </ul>
          </div>

          {/* Card Plantão Psicológico */}
          <div className="flex flex-col rounded-2xl bg-white p-8 shadow-sm border border-marrom/5">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-terracota/10 text-terracota">
                <Clock className="h-6 w-6" />
              </div>
              <h2 className="font-playfair text-2xl text-marrom">Plantão Psicológico</h2>
            </div>
            <ul className="space-y-4 font-lato text-sm md:text-base text-marrom/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Público:</strong> Maiores de 18 anos</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Modalidade:</strong> Presencial</span>
              </li>
              <li className="flex items-start gap-3">
                <Sparkles className="h-5 w-5 shrink-0 text-salvia/60 mt-0.5" />
                <span><strong>Dinâmica:</strong> Atendimento pontual (não substitui processo contínuo)</span>
              </li>
            </ul>
          </div>
        </motion.section>

        {/* ── Sobre a Psicoterapia ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div>
            <h3 className="font-playfair text-3xl text-marrom mb-6">O que é a psicoterapia?</h3>
            <div className="space-y-5 font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              <p>
                A psicoterapia é um espaço de encontro, escuta e cuidado, que favorece a autocompreensão e o 
                desenvolvimento pessoal. Por meio de uma relação pautada na confiança, na empatia, na aceitação 
                e na autenticidade, a pessoa encontra um ambiente seguro para expressar sentimentos, emoções, 
                pensamentos, desejos e experiências que atravessam sua vida.
              </p>
              <p>
                Ao longo desse processo, torna-se possível ampliar a consciência de si, reconhecer e ressignificar 
                vivências, fortalecer recursos pessoais e descobrir formas mais autênticas de ser e de estar no mundo.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-playfair text-3xl text-marrom mb-6">Quando fazer psicoterapia?</h3>
            <div className="space-y-5 font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              <p>
                A psicoterapia pode ser buscada em diferentes momentos da vida, não apenas diante do sofrimento 
                intenso ou de situações de crise. Ela também é um caminho para quem deseja compreender melhor 
                a si mesmo, cuidar das próprias relações, atravessar mudanças, lidar com desafios ou simplesmente 
                viver de forma mais consciente e integrada.
              </p>
            </div>
          </div>
        </motion.section>

        {/* ── Citação Carl Rogers ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 flex justify-center"
        >
          <div className="relative max-w-4xl rounded-3xl bg-salvia p-10 md:p-16 text-center shadow-md">
            <svg className="absolute top-6 left-6 h-12 w-12 text-creme/20 md:top-10 md:left-10" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <blockquote className="relative z-10 font-playfair text-xl italic leading-relaxed text-creme md:text-2xl">
              "Quando efetivamente ouço uma pessoa e os significados que lhe são importantes 
              naquele momento, ouvindo não suas palavras, mas ela mesma, e quando lhe 
              demonstro que ouvi seus significados pessoais e íntimos, muitas coisas acontecem. Há, 
              em primeiro lugar, um olhar agradecido. Ela se sente aliviada. Quer falar mais sobre 
              seu mundo. Sente-se impelida em direção a um novo sentido de liberdade. Torna-se 
              mais aberta ao processo de mudança."
            </blockquote>
            <p className="mt-6 font-lato text-sm font-semibold uppercase tracking-widest text-creme/80">
              — Carl Rogers (1983)
            </p>
          </div>
        </motion.section>

        {/* ── Crianças e Adolescentes ── */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-24 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20"
        >
          <div className="rounded-2xl bg-white p-8 border border-marrom/5">
            <h3 className="font-playfair text-2xl text-terracota mb-4">Atendimento com Crianças</h3>
            <p className="font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              Um espaço de cuidado que respeita a singularidade da infância, através do brincar, da expressão e 
              do vínculo, a psicoterapia favorece o desenvolvimento emocional da criança e fortalece seus 
              recursos para lidar com as experiências da vida. A participação da família integra o processo 
              terapêutico, contribuindo para uma compreensão mais ampla do contexto em que a criança vive.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 border border-marrom/5">
            <h3 className="font-playfair text-2xl text-terracota mb-4">Atendimento com Adolescentes</h3>
            <p className="font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              A adolescência é um tempo de transformações, descobertas e desafios. A psicoterapia oferece um 
              espaço seguro de escuta e acolhimento, onde o adolescente pode expressar suas vivências, elaborar 
              conflitos, fortalecer sua autonomia e construir formas mais autênticas de relacionar-se consigo 
              mesmo e com o mundo.
            </p>
          </div>
        </motion.section>

        {/* ── Plantão Psicológico (Deep Dive) ── */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-bege p-10 md:p-16 border border-marrom/10"
        >
          <div className="mb-10 text-center">
            <h2 className="font-playfair text-3xl text-marrom md:text-4xl">O Plantão Psicológico</h2>
            <p className="mt-4 font-lato text-lg text-marrom/70 max-w-2xl mx-auto">
              É um atendimento pontual, de escuta e acolhimento, e não substitui o processo 
              psicoterapêutico contínuo nem atendimento emergencial médico ou psiquiátrico.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">O que é?</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                O Plantão Psicológico é um tipo de intervenção que acolhe a pessoa no momento mais próximo de 
                sua necessidade, ajudando-a a lidar melhor com seus recursos e limites. A ideia central desta 
                modalidade é oferecer a quem procura, a possibilidade de ser acolhida e de ser ouvida para, então, ir 
                compreendendo como está diante de sua própria vida e ter a chance de despertar para os devidos 
                cuidados para consigo mesma.
              </p>
            </div>
            
            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">A quem é destinado?</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                Às pessoas que buscam apoio emocional, um espaço de escuta sensível onde possam ouvir a si 
                mesmas, acompanhadas por um(a) profissional, onde possam compartilhar seus sentimentos e 
                experiências no momento mais próximo de sua urgência.
              </p>
              <p className="mt-4 font-lato text-sm font-semibold text-terracota">
                *Atendimento destinado para maiores de 18 anos.
              </p>
            </div>

            <div>
              <h4 className="font-lato text-sm font-bold uppercase tracking-widest text-salvia mb-4">Sobre o atendimento</h4>
              <p className="font-lato text-base leading-[1.7] text-marrom/80">
                Não é necessário agendamento prévio. O atendimento será realizado por ordem de chegada, dentro 
                dos dias e horários disponibilizados em nosso calendário.
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}