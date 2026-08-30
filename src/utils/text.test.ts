import { describe, expect, it } from "vitest";
import { normalizarTexto } from "@/utils/text";

describe("normalizarTexto", () => {
  it("remove acentos", () => {
    expect(normalizarTexto("Torbjörn")).toBe("torbjorn");
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