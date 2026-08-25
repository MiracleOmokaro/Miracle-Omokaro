import { formatDate } from "@/lib/format";
import { PLATFORMS } from "./platforms";
import { PROJECTS } from "./projects";
import { RESEARCH } from "./research";
import { ROADMAP } from "./roadmap";
import type { NewsPost } from "./types";
import { WINS } from "./wins";

export const NEWS: NewsPost[] = [
  ...ROADMAP.filter((s) => s.status === "completed" && s.endDate).map((s) => ({
    id: `path-${s.id}`,
    title: s.title,
    date: s.endDate as string,
    excerpt: s.hoverSummary,
    kind: "path" as const,
    href: `/path/${s.id}`,
    newsArt: s.newsArt,
    kicker: PLATFORMS[s.platformKey].short,
  })),
  ...WINS.map((w) => ({
    id: `win-${w.id}`,
    title: w.title,
    date: w.date,
    excerpt: w.summary,
    kind: "skills" as const,
    href: `/skills/${w.id}`,
    newsArt: w.newsArt,
    kicker: w.severity,
  })),
  ...RESEARCH.map((r) => ({
    id: `research-${r.id}`,
    title: r.title,
    date: r.date,
    excerpt: r.summary,
    kind: "research" as const,
    href: `/news/${r.id}`,
    newsArt: r.newsArt,
    kicker: "Research",
  })),
  ...PROJECTS.filter((p) => p.status === "live" && p.completedDate).map((p) => ({
    id: `work-${p.id}`,
    title: `${p.title} is live`,
    date: p.completedDate as string,
    excerpt: p.summary,
    kind: "company" as const,
    href: `/work/${p.id}`,
    newsArt: p.newsArt,
    kicker: p.title,
  })),
].sort((a, b) => (a.date < b.date ? 1 : -1));

export function latestNews(n = 4) {
  return NEWS.slice(0, n);
}

export function newsById(id: string) {
  return NEWS.find((p) => p.id === id);
}

export function formatNewsDate(iso: string) {
  return formatDate(iso);
}
