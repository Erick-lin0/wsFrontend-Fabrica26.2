"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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
    <div className="relative flex-1">
      <Search
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-steel"
      />
      <Input
        type="search"
        value={valor}
        onChange={(evento) => aoAlterar(evento.target.value)}
        placeholder={placeholderAnimado}
        aria-label="Buscar herói por nome ou função"
        className="glass h-14 rounded-full border-white/15 pl-12 pr-5 font-body text-base text-surface placeholder:text-steel focus-visible:ring-2 focus-visible:ring-beam"
      />
    </div>
  );
}