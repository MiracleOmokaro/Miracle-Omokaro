import type { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "al-noor-retail",
    title: "Al-Noor Retail",
    client: "Al-Noor Retail",
    market: "Riyadh, Saudi Arabia",
    order: 10,
    group: "Client Work",
    status: "live",
    completedDate: "2026-07-12",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/polymorph-technologies/al-noor-retail",
    summary:
      "Bilingual e-commerce for a Riyadh retailer: catalogue, inventory, and payment flows that respect local checkout reality — including Mada — without a six-month agency timeline.",
    description:
      "Al-Noor needed a storefront that did not feel like a translated Western template. Polymorph’s pipeline researched competitor UX in the Saudi market, structured information architecture in Arabic-first order, and generated a production Next.js storefront with bilingual content, inventory hooks, and payment rails. Human review locked brand voice, photography, and legal copy. The site shipped as a complete property, not a theme.",
    techStack: ["Next.js", "Tailwind CSS", "Supabase", "Stripe + Mada", "Vercel"],
    clientFeedback: {
      quote:
        "The site launched faster than any previous vendor and the bilingual experience is the first one our staff did not have to apologise for.",
      author: "Procurement lead, Al-Noor Retail",
      rating: 5,
    },
    agenticNotes:
      "Discovery calls were opened by a voice agent; the research agent compiled a market brief; the generator produced IA, copy drafts, and UI in one pass. Human oversight at brand alignment and final QA only.",
    relatedProjects: ["gulf-logistics", "nur-clinic"],
  },
  {
    id: "gulf-logistics",
    title: "Gulf Freight Desk",
    client: "Gulf Freight Desk",
    market: "Dubai, UAE",
    order: 20,
    group: "Client Work",
    status: "live",
    completedDate: "2026-06-03",
    liveUrl: "https://example.com",
    githubUrl: null,
    summary:
      "A quiet, high-trust site for a Dubai freight operator: lanes, documentation, and a request desk that sales can actually close from.",
    description:
      "Freight sites usually drown in stock photography and unread PDFs. This one is structured around the questions a shipper actually asks: lanes, transit expectations, document checklist, and a request flow that lands in the right inbox with the right fields. The generator produced the information architecture from a corpus of competitor sites and the operator’s own rate sheets; the voice agent handled first-touch qualification.",
    techStack: ["Astro", "Tailwind CSS", "Resend", "Netlify"],
    clientFeedback: {
      quote: "We stopped losing inbound requests to a generic contact form.",
      author: "Operations, Gulf Freight Desk",
      rating: 5,
    },
    agenticNotes:
      "Low-latency research over public tariff pages and port notices. Voice agent used for follow-up sequences after a request is filed.",
    relatedProjects: ["al-noor-retail", "qamar-pay"],
  },
  {
    id: "nur-clinic",
    title: "Nur Clinic",
    client: "Nur Clinic",
    market: "Jeddah, Saudi Arabia",
    order: 30,
    group: "Client Work",
    status: "live",
    completedDate: "2026-04-21",
    liveUrl: "https://example.com",
    githubUrl: null,
    summary:
      "A clinic site that treats appointment flow and privacy as first-class, not a plugin afterthought.",
    description:
      "Healthcare sites fail on two axes: they look like hotels, or they leak more than they should. Nur Clinic’s brief was Arabic/English content, specialist pages, and an appointment request that collects only what staff need. Pentagon Cyber’s secure-by-default checklist was applied at generation time: no unnecessary third-party scripts, tight form fields, and a privacy page that is actually true.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    clientFeedback: {
      quote: "Patients find the right department. That was the whole brief.",
      author: "Clinic administrator, Nur Clinic",
      rating: 5,
    },
    agenticNotes:
      "Generator constrained by a healthcare content policy. Human clinician review of medical copy before publish.",
    relatedProjects: ["al-noor-retail"],
  },
  {
    id: "qamar-pay",
    title: "Qamar Pay — Marketing Site",
    client: "Qamar Pay",
    market: "Doha, Qatar",
    order: 40,
    group: "Client Work",
    status: "in-development",
    completedDate: null,
    liveUrl: null,
    githubUrl: "https://github.com/polymorph-technologies/qamar-pay",
    summary:
      "A fintech marketing site in progress: product narrative, compliance-aware copy, and a waitlist that sales can work.",
    description:
      "Qamar Pay is an SME payments product. The site must explain the product without over-claiming, in a market where trust is the product. Currently in generation and legal review. Live URL lands when compliance signs off.",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    clientFeedback: null,
    agenticNotes:
      "Copy generation is gated on a compliance glossary. Voice-agent outreach paused until the waitlist is public.",
    relatedProjects: ["gulf-logistics"],
  },
  {
    id: "agentic-press",
    title: "Agentic Press — Internal Pipeline",
    client: "Polymorph Technologies",
    market: "Internal",
    order: 50,
    group: "Internal Tools",
    status: "in-development",
    completedDate: null,
    liveUrl: null,
    githubUrl: "https://github.com/polymorph-technologies/agentic-press",
    summary:
      "The machinery itself: search, sort, and print. A low-latency pipeline that turns a business brief into a structured site, with human checkpoints.",
    description:
      "Agentic Press is not a client site. It is the system that produces them. Research agents gather market and competitor context; a structuring agent produces IA and content models; a print agent emits code and copy; a voice-agent layer handles outreach. Latency is treated as a product feature. This repository is the public-facing description of a private system.",
    techStack: ["TypeScript", "Python", "Vercel", "GitHub Actions"],
    clientFeedback: null,
    agenticNotes:
      "Dogfooded on every Polymorph engagement. Improvements ship here first.",
    relatedProjects: ["al-noor-retail", "gulf-logistics", "nur-clinic"],
  },
];

export function getProject(id: string) {
  return PROJECTS.find((p) => p.id === id);
}

export function projectsSorted() {
  return [...PROJECTS].sort((a, b) => a.order - b.order);
}
