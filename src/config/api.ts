/**
 * Configurações centrais de acesso à OverFast API.
 * Manter os valores aqui evita URLs e números mágicos espalhados pelo projeto.
 */
export const API_CONFIG = {
  baseUrl: "https://overfast-api.tekrop.fr",
  /** Os dados de heróis mudam raramente, então revalidamos uma vez por dia. */
  revalidateInSeconds: 60 * 60 * 24,
} as const;

/** 5 colunas x 4 linhas na grade padrão. */
export const HEROES_PER_PAGE = 20;