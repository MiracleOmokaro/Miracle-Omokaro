import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { ArticleFrame } from "@/components/article-frame";
import { NewsArtPanel } from "@/components/news-art";
import { SiteShell } from "@/components/site-shell";
import { getProject, PROJECTS } from "@/data/projects";
import { PERSON } from "@/data/site";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/work/$slug")({
  component: ProjectPage,
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.project.title ?? "Project"} — ${PERSON.name}` }],
  }),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();
  const related = project.relatedProjects
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  return (
    <SiteShell>
      <ArticleFrame
        back={
          <p className="text-sm text-muted">
            <Link to="/work" className="hover:text-fg">
              Back to work
            </Link>
          </p>
        }
        hero={
          <NewsArtPanel art={project.newsArt} className="aspect-[16/9] w-full sm:aspect-[2.1/1]">
            <span className="absolute inset-x-6 bottom-6 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              {project.title}
            </span>
          </NewsArtPanel>
        }
        date={project.completedDate ? formatDate(project.completedDate) : "In development"}
        kicker={`${project.client} · ${project.market}`}
        title={project.title}
        dek={project.summary}
      >
        <p className="text-[17px] leading-[1.7] text-muted">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.techStack.map((t) => (
            <span key={t} className="rounded-full border border-fg/12 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
        {project.clientFeedback ? (
          <blockquote className="mt-12 border-l border-fg/20 pl-5">
            <p className="text-xl leading-relaxed tracking-tight text-fg">
              “{project.clientFeedback.quote}”
            </p>
            <footer className="mt-3 text-sm text-muted">{project.clientFeedback.author}</footer>
          </blockquote>
        ) : null}
        <section className="mt-12">
          <h2 className="text-2xl font-medium tracking-tight text-fg">Agentic notes</h2>
          <p className="mt-3 text-[17px] leading-[1.7] text-muted">{project.agenticNotes}</p>
        </section>
        <div className="mt-8 flex flex-wrap gap-4 text-sm">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg underline-offset-4 hover:underline"
            >
              Live site <ExternalLink className="size-3.5" />
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Repository <ExternalLink className="size-3.5" />
            </a>
          ) : null}
        </div>
        {related.length ? (
          <div className="mt-12 flex flex-wrap gap-2">
            {related.map((r) =>
              r ? (
                <Link
                  key={r.id}
                  to="/work/$slug"
                  params={{ slug: r.id }}
                  className="rounded-full border border-fg/15 px-3 py-2 text-xs text-muted hover:text-fg"
                >
                  {r.title}
                </Link>
              ) : null,
            )}
          </div>
        ) : null}
      </ArticleFrame>
    </SiteShell>
  );
}
