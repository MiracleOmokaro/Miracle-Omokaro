import type { PlatformKey } from "@/data/types";
import { PLATFORMS } from "@/data/platforms";
import { formatRange } from "@/lib/format";
import { cn } from "@/lib/cn";

function CiscoMark({ className }: { className?: string }) {
  const bars = [10, 16, 22, 28, 34, 34, 28, 22, 16, 10];
  return (
    <svg viewBox="0 0 120 72" className={className} aria-hidden>
      {bars.map((h, i) => (
        <rect
          key={i}
          x={6 + i * 11}
          y={36 - h / 2}
          width="7"
          height={h}
          rx="3.5"
          fill="#049fd9"
        />
      ))}
    </svg>
  );
}

function ThmMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path
        d="M60 8 L110 37 V83 L60 112 L10 83 V37 Z"
        fill="none"
        stroke="#88cc14"
        strokeWidth="5"
      />
      <path d="M60 34 L86 49 V79 L60 94 L34 79 V49 Z" fill="#88cc14" />
      <circle cx="60" cy="64" r="8" fill="#0a0a0a" />
    </svg>
  );
}

function PortswiggerMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <rect x="18" y="18" width="84" height="84" rx="8" fill="none" stroke="#ff7a18" strokeWidth="6" />
      <path d="M40 60 H80 M60 40 V80" stroke="#ff7a18" strokeWidth="6" strokeLinecap="square" />
      <rect x="52" y="52" width="16" height="16" fill="#ff7a18" />
    </svg>
  );
}

function AsuMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d="M60 10 L112 110 H8 Z" fill="#8c1d40" />
      <path d="M60 32 L92 98 H28 Z" fill="#ffc627" />
      <path d="M60 52 L74 82 H46 Z" fill="#8c1d40" />
    </svg>
  );
}

function SansMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      <path d="M20 52 L60 18 L100 52 V102 H20 Z" fill="#1d4ed8" />
      <path d="M20 52 L60 18 L100 52 H20 Z" fill="#60a5fa" />
      <rect x="52" y="70" width="16" height="32" fill="#000" />
      <rect x="36" y="62" width="12" height="12" fill="#000" />
      <rect x="72" y="62" width="12" height="12" fill="#000" />
    </svg>
  );
}

function HarvardMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden>
      <rect x="18" y="18" width="124" height="124" fill="#a51c30" />
      <rect x="38" y="38" width="84" height="84" fill="#0a0a0a" />
      <rect x="56" y="56" width="48" height="48" fill="#a51c30" />
      <rect x="68" y="68" width="24" height="24" fill="#f4f1ea" />
    </svg>
  );
}

function Mark({ kind, className }: { kind: PlatformKey; className?: string }) {
  if (kind === "cisco") return <CiscoMark className={className} />;
  if (kind === "tryhackme") return <ThmMark className={className} />;
  if (kind === "portswigger") return <PortswiggerMark className={className} />;
  if (kind === "asu") return <AsuMark className={className} />;
  if (kind === "sans") return <SansMark className={className} />;
  return <HarvardMark className={className} />;
}

const TONE: Record<PlatformKey, string> = {
  cisco: "banner-cisco",
  tryhackme: "banner-thm",
  portswigger: "banner-ps",
  asu: "banner-asu",
  sans: "banner-sans",
  independent: "banner-harvard",
};

export function CourseBanner({
  platformKey,
  title,
  startDate,
  endDate,
  status,
}: {
  platformKey: PlatformKey;
  title: string;
  startDate: string | null;
  endDate: string | null;
  status?: string;
}) {
  const meta = PLATFORMS[platformKey];
  const range = formatRange(startDate, endDate, status);

  return (
    <div
      className={cn(
        "course-banner relative aspect-[16/9] w-full overflow-hidden sm:aspect-[2.2/1]",
        TONE[platformKey],
      )}
    >
      <div className="course-banner-grid pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1.5 sm:w-2"
        style={{ background: meta.accent }}
        aria-hidden
      />
      <div className="relative flex h-full items-center gap-4 px-5 py-6 sm:gap-10 sm:px-12">
        <div className="hidden shrink-0 sm:block">
          <Mark kind={platformKey} className="h-28 w-28 md:h-36 md:w-36" />
        </div>
        <div className="min-w-0">
          <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/65 sm:text-xs">
            {meta.name}
          </p>
          <h1 className="mt-3 max-w-xl text-[1.65rem] font-medium leading-[1.05] tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            {title}
          </h1>
          {range ? (
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/70 sm:text-sm sm:tracking-[0.08em]">
              {range}
            </p>
          ) : null}
        </div>
      </div>
      <div className="absolute bottom-4 right-5 sm:hidden">
        <Mark kind={platformKey} className="h-16 w-16" />
      </div>
    </div>
  );
}
