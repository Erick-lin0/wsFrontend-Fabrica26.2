import { API_CONFIG } from "@/config/api";
import type { Hero, HeroDetail } from "@/types/hero";

/**
 * Único ponto do projeto que fala HTTP.
 * `fetch` não rejeita a Promise em 4xx/5xx, por isso checamos `response.ok`.
 */
async function requestJson<T>(path: string): Promise<T> {
  const response = await fetch(`${API_CONFIG.baseUrl}${path}`, {
    headers: { Accept: "application/json" },
    next: { revalidate: API_CONFIG.revalidateInSeconds },
  });

  if (!response.ok) {
    throw new Error(`Erro HTTP ${response.status} ao consultar ${path}`);
  }

  return (await response.json()) as T;
}

export function buscarHerois(): Promise<Hero[]> {
  return requestJson<Hero[]>("/heroes");
}

export function buscarHeroiPorChave(chave: string): Promise<HeroDetail> {
  return requestJson<HeroDetail>(`/heroes/${chave}`);
}