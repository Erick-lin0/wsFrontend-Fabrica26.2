import { Crosshair, HeartPulse, Shield } from "lucide-react";
import type { ComponentType } from "react";
import type { HeroRole } from "@/types/hero";


export const ROLE_ICONS: Record<HeroRole, ComponentType<{ className?: string }>> = {
  tank: Shield,
  damage: Crosshair,
  support: HeartPulse,
};