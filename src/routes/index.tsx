import { createFileRoute, Link } from "@tanstack/react-router";
import { PathOfProgress } from "@/components/path-of-progress";
import { NewsGrid } from "@/components/news-card";
import { SiteShell } from "@/components/site-shell";
import { latestNews } from "@/data/news";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const posts = latestNews(4);

  return (
    <SiteShell>
      <section className="mx-auto max-w-4xl px-4 pb-4 pt-16 text-center sm:px-6 sm:pt-24">
        <div className="flex flex-wrap justify-center gap-2">
          <Link
            to="/path"
            className="inline-flex h-9 items-center rounded-full border border-fg/15 px-4 text-[13px] text-fg"
          >
            Path
          </Link>
          <Link
            to="/news"
            className="inline-flex h-9 items-center rounded-full border border-fg/15 px-4 text-[13px] text-muted hover:text-fg"
          >
            News
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {["Foundations", "Offensive", "Defensive", "Research"].map((chip) => (
            <Link
              key={chip}
              to="/path"
              className="inline-flex h-12 min-w-[9.5rem] items-center justify-center rounded-xl bg-chip px-5 text-sm text-fg"
            >
              {chip}
            </Link>
          ))}
        </div>
      </section>

      <section className="px-4 py-24 sm:px-6 sm:py-32">
        <PathOfProgress compact />
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">Latest news</h2>
          <Link to="/news" className="text-sm text-muted hover:text-fg">
            All posts →
          </Link>
        </div>
        <NewsGrid posts={posts} />
      </section>
    </SiteShell>
  );
}
