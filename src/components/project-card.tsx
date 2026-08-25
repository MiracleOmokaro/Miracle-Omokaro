import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/types";
import { NewsArtPanel } from "./news-art";

export function ProjectCard({
  project,
  to,
}: {
  project: Project;
  to: "/work/$slug" | "/polymorph/work/$slug";
}) {
  return (
    <Link to={to} params={{ slug: project.id }} className="group block">
      <NewsArtPanel art={project.newsArt} className="aspect-[16/10] w-full">
        <span className="absolute inset-x-5 bottom-5 text-lg font-medium leading-tight tracking-tight text-white sm:text-xl">
          {project.title}
        </span>
      </NewsArtPanel>
      <p className="mt-3 text-xs text-muted">
        {project.market} · {project.status.replace("-", " ")}
      </p>
      <h3 className="mt-1 text-[15px] font-medium leading-snug tracking-tight text-fg">
        {project.summary}
      </h3>
    </Link>
  );
}
