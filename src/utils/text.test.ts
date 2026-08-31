import { describe, expect, it } from "vitest";
import { formatarAniversario, normalizarTexto } from "@/utils/text";

describe("normalizarTexto", () => {
  it("remove acentos", () => {
    expect(normalizarTexto("Torbjörn")).toBe("torbjorn");
  });

    it("aceita meses abreviados", () => {
    expect(formatarAniversario("Oct 1")).toBe("1 de outubro");
  });

  it("converte para caixa baixa", () => {
    expect(normalizarTexto("REINHARDT")).toBe("reinhardt");
  });

  it("remove espaços nas extremidades", () => {
    expect(normalizarTexto("  Ana  ")).toBe("ana");
  });

  it("mantém string vazia", () => {
    expect(normalizarTexto("")).toBe("");
  });
});

describe("formatarAniversario", () => {
  it("traduz o mês e inverte a ordem", () => {
    expect(formatarAniversario("November 3")).toBe("3 de novembro");
  });

  it("traduz meses com acento", () => {
    expect(formatarAniversario("March 15")).toBe("15 de março");
  });

  it("devolve texto padrão quando não há data", () => {
    expect(formatarAniversario(null)).toBe("Desconhecido");
  });

  it("devolve o original quando o formato é inesperado", () => {
    expect(formatarAniversario("Unknown")).toBe("Unknown");
  });
});