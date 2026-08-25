import { Link } from "@tanstack/react-router";
import { useMemo, useState, type KeyboardEvent, type MouseEvent } from "react";
import { ROADMAP, STAGE_GROUPS } from "@/data/roadmap";
import type { RoadmapStage } from "@/data/types";
import { formatDate, formatRange } from "@/lib/format";
import { cn } from "@/lib/cn";

const DOTS = 64;

function stagePosition(stage: RoadmapStage, all: RoadmapStage[]) {
  const sorted = [...all].sort((a, b) => a.order - b.order);
  const i = sorted.findIndex((s) => s.id === stage.id);
  if (sorted.length <= 1) return 0.5;
  return 0.035 + (i / (sorted.length - 1)) * 0.93;
}

export function PathOfProgress({ compact = false }: { compact?: boolean }) {
  const [group, setGroup] = useState<(typeof STAGE_GROUPS)[number]>("All");
  const stages = useMemo(() => {
    const sorted = [...ROADMAP].sort((a, b) => a.order - b.order);
    if (group === "All") return sorted;
    return sorted.filter((s) => s.group === group);
  }, [group]);

  const defaultId =
    ROADMAP.find((s) => s.status === "in-progress")?.id ??
    [...ROADMAP].reverse().find((s) => s.status === "completed")?.id ??
    ROADMAP[0]?.id;

  const [active, setActive] = useState(defaultId);
  const selected = stages.find((s) => s.id === active) ?? stages[0];
  const marker = selected ? stagePosition(selected, stages) : 0.5;

  function nearest(ratio: number) {
    if (!stages.length) return;
    let best = stages[0];
    let dist = 2;
    for (const s of stages) {
      const d = Math.abs(stagePosition(s, stages) - ratio);
      if (d < dist) {
        dist = d;
        best = s;
      }
    }
    setActive(best.id);
  }

  function onTrackClick(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    nearest((e.clientX - rect.left) / rect.width);
  }

  function onKey(e: KeyboardEvent<HTMLDivElement>) {
    if (!selected) return;
    const i = stages.findIndex((s) => s.id === selected.id);
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      const next = stages[Math.min(stages.length - 1, i + 1)];
      if (next) setActive(next.id);
    }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      const prev = stages[Math.max(0, i - 1)];
      if (prev) setActive(prev.id);
    }
  }

  return (
    <div className={cn("mx-auto w-full", compact ? "max-w-3xl" : "max-w-4xl")}>
      <div className="text-center">
        <h2 className="text-[2rem] font-medium tracking-tight text-fg sm:text-[3.25rem] sm:leading-[1.1]">
          Our path of progress
        </h2>
        <p className="mt-4 text-base text-muted sm:text-lg">
          From first principles to frontier practice — every stage on the way.
        </p>
      </div>

      {!compact ? (
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {STAGE_GROUPS.filter((g) => g === "All" || ROADMAP.some((s) => s.group === g)).map((g) => (
            <button
              key={g}
              type="button"
              onClick={() => {
                setGroup(g);
                const next = (g === "All" ? ROADMAP : ROADMAP.filter((s) => s.group === g)).sort(
                  (a, b) => a.order - b.order,
                )[0];
                if (next) setActive(next.id);
              }}
              className={cn(
                "inline-flex h-10 items-center rounded-full border px-4 text-sm",
                group === g
                  ? "border-fg/25 bg-elevated text-fg"
                  : "border-fg/12 text-muted hover:text-fg",
              )}
            >
              {g}
            </button>
          ))}
        </div>
      ) : null}

      <div className="mt-16 sm:mt-20">
        <div className="h-px w-full bg-fg/18" />
        <div
          className="relative mt-5 h-10 cursor-pointer touch-pan-y"
          role="slider"
          aria-valuemin={0}
          aria-valuemax={Math.max(0, stages.length - 1)}
          aria-valuenow={Math.max(0, stages.findIndex((s) => s.id === selected?.id))}
          aria-label="Path of progress"
          tabIndex={0}
          onClick={onTrackClick}
          onKeyDown={onKey}
        >
          <div
            className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-0.5"
            aria-hidden
          >
            {Array.from({ length: DOTS }).map((_, i) => (
              <span key={i} className="size-[4.5px] shrink-0 rounded-full bg-fg/30" />
            ))}
          </div>
          {stages.map((stage) => {
            const left = stagePosition(stage, stages);
            return (
              <button
                key={stage.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActive(stage.id);
                }}
                onMouseEnter={() => setActive(stage.id)}
                className="absolute top-1/2 z-10 size-10 -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${left * 100}%` }}
                aria-label={stage.title}
                aria-pressed={selected?.id === stage.id}
              />
            );
          })}
          <div
            className="pointer-events-none absolute top-1/2 z-20 size-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fg shadow-[0_0_0_6px_#000,0_0_0_7px_rgb(255_255_255_/_0.4)] transition-[left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ left: `${marker * 100}%` }}
          />
        </div>
        <div className="mt-3 flex justify-between text-sm text-muted">
          <span>2026</span>
          <span>2027</span>
        </div>
      </div>

      {selected ? (
        <div className="mt-14 text-center sm:mt-16" key={selected.id}>
          <p className="text-sm text-muted">
            {formatRange(selected.startDate, selected.endDate, selected.status)}
          </p>
          <h3 className="mt-4 text-2xl font-medium tracking-tight text-fg sm:text-[2.5rem] sm:leading-[1.15]">
            {selected.title}
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base">
            {selected.hoverSummary}
          </p>
          <p className="mt-3 text-sm text-subtle">{selected.platform}</p>
          <Link
            to="/path/$slug"
            params={{ slug: selected.id }}
            className="mt-8 inline-flex h-10 items-center rounded-full border border-fg/20 px-5 text-sm text-fg transition-colors hover:bg-elevated"
          >
            Read the write-up
          </Link>
        </div>
      ) : null}

      {!compact ? (
        <ol className="mt-16 grid gap-2 sm:grid-cols-2">
          {stages.map((stage) => (
            <li key={stage.id}>
              <button
                type="button"
                onClick={() => setActive(stage.id)}
                className={cn(
                  "flex w-full min-h-11 items-center justify-between gap-3 rounded-full border px-4 py-3 text-left text-sm transition-colors duration-150",
                  selected?.id === stage.id
                    ? "border-fg/25 bg-elevated text-fg"
                    : "border-transparent text-muted hover:text-fg",
                )}
              >
                <span className="truncate">{stage.title}</span>
                <span className="shrink-0 text-xs text-subtle">
                  {stage.endDate
                    ? formatDate(stage.endDate)
                    : stage.status === "in-progress"
                      ? "Now"
                      : "Soon"}
                </span>
              </button>
            </li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
