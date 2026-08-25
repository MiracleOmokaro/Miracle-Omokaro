import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleFrame } from "@/components/article-frame";
import { NewsArtPanel } from "@/components/news-art";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { PERSON } from "@/data/site";
import { getWin } from "@/data/wins";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/skills/$slug")({
  component: WinArticle,
  loader: ({ params }) => {
    const win = getWin(params.slug);
    if (!win) throw notFound();
    return { win };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.win.title ?? "Write-up"} — ${PERSON.name}` }],
  }),
});

function WinArticle() {
  const { win } = Route.useLoaderData();
  return (
    <SiteShell>
      <ArticleFrame
        back={
          <p className="text-sm text-muted">
            <Link to="/skills" className="hover:text-fg">
              Back to skills
            </Link>
          </p>
        }
        hero={
          <NewsArtPanel art={win.newsArt} className="aspect-[16/9] w-full sm:aspect-[2.1/1]">
            <span className="absolute inset-x-6 bottom-6 text-2xl font-medium capitalize tracking-tight text-white sm:text-3xl">
              {win.severity}
            </span>
          </NewsArtPanel>
        }
        date={formatDate(win.date)}
        kicker={`${win.severity} · ${win.context}`}
        title={win.title}
        dek={win.summary}
      >
        <div className="flex flex-wrap gap-2">
          {win.techniques.map((t) => (
            <span key={t} className="rounded-full border border-fg/12 px-3 py-1 text-xs text-muted">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-12">
          <ProseBlocks blocks={win.writeup} />
        </div>
        <p className="mt-12 text-sm text-subtle">
          Authorized lab write-up. Production CVE and bounty reports will use this same form —
          method, impact, fix. No payout figures.
        </p>
      </ArticleFrame>
    </SiteShell>
  );
}
