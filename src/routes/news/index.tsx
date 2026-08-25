import { createFileRoute } from "@tanstack/react-router";
import { NewsGrid } from "@/components/news-card";
import { SiteShell } from "@/components/site-shell";
import { NEWS } from "@/data/news";
import { PERSON } from "@/data/site";

export const Route = createFileRoute("/news/")({
  component: NewsPage,
  head: () => ({ meta: [{ title: `News — ${PERSON.name}` }] }),
});

function NewsPage() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight text-fg sm:text-6xl">News</h1>
        <p className="mt-4 max-w-xl text-lg text-muted">
          Path updates, lab write-ups, research drafts, and Polymorph ships — the public record.
        </p>
        <div className="mt-14">
          <NewsGrid posts={NEWS} />
        </div>
      </div>
    </SiteShell>
  );
}
