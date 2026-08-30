import Image from "next/image";
import Link from "next/link";
import { ROLE_PRESENTATION, obterRotuloDaRole } from "@/utils/roles";
import type { Hero } from "@/types/hero";

interface HeroCardProps {
  heroi: Hero;
  /** As 5 primeiras imagens carregam com prioridade por ficarem acima da dobra. */
  prioridade?: boolean;
}

export function HeroCard({ heroi, prioridade = false }: HeroCardProps) {
  const apresentacao = ROLE_PRESENTATION[heroi.role];

  return (
    <Link
      href={`/herois/${heroi.key}`}
      className="glass group relative flex flex-col overflow-hidden rounded-2xl border-white/10 transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-beam"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-ink">
        <Image
          src={heroi.portrait}
          alt={`Retrato de ${heroi.name}`}
          fill
          priority={prioridade}
          sizes="(max-width: 640px) 50vw, (max-width: 1280px) 25vw, 20vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>

      <div className="flex items-center justify-between gap-2 px-4 py-3">
        <span className="truncate font-display text-base font-bold text-surface">
          {heroi.name}
        </span>
        <span
          className={`flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 px-2.5 py-1 text-xs text-steel transition-colors ${apresentacao.accentClasses}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${apresentacao.dotClass}`} />
          {obterRotuloDaRole(heroi.role)}
        </span>
      </div>
    </Link>
  );
}