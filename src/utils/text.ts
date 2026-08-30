/**
 * Remove acentos e caixa para que "torbjorn" encontre "Torbjörn".
 */
export function normalizarTexto(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

const MESES_EM_PORTUGUES: Record<string, string> = {
  january: "janeiro",
  february: "fevereiro",
  march: "março",
  april: "abril",
  may: "maio",
  june: "junho",
  july: "julho",
  august: "agosto",
  september: "setembro",
  october: "outubro",
  november: "novembro",
  december: "dezembro",
};

/**
 * A API devolve o aniversário em inglês, no formato "November 3".
 * Converte para "3 de novembro" e devolve o original se o formato mudar.
 */
export function formatarAniversario(aniversario: string | null): string {
  if (!aniversario) return "Desconhecido";

  const partes = aniversario.trim().split(/\s+/);
  if (partes.length !== 2) return aniversario;

  const [mes, dia] = partes;
  const mesEmPortugues = MESES_EM_PORTUGUES[mes.toLowerCase()];
  if (!mesEmPortugues) return aniversario;

  return `${dia} de ${mesEmPortugues}`;
}