import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, Lock, PenLine, Presentation } from "lucide-react";
import BannerCampanhaImagem from "@/components/presentes-2027/BannerCampanhaImagem";
import CartaoMaterial from "@/components/presentes-2027/CartaoMaterial";
import Revelar from "@/components/presentes-2027/Revelar";
import { FONTE_GARAMOND, garamond } from "@/components/presentes-2027/fonte";
import { BANNER, MATERIAIS, ROTA_PRESENTES, SITE_URL } from "@/lib/presentes2027";

// ── SEO ── (título e descrição recomendados no briefing)
const TITULO_SEO = "Calendário e Planner 2027 gratuitos | Casa ACP";
const DESCRICAO_SEO =
  "Receba o calendário e o planner 2027 da Casa ACP, com imagens acolhedoras, palavras de Carl Rogers " +
  "e espaços para seus compromissos e reflexões. Versões gratuitas para impressão, preenchimento digital e edição.";
const URL_PAGINA = `${SITE_URL}${ROTA_PRESENTES}`;
const IMAGEM_OG = `${SITE_URL}/presentes-2027/og-presentes-2027.png`;

export const metadata: Metadata = {
  // `absolute` evita o sufixo "· Casa ACP" do template global (o título já o contém).
  title: { absolute: TITULO_SEO },
  description: DESCRICAO_SEO,
  alternates: { canonical: URL_PAGINA },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: URL_PAGINA,
    siteName: "Casa ACP",
    title: TITULO_SEO,
    description: DESCRICAO_SEO,
    images: [{ url: IMAGEM_OG, width: 1200, height: 630, type: "image/png", alt: BANNER.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO_SEO,
    description: DESCRICAO_SEO,
    images: [IMAGEM_OG],
  },
};

const ORIENTACOES = [
  {
    icone: FileText,
    titulo: "Para imprimir",
    texto: "Baixe a versão PDF para impressão. Imprima em A4, na orientação indicada.",
  },
  {
    icone: PenLine,
    titulo: "Para preencher no computador ou celular",
    texto:
      "Baixe a versão PDF preenchível, abra em um leitor compatível com formulários PDF (por exemplo, " +
      "Adobe Acrobat Reader), digite nos campos e salve uma cópia local. Alguns visualizadores de " +
      "navegador e aplicativos móveis podem não preservar os campos.",
  },
  {
    icone: Presentation,
    titulo: "Para editar a diagramação",
    texto:
      "Utilize os arquivos PowerPoint (.pptx) em um editor compatível. A aparência poderá variar se as " +
      "fontes não estiverem instaladas. As capas são imagens preservadas, e não elementos de texto editáveis.",
  },
] as const;

export default function Presentes2027Page() {
  return (
    // O <main> já vem do layout global: aqui é apenas um contêiner.
    <div className={`${garamond.variable} bg-[#F8F0E3] text-marrom`}>
      {/* ── Seção 1 · Apresentação da campanha ── */}
      <section aria-labelledby="titulo-presentes" className="px-4 pb-20 pt-32 sm:px-6 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full font-lato text-sm font-medium text-marrom/70 outline-none transition-colors hover:text-terracota focus-visible:ring-2 focus-visible:ring-terracota md:mb-10"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Voltar para a página inicial
          </Link>

          {/* O título já está desenhado na arte; o H1 em HTML fica disponível
              para leitores de tela e buscadores sem repetir o texto na tela. */}
          <h1 id="titulo-presentes" className="sr-only">
            Da nossa Casa para a sua.
          </h1>

          <Revelar y={16}>
            <div className="overflow-hidden rounded-[1.75rem] border border-marrom/10 shadow-[0_28px_70px_-40px_rgba(75,58,42,0.5)]">
              <BannerCampanhaImagem prioridade />
            </div>
          </Revelar>

          <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:gap-20">
            <Revelar className="max-w-2xl lg:col-span-5">
              <p className={`${FONTE_GARAMOND} text-[1.85rem] italic leading-[1.25] text-marrom md:text-[2.25rem] lg:text-[2.6rem]`}>
                Um presente para fazer companhia à sua vida em 2027.
              </p>
              <div aria-hidden="true" className="mt-8 h-px w-16 bg-terracota/60" />
            </Revelar>

            <Revelar atraso={0.12} className="max-w-2xl lg:col-span-7 lg:max-w-none">
              <div className="space-y-6 font-lato text-base leading-[1.9] text-marrom/90 md:text-[1.0625rem]">
                <p>
                  Neste final de ano, queremos oferecer algo que possa fazer companhia a você ao longo de 2027.
                  Preparamos, com carinho, um calendário e um planner que acolham seus compromissos, seus
                  encontros, suas aprendizagens e os tantos movimentos que fazem parte da sua vida.
                </p>
                <p>
                  Na companhia das palavras de Carl Rogers e das imagens dos ambientes da nossa Casa, convidamos
                  você a habitar o tempo de maneira singular, reservando espaço também para aquilo que lhe é
                  significativo.
                </p>
                <p>
                  Escolha a forma de utilização que melhor lhe convier. Os materiais estão disponíveis
                  gratuitamente em versões para impressão, preenchimento digital e edição.
                </p>
                <p>
                  Receba este presente com o nosso afeto. Desejamos um Natal cheio de bons encontros e um
                  significativo 2027!
                </p>
              </div>

              <div className="mt-10 border-l border-terracota/40 pl-6">
                <p className={`${FONTE_GARAMOND} text-xl italic text-salvia`}>Com carinho,</p>
                <p className={`${FONTE_GARAMOND} mt-1 text-xl text-marrom md:text-[1.375rem]`}>
                  Dalissa, Eveline, Hanna e Lilian
                </p>
                <p className="mt-2 font-lato text-xs font-semibold uppercase tracking-[0.25em] text-marrom/70">
                  Casa ACP
                </p>
              </div>
            </Revelar>
          </div>
        </div>
      </section>

      {/* ── Seção 2 · Receba os nossos presentes ── */}
      <section aria-labelledby="titulo-materiais" className="bg-white/60 px-4 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Revelar className="mx-auto max-w-2xl text-center">
            <h2 id="titulo-materiais" className={`${FONTE_GARAMOND} text-[2.25rem] leading-tight text-marrom md:text-5xl`}>
              Receba os nossos presentes!
            </h2>
            <div aria-hidden="true" className="mx-auto mt-6 h-px w-16 bg-terracota/60" />
            <p className="mt-6 font-lato text-base leading-[1.85] text-marrom/85 md:text-lg">
              Escolha a forma de utilização que mais combina com você e com o seu modo de habitar a vida.
            </p>
          </Revelar>

          <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-28">
            {MATERIAIS.map((material, indice) => (
              <CartaoMaterial key={material.id} material={material} indice={indice} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Seção 3 · Como utilizar os arquivos ── */}
      <section aria-labelledby="titulo-orientacoes" className="px-4 py-20 sm:px-6 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Revelar className="max-w-2xl">
            <h2 id="titulo-orientacoes" className={`${FONTE_GARAMOND} text-[2.25rem] leading-tight text-marrom md:text-5xl`}>
              Como utilizar os arquivos
            </h2>
            <div aria-hidden="true" className="mt-6 h-px w-16 bg-terracota/60" />
          </Revelar>

          <ul className="mt-12 grid grid-cols-1 gap-5 md:mt-16 lg:grid-cols-3 lg:gap-6">
            {ORIENTACOES.map(({ icone: Icone, titulo, texto }, indice) => (
              <Revelar as="li" key={titulo} atraso={indice * 0.1} className="flex flex-col rounded-3xl border border-marrom/10 bg-white/70 p-7 md:p-8">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full bg-salvia/10 text-salvia">
                  <Icone className="h-5 w-5" />
                </span>
                <h3 className={`${FONTE_GARAMOND} mt-6 text-[1.5rem] leading-snug text-marrom`}>{titulo}</h3>
                <p className="mt-3 font-lato text-[15px] leading-[1.85] text-marrom/85">{texto}</p>
              </Revelar>
            ))}
          </ul>

          <Revelar atraso={0.1} className="mt-5 md:mt-6">
            <p className="flex items-start gap-4 rounded-3xl bg-[#F3E8DC] px-7 py-6 font-lato text-[15px] leading-[1.8] text-marrom/90 md:items-center md:px-8">
              <Lock className="mt-0.5 h-5 w-5 shrink-0 text-terracota md:mt-0" aria-hidden="true" />
              Seus registros ficam no arquivo salvo por você; não é necessário enviá-los à Casa ACP.
            </p>
          </Revelar>
        </div>
      </section>

      {/* ── Seção 4 · Encerramento ── */}
      <section aria-labelledby="titulo-encerramento" className="relative overflow-hidden bg-[#F3E8DC] px-4 pb-40 pt-24 text-center sm:px-6 md:pb-52 md:pt-32">
        <Revelar className="relative z-10 mx-auto max-w-3xl">
          <div aria-hidden="true" className="mx-auto h-px w-16 bg-terracota/60" />
          <h2 id="titulo-encerramento" className={`${FONTE_GARAMOND} mt-10 text-[2.75rem] italic leading-tight text-marrom md:text-6xl lg:text-7xl`}>
            Um significativo 2027!
          </h2>
          <p className="mt-8 font-lato text-xs font-semibold uppercase tracking-[0.25em] text-marrom/70 [text-wrap:balance]">
            Casa ACP · clínica. formação. encontro.
          </p>
        </Revelar>

        {/* Montanhas em camadas, como no horizonte das artes da coleção */}
        <svg
          aria-hidden="true"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-28 w-full md:h-40"
        >
          <path d="M0 150 C 180 90 300 120 460 96 C 640 68 760 130 930 104 C 1110 76 1260 60 1440 92 L1440 220 L0 220 Z" fill="#A6AD94" fillOpacity="0.28" />
          <path d="M0 182 C 220 140 380 168 560 146 C 760 122 900 170 1100 150 C 1250 136 1350 128 1440 140 L1440 220 L0 220 Z" fill="#7C8468" fillOpacity="0.30" />
          <path d="M0 206 C 260 184 480 200 720 190 C 960 180 1200 198 1440 186 L1440 220 L0 220 Z" fill="#7C8468" fillOpacity="0.45" />
        </svg>
      </section>
    </div>
  );
}
