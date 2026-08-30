import { Gamepad2, Monitor } from "lucide-react";
import { SiBox, SiPlaystation4, SiPlaystation5 } from "react-icons/si";
import type { ComponentType } from "react";

interface Platform {
  nome: string;
  Icone: ComponentType<{ className?: string }>;
  /** Cor da marca aplicada no hover. */
  corDaMarca: string;
}

const PLATAFORMAS: Platform[] = [
  { nome: "PC", Icone: Monitor, corDaMarca: "#4B75FC" },
  { nome: "PlayStation 4", Icone: SiPlaystation4, corDaMarca: "#0070D1" },
  { nome: "PlayStation 5", Icone: SiPlaystation5, corDaMarca: "#0070D1" },
  { nome: "Xbox One", Icone: SiBox, corDaMarca: "#107C10" },
  { nome: "Xbox Series", Icone: SiBox, corDaMarca: "#107C10" },
  { nome: "Nintendo Switch", Icone: Gamepad2, corDaMarca: "#E60012" },
];

// A lista é duplicada para que o loop de rolagem não apresente espaço vazio.
const SEQUENCIA_EM_LOOP = [...PLATAFORMAS, ...PLATAFORMAS];

export function PlatformsBar() {
  return (
    <section
      aria-label="Plataformas disponíveis"
      className="overflow-hidden border-b border-white/5 bg-ink py-4"
    >
      <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
        {SEQUENCIA_EM_LOOP.map(({ nome, Icone, corDaMarca }, indice) => (
          <li
            key={`${nome}-${indice}`}
            title={nome}
            style={{ ["--cor-da-marca" as string]: corDaMarca }}
            className="text-steel transition-colors duration-300 hover:text-[var(--cor-da-marca)]"
          >
            <Icone className="h-7 w-7" />
            <span className="sr-only">{nome}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}