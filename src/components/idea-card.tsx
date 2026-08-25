import { ArrowUpRight } from "lucide-react";
import type { Idea } from "@/data/types";
import { cn } from "@/lib/cn";
import { StatusPing } from "./status-ping";

export function IdeaCard({ idea }: { idea: Idea }) {
  const live = idea.status === "green" && idea.githubUrl;
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3
          className={cn(
            "text-base tracking-tight text-fg",
            live && "underline-offset-4 group-hover:underline",
          )}
        >
          {idea.title}
        </h3>
        {live ? <ArrowUpRight className="size-4 shrink-0 text-muted" /> : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{idea.description}</p>
      <div className="mt-4">
        <StatusPing status={idea.status} />
      </div>
    </>
  );

  const className =
    "group block border-b border-border py-6 first:pt-0 last:border-b-0 last:pb-0";

  if (live && idea.githubUrl) {
    return (
      <a href={idea.githubUrl} target="_blank" rel="noreferrer" className={className}>
        {inner}
      </a>
    );
  }
  return <div className={className}>{inner}</div>;
}
