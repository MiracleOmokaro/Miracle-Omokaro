import {
  BookOpen,
  Code2,
  GraduationCap,
  Medal,
  ShieldCheck,
  Target,
  Terminal,
  Castle,
} from "lucide-react";
import type { StageIcon } from "@/data/types";
import { cn } from "@/lib/cn";

const MAP = {
  "shield-check": ShieldCheck,
  terminal: Terminal,
  graduation: GraduationCap,
  badge: Medal,
  code: Code2,
  research: BookOpen,
  target: Target,
  fortress: Castle,
} as const;

export function StageGlyph({
  name,
  className,
}: {
  name: StageIcon;
  className?: string;
}) {
  const Icon = MAP[name] ?? ShieldCheck;
  return <Icon className={cn("size-4", className)} strokeWidth={1.75} />;
}
