import Image from "next/image";
import BotaoDownload from "./BotaoDownload";
import Revelar from "./Revelar";
import { FONTE_GARAMOND } from "./fonte";
import type { Material } from "@/lib/presentes2027";

const SOMBRA_PAPEL = "shadow-[0_22px_45px_-22px_rgba(75,58,42,0.5)]";

// "Palco" das capas: todas as categorias usam a mesma moldura (5:4 no desktop),
// para que o calendário horizontal, o planner vertical e o par de complementos
// tenham o mesmo peso visual. As artes ficam inteiras, sem corte nem distorção.
function PalcoDasCapas({ material }: { material: Material }) {
  const vertical = material.orientacao === "vertical";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[1.75rem] bg-[#F3E8DC] ${
        vertical ? "aspect-[4/5] sm:aspect-[5/4]" : "aspect-[5/4]"
      }`}
    >
      {/* Luz suave no fundo, nas cores da paleta da campanha */}
      <div aria-hidden="true" className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-terracota/10 blur-3xl" />
      <div aria-hidden="true" className="absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-[#A6AD94]/25 blur-3xl" />

      <div className="absolute inset-6 flex items-center justify-center sm:inset-10 lg:inset-12">
        {material.orientacao === "horizontal" && (
          <Image
            src={material.imagens[0].src}
            alt={material.imagens[0].alt}
            width={material.imagens[0].width}
            height={material.imagens[0].height}
            sizes="(min-width: 1024px) 640px, 100vw"
            className={`h-auto w-full rounded-[3px] ${SOMBRA_PAPEL} transition-transform duration-700 ease-out group-hover/palco:-translate-y-1 motion-reduce:transition-none`}
          />
        )}

        {vertical && (
          <Image
            src={material.imagens[0].src}
            alt={material.imagens[0].alt}
            width={material.imagens[0].width}
            height={material.imagens[0].height}
            sizes="(min-width: 1024px) 340px, 70vw"
            className={`h-full w-auto rounded-[3px] ${SOMBRA_PAPEL} transition-transform duration-700 ease-out group-hover/palco:-translate-y-1 motion-reduce:transition-none`}
          />
        )}

        {material.orientacao === "par" && (
          <div className="flex w-full items-center justify-center">
            {material.imagens.map((imagem, indice) => (
              <Image
                key={imagem.src}
                src={imagem.src}
                alt={imagem.alt}
                width={imagem.width}
                height={imagem.height}
                sizes="(min-width: 1024px) 300px, 45vw"
                className={`h-auto w-[47%] rounded-[3px] ${SOMBRA_PAPEL} transition-transform duration-700 ease-out motion-reduce:transition-none ${
                  indice === 0
                    ? "relative z-10 -rotate-2 group-hover/palco:-translate-y-1 group-hover/palco:-rotate-3"
                    : "-ml-[4%] mt-8 rotate-2 group-hover/palco:rotate-3"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type CartaoMaterialProps = {
  material: Material;
  indice: number;
};

// Uma categoria de material: capa(s) de um lado, texto e downloads do outro.
// No desktop os lados alternam; no celular a capa vem sempre primeiro.
export default function CartaoMaterial({ material, indice }: CartaoMaterialProps) {
  const invertido = indice % 2 === 1;
  const idTitulo = `material-${material.id}`;

  return (
    <article aria-labelledby={idTitulo} className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Revelar className={`group/palco lg:col-span-7 ${invertido ? "lg:order-2" : ""}`}>
        <PalcoDasCapas material={material} />
      </Revelar>

      <Revelar atraso={0.12} className={`max-w-2xl lg:col-span-5 lg:max-w-none ${invertido ? "lg:order-1" : ""}`}>
        <p className={`${FONTE_GARAMOND} text-lg italic text-terracota`} aria-hidden="true">
          {String(indice + 1).padStart(2, "0")}
        </p>
        <h3 id={idTitulo} className={`${FONTE_GARAMOND} mt-2 text-[2rem] font-normal leading-[1.1] text-marrom lg:text-[2.5rem]`}>
          {material.titulo}
        </h3>
        <p className={`${FONTE_GARAMOND} mt-3 text-xl italic leading-snug text-salvia lg:text-[1.375rem]`}>
          {material.subtitulo}
        </p>
        <div aria-hidden="true" className="mt-6 h-px w-14 bg-terracota/50" />
        <p className="mt-6 font-lato text-base leading-[1.85] text-marrom/90">{material.descricao}</p>
        <p className="mt-4 font-lato text-xs font-semibold uppercase tracking-[0.2em] text-marrom/70">
          {material.detalhes}
        </p>

        <ul className="mt-8 flex flex-col gap-3" aria-label={`Downloads: ${material.titulo}`}>
          {material.arquivos.map((arquivo) => (
            <li key={arquivo.nomeArquivo}>
              <BotaoDownload arquivo={arquivo} />
            </li>
          ))}
        </ul>
      </Revelar>
    </article>
  );
}
