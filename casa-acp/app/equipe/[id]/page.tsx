"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, MapPin } from "lucide-react";

// O "Banco de Dados" completo com os textos e dados específicos
const EQUIPE_DETALHES = {
  dalissa: {
    nome: "Dalissa Vieira Teixeira",
    crp: "CRP 04/49035",
    foto: "/dalissa.jpeg",
    whatsapp: "5531994437456", 
    instagram: "https://instagram.com/dalissa.psi", 
    endereco: "Rua Barão de Macaúbas, 460 - Sala 1604, Santo Antônio, Belo Horizonte - MG (CEP: 30350-090)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Barao+de+Macaubas,+460+-+Santo+Antonio,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed",
    bio: [
      "Psicóloga clínica, psicoterapeuta e plantonista.",
      "Especialista em Psicologia Clínica pela Universidade Federal de Minas Gerais (UFMG) e em Saúde do Idoso pela Pontifícia Universidade Católica do Paraná (PUC-PR).",
      "Possui formação em Psicoterapia Centrada no Cliente pelo CPHMINAS, em Terapia Breve pelo Abrangente – Centro Mineiro de Terapia Breve, em Antroposofia pela Associação Brasileira de Medicina Antroposófica e em Gerontologia pela UFMG.",
      "Atua como docente em cursos de pós-graduação nas áreas de Psicologia Clínica Existencial e Humanista, Abordagem Centrada na Pessoa e Psicologia Hospitalar.",
      "Possui experiência em Psicologia Clínica, Psicologia Hospitalar e Psicogerontologia, com atuação, nos últimos anos, especialmente nos seguintes temas: Abordagem Centrada na Pessoa, envelhecimento, plantão psicológico, emergências e desastres."
    ]
  },
  eveline: {
    nome: "Eveline Alves de Abreu",
    crp: "CRP 04/5824",
    foto: "/Eveline2.jpeg",
    whatsapp: "5531998341105",
    instagram: "https://instagram.com/evelinealvespsi",
    endereco: "Rua Progresso, 1272 - Sala 106, Padre Eustáquio, Belo Horizonte - MG (CEP: 30720-320)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Progresso,+1272+-+Padre+Eustaquio,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed", 
    bio: [
      "Psicóloga Clínica, Psicoterapeuta e Plantonista.",
      "Graduanda na Pós-Graduação em Fenomenologia, Psicopatologia e Saúde Mental no Instituto Sapientia Cordis.",
      "Possui formação em Psicoterapia Centrada no Cliente pelo CPHMINAS e atuou como Focusing Trainer pelo IBF - Instituto Brasileiro de Focalização.",
      "Psicóloga responsável pela implantação do setor de Psicologia do Projeto Assistencial Novo Céu.",
      "Possui experiência em Psicologia Clínica, Psicologia Hospitalar e Pré-Terapia, com atuação, nos últimos anos, especialmente nos seguintes eixos: Psicopatologia, Saúde Mental, Abordagem Centrada na Pessoa e Plantão Psicológico."
    ]
  },
  lilian: {
    nome: "Lilian Maria Ribeiro Tarabal Silva",
    crp: "CRP 04/47161",
    foto: "/lilian.jpeg",
    whatsapp: "5531993059596",
    instagram: "", 
    endereco: "Rua Rodrigues Caldas, 726 - Sala 1210, Santo Agostinho, Belo Horizonte - MG (CEP: 30190-120)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Rodrigues+Caldas,+726+-+Santo+Agostinho,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed", 
    bio: [
      "Psicóloga, palestrante e psicoterapeuta de Crianças e Adultos.",
      "Especialista em Fenomenologia e Saúde Mental pela FCMMG. Possui formação em Psicoterapia Centrada no Cliente e em Ludoterapia pelo CPHMINAS.",
      "Possui experiência em Psicologia Clínica, atuando nos últimos anos especialmente nas seguintes temáticas: Abordagem Centrada na Pessoa, Ludoterapia, Psicoterapia Experiencial, Focalização, Saúde Mental e psicologia perinatal."
    ]
  },
  hanna: {
    nome: "Hanna Luiza Oliveira Santos Nonato",
    crp: "CRP 04/51491",
    foto: "/hanna.jpeg",
    whatsapp: "5531987848320",
    instagram: "https://instagram.com/hannasantospsi",
    endereco: "Rua Dr. Jarbas Vidal Gomes, 30 - Sala 813, Cidade Nova, Belo Horizonte - MG (CEP: 31700-070)",
    mapaUrl: "https://maps.google.com/maps?q=Rua+Dr.+Jarbas+Vidal+Gomes,+30+-+Cidade+Nova,+Belo+Horizonte+-+MG&t=&z=16&ie=UTF8&iwloc=&output=embed",
    bio: [
      "Psicóloga clínica, plantonista e psicoterapeuta de crianças, adolescentes e adultos.",
      "Graduada em Psicologia pela Faculdade Pitágoras (MG), com formação em Psicoterapia Centrada no Cliente pelo CPHMINAS, MBA em Psicologia Organizacional e Liderança Estratégica pela UNA e especialização em Neurociência e Educação pela UNOPAR.",
      "Atua como palestrante e tem experiência nas áreas de Psicologia Clínica e Educacional, com foco na Abordagem Centrada na Pessoa, Plantão Psicológico, universo da criança e do adolescente, lutos não reconhecidos na perinatalidade e imagem feminina."
    ]
  }
};

export default function PerfilProfissionalPage() {
  const params = useParams();
  const id = params?.id as string;

  // Se o Next.js ainda não injetou o ID, esperamos um milissegundo para não quebrar a tela
  if (!id) return null;

  const prof = EQUIPE_DETALHES[id as keyof typeof EQUIPE_DETALHES];

  // Se a pessoa digitou um link de profissional que não existe, aí sim chamamos o 404
  if (!prof) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        
        {/* Botão Voltar */}
        <Link 
          href="/comodos/sala-de-estar" 
          className="mb-10 inline-flex items-center gap-2 font-lato text-sm font-medium text-marrom/60 transition-colors hover:text-terracota"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para a Sala de Estar
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          
          {/* ── Coluna Esquerda: Foto e Contatos (Sticky) ── */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-36 lg:h-fit"
          >
            <div className="overflow-hidden rounded-2xl bg-bege border border-marrom/5 shadow-sm">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={prof.foto}
                  alt={`Retrato de ${prof.nome}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="font-playfair text-2xl text-marrom">{prof.nome}</h1>
                <p className="mt-1 font-lato text-[11px] font-semibold uppercase tracking-widest text-terracota/70">
                  {prof.crp}
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={`https://wa.me/${prof.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-salvia px-4 py-3 font-lato text-sm font-medium text-creme transition-colors hover:bg-marrom"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Agendar pelo WhatsApp
                  </a>
                  
                  {prof.instagram && (
                    <a
                      href={prof.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-full border border-marrom/10 bg-white px-4 py-3 font-lato text-sm font-medium text-marrom transition-colors hover:border-terracota hover:bg-terracota/5 hover:text-terracota"
                    >
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-4 w-4 shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                      Acompanhar no Instagram
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Coluna Direita: Currículo e Mapa ── */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col pt-4"
          >
            <h2 className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
              Sobre mim
            </h2>
            <div className="mt-6 space-y-6 font-lato text-base leading-[1.9] text-marrom md:text-lg">
              {prof.bio.map((paragrafo, index) => (
                <p key={index}>{paragrafo}</p>
              ))}
            </div>

            <div className="mt-16 h-[1px] w-full bg-marrom/5"></div>

            {/* Mapa da Clínica */}
            <div className="mt-16">
              <h2 className="font-lato text-sm font-semibold uppercase tracking-[0.25em] text-salvia">
                Onde atendo
              </h2>
              <div className="mt-6 flex items-start gap-3 text-marrom">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-terracota" />
                <p className="font-lato text-base leading-[1.6]">
                  {prof.endereco}
                </p>
              </div>

              {/* Iframe do Google Maps */}
              <div className="mt-8 aspect-video w-full overflow-hidden rounded-2xl border border-marrom/10 bg-bege">
                {prof.mapaUrl ? (
                  <iframe
                    src={prof.mapaUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-marrom/40">
                    Mapa em construção
                  </div>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </main>
  );
}