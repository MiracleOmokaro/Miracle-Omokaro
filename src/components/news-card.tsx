import { Link } from "@tanstack/react-router";
import type { NewsPost } from "@/data/types";
import { formatDate } from "@/lib/format";
import { NewsArtPanel } from "./news-art";

export function NewsCard({ post }: { post: NewsPost }) {
  return (
    <Link to={post.href as "/"} className="group block">
      <NewsArtPanel art={post.newsArt} className="aspect-[16/10] w-full">
        <span className="absolute inset-x-5 bottom-5 text-[1.35rem] font-medium leading-[1.15] tracking-tight text-white capitalize sm:inset-x-6 sm:bottom-6 sm:text-[1.65rem]">
          {post.kicker ?? post.title}
        </span>
      </NewsArtPanel>
      <p className="mt-3 text-xs text-muted">{formatDate(post.date)}</p>
      <h3 className="mt-1 text-[15px] font-medium leading-snug tracking-tight text-fg transition-colors group-hover:text-muted sm:text-base">
        {post.title}
      </h3>
    </Link>
  );
}

export function NewsGrid({ posts }: { posts: NewsPost[] }) {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
      {posts.map((p) => (
        <NewsCard key={p.id} post={p} />
      ))}
    </div>
  );
}
