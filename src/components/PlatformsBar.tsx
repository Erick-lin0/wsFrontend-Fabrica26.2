import { Gamepad2 } from "lucide-react";
import { FaPlaystation, FaWindows, FaXbox } from "react-icons/fa6";
import type { ComponentType } from "react";

interface Platform {
  nome: string;
  Icone: ComponentType<{ className?: string }>;
  /** Cor da marca aplicada no hover. */
  corDaMarca: string;
}

const PLATAFORMAS: Platform[] = [
  { nome: "PC", Icone: FaWindows, corDaMarca: "#00A4EF" },
  { nome: "PlayStation 4", Icone: FaPlaystation, corDaMarca: "#0070D1" },
  { nome: "PlayStation 5", Icone: FaPlaystation, corDaMarca: "#0070D1" },
  { nome: "Xbox One", Icone: FaXbox, corDaMarca: "#107C10" },
  { nome: "Xbox Series", Icone: FaXbox, corDaMarca: "#107C10" },
  // O Nintendo Switch não tem ícone próprio nos pacotes disponíveis,
  // então usamos um controle genérico.
  { nome: "Nintendo Switch", Icone: Gamepad2, corDaMarca: "#E60012" },
];

// A lista é duplicada para que o loop de rolagem não apresente espaço vazio.
const SEQUENCIA_EM_LOOP = [...PLATAFORMAS, ...PLATAFORMAS];

export function PlatformsBar() {
  return (
    <section
      aria-label="Plataformas disponíveis"
      className="overflow-hidden border-y border-edge/40 bg-panel/30 py-4 backdrop-blur-md"
    >
      <ul className="flex w-max animate-marquee items-center gap-14 pr-14 hover:[animation-play-state:paused]">
        {SEQUENCIA_EM_LOOP.map(({ nome, Icone, corDaMarca }, indice) => (
          <li
            key={`${nome}-${indice}`}
            title={nome}
            style={{ ["--cor-da-marca" as string]: corDaMarca }}
            className="text-edge transition-colors duration-300 hover:text-[var(--cor-da-marca)]"
          >
            <Icone className="h-7 w-7" />
            <span className="sr-only">{nome}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}