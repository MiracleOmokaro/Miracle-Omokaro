import { createFileRoute, Link } from "@tanstack/react-router";
import { NewsGrid } from "@/components/news-card";
import { SiteShell } from "@/components/site-shell";
import { RESEARCH } from "@/data/research";
import { PERSON } from "@/data/site";
import type { NewsPost } from "@/data/types";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({ meta: [{ title: `Research — ${PERSON.name}` }] }),
});

function ResearchPage() {
  const posts: NewsPost[] = RESEARCH.map((r) => ({
    id: r.id,
    title: r.title,
    date: r.date,
    excerpt: r.summary,
    kind: "research",
    href: `/news/${r.id}`,
    newsArt: r.newsArt,
    kicker: r.status,
  }));

  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight text-fg sm:text-6xl">Research</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
          Public drafts on the way to student tracks, workshops, and practitioner bodies — IEEE
          Computer Society / Security & Privacy, and ASIS International among them. Claims stay
          smaller than the evidence.
        </p>
        <div className="mt-14">
          <NewsGrid posts={posts} />
        </div>
        <p className="mt-10 text-sm text-muted">
          <Link to="/news" className="hover:text-fg">
            All news →
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
