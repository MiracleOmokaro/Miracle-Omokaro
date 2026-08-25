export type StageStatus = "completed" | "in-progress" | "upcoming";
export type StageGroup =
  | "Foundations"
  | "Offensive"
  | "Defensive"
  | "Research"
  | "Soft Skills";

export type IdeaStatus = "green" | "amber" | "gray" | "blue";

export type Idea = {
  id: string;
  title: string;
  description: string;
  status: IdeaStatus;
  githubUrl: string | null;
};

export type ContentBlock = {
  heading?: string;
  body: string;
  bullets?: string[];
};

export type PlatformKey =
  | "cisco"
  | "tryhackme"
  | "portswigger"
  | "asu"
  | "sans"
  | "independent";

export type StageIcon =
  | "shield-check"
  | "terminal"
  | "graduation"
  | "badge"
  | "code"
  | "research"
  | "target"
  | "fortress";

export type RoadmapStage = {
  id: string;
  title: string;
  platform: string;
  platformKey: PlatformKey;
  order: number;
  group: StageGroup;
  status: StageStatus;
  startDate: string | null;
  endDate: string | null;
  completedDate: string | null;
  verificationUrl: string | null;
  officialUrl: string | null;
  icon: StageIcon;
  hoverSummary: string;
  courseOverview: string;
  learned: ContentBlock[];
  ideas: Idea[];
  relatedStages: string[];
  nextRecommended: string | null;
  newsArt: NewsArt;
};

export type ProjectStatus = "live" | "in-development" | "archived" | "concept";
export type ProjectGroup = "Client Work" | "Internal Tools" | "Experiments" | "Case Studies";

export type Project = {
  id: string;
  title: string;
  client: string;
  market: string;
  order: number;
  group: ProjectGroup;
  status: ProjectStatus;
  completedDate: string | null;
  liveUrl: string | null;
  githubUrl: string | null;
  summary: string;
  description: string;
  techStack: string[];
  clientFeedback: { quote: string; author: string; rating: number } | null;
  agenticNotes: string;
  relatedProjects: string[];
  newsArt: NewsArt;
};

export type Severity = "critical" | "high" | "medium" | "low";

export type Win = {
  id: string;
  title: string;
  severity: Severity;
  date: string;
  context: string;
  summary: string;
  writeup: ContentBlock[];
  techniques: string[];
  newsArt: NewsArt;
};

export type ResearchPost = {
  id: string;
  title: string;
  date: string;
  venue: string;
  summary: string;
  body: ContentBlock[];
  status: "published" | "in-progress" | "planned";
  newsArt: NewsArt;
};

export type NewsArt =
  | "ember"
  | "violet"
  | "forest"
  | "ink"
  | "tide"
  | "sand"
  | "noir";

export type NewsKind = "path" | "research" | "skills" | "company";

export type NewsPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  kind: NewsKind;
  href: string;
  newsArt: NewsArt;
  kicker?: string;
};
