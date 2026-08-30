import { Crosshair, HeartPulse, Shield } from "lucide-react";
import type { ComponentType } from "react";
import type { HeroRole } from "@/types/hero";

/**
 * Ícone de cada função. Fica separado de roles.ts para manter aquele
 * arquivo livre de dependências de UI e fácil de testar.
 */
export const ROLE_ICONS: Record<HeroRole, ComponentType<{ className?: string }>> = {
  tank: Shield,
  damage: Crosshair,
  support: HeartPulse,
};