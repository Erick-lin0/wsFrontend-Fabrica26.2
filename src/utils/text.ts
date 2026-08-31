export function normalizarTexto(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

const MESES_EM_PORTUGUES: Record<string, string> = {
  jan: "janeiro",
  january: "janeiro",
  feb: "fevereiro",
  february: "fevereiro",
  mar: "março",
  march: "março",
  apr: "abril",
  april: "abril",
  may: "maio",
  jun: "junho",
  june: "junho",
  jul: "julho",
  july: "julho",
  aug: "agosto",
  august: "agosto",
  sep: "setembro",
  september: "setembro",
  oct: "outubro",
  october: "outubro",
  nov: "novembro",
  november: "novembro",
  dec: "dezembro",
  december: "dezembro",
};

/**
 * Converte "Oct 1" em "1 de outubro".
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