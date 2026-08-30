"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PaginationProps {
  paginaAtual: number;
  totalDePaginas: number;
  aoMudarPagina: (pagina: number) => void;
}

export function Pagination({
  paginaAtual,
  totalDePaginas,
  aoMudarPagina,
}: PaginationProps) {
  if (totalDePaginas <= 1) return null;

  return (
    <nav
      aria-label="Navegação entre páginas de heróis"
      className="mt-10 flex items-center justify-center gap-6"
    >
      <Button
        variant="ghost"
        size="icon"
        aria-label="Página anterior"
        disabled={paginaAtual === 1}
        onClick={() => aoMudarPagina(paginaAtual - 1)}
        className="glass h-11 w-11 rounded-full border-white/15 text-surface hover:text-flare disabled:opacity-30"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <p aria-live="polite" className="font-display text-sm tracking-widest text-steel">
        <span className="text-surface">{String(paginaAtual).padStart(2, "0")}</span>
        {" / "}
        {String(totalDePaginas).padStart(2, "0")}
      </p>

      <Button
        variant="ghost"
        size="icon"
        aria-label="Próxima página"
        disabled={paginaAtual === totalDePaginas}
        onClick={() => aoMudarPagina(paginaAtual + 1)}
        className="glass h-11 w-11 rounded-full border-white/15 text-surface hover:text-flare disabled:opacity-30"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </nav>
  );
}