import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { ArticleFrame } from "@/components/article-frame";
import { CourseBanner } from "@/components/course-banner";
import { IdeaCard } from "@/components/idea-card";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { getStage, ROADMAP } from "@/data/roadmap";
import { PERSON } from "@/data/site";
import { formatRange } from "@/lib/format";

export const Route = createFileRoute("/path/$slug")({
  component: StagePage,
  loader: ({ params }) => {
    const stage = getStage(params.slug);
    if (!stage) throw notFound();
    return { stage };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.stage.title ?? "Stage"} — ${PERSON.name}` }],
  }),
});

function StagePage() {
  const { stage } = Route.useLoaderData();
  const related = stage.relatedStages
    .map((id) => ROADMAP.find((s) => s.id === id))
    .filter(Boolean);
  const next = stage.nextRecommended ? getStage(stage.nextRecommended) : null;
  const prev = ROADMAP.filter((s) => s.order < stage.order).sort((a, b) => b.order - a.order)[0];

  return (
    <SiteShell>
      <ArticleFrame
        back={
          <p className="text-sm text-muted">
            <Link to="/path" className="hover:text-fg">
              Back to path
            </Link>
          </p>
        }
        hero={
          <CourseBanner
            platformKey={stage.platformKey}
            title={stage.title}
            startDate={stage.startDate}
            endDate={stage.endDate}
            status={stage.status}
          />
        }
        date={formatRange(stage.startDate, stage.endDate, stage.status)}
        kicker={stage.platform}
        title={stage.title}
        dek={stage.courseOverview}
      >
        <div className="flex flex-wrap gap-4 text-sm">
          {stage.verificationUrl ? (
            <a
              href={stage.verificationUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-fg underline-offset-4 hover:underline"
            >
              Verification <ExternalLink className="size-3.5" />
            </a>
          ) : null}
          {stage.officialUrl ? (
            <a
              href={stage.officialUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-muted hover:text-fg"
            >
              Official course <ExternalLink className="size-3.5" />
            </a>
          ) : null}
        </div>

        <h2 className="mt-14 text-2xl font-medium tracking-tight text-fg sm:text-3xl">
          What I learned
        </h2>
        <div className="mt-8">
          <ProseBlocks blocks={stage.learned} />
        </div>

        <h2 className="mt-16 text-2xl font-medium tracking-tight text-fg sm:text-3xl">
          Ideas, projects and takeaways
        </h2>
        <p className="mt-3 text-[17px] leading-[1.7] text-muted">
          Green means work has begun — the title is a repository. Amber is planned. Blue is still
          being researched. Gray is shelved.
        </p>
        <div className="mt-4">
          {stage.ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>

        <section className="mt-16">
          <p className="text-sm text-muted">Continue the path</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                to="/path/$slug"
                params={{ slug: prev.id }}
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg"
              >
                <ArrowLeft className="size-4" /> {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                to="/path/$slug"
                params={{ slug: next.id }}
                className="inline-flex items-center gap-2 text-sm text-fg hover:underline"
              >
                {next.title} <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
          {related.length ? (
            <div className="mt-6 flex flex-wrap gap-2">
              {related.map((r) =>
                r ? (
                  <Link
                    key={r.id}
                    to="/path/$slug"
                    params={{ slug: r.id }}
                    className="rounded-full border border-fg/15 px-3 py-2 text-xs text-muted hover:text-fg"
                  >
                    {r.title}
                  </Link>
                ) : null,
              )}
            </div>
          ) : null}
        </section>
      </ArticleFrame>
    </SiteShell>
  );
}
