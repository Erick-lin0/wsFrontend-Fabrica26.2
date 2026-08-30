"use client";

import { SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ROLE_KEYS, obterRotuloDaRole } from "@/utils/roles";
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
        <Button
          variant="ghost"
          size="icon"
          aria-label="Abrir filtros"
          className="glass relative h-14 w-14 rounded-full border-white/15 text-surface hover:text-flare"
        >
          <SlidersHorizontal className="h-5 w-5" />
          {possuiFiltroAtivo && (
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-flare" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-52 border-white/10 bg-ink/95 text-surface backdrop-blur-xl"
      >
        <DropdownMenuLabel className="font-display uppercase tracking-widest text-steel">
          Função
        </DropdownMenuLabel>
        <DropdownMenuRadioGroup
          value={roleSelecionada}
          onValueChange={(valor) => aoSelecionarRole(valor as OpcaoDeRole)}
        >
          <DropdownMenuRadioItem value={TODAS_AS_FUNCOES}>
            Todas as funções
          </DropdownMenuRadioItem>
          {ROLE_KEYS.map((role) => (
            <DropdownMenuRadioItem key={role} value={role}>
              {obterRotuloDaRole(role)}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}