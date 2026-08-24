import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ROADMAP, STAGE_GROUPS, stagesByGroup } from "@/data/roadmap";
import type { StageStatus } from "@/data/types";
import { cn } from "@/lib/cn";
import { StageGlyph } from "./stage-icon";

function nodePosition(index: number, total: number) {
  const t = total <= 1 ? 0.5 : index / (total - 1);
  const y = 8 + t * 84;
  const x = 50 + 28 * Math.sin(t * Math.PI * 1.4);
  return { x, y, t };
}

function curvePath() {
  const pts: string[] = [];
  for (let i = 0; i <= 48; i++) {
    const t = i / 48;
    const x = 50 + 28 * Math.sin(t * Math.PI * 1.4);
    const y = 8 + t * 84;
    pts.push(`${i === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  return pts.join(" ");
}

const STATUS_LABEL: Record<StageStatus, string> = {
  completed: "Completed",
  "in-progress": "In progress",
  upcoming: "Upcoming",
};

export function PathOfProgress() {
  const [group, setGroup] = useState<(typeof STAGE_GROUPS)[number]>("All");
  const stages = useMemo(() => stagesByGroup(group), [group]);
  const defaultId =
    stages.find((s) => s.status === "in-progress")?.id ?? stages[0]?.id ?? null;
  const [active, setActive] = useState<string | null>(defaultId);
  const selected = stages.find((s) => s.id === active) ?? stages[0];
  const completed = ROADMAP.filter((s) => s.status === "completed").length;
  const ideasLive = ROADMAP.flatMap((s) => s.ideas).filter((i) => i.status === "green").length;
  const current = ROADMAP.find((s) => s.status === "in-progress");
  const d = useMemo(() => curvePath(), []);
  const height = Math.max(stages.length, 3) * 140;

  return (
    <div>
      <div className="flex flex-wrap gap-6 border-b border-border pb-8 text-sm">
        <Stat label="Stages completed" value={String(completed)} />
        <Stat label="Current focus" value={current?.title ?? "—"} />
        <Stat label="Ideas in development" value={String(ideasLive)} />
      </div>

      <div className="mt-8 flex gap-2 overflow-x-auto pb-2">
        {STAGE_GROUPS.map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => {
              setGroup(g);
              const next = stagesByGroup(g);
              setActive(next.find((s) => s.status === "in-progress")?.id ?? next[0]?.id ?? null);
            }}
            className={cn(
              "h-11 shrink-0 rounded-full border px-4 text-sm transition-colors duration-150",
              group === g
                ? "border-accent/40 bg-elevated text-fg"
                : "border-border text-muted hover:text-fg",
            )}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="relative" style={{ height }}>
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              d={d}
              fill="none"
              stroke="color-mix(in oklab, var(--color-fg) 22%, transparent)"
              strokeWidth="0.4"
            />
          </svg>
          <ol className="relative h-full">
            {stages.map((stage, i) => {
              const pos = nodePosition(i, stages.length);
              const isActive = selected?.id === stage.id;
              return (
                <li
                  key={stage.id}
                  className="absolute"
                  style={{
                    top: `${pos.y}%`,
                    left: `${pos.x}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(stage.id)}
                    onMouseEnter={() => setActive(stage.id)}
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full border bg-surface transition-[transform,box-shadow,border-color] duration-200",
                      stage.status === "completed"
                        ? "border-accent/60 text-accent shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_30%,transparent)]"
                        : stage.status === "in-progress"
                          ? "border-blue/60 text-blue"
                          : "border-border text-muted",
                      isActive && "scale-110",
                    )}
                    aria-pressed={isActive}
                    aria-label={stage.title}
                  >
                    <StageGlyph name={stage.icon} className="size-5" />
                  </button>
                  <p
                    className={cn(
                      "pointer-events-none mt-2 w-32 text-center text-[11px] leading-tight sm:w-40 sm:text-xs",
                      isActive ? "text-fg" : "text-muted",
                    )}
                  >
                    {stage.title}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {selected ? (
          <aside className="h-fit rounded-xl border border-border bg-surface p-5 lg:sticky lg:top-24">
            <p className="text-xs uppercase tracking-wide text-subtle">{selected.platform}</p>
            <h2 className="mt-2 font-display text-2xl text-fg">{selected.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">{selected.hoverSummary}</p>
            <p className="mt-4 text-xs text-subtle">{STATUS_LABEL[selected.status]}</p>
            <Link
              to="/path/$slug"
              params={{ slug: selected.id }}
              className="mt-5 inline-flex h-11 items-center text-sm text-accent hover:underline"
            >
              Open the full write-up
            </Link>
          </aside>
        ) : (
          <p className="text-sm text-muted">No stages in this group yet.</p>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-subtle">{label}</p>
      <p className="mt-1 text-fg">{value}</p>
    </div>
  );
}
