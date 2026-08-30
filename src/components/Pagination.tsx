"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  paginaAtual: number;
  totalDePaginas: number;
  aoMudarPagina: (pagina: number) => void;
}

const ESTILO_DO_BOTAO =
  "btn-angular flex h-11 w-14 items-center justify-center bg-panel text-paper hover:bg-flare hover:text-void disabled:cursor-not-allowed disabled:hover:bg-panel disabled:hover:text-paper";

export function Pagination({
  paginaAtual,
  totalDePaginas,
  aoMudarPagina,
}: PaginationProps) {
  if (totalDePaginas <= 1) return null;

  return (
    <nav
      aria-label="Navegação entre páginas de heróis"
      className="mt-12 flex items-center justify-center gap-5"
    >
      <button
        type="button"
        aria-label="Página anterior"
        disabled={paginaAtual === 1}
        onClick={() => aoMudarPagina(paginaAtual - 1)}
        className={ESTILO_DO_BOTAO}
      >
        <span>
          <ChevronLeft className="h-5 w-5" />
        </span>
      </button>

      {/* A numeração some da tela a pedido do design, mas continua anunciada
          por leitores de tela para não perder a informação de contexto. */}
      <p aria-live="polite" className="sr-only">
        Página {paginaAtual} de {totalDePaginas}
      </p>

      <button
        type="button"
        aria-label="Próxima página"
        disabled={paginaAtual === totalDePaginas}
        onClick={() => aoMudarPagina(paginaAtual + 1)}
        className={ESTILO_DO_BOTAO}
      >
        <span>
          <ChevronRight className="h-5 w-5" />
        </span>
      </button>
    </nav>
  );
}