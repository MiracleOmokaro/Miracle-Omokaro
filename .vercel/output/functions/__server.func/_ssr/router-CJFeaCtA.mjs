import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as createRootRoute, b as require_jsx_runtime, d as useRouterState, g as createFileRoute, h as lazyRouteComponent, l as Scripts, m as Outlet, p as createRouter, u as HeadContent, v as Link, y as useRouter, z as notFound } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TriangleAlert, o as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-Dfj2KQIn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PERSON = {
	name: "Miracle Omokaro",
	title: "Cybersecurity Practitioner",
	year: "Sophomore",
	field: "Cybersecurity",
	companies: {
		polymorph: "Polymorph Technologies",
		pentagon: "Pentagon Cyber"
	},
	social: {
		x: "https://x.com/miracleomokaro",
		github: "https://github.com/miracleomokaro",
		tryhackme: "https://tryhackme.com/p/miracleomokaro",
		discord: "https://discord.com/users/miracleomokaro",
		email: "miracle@polymorph.tech"
	}
};
var POLYMORPH = {
	name: "Polymorph Technologies",
	claim: "Agentic software development. Websites researched, structured, and printed at low latency.",
	markets: [
		"Saudi Arabia",
		"United Arab Emirates",
		"Qatar",
		"Broader Gulf & Asia"
	],
	sister: "Pentagon Cyber"
};
function SiteFooter({ variant }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-start sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-lg text-fg",
				children: variant === "polymorph" ? "Polymorph Technologies" : PERSON.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 max-w-sm text-sm text-muted",
				children: variant === "polymorph" ? "Agentic software development for businesses that need a real site, not a template." : "Cybersecurity practitioner. Sophomore. Builder of Polymorph Technologies and Pentagon Cyber."
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-fg",
						children: "Practitioner"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/polymorph",
						className: "hover:text-fg",
						children: "Polymorph"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/path",
						className: "hover:text-fg",
						children: "Path of Progress"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/connect",
						className: "hover:text-fg",
						children: "Connect"
					})
				]
			})]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var PERSONAL_NAV = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/path",
		label: "Path"
	},
	{
		to: "/work",
		label: "Work"
	},
	{
		to: "/research",
		label: "Research"
	},
	{
		to: "/skills",
		label: "Skills"
	},
	{
		to: "/connect",
		label: "Connect"
	}
];
var POLY_NAV = [
	{
		to: "/polymorph",
		label: "Home"
	},
	{
		to: "/polymorph/work",
		label: "Work"
	},
	{
		to: "/polymorph/process",
		label: "Process"
	},
	{
		to: "/polymorph/about",
		label: "About"
	},
	{
		to: "/polymorph/contact",
		label: "Contact"
	}
];
function SiteHeader({ variant }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const nav = variant === "polymorph" ? POLY_NAV : PERSONAL_NAV;
	const brandTo = variant === "polymorph" ? "/polymorph" : "/";
	const brand = variant === "polymorph" ? "Polymorph" : PERSON.name;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-bg/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:h-16 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: brandTo,
					className: "font-display text-lg tracking-tight text-fg sm:text-xl",
					children: brand
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: [nav.map((item) => {
						const active = item.to === "/" || item.to === "/polymorph" ? pathname === item.to : pathname === item.to || pathname.startsWith(item.to + "/");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							className: cn("rounded-sm px-3 py-2 text-sm transition-colors duration-150", active ? "text-fg" : "text-muted hover:text-fg"),
							children: item.label
						}, item.to);
					}), variant === "personal" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/polymorph",
						className: "ml-2 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:text-fg",
						children: "Polymorph"
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "ml-2 rounded-sm border border-border px-3 py-2 text-sm text-muted hover:text-fg",
						children: "Practitioner"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "inline-flex size-11 items-center justify-center rounded-sm text-fg lg:hidden",
					"aria-label": open ? "Close menu" : "Open menu",
					onClick: () => setOpen((v) => !v),
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "mx-auto flex max-w-6xl flex-col px-4 py-3",
				children: [nav.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.to,
					className: "flex min-h-11 items-center text-sm text-fg",
					onClick: () => setOpen(false),
					children: item.label
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: variant === "personal" ? "/polymorph" : "/",
					className: "flex min-h-11 items-center text-sm text-muted",
					onClick: () => setOpen(false),
					children: variant === "personal" ? "Polymorph Technologies" : "Practitioner site"
				})]
			})
		}) : null]
	});
}
function SiteShell({ children, variant = "personal" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-dvh flex-col bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, { variant }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, { variant })
		]
	});
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/roadmap-iX3A_xy7.js
var ROADMAP = [
	{
		id: "cisco-intro-cybersecurity",
		title: "Introduction to Cybersecurity",
		platform: "Cisco Networking Academy",
		order: 10,
		group: "Foundations",
		status: "completed",
		completedDate: "2026-03-15",
		verificationUrl: "https://www.credly.com/badges",
		officialUrl: "https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity",
		icon: "shield-check",
		hoverSummary: "CIA triad, threat taxonomy, basic defensive controls, and the professional landscape — the first principles every later stage maps back to.",
		courseOverview: "Cisco’s Introduction to Cybersecurity is a structured entry into the field: confidentiality, integrity, and availability; the evolving threat landscape; common attack vectors; and the defensive technologies and processes used to protect people and organizations. Interactive labs and career modules sit alongside the theory so the ideas are not abstract.",
		learned: [
			{
				heading: "Mental models that still run daily",
				body: "Every control I evaluate now maps back to at least one property of the CIA triad. That sounds elementary until you use it as a forcing function: if a proposed tool does not clearly protect confidentiality, integrity, or availability, it is decoration."
			},
			{
				heading: "Threat actors, not movie hackers",
				body: "The course’s taxonomy — opportunistic criminals, financially motivated groups, hacktivists, insiders, and nation-state operators — replaced a vague sense of “hackers” with motivation, capability, and typical tradecraft. That distinction later decides how I write threat models for SMEs versus higher-risk targets.",
				bullets: [
					"Vulnerability vs. exploit vs. payload is no longer a blur",
					"Social engineering is treated as a primary vector, not a footnote",
					"Policy and process sit next to technology, not beneath it"
				]
			},
			{
				heading: "Defensive layers",
				body: "Hardening, monitoring, incident-response basics, and the role of written policy. Packet Tracer and browser labs made reconnaissance and simple defensive configurations tactile rather than slide-deck knowledge."
			},
			{
				heading: "Mindset",
				body: "Cybersecurity is continuous risk evaluation and disciplined reduction of attack surface. That view now informs both my learning path and how Polymorph generates sites that are secure by default rather than bolted on after launch."
			}
		],
		ideas: [
			{
				id: "sme-threat-canvas",
				title: "One-page threat modeling canvas for SMEs",
				description: "A visual canvas for small businesses in emerging markets. It forces the five most common high-impact risks onto one page instead of importing enterprise frameworks they will never finish.",
				status: "green",
				githubUrl: "https://github.com/miracleomokaro/sme-threat-canvas"
			},
			{
				id: "cia-lab-series",
				title: "Interactive CIA triad lab series",
				description: "Short browser labs that let a learner break, then restore, each CIA property in a safe environment — pedagogy first, tools second.",
				status: "amber",
				githubUrl: null
			},
			{
				id: "career-map",
				title: "Living career pathway visualizer",
				description: "A diagram that maps foundational knowledge to specializations, wired to real courses and repositories. This site is the first public instance of that idea.",
				status: "blue",
				githubUrl: null
			}
		],
		relatedStages: ["tryhackme-pre-security"],
		nextRecommended: "tryhackme-pre-security"
	},
	{
		id: "tryhackme-pre-security",
		title: "Pre-Security Path",
		platform: "TryHackMe",
		order: 20,
		group: "Foundations",
		status: "completed",
		completedDate: "2026-05-02",
		verificationUrl: "https://tryhackme.com/path/outline/presecurity",
		officialUrl: "https://tryhackme.com/path/outline/presecurity",
		icon: "terminal",
		hoverSummary: "Networks, how the web works, Linux and Windows fundamentals, and a first honest look at offensive security — the operating literacy the rest of the path assumes.",
		courseOverview: "TryHackMe’s Pre-Security path is the practical counterpart to Cisco’s conceptual intro. It covers cyber security basics, network fundamentals (OSI, TCP/IP, common ports), how the web actually works (HTTP, DNS, cookies), Linux and Windows command-line literacy, and a controlled introduction to offensive thinking. Rooms are hands-on: you type, you break, you read the output.",
		learned: [
			{
				heading: "Networks as a map, not a slogan",
				body: "Packets, ports, DNS resolution, and the difference between a host firewall and a network boundary stopped being vocabulary and became things I can observe with real tools. That is the difference between passing a quiz and being useful on a box.",
				bullets: [
					"TCP vs UDP failure modes and when each is the right question",
					"Common service fingerprints on 22, 80, 443, 3389, 445",
					"Why DNS is both infrastructure and an attack surface"
				]
			},
			{
				heading: "Linux as a first language",
				body: "File permissions, processes, users, and the shell are now default tools rather than a foreign OS. Windows fundamentals (services, users, event logs at a glance) sit beside that so I am not Linux-only in a Windows-majority world."
			},
			{
				heading: "The web as an application, not a page",
				body: "HTTP methods, status codes, cookies, and headers are the raw material of later web-app testing. Pre-Security does not teach XSS; it teaches why XSS is even possible."
			}
		],
		ideas: [{
			id: "port-literacy-cheatsheet",
			title: "Service-port literacy sheet for first-box recon",
			description: "A tight reference of high-value ports, default services, and the first three questions to ask when each appears — written for people who have just finished Pre-Security.",
			status: "green",
			githubUrl: "https://github.com/miracleomokaro/port-literacy"
		}, {
			id: "linux-daily-drills",
			title: "Thirty-day Linux command drills",
			description: "A sequenced set of small daily tasks that turn “I completed the Linux rooms” into muscle memory.",
			status: "amber",
			githubUrl: null
		}],
		relatedStages: ["cisco-intro-cybersecurity", "web-security-academy"],
		nextRecommended: "web-security-academy"
	},
	{
		id: "web-security-academy",
		title: "Web Security Academy — Core",
		platform: "PortSwigger",
		order: 30,
		group: "Offensive",
		status: "in-progress",
		completedDate: null,
		verificationUrl: null,
		officialUrl: "https://portswigger.net/web-security",
		icon: "target",
		hoverSummary: "XSS, SQL injection, access control, SSRF, and the rest of the modern web-app attack surface — taught with labs that refuse to let you skip the mechanics.",
		courseOverview: "PortSwigger’s Web Security Academy is the most respected free curriculum for application security. Each topic pairs a precise explanation with graded labs. I am working through the core apprentice and practitioner labs: cross-site scripting, SQL injection, access-control flaws, CSRF, SSRF, directory traversal, and information disclosure. The point is not a badge. The point is being able to explain, reproduce, and fix the class of bug.",
		learned: [
			{
				heading: "Injection as a class, not a payload",
				body: "SQL injection labs force you to see the application as a translator between two languages. Once that clicks, payloads become experiments rather than magic strings copied from a list."
			},
			{
				heading: "Access control is where real money hides",
				body: "IDOR, vertical and horizontal privilege issues, and method-based bypasses are less cinematic than RCE and more common in production. The Academy’s access-control path is the one I recommend first to anyone who wants to do bug bounty without LARPing."
			},
			{
				heading: "XSS with discipline",
				body: "Reflected, stored, and DOM-based XSS, plus the encoding and sink/source model. I now write write-ups that name the sink, the source, and the context — not “alert(1) worked.”"
			}
		],
		ideas: [{
			id: "lab-notebook",
			title: "Structured lab notebook for Academy rooms",
			description: "A Markdown template: hypothesis, request, sink, payload evolution, impact, fix. Every future write-up on this site uses it.",
			status: "green",
			githubUrl: "https://github.com/miracleomokaro/academy-lab-notebook"
		}, {
			id: "idor-scanner-notes",
			title: "Manual IDOR methodology, not a scanner",
			description: "A checklist for mapping object references and testing horizontal access without spraying tools at a target.",
			status: "blue",
			githubUrl: null
		}],
		relatedStages: ["tryhackme-pre-security", "pwn-college"],
		nextRecommended: "pwn-college"
	},
	{
		id: "pwn-college",
		title: "pwn.college Dojo",
		platform: "Arizona State University",
		order: 40,
		group: "Offensive",
		status: "in-progress",
		completedDate: null,
		verificationUrl: null,
		officialUrl: "https://pwn.college",
		icon: "graduation",
		hoverSummary: "ASU’s public dojo for program exploitation, reverse engineering, and the kind of low-level thinking that web labs never force.",
		courseOverview: "pwn.college is Arizona State University’s always-on cybersecurity education platform. Modules (dojos) cover building blocks of computing, program security, reverse engineering, privilege escalation, and more, with live challenges in isolated environments. It is the path I am using to go beneath the web layer: memory, binaries, and why “it crashed” is the beginning of a conversation, not the end.",
		learned: [{
			heading: "Computers are not magic",
			body: "The early dojos rebuild a mental model of processes, memory, and syscalls. That model is what later makes buffer issues and mitigations intelligible instead of folklore."
		}, {
			heading: "Reading binaries as a skill",
			body: "Reverse engineering is slow on purpose. The dojo rewards patience and note-taking over tool-hopping. I treat each unsolved challenge as a research object, not a failure."
		}],
		ideas: [{
			id: "dojo-field-notes",
			title: "pwn.college field notes",
			description: "Public notes on each dojo: what the challenge is actually teaching, where I got stuck, and the concept that unstuck it — without spoilers that ruin the problem.",
			status: "amber",
			githubUrl: null
		}, {
			id: "memory-model-poster",
			title: "One-page process memory model",
			description: "A poster-style diagram of a process address space aimed at people coming from web security who have never drawn a stack.",
			status: "gray",
			githubUrl: null
		}],
		relatedStages: ["web-security-academy", "defensive-ops"],
		nextRecommended: "defensive-ops"
	},
	{
		id: "defensive-ops",
		title: "Defensive Operations Literacy",
		platform: "Self-directed · SANS-informed",
		order: 50,
		group: "Defensive",
		status: "upcoming",
		completedDate: null,
		verificationUrl: null,
		officialUrl: "https://www.sans.org",
		icon: "fortress",
		hoverSummary: "Detection, logging, incident response, and the blue-team half of the same problems the offensive path learns to create.",
		courseOverview: "A planned defensive block informed by SANS curricula (SEC401/SEC504-style literacy, not a claim of those certifications yet): logging architecture, what a useful alert looks like, incident-response phases, and how attackers look from the other side of a SIEM. The goal is dual fluency — I refuse to be an offensive-only practitioner who cannot describe how their finding should be detected.",
		learned: [{
			heading: "Not started",
			body: "This node is on the path so the curve is honest. When the block begins, this page will fill with the same density as the completed stages — notes, labs, and ideas with live status."
		}],
		ideas: [{
			id: "detection-for-web-bugs",
			title: "Detection notes for the bugs I already know how to find",
			description: "For each Academy class (XSS, SQLi, IDOR), a matching detection and logging note: what should have fired, and what usually does not.",
			status: "blue",
			githubUrl: null
		}],
		relatedStages: ["pwn-college", "research-practice"],
		nextRecommended: "research-practice"
	},
	{
		id: "research-practice",
		title: "Research Practice",
		platform: "Independent · IEEE / ASIS trajectory",
		order: 60,
		group: "Research",
		status: "upcoming",
		completedDate: null,
		verificationUrl: null,
		officialUrl: null,
		icon: "research",
		hoverSummary: "Writing that can survive a reviewer: methods, related work, and claims that match evidence — aimed at IEEE-style venues and practitioner bodies such as ASIS.",
		courseOverview: "The research node is not a course. It is a practice: reading papers, writing structured notes, and producing work that could be submitted to student tracks, workshops, or practitioner journals. Target bodies include IEEE (computer society / security & privacy) and ASIS International. Early work will live on this site as public drafts before any formal submission.",
		learned: [{
			heading: "The standard I am holding",
			body: "A claim needs a method. A method needs data or a reproducible lab. Related work is not a bibliography dump. That is the bar, even for a sophomore’s first notes."
		}],
		ideas: [{
			id: "sme-secure-default",
			title: "Secure-by-default generation for SME websites",
			description: "A research question sitting at the intersection of Polymorph and Pentagon Cyber: can an agentic generator measurably reduce common web vulns in first-ship sites for SMEs?",
			status: "blue",
			githubUrl: null
		}],
		relatedStages: ["defensive-ops", "cisco-intro-cybersecurity"],
		nextRecommended: null
	}
];
function getStage(id) {
	return ROADMAP.find((s) => s.id === id);
}
function stagesByGroup(group) {
	const sorted = [...ROADMAP].sort((a, b) => a.order - b.order);
	if (group === "All") return sorted;
	return sorted.filter((s) => s.group === group);
}
var STAGE_GROUPS = [
	"All",
	"Foundations",
	"Offensive",
	"Defensive",
	"Research",
	"Soft Skills"
];
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/projects-DvtUjH9N.js
var PROJECTS = [
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
		summary: "Bilingual e-commerce for a Riyadh retailer: catalogue, inventory, and payment flows that respect local checkout reality — including Mada — without a six-month agency timeline.",
		description: "Al-Noor needed a storefront that did not feel like a translated Western template. Polymorph’s pipeline researched competitor UX in the Saudi market, structured information architecture in Arabic-first order, and generated a production Next.js storefront with bilingual content, inventory hooks, and payment rails. Human review locked brand voice, photography, and legal copy. The site shipped as a complete property, not a theme.",
		techStack: [
			"Next.js",
			"Tailwind CSS",
			"Supabase",
			"Stripe + Mada",
			"Vercel"
		],
		clientFeedback: {
			quote: "The site launched faster than any previous vendor and the bilingual experience is the first one our staff did not have to apologise for.",
			author: "Procurement lead, Al-Noor Retail",
			rating: 5
		},
		agenticNotes: "Discovery calls were opened by a voice agent; the research agent compiled a market brief; the generator produced IA, copy drafts, and UI in one pass. Human oversight at brand alignment and final QA only.",
		relatedProjects: ["gulf-logistics", "nur-clinic"]
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
		summary: "A quiet, high-trust site for a Dubai freight operator: lanes, documentation, and a request desk that sales can actually close from.",
		description: "Freight sites usually drown in stock photography and unread PDFs. This one is structured around the questions a shipper actually asks: lanes, transit expectations, document checklist, and a request flow that lands in the right inbox with the right fields. The generator produced the information architecture from a corpus of competitor sites and the operator’s own rate sheets; the voice agent handled first-touch qualification.",
		techStack: [
			"Astro",
			"Tailwind CSS",
			"Resend",
			"Netlify"
		],
		clientFeedback: {
			quote: "We stopped losing inbound requests to a generic contact form.",
			author: "Operations, Gulf Freight Desk",
			rating: 5
		},
		agenticNotes: "Low-latency research over public tariff pages and port notices. Voice agent used for follow-up sequences after a request is filed.",
		relatedProjects: ["al-noor-retail", "qamar-pay"]
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
		summary: "A clinic site that treats appointment flow and privacy as first-class, not a plugin afterthought.",
		description: "Healthcare sites fail on two axes: they look like hotels, or they leak more than they should. Nur Clinic’s brief was Arabic/English content, specialist pages, and an appointment request that collects only what staff need. Pentagon Cyber’s secure-by-default checklist was applied at generation time: no unnecessary third-party scripts, tight form fields, and a privacy page that is actually true.",
		techStack: [
			"Next.js",
			"Tailwind CSS",
			"Vercel"
		],
		clientFeedback: {
			quote: "Patients find the right department. That was the whole brief.",
			author: "Clinic administrator, Nur Clinic",
			rating: 5
		},
		agenticNotes: "Generator constrained by a healthcare content policy. Human clinician review of medical copy before publish.",
		relatedProjects: ["al-noor-retail"]
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
		summary: "A fintech marketing site in progress: product narrative, compliance-aware copy, and a waitlist that sales can work.",
		description: "Qamar Pay is an SME payments product. The site must explain the product without over-claiming, in a market where trust is the product. Currently in generation and legal review. Live URL lands when compliance signs off.",
		techStack: [
			"Next.js",
			"Tailwind CSS",
			"Vercel"
		],
		clientFeedback: null,
		agenticNotes: "Copy generation is gated on a compliance glossary. Voice-agent outreach paused until the waitlist is public.",
		relatedProjects: ["gulf-logistics"]
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
		summary: "The machinery itself: search, sort, and print. A low-latency pipeline that turns a business brief into a structured site, with human checkpoints.",
		description: "Agentic Press is not a client site. It is the system that produces them. Research agents gather market and competitor context; a structuring agent produces IA and content models; a print agent emits code and copy; a voice-agent layer handles outreach. Latency is treated as a product feature. This repository is the public-facing description of a private system.",
		techStack: [
			"TypeScript",
			"Python",
			"Vercel",
			"GitHub Actions"
		],
		clientFeedback: null,
		agenticNotes: "Dogfooded on every Polymorph engagement. Improvements ship here first.",
		relatedProjects: [
			"al-noor-retail",
			"gulf-logistics",
			"nur-clinic"
		]
	}
];
function getProject(id) {
	return PROJECTS.find((p) => p.id === id);
}
function projectsSorted() {
	return [...PROJECTS].sort((a, b) => a.order - b.order);
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/router-CJFeaCtA.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: error.message || "An unexpected error occurred. Try reloading the page."
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	if (typeof window === "undefined") return () => {};
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	const parentOrigin = resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		if (envelope.data.type === "hello") {
			if (!HelloSchema.safeParse(event.data).success) return;
			announce();
			return;
		}
		if (envelope.data.type === "navigate") {
			const parsed = NavigateSchema.safeParse(event.data);
			if (!parsed.success) return;
			navigate(parsed.data.path);
			queueMicrotask(reportLocation);
			return;
		}
		if (envelope.data.type === "history") {
			const parsed = HistorySchema.safeParse(event.data);
			if (!parsed.success) return;
			if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
			window.history.go(parsed.data.delta);
		}
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
var styles_default = "/assets/styles-CUq_jRsv.css";
var APP_NAME = "Miracle Omokaro";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-xl px-4 py-24 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs uppercase tracking-wide text-subtle",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 font-display text-4xl text-fg",
				children: "This node is not on the path."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "mt-6 inline-block text-sm text-accent hover:underline",
				children: "Return home"
			})
		]
	}) });
}
var Route$15 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#0a0a0b"
			},
			{
				name: "description",
				content: "Miracle Omokaro — cybersecurity practitioner. Path of Progress, research, and Polymorph Technologies."
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Serif:ital@0;1&display=swap"
			}
		]
	}),
	notFoundComponent: NotFound,
	component: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	})
});
var $$splitComponentImporter$14 = () => import("./routes-BkXbzC-l.mjs");
var Route$14 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter$14, "component") });
var $$splitComponentImporter$13 = () => import("./about-CUbbKI47.mjs");
var Route$13 = createFileRoute("/about")({
	component: lazyRouteComponent($$splitComponentImporter$13, "component"),
	head: () => ({ meta: [{ title: `About — ${PERSON.name}` }] })
});
var $$splitComponentImporter$12 = () => import("./connect-D_CM2vJi.mjs");
var Route$12 = createFileRoute("/connect")({
	component: lazyRouteComponent($$splitComponentImporter$12, "component"),
	head: () => ({ meta: [{ title: `Connect — ${PERSON.name}` }] })
});
var $$splitComponentImporter$11 = () => import("./research-CY7yxe55.mjs");
var Route$11 = createFileRoute("/research")({
	component: lazyRouteComponent($$splitComponentImporter$11, "component"),
	head: () => ({ meta: [{ title: `Research — ${PERSON.name}` }] })
});
var $$splitComponentImporter$10 = () => import("./skills-DC_ddPs7.mjs");
var Route$10 = createFileRoute("/skills")({
	component: lazyRouteComponent($$splitComponentImporter$10, "component"),
	head: () => ({ meta: [{ title: `Skills & wins — ${PERSON.name}` }] })
});
var $$splitComponentImporter$9 = () => import("./path-CGcshRZ1.mjs");
var Route$9 = createFileRoute("/path/")({
	component: lazyRouteComponent($$splitComponentImporter$9, "component"),
	head: () => ({ meta: [{ title: `Path of Progress — ${PERSON.name}` }] })
});
var $$splitComponentImporter$8 = () => import("../_slug-BOJyf_j8.mjs");
var Route$8 = createFileRoute("/path/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$8, "component"),
	loader: ({ params }) => {
		const stage = getStage(params.slug);
		if (!stage) throw notFound();
		return { stage };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.stage.title ?? "Stage"} — ${PERSON.name}` }] })
});
var $$splitComponentImporter$7 = () => import("./polymorph-BJHbqK6C.mjs");
var Route$7 = createFileRoute("/polymorph/")({
	component: lazyRouteComponent($$splitComponentImporter$7, "component"),
	head: () => ({ meta: [{ title: `${POLYMORPH.name} — Agentic software development` }] })
});
var $$splitComponentImporter$6 = () => import("./about-BuicYYb_.mjs");
var Route$6 = createFileRoute("/polymorph/about")({
	component: lazyRouteComponent($$splitComponentImporter$6, "component"),
	head: () => ({ meta: [{ title: `About — ${POLYMORPH.name}` }] })
});
var $$splitComponentImporter$5 = () => import("./contact-Bzh3d7tv.mjs");
var Route$5 = createFileRoute("/polymorph/contact")({
	component: lazyRouteComponent($$splitComponentImporter$5, "component"),
	head: () => ({ meta: [{ title: `Contact — ${POLYMORPH.name}` }] })
});
var $$splitComponentImporter$4 = () => import("./process-s9U1TNuy.mjs");
var Route$4 = createFileRoute("/polymorph/process")({
	component: lazyRouteComponent($$splitComponentImporter$4, "component"),
	head: () => ({ meta: [{ title: `Process — ${POLYMORPH.name}` }] })
});
var $$splitComponentImporter$3 = () => import("./work-BYbQ8fTs.mjs");
var Route$3 = createFileRoute("/work/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	head: () => ({ meta: [{ title: `Work — ${PERSON.name}` }] })
});
var $$splitComponentImporter$2 = () => import("../_slug-DOKK75ES.mjs");
var Route$2 = createFileRoute("/work/$slug")({
	component: lazyRouteComponent($$splitComponentImporter$2, "component"),
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.project.title ?? "Project"} — ${PERSON.name}` }] })
});
var $$splitComponentImporter$1 = () => import("./work-Dg0jA1X1.mjs");
var Route$1 = createFileRoute("/polymorph/work/")({
	component: lazyRouteComponent($$splitComponentImporter$1, "component"),
	head: () => ({ meta: [{ title: `Work — ${POLYMORPH.name}` }] })
});
var $$splitComponentImporter = () => import("../_slug-CyosJTAu.mjs");
var Route = createFileRoute("/polymorph/work/$slug")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	loader: ({ params }) => {
		const project = getProject(params.slug);
		if (!project) throw notFound();
		return { project };
	},
	head: ({ loaderData }) => ({ meta: [{ title: `${loaderData?.project.title ?? "Project"} — ${POLYMORPH.name}` }] })
});
var IndexRoute = Route$14.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$15
});
var AboutRoute = Route$13.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$15
});
var ConnectRoute = Route$12.update({
	id: "/connect",
	path: "/connect",
	getParentRoute: () => Route$15
});
var ResearchRoute = Route$11.update({
	id: "/research",
	path: "/research",
	getParentRoute: () => Route$15
});
var SkillsRoute = Route$10.update({
	id: "/skills",
	path: "/skills",
	getParentRoute: () => Route$15
});
var PathIndexRoute = Route$9.update({
	id: "/path/",
	path: "/path/",
	getParentRoute: () => Route$15
});
var PathSlugRoute = Route$8.update({
	id: "/path/$slug",
	path: "/path/$slug",
	getParentRoute: () => Route$15
});
var PolymorphIndexRoute = Route$7.update({
	id: "/polymorph/",
	path: "/polymorph/",
	getParentRoute: () => Route$15
});
var PolymorphAboutRoute = Route$6.update({
	id: "/polymorph/about",
	path: "/polymorph/about",
	getParentRoute: () => Route$15
});
var PolymorphContactRoute = Route$5.update({
	id: "/polymorph/contact",
	path: "/polymorph/contact",
	getParentRoute: () => Route$15
});
var PolymorphProcessRoute = Route$4.update({
	id: "/polymorph/process",
	path: "/polymorph/process",
	getParentRoute: () => Route$15
});
var WorkIndexRoute = Route$3.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$15
});
var WorkSlugRoute = Route$2.update({
	id: "/work/$slug",
	path: "/work/$slug",
	getParentRoute: () => Route$15
});
var PolymorphWorkIndexRoute = Route$1.update({
	id: "/polymorph/work/",
	path: "/polymorph/work/",
	getParentRoute: () => Route$15
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ConnectRoute,
	ResearchRoute,
	SkillsRoute,
	PathSlugRoute,
	PolymorphAboutRoute,
	PolymorphContactRoute,
	PolymorphProcessRoute,
	WorkSlugRoute,
	PathIndexRoute,
	PolymorphIndexRoute,
	WorkIndexRoute,
	PolymorphWorkSlugRoute: Route.update({
		id: "/polymorph/work/$slug",
		path: "/polymorph/work/$slug",
		getParentRoute: () => Route$15
	}),
	PolymorphWorkIndexRoute
};
var routeTree = Route$15._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent
	});
}
//#endregion
export { PROJECTS as a, STAGE_GROUPS as c, PERSON as d, POLYMORPH as f, Route$8 as i, getStage as l, cn as m, Route as n, projectsSorted as o, SiteShell as p, Route$2 as r, ROADMAP as s, router_exports as t, stagesByGroup as u };
