import { describe, expect, it } from "vitest";
import {
  TODAS_AS_FUNCOES,
  calcularTotalDePaginas,
  filtrarHerois,
  paginar,
} from "@/utils/filtrarHerois";
import type { Hero } from "@/types/hero";

const HEROIS: Hero[] = [
  { key: "ana", name: "Ana", portrait: "https://exemplo/ana.png", role: "support" },
  {
    key: "reinhardt",
    name: "Reinhardt",
    portrait: "https://exemplo/reinhardt.png",
    role: "tank",
  },
  {
    key: "torbjorn",
    name: "Torbjörn",
    portrait: "https://exemplo/torbjorn.png",
    role: "damage",
  },
];

const SEM_FILTRO = { termo: "", role: TODAS_AS_FUNCOES } as const;

describe("filtrarHerois", () => {
  it("devolve a lista completa quando não há filtro", () => {
    expect(filtrarHerois(HEROIS, SEM_FILTRO)).toHaveLength(3);
  });

  it("encontra pelo nome ignorando acentos e caixa", () => {
    const resultado = filtrarHerois(HEROIS, { ...SEM_FILTRO, termo: "TORBJORN" });

    expect(resultado.map((heroi) => heroi.key)).toEqual(["torbjorn"]);
  });

  it("encontra pelo nome da função em português", () => {
    const resultado = filtrarHerois(HEROIS, { ...SEM_FILTRO, termo: "suporte" });

    expect(resultado.map((heroi) => heroi.key)).toEqual(["ana"]);
  });

  it("filtra pela função selecionada", () => {
    const resultado = filtrarHerois(HEROIS, { termo: "", role: "tank" });

    expect(resultado.map((heroi) => heroi.key)).toEqual(["reinhardt"]);
  });

  it("devolve lista vazia quando nada corresponde", () => {
    expect(filtrarHerois(HEROIS, { ...SEM_FILTRO, termo: "zzz" })).toEqual([]);
  });
});

describe("calcularTotalDePaginas", () => {
  it("arredonda para cima", () => {
    expect(calcularTotalDePaginas(21, 20)).toBe(2);
  });

  it("nunca devolve menos de uma página", () => {
    expect(calcularTotalDePaginas(0, 20)).toBe(1);
  });
});

describe("paginar", () => {
  it("recorta o intervalo correto", () => {
    expect(paginar([1, 2, 3, 4, 5], 2, 2)).toEqual([3, 4]);
  });
});