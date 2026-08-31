import type { HeroRole } from "@/types/hero";

interface RolePresentation {
  label: string;

  cor: string;
}

export const ROLE_PRESENTATION: Record<HeroRole, RolePresentation> = {
  tank: { label: "Tanque", cor: "#43B049" },
  damage: { label: "Dano", cor: "#F99E1A" },
  support: { label: "Suporte", cor: "#4B9CFC" },
};

export const ROLE_KEYS = Object.keys(ROLE_PRESENTATION) as HeroRole[];

export function obterRotuloDaRole(role: HeroRole): string {
  return ROLE_PRESENTATION[role]?.label ?? role;
}

export function obterCorDaRole(role: HeroRole): string {
  return ROLE_PRESENTATION[role]?.cor ?? "#9a9aa2";
}