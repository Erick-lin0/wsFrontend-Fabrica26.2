"use client";

import { SlidersHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROLE_KEYS, obterCorDaRole, obterRotuloDaRole } from "@/utils/roles";
import { TODAS_AS_FUNCOES, type OpcaoDeRole } from "@/utils/filtrarHerois";

interface AdvancedFilterProps {
  roleSelecionada: OpcaoDeRole;
  aoSelecionarRole: (role: OpcaoDeRole) => void;
}

export function AdvancedFilter({
  roleSelecionada,
  aoSelecionarRole,
}: AdvancedFilterProps) {
  const possuiFiltroAtivo = roleSelecionada !== TODAS_AS_FUNCOES;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Abrir filtros"
          style={{ transform: "skewX(-15deg)" }}
          className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-edge bg-panel text-paper transition-colors hover:border-flare hover:text-flare"
        >
          <SlidersHorizontal className="h-5 w-5" style={{ transform: "skewX(15deg)" }} />
          {possuiFiltroAtivo && (
            <span className="absolute right-2 top-2 h-1.5 w-1.5 bg-flare" />
          )}
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={10}
        className="glass-panel w-56 rounded-none p-1.5 text-paper"
      >
        <DropdownMenuLabel className="px-2 pb-2 font-display text-[0.7rem] font-bold uppercase italic tracking-[0.2em] text-fade">
          Função
        </DropdownMenuLabel>

        <DropdownMenuRadioGroup
          value={roleSelecionada}
          onValueChange={(valor) => aoSelecionarRole(valor as OpcaoDeRole)}
        >
          <DropdownMenuRadioItem
            value={TODAS_AS_FUNCOES}
            className="cursor-pointer rounded-none py-2 font-display text-sm font-bold uppercase italic transition-colors focus:bg-white/5 focus:text-flare"
          >
            Todas
          </DropdownMenuRadioItem>

          {ROLE_KEYS.map((role) => (
            <DropdownMenuRadioItem
              key={role}
              value={role}
              style={{ ["--cor-role" as string]: obterCorDaRole(role) }}
              className="cursor-pointer rounded-none py-2 font-display text-sm font-bold uppercase italic transition-colors focus:bg-white/5 focus:text-[var(--cor-role)]"
            >
              {obterRotuloDaRole(role)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}