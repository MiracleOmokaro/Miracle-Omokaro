import type { ResearchPost } from "./types";

export const RESEARCH: ResearchPost[] = [
  {
    id: "secure-default-generation",
    title: "Can an agentic generator reduce first-ship web vulnerabilities for SMEs?",
    date: "2026-08-01",
    venue: "Independent draft · IEEE student-track trajectory",
    status: "in-progress",
    summary:
      "A working research question at the intersection of Polymorph and Pentagon Cyber: measure whether constrained generation (CSP, authz defaults, dependency policy) changes the vulnerability profile of first-ship SME sites versus typical agency output.",
    body: [
      {
        heading: "Claim I am not yet making",
        body: "I am not claiming the pipeline is “secure.” I am asking whether a constrained generator produces fewer of the bug classes I already know how to find — XSS sinks, missing object authz, CORS mistakes, debug leakage — than a conventional first version. That is a measurable question.",
      },
      {
        heading: "Method (draft)",
        body: "Build a rubric from Academy and OWASP classes. Score a sample of generated sites and a sample of comparable SME sites. Report counts, not vibes. Limitations will be honest: sample size, lab vs production, and the fact that I am both builder and rater until a second reviewer exists.",
      },
      {
        heading: "Why this venue path",
        body: "IEEE student and workshop tracks reward a clean question more than a grand theory. ASIS practitioner audiences care whether SMEs actually get safer. The same work can speak to both if the method is not dressed up.",
      },
    ],
  },
  {
    id: "voice-agent-trust",
    title: "Voice agents in SME sales: trust, consent, and failure modes",
    date: "2026-08-12",
    venue: "Planned note",
    status: "planned",
    summary:
      "Polymorph uses voice agents for outreach. This note will treat that as a security and ethics object: impersonation risk, recording consent across Gulf jurisdictions, and what “the power of Grok” does not excuse.",
    body: [
      {
        heading: "Scope",
        body: "Not a marketing essay. A list of failure modes and the controls I expect us to ship before scale: identity disclosure, opt-out, data retention, and a human on the close.",
      },
    ],
  },
];
