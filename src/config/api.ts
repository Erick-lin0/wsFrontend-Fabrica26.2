/**
 * Configurações centrais de acesso à OverFast API.
 */
export const API_CONFIG = {
  baseUrl: "https://overfast-api.tekrop.fr",

  revalidateInSeconds: 60 * 60 * 24,
} as const;


export const HEROES_PER_PAGE = 20;