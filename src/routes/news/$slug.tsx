import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleFrame } from "@/components/article-frame";
import { NewsArtPanel } from "@/components/news-art";
import { ProseBlocks } from "@/components/prose-blocks";
import { SiteShell } from "@/components/site-shell";
import { getResearch } from "@/data/research";
import { PERSON } from "@/data/site";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/news/$slug")({
  component: NewsArticle,
  loader: ({ params }) => {
    const post = getResearch(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.post.title ?? "News"} — ${PERSON.name}` }],
  }),
});

function NewsArticle() {
  const { post } = Route.useLoaderData();
  return (
    <SiteShell>
      <ArticleFrame
        back={
          <p className="text-sm text-muted">
            <Link to="/news" className="hover:text-fg">
              Back to news
            </Link>
          </p>
        }
        hero={
          <NewsArtPanel art={post.newsArt} className="aspect-[16/9] w-full sm:aspect-[2.1/1]">
            <span className="absolute inset-x-6 bottom-6 text-2xl font-medium tracking-tight text-white sm:text-3xl">
              Research
            </span>
          </NewsArtPanel>
        }
        date={formatDate(post.date)}
        title={post.title}
        dek={post.summary}
      >
        <ProseBlocks blocks={post.body} />
        <p className="mt-12 text-sm text-subtle">{post.venue}</p>
      </ArticleFrame>
    </SiteShell>
  );
}
