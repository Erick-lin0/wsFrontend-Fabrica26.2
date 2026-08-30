import type { HeroRole } from "@/types/hero";

interface RolePresentation {
  label: string;
  /** Classes aplicadas no hover do card e nos ícones da página de detalhes. */
  accentClasses: string;
  dotClass: string;
}

export const ROLE_PRESENTATION: Record<HeroRole, RolePresentation> = {
  tank: {
    label: "Tanque",
    accentClasses: "group-hover:border-[#43B049] group-hover:text-[#43B049]",
    dotClass: "bg-[#43B049]",
  },
  damage: {
    label: "Dano",
    accentClasses: "group-hover:border-[#FF8640] group-hover:text-[#FF8640]",
    dotClass: "bg-[#FF8640]",
  },
  support: {
    label: "Suporte",
    accentClasses: "group-hover:border-[#4B75FC] group-hover:text-[#4B75FC]",
    dotClass: "bg-[#4B75FC]",
  },
};

export const ROLE_KEYS = Object.keys(ROLE_PRESENTATION) as HeroRole[];

export function obterRotuloDaRole(role: HeroRole): string {
  return ROLE_PRESENTATION[role]?.label ?? role;
}