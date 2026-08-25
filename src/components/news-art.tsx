import type { NewsArt } from "@/data/types";
import { cn } from "@/lib/cn";
import type { ReactNode } from "react";

export const NEWS_ART_CLASS: Record<NewsArt, string> = {
  ember: "news-art-ember",
  violet: "news-art-violet",
  forest: "news-art-forest",
  ink: "news-art-ink",
  tide: "news-art-tide",
  sand: "news-art-sand",
  noir: "news-art-noir",
};

export function NewsArtPanel({
  art,
  className,
  children,
}: {
  art: NewsArt;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <div className={cn("news-art relative overflow-hidden", NEWS_ART_CLASS[art], className)}>
      {children}
    </div>
  );
}
