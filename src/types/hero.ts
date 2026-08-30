export type HeroRole = "tank" | "damage" | "support";

/** Formato retornado por GET /heroes (listagem). */
export interface Hero {
  key: string;
  name: string;
  portrait: string;
  role: HeroRole;
}

export interface HeroHitPoints {
  health: number;
  armor: number;
  shields: number;
  total: number;
}

/** Formato retornado por GET /heroes/{key} (detalhe). */
export interface HeroDetail {
  name: string;
  description: string;
  portrait: string;
  role: HeroRole;
  location: string;
  birthday: string;
  age: number | null;
  hitpoints: HeroHitPoints | null;
}