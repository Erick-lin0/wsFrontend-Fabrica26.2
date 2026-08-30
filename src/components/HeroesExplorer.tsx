"use client";

import { useMemo, useState } from "react";
import { HEROES_PER_PAGE } from "@/config/api";
import { AdvancedFilter } from "@/components/AdvancedFilter";
import { HeroCard } from "@/components/HeroCard";
import { Pagination } from "@/components/Pagination";
import { SearchBar } from "@/components/SearchBar";
import { Button } from "@/components/ui/button";
import {
  TODAS_AS_FUNCOES,
  calcularTotalDePaginas,
  filtrarHerois,
  paginar,
  type OpcaoDeRole,
} from "@/utils/filtrarHerois";
import type { Hero } from "@/types/hero";

interface HeroesExplorerProps {
  herois: Hero[];
}

/**
 * Recebe os dados já buscados pelo Server Component e cuida apenas de
 * coordenar estado, filtro e paginação. Nenhuma chamada HTTP acontece aqui.
 */
export function HeroesExplorer({ herois }: HeroesExplorerProps) {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [roleSelecionada, setRoleSelecionada] = useState<OpcaoDeRole>(TODAS_AS_FUNCOES);
  const [paginaAtual, setPaginaAtual] = useState(1);

  const heroisFiltrados = useMemo(
    () => filtrarHerois(herois, { termo: termoDeBusca, role: roleSelecionada }),
    [herois, roleSelecionada, termoDeBusca],
  );

  const totalDePaginas = calcularTotalDePaginas(heroisFiltrados.length, HEROES_PER_PAGE);
  // Um filtro novo pode encurtar a lista e invalidar a página em que o usuário estava.
  const paginaValida = Math.min(paginaAtual, totalDePaginas);
  const heroisDaPagina = paginar(heroisFiltrados, paginaValida, HEROES_PER_PAGE);

  function aplicarBusca(valor: string) {
    setTermoDeBusca(valor);
    setPaginaAtual(1);
  }

  function aplicarRole(role: OpcaoDeRole) {
    setRoleSelecionada(role);
    setPaginaAtual(1);
  }

  function limparFiltros() {
    setTermoDeBusca("");
    setRoleSelecionada(TODAS_AS_FUNCOES);
    setPaginaAtual(1);
  }

  return (
        <section id="herois" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <h2 className="text-center font-display text-3xl font-extrabold uppercase tracking-tight text-surface sm:text-5xl">
        Conheça os Heróis
      </h2>

                <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5">
        <SearchBar valor={termoDeBusca} aoAlterar={aplicarBusca} />
        <AdvancedFilter
          roleSelecionada={roleSelecionada}
          aoSelecionarRole={aplicarRole}
        />
      </div>

      {heroisDaPagina.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-display text-xl text-surface">
            Nenhum herói corresponde a essa busca.
          </p>
          <p className="mt-2 text-steel">Tente outro nome ou função.</p>
          <Button
            onClick={limparFiltros}
            className="mt-6 rounded-full bg-flare px-6 font-display font-bold text-ink hover:brightness-110"
          >
            Limpar filtros
          </Button>
        </div>
      ) : (
        <>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {heroisDaPagina.map((heroi, indice) => (
              <HeroCard key={heroi.key} heroi={heroi} prioridade={indice < 5} />
            ))}
          </div>

          <Pagination
            paginaAtual={paginaValida}
            totalDePaginas={totalDePaginas}
            aoMudarPagina={setPaginaAtual}
          />
        </>
      )}
    </section>
  );
}