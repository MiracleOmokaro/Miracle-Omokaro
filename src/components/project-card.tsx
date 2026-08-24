import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/types";
import { cn } from "@/lib/cn";

export function ProjectCard({
  project,
  to,
}: {
  project: Project;
  to: "/work/$slug" | "/polymorph/work/$slug";
}) {
  return (
    <Link
      to={to}
      params={{ slug: project.id }}
      className="group flex flex-col rounded-lg border border-border bg-surface p-5 transition-colors duration-150 hover:border-fg/20"
    >
      <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-wide text-subtle">
        <span>{project.market}</span>
        <span
          className={cn(
            project.status === "live" && "text-accent",
            project.status === "in-development" && "text-blue",
          )}
        >
          {project.status.replace("-", " ")}
        </span>
      </div>
      <h3 className="mt-3 font-display text-2xl text-fg group-hover:text-accent">{project.title}</h3>
      <p className="mt-1 text-sm text-muted">{project.client}</p>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((t) => (
          <span key={t} className="rounded-full border border-border px-2 py-1 text-xs text-subtle">
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}
