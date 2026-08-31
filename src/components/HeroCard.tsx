import Image from "next/image";
import Link from "next/link";
import { ROLE_ICONS } from "@/utils/roleIcons";
import { obterCorDaRole, obterRotuloDaRole } from "@/utils/roles";
import type { Hero } from "@/types/hero";

interface HeroCardProps {
  heroi: Hero;

  prioridade?: boolean;
}

export function HeroCard({ heroi, prioridade = false }: HeroCardProps) {
  const corDaRole = obterCorDaRole(heroi.role);
  const IconeDaRole = ROLE_ICONS[heroi.role];

  return (
    <Link
      href={`/herois/${heroi.key}`}

      style={{ ["--cor-role" as string]: corDaRole }}
      className="group relative block aspect-[3/4] overflow-hidden border border-edge bg-panel transition duration-300 hover:-translate-y-1 hover:border-[var(--cor-role)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-flare"
    >
      <Image
        src={heroi.portrait}
        alt={`Retrato de ${heroi.name}`}
        fill
        priority={prioridade}
        sizes="(max-width: 640px) 45vw, (max-width: 1280px) 22vw, 17vw"
        className="object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/45 to-transparent" />

      <span
        aria-hidden="true"
        className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center border border-edge bg-void/75 text-fade transition-colors group-hover:border-[var(--cor-role)] group-hover:text-[var(--cor-role)]"
      >
        <IconeDaRole className="h-4 w-4" />
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="font-display text-[0.65rem] font-bold uppercase italic tracking-[0.18em] text-fade transition-colors group-hover:text-[var(--cor-role)]">
          {obterRotuloDaRole(heroi.role)}
        </p>
        <p className="truncate font-display text-base font-extrabold uppercase italic leading-tight tracking-tight text-paper">
          {heroi.name}
        </p>
      </div>
    </Link>
  );
}