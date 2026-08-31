import { normalizarTexto } from "@/utils/text";
import { obterRotuloDaRole } from "@/utils/roles";
import type { Hero, HeroRole } from "@/types/hero";

export const TODAS_AS_FUNCOES = "todas";

export type OpcaoDeRole = HeroRole | typeof TODAS_AS_FUNCOES;

export interface CriteriosDeBusca {
  termo: string;
  role: OpcaoDeRole;
}


export function filtrarHerois(
  herois: Hero[],
  { termo, role }: CriteriosDeBusca,
): Hero[] {
  const termoNormalizado = normalizarTexto(termo);

  return herois.filter((heroi) => {
    if (role !== TODAS_AS_FUNCOES && heroi.role !== role) return false;
    if (!termoNormalizado) return true;

    const camposPesquisaveis = [heroi.name, obterRotuloDaRole(heroi.role)];

    return camposPesquisaveis.some((campo) =>
      normalizarTexto(campo).includes(termoNormalizado),
    );
  });
}

export function calcularTotalDePaginas(
  totalDeItens: number,
  itensPorPagina: number,
): number {
  return Math.max(1, Math.ceil(totalDeItens / itensPorPagina));
}

export function paginar<T>(itens: T[], pagina: number, itensPorPagina: number): T[] {
  const primeiroIndice = (pagina - 1) * itensPorPagina;
  return itens.slice(primeiroIndice, primeiroIndice + itensPorPagina);
}