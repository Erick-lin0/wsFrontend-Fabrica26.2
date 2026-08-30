"use client";

import { Search } from "lucide-react";
import { useTypewriter } from "@/hooks/useTypewriter";

const FRASES_DO_PLACEHOLDER = [
  "Buscar por Reinhardt...",
  "Buscar por Tanque...",
  "Buscar por Suporte...",
];

interface SearchBarProps {
  valor: string;
  aoAlterar: (valor: string) => void;
}

export function SearchBar({ valor, aoAlterar }: SearchBarProps) {
  const placeholderAnimado = useTypewriter({ frases: FRASES_DO_PLACEHOLDER });

  return (
    <div
      style={{ transform: "skewX(-15deg)" }}
      className="relative h-12 w-full min-w-0 border border-edge bg-panel transition-colors focus-within:border-flare"
    >
      <Search
        aria-hidden="true"
        style={{ transform: "skewX(15deg)" }}
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-paper"
      />

      <input
        type="search"
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
        placeholder={placeholderAnimado}
        aria-label="Buscar herói por nome ou função"
        style={{ transform: "skewX(15deg)" }}
        className="h-12 w-full bg-transparent pl-12 pr-5 font-display text-base italic text-paper outline-none placeholder:not-italic placeholder:text-fade"
      />
    </div>
  );
}