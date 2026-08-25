import { cn } from "@/lib/cn";

export function Wordmark({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 text-fg", className)}>
      <span className="relative inline-flex size-2.5" aria-hidden>
        <span className="absolute inset-0 rounded-full bg-fg" />
      </span>
      <span className="text-[15px] font-medium tracking-tight">{label}</span>
    </span>
  );
}
