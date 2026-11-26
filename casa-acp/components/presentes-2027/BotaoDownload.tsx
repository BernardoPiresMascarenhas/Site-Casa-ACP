import { ArrowDown, FileText, PenLine, Presentation, type LucideIcon } from "lucide-react";
import { tamanhoLegivel, urlDoArquivo, type Arquivo } from "@/lib/presentes2027";

const ICONE_POR_VERSAO: Record<Arquivo["versao"], LucideIcon> = {
  "Para impressão": FileText,
  Preenchível: PenLine,
  Editável: Presentation,
};

const FORMATO: Record<Arquivo["formato"], { sigla: string; nome: string; mime: string }> = {
  pdf: { sigla: "PDF", nome: "PDF", mime: "application/pdf" },
  pptx: {
    sigla: "PPTX",
    nome: "PowerPoint",
    mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  },
};

// Link real de download para um arquivo estático (sem API intermediária).
// Quando o arquivo ainda não foi entregue, vira um item desativado e
// claramente sinalizado — nunca um link quebrado.
export default function BotaoDownload({ arquivo }: { arquivo: Arquivo }) {
  const Icone = ICONE_POR_VERSAO[arquivo.versao];
  const formato = FORMATO[arquivo.formato];

  if (!arquivo.disponivel) {
    return (
      <div
        role="group"
        aria-label={`${arquivo.rotulo} (${formato.nome}): indisponível no momento`}
        className="flex min-h-[68px] items-center gap-4 rounded-2xl border border-dashed border-marrom/20 bg-transparent px-4 py-3 sm:px-5"
      >
        <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-marrom/5 text-marrom/35">
          <Icone className="h-[18px] w-[18px]" />
        </span>
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="font-lato text-[15px] font-semibold leading-snug text-marrom/60">
            {arquivo.rotulo}
          </span>
          <span className="mt-0.5 font-lato text-xs text-marrom/60">
            {formato.sigla} · Indisponível no momento
          </span>
        </span>
      </div>
    );
  }

  const tamanho = tamanhoLegivel(arquivo.bytes);

  return (
    <a
      href={urlDoArquivo(arquivo)}
      download={arquivo.nomeArquivo}
      type={formato.mime}
      aria-label={`${arquivo.rotulo} (${formato.nome}, ${tamanho})`}
      className="group/botao flex min-h-[68px] items-center gap-4 rounded-2xl border border-marrom/10 bg-white/70 px-4 py-3 outline-none transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-terracota/35 hover:bg-white hover:shadow-[0_14px_30px_-20px_rgba(75,58,42,0.45)] focus-visible:border-terracota focus-visible:ring-2 focus-visible:ring-terracota/40 active:translate-y-0 active:scale-[0.99] active:shadow-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:px-5"
    >
      <span
        aria-hidden="true"
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#7C8468]/10 text-[#7C8468] transition-colors duration-300 group-hover/botao:bg-terracota/10 group-hover/botao:text-terracota"
      >
        <Icone className="h-[18px] w-[18px]" />
      </span>

      <span className="flex min-w-0 flex-1 flex-col">
        <span className="font-lato text-[15px] font-semibold leading-snug text-marrom">{arquivo.rotulo}</span>
        <span className="mt-0.5 font-lato text-xs text-marrom/75">
          {formato.nome === "PDF" ? "PDF" : `${formato.nome} (.pptx)`} · {tamanho}
        </span>
      </span>

      <span
        aria-hidden="true"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-terracota/30 text-terracota transition-all duration-300 group-hover/botao:border-terracota group-hover/botao:bg-terracota group-hover/botao:text-creme"
      >
        <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover/botao:translate-y-0.5 motion-reduce:transition-none" />
      </span>
    </a>
  );
}
