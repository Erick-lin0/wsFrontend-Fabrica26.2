/**
 * Remove acentos e caixa para que "torbjorn" encontre "Torbjörn"
 * e "sao paulo" encontre "São Paulo".
 */
export function normalizarTexto(valor: string): string {
  return valor
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

export function formatarAniversario(aniversario: string | null): string {
  if (!aniversario) return "Desconhecido";
  return aniversario;
}