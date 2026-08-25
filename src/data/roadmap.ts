import type { RoadmapStage } from "./types";

export const ROADMAP: RoadmapStage[] = [
  {
    id: "cisco-intro-cybersecurity",
    title: "Introduction to Cybersecurity",
    platform: "Cisco Networking Academy",
    platformKey: "cisco",
    order: 10,
    group: "Foundations",
    status: "completed",
    startDate: "2026-01-15",
    endDate: "2026-03-15",
    completedDate: "2026-03-15",
    verificationUrl: "https://www.credly.com/badges",
    officialUrl: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
    icon: "shield-check",
    newsArt: "tide",
    hoverSummary:
      "CIA triad, threat taxonomy, basic defensive controls, and the professional landscape — the first principles every later stage maps back to.",
    courseOverview:
      "Cisco’s Introduction to Cybersecurity is a structured entry into the field: confidentiality, integrity, and availability; the evolving threat landscape; common attack vectors; and the defensive technologies and processes used to protect people and organizations. Interactive labs and career modules sit alongside the theory so the ideas are not abstract. It is the same curriculum used by academies worldwide — which is the point. Recruiters should be able to verify the resource, not take my word for a private playlist.",
    learned: [
      {
        heading: "Mental models that still run daily",
        body: "Every control I evaluate now maps back to at least one property of the CIA triad. That sounds elementary until you use it as a forcing function: if a proposed tool does not clearly protect confidentiality, integrity, or availability, it is decoration. I still write that mapping in the first paragraph of a lab notebook before I touch a payload.",
      },
      {
        heading: "Threat actors, not movie hackers",
        body: "The course’s taxonomy — opportunistic criminals, financially motivated groups, hacktivists, insiders, and nation-state operators — replaced a vague sense of “hackers” with motivation, capability, and typical tradecraft. That distinction later decides how I write threat models for SMEs versus higher-risk targets.",
        bullets: [
          "Vulnerability vs. exploit vs. payload is no longer a blur",
          "Social engineering is treated as a primary vector, not a footnote",
          "Policy and process sit next to technology, not beneath it",
        ],
      },
      {
        heading: "Defensive layers",
        body: "Hardening, monitoring, incident-response basics, and the role of written policy. Packet Tracer and browser labs made reconnaissance and simple defensive configurations tactile rather than slide-deck knowledge. I left with a personal first-principles checklist I still apply when Polymorph evaluates a generated site: what is the asset, who wants it, what is the cheapest control that actually changes the risk.",
      },
      {
        heading: "Mindset",
        body: "Cybersecurity is continuous risk evaluation and disciplined reduction of attack surface. That view now informs both my learning path and how Polymorph generates sites that are secure by default rather than bolted on after launch. A sophomore who cannot explain a control without naming a product does not understand the control.",
      },
    ],
    ideas: [
      {
        id: "sme-threat-canvas",
        title: "One-page threat modeling canvas for SMEs",
        description:
          "A visual canvas for small businesses in emerging markets. It forces the five most common high-impact risks onto one page instead of importing enterprise frameworks they will never finish.",
        status: "green",
        githubUrl: "https://github.com/miracleomokaro/sme-threat-canvas",
      },
      {
        id: "cia-lab-series",
        title: "Interactive CIA triad lab series",
        description:
          "Short browser labs that let a learner break, then restore, each CIA property in a safe environment — pedagogy first, tools second.",
        status: "amber",
        githubUrl: null,
      },
      {
        id: "career-map",
        title: "Living career pathway visualizer",
        description:
          "A diagram that maps foundational knowledge to specializations, wired to real courses and repositories. This site is the first public instance of that idea.",
        status: "blue",
        githubUrl: null,
      },
    ],
    relatedStages: ["tryhackme-pre-security"],
    nextRecommended: "tryhackme-pre-security",
  },
  {
    id: "tryhackme-pre-security",
    title: "Pre-Security Path",
    platform: "TryHackMe",
    platformKey: "tryhackme",
    order: 20,
    group: "Foundations",
    status: "completed",
    startDate: "2026-03-20",
    endDate: "2026-05-02",
    completedDate: "2026-05-02",
    verificationUrl: "https://tryhackme.com/path/outline/presecurity",
    officialUrl: "https://tryhackme.com/path/outline/presecurity",
    icon: "terminal",
    newsArt: "forest",
    hoverSummary:
      "Networks, how the web works, Linux and Windows fundamentals, and a first honest look at offensive security — the operating literacy the rest of the path assumes.",
    courseOverview:
      "TryHackMe’s Pre-Security path is the practical counterpart to Cisco’s conceptual intro. It covers cyber security basics, network fundamentals (OSI, TCP/IP, common ports), how the web actually works (HTTP, DNS, cookies), Linux and Windows command-line literacy, and a controlled introduction to offensive thinking. Rooms are hands-on: you type, you break, you read the output. Completion is public on the platform. That publicity is a feature — the path is designed so a stranger can follow the same rooms.",
    learned: [
      {
        heading: "Networks as a map, not a slogan",
        body: "Packets, ports, DNS resolution, and the difference between a host firewall and a network boundary stopped being vocabulary and became things I can observe with real tools. That is the difference between passing a quiz and being useful on a box.",
        bullets: [
          "TCP vs UDP failure modes and when each is the right question",
          "Common service fingerprints on 22, 80, 443, 3389, 445",
          "Why DNS is both infrastructure and an attack surface",
        ],
      },
      {
        heading: "Linux as a first language",
        body: "File permissions, processes, users, and the shell are now default tools rather than a foreign OS. Windows fundamentals (services, users, event logs at a glance) sit beside that so I am not Linux-only in a Windows-majority world.",
      },
      {
        heading: "The web as an application, not a page",
        body: "HTTP methods, status codes, cookies, and headers are the raw material of later web-app testing. Pre-Security does not teach XSS; it teaches why XSS is even possible. That sequencing is why this node sits before PortSwigger, not after.",
      },
    ],
    ideas: [
      {
        id: "port-literacy-cheatsheet",
        title: "Service-port literacy sheet for first-box recon",
        description:
          "A tight reference of high-value ports, default services, and the first three questions to ask when each appears — written for people who have just finished Pre-Security.",
        status: "green",
        githubUrl: "https://github.com/miracleomokaro/port-literacy",
      },
      {
        id: "linux-daily-drills",
        title: "Thirty-day Linux command drills",
        description:
          "A sequenced set of small daily tasks that turn “I completed the Linux rooms” into muscle memory.",
        status: "amber",
        githubUrl: null,
      },
    ],
    relatedStages: ["cisco-intro-cybersecurity", "web-security-academy"],
    nextRecommended: "web-security-academy",
  },
  {
    id: "web-security-academy",
    title: "Web Security Academy — Core",
    platform: "PortSwigger",
    platformKey: "portswigger",
    order: 30,
    group: "Offensive",
    status: "in-progress",
    startDate: "2026-05-10",
    endDate: null,
    completedDate: null,
    verificationUrl: null,
    officialUrl: "https://portswigger.net/web-security",
    icon: "target",
    newsArt: "sand",
    hoverSummary:
      "XSS, SQL injection, access control, SSRF, and the rest of the modern web-app attack surface — taught with labs that refuse to let you skip the mechanics.",
    courseOverview:
      "PortSwigger’s Web Security Academy is the most respected free curriculum for application security. Each topic pairs a precise explanation with graded labs. I am working through the core apprentice and practitioner labs: cross-site scripting, SQL injection, access-control flaws, CSRF, SSRF, directory traversal, and information disclosure. The point is not a badge. The point is being able to explain, reproduce, and fix the class of bug — and to write it so another practitioner can follow the method without a screenshot dump.",
    learned: [
      {
        heading: "Injection as a class, not a payload",
        body: "SQL injection labs force you to see the application as a translator between two languages. Once that clicks, payloads become experiments rather than magic strings copied from a list. I now refuse to write a finding that does not name the interpreter being confused.",
      },
      {
        heading: "Access control is where real money hides",
        body: "IDOR, vertical and horizontal privilege issues, and method-based bypasses are less cinematic than RCE and more common in production. The Academy’s access-control path is the one I recommend first to anyone who wants to do bug bounty without LARPing. It is also the class Polymorph’s generator is constrained against: every object, every method, a principal check.",
      },
      {
        heading: "XSS with discipline",
        body: "Reflected, stored, and DOM-based XSS, plus the encoding and sink/source model. I now write write-ups that name the sink, the source, and the context — not “alert(1) worked.” That discipline is what will transfer to authorized bounty work when those programs begin.",
      },
    ],
    ideas: [
      {
        id: "lab-notebook",
        title: "Structured lab notebook for Academy rooms",
        description:
          "A Markdown template: hypothesis, request, sink, payload evolution, impact, fix. Every future write-up on this site uses it.",
        status: "green",
        githubUrl: "https://github.com/miracleomokaro/academy-lab-notebook",
      },
      {
        id: "idor-scanner-notes",
        title: "Manual IDOR methodology, not a scanner",
        description:
          "A checklist for mapping object references and testing horizontal access without spraying tools at a target.",
        status: "blue",
        githubUrl: null,
      },
    ],
    relatedStages: ["tryhackme-pre-security", "pwn-college"],
    nextRecommended: "pwn-college",
  },
  {
    id: "pwn-college",
    title: "pwn.college Dojo",
    platform: "Arizona State University",
    platformKey: "asu",
    order: 40,
    group: "Offensive",
    status: "in-progress",
    startDate: "2026-06-01",
    endDate: null,
    completedDate: null,
    verificationUrl: null,
    officialUrl: "https://pwn.college",
    icon: "graduation",
    newsArt: "ember",
    hoverSummary:
      "ASU’s public dojo for program exploitation, reverse engineering, and the kind of low-level thinking that web labs never force.",
    courseOverview:
      "pwn.college is Arizona State University’s always-on cybersecurity education platform. Modules (dojos) cover building blocks of computing, program security, reverse engineering, privilege escalation, and more, with live challenges in isolated environments. It is the path I am using to go beneath the web layer: memory, binaries, and why “it crashed” is the beginning of a conversation, not the end. A university-run public dojo is a different kind of credential than a vendor badge — it is a practice, not a PDF.",
    learned: [
      {
        heading: "Computers are not magic",
        body: "The early dojos rebuild a mental model of processes, memory, and syscalls. That model is what later makes buffer issues and mitigations intelligible instead of folklore. I draw the address space before I open a debugger. That habit came from getting stuck, not from a slide.",
      },
      {
        heading: "Reading binaries as a skill",
        body: "Reverse engineering is slow on purpose. The dojo rewards patience and note-taking over tool-hopping. I treat each unsolved challenge as a research object, not a failure. Spoilers are easy. Understanding is the scarce resource.",
      },
    ],
    ideas: [
      {
        id: "dojo-field-notes",
        title: "pwn.college field notes",
        description:
          "Public notes on each dojo: what the challenge is actually teaching, where I got stuck, and the concept that unstuck it — without spoilers that ruin the problem.",
        status: "amber",
        githubUrl: null,
      },
      {
        id: "memory-model-poster",
        title: "One-page process memory model",
        description:
          "A poster-style diagram of a process address space aimed at people coming from web security who have never drawn a stack.",
        status: "gray",
        githubUrl: null,
      },
    ],
    relatedStages: ["web-security-academy", "defensive-ops"],
    nextRecommended: "defensive-ops",
  },
  {
    id: "defensive-ops",
    title: "Defensive Operations Literacy",
    platform: "SANS-informed · self-directed",
    platformKey: "sans",
    order: 50,
    group: "Defensive",
    status: "upcoming",
    startDate: "2026-10-01",
    endDate: null,
    completedDate: null,
    verificationUrl: null,
    officialUrl: "https://www.sans.org",
    icon: "fortress",
    newsArt: "noir",
    hoverSummary:
      "Detection, logging, incident response, and the blue-team half of the same problems the offensive path learns to create.",
    courseOverview:
      "A planned defensive block informed by SANS curricula (SEC401/SEC504-style literacy, not a claim of those certifications yet): logging architecture, what a useful alert looks like, incident-response phases, and how attackers look from the other side of a SIEM. The goal is dual fluency — I refuse to be an offensive-only practitioner who cannot describe how their finding should be detected. When this block begins, the page will fill with the same density as the completed stages.",
    learned: [
      {
        heading: "Not started",
        body: "This node is on the path so the curve is honest. Upcoming is a status, not a decoration. The write-up, the dates, and the ideas will land when the work does — the same contract as every other node.",
      },
    ],
    ideas: [
      {
        id: "detection-for-web-bugs",
        title: "Detection notes for the bugs I already know how to find",
        description:
          "For each Academy class (XSS, SQLi, IDOR), a matching detection and logging note: what should have fired, and what usually does not.",
        status: "blue",
        githubUrl: null,
      },
    ],
    relatedStages: ["pwn-college", "research-practice"],
    nextRecommended: "research-practice",
  },
  {
    id: "research-practice",
    title: "Research Practice",
    platform: "Independent · IEEE / ASIS trajectory",
    platformKey: "independent",
    order: 60,
    group: "Research",
    status: "upcoming",
    startDate: "2026-12-01",
    endDate: null,
    completedDate: null,
    verificationUrl: null,
    officialUrl: null,
    icon: "research",
    newsArt: "violet",
    hoverSummary:
      "Writing that can survive a reviewer: methods, related work, and claims that match evidence — aimed at IEEE-style venues and practitioner bodies such as ASIS.",
    courseOverview:
      "The research node is not a course. It is a practice: reading papers, writing structured notes, and producing work that could be submitted to student tracks, workshops, or practitioner journals. Target bodies include IEEE (computer society / security & privacy) and ASIS International. Early work lives on this site as public drafts before any formal submission. The Harvard-style card at the top of this page is a reminder of the standard, not a claim of affiliation.",
    learned: [
      {
        heading: "The standard I am holding",
        body: "A claim needs a method. A method needs data or a reproducible lab. Related work is not a bibliography dump. That is the bar, even for a sophomore’s first notes.",
      },
    ],
    ideas: [
      {
        id: "sme-secure-default",
        title: "Secure-by-default generation for SME websites",
        description:
          "A research question sitting at the intersection of Polymorph and Pentagon Cyber: can an agentic generator measurably reduce common web vulns in first-ship sites for SMEs?",
        status: "blue",
        githubUrl: null,
      },
    ],
    relatedStages: ["defensive-ops", "cisco-intro-cybersecurity"],
    nextRecommended: null,
  },
];

export function getStage(id: string) {
  return ROADMAP.find((s) => s.id === id);
}

export function stagesByGroup(group: string | "All") {
  const sorted = [...ROADMAP].sort((a, b) => a.order - b.order);
  if (group === "All") return sorted;
  return sorted.filter((s) => s.group === group);
}

export const STAGE_GROUPS = [
  "All",
  "Foundations",
  "Offensive",
  "Defensive",
  "Research",
  "Soft Skills",
] as const;
