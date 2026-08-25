import { cn } from "@/lib/cn";
import type { IdeaStatus } from "@/data/types";

const LABEL: Record<IdeaStatus, string> = {
  green: "Begun",
  amber: "Planned",
  gray: "Shelved",
  blue: "Exploring",
};

const DOT: Record<IdeaStatus, string> = {
  green: "bg-green ping-live",
  amber: "bg-amber",
  gray: "bg-subtle",
  blue: "bg-blue",
};

export function StatusPing({ status }: { status: IdeaStatus }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-muted">
      <span className={cn("size-2 rounded-full", DOT[status])} aria-hidden />
      {LABEL[status]}
    </span>
  );
}
