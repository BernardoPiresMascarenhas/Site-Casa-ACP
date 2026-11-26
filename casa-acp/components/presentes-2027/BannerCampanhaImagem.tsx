import { getImageProps } from "next/image";
import { BANNER } from "@/lib/presentes2027";

type BannerCampanhaImagemProps = {
  /** Carregamento prioritário quando o banner é o primeiro elemento da página. */
  prioridade?: boolean;
  className?: string;
};

// Arte original das clientes com direção de arte: composição vertical (4:5) no
// celular e horizontal (2:1) a partir de 768 px. A proporção de cada versão é
// reservada no CSS para não haver salto de layout, e a arte nunca é cortada
// nem esticada (object-contain sobre a mesma proporção da imagem).
export default function BannerCampanhaImagem({ prioridade = false, className = "" }: BannerCampanhaImagemProps) {
  const comum = { alt: BANNER.alt, sizes: "(min-width: 1280px) 1216px, 100vw", priority: prioridade };

  const { props: desktop } = getImageProps({ ...comum, ...BANNER.desktop });
  const { props: mobile } = getImageProps({ ...comum, ...BANNER.mobile });

  return (
    <picture className={`block aspect-[4/5] w-full md:aspect-[2/1] ${className}`}>
      <source
        media="(min-width: 768px)"
        srcSet={desktop.srcSet ?? desktop.src}
        width={BANNER.desktop.width}
        height={BANNER.desktop.height}
      />
      <img
        src={mobile.src}
        srcSet={mobile.srcSet}
        alt={BANNER.alt}
        width={BANNER.mobile.width}
        height={BANNER.mobile.height}
        loading={mobile.loading}
        fetchPriority={mobile.fetchPriority}
        decoding="async"
        className="block h-full w-full object-contain"
      />
    </picture>
  );
}
