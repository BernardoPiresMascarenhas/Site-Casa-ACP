"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Shield, Sparkles, Users } from "lucide-react";

export default function AtendimentoPsicologicoPage() {
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
            href="/comodos/sala-da-escuta"
            className="mb-12 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a Sala da Escuta
          </Link>
        </motion.div>

        {/* ── Cabeçalho ── */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-salvia/10 text-salvia">
              <Heart className="h-8 w-8" />
            </div>
            <p className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sala da Escuta
            </p>
            <h1 className="mt-4 font-playfair text-4xl leading-tight text-marrom md:text-5xl lg:text-6xl">
              Atendimento Psicológico
            </h1>
            <div className="mt-8 h-[1px] w-16 bg-terracota/40"></div>
          </div>

          <div className="mt-12 flex justify-center">
            <ul className="grid w-full max-w-3xl grid-cols-1 gap-4 rounded-2xl bg-white p-8 shadow-sm border border-marrom/5 font-lato text-sm md:grid-cols-3 md:text-base text-marrom/80">
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 shrink-0 text-terracota/60 mt-0.5" />
                <span><strong>Público:</strong> Adultos, casais, crianças e adolescentes</span>
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

        

        {/* ── Modalidades de Atendimento ── */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-2"
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
          <div className="rounded-2xl bg-white p-8 border border-marrom/5">
            <h3 className="font-playfair text-2xl text-terracota mb-4">Atendimento com Adultos</h3>
            <p className="font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              A psicoterapia oferece um espaço de escuta, acolhimento e reflexão, no qual a pessoa pode
              compreender mais profundamente suas experiências, sentimentos e formas de se relacionar. Ao
              longo do processo terapêutico, torna-se possível elaborar conflitos, reconhecer necessidades,
              fortalecer recursos internos e construir caminhos mais coerentes com aquilo que se vive e se
              deseja para a própria vida.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 border border-marrom/5">
            <h3 className="font-playfair text-2xl text-terracota mb-4">Atendimento com Casais</h3>
            <p className="font-lato text-base leading-[1.8] text-marrom/80 text-justify">
              Na psicoterapia de casal, cada pessoa encontra espaço para expressar suas vivências, necessidades
              e sentimentos dentro da relação, sendo escutada em sua singularidade. O processo favorece a
              compreensão dos conflitos e das formas de comunicação construídas pelo casal, contribuindo para
              relações mais conscientes, respeitosas e autênticas. Também pode acompanhar momentos de crise,
              transformações, decisões e reorganizações da vida compartilhada.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
