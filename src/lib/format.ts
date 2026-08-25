export function formatDate(iso: string | null | undefined, fallback = "") {
  if (!iso) return fallback;
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateLong(iso: string | null | undefined, fallback = "") {
  if (!iso) return fallback;
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatRange(start: string | null, end: string | null, status?: string) {
  if (start && end) return `${formatDateLong(start)} — ${formatDateLong(end)}`;
  if (start && status === "in-progress") return `${formatDateLong(start)} — present`;
  if (start) return `Begins ${formatDateLong(start)}`;
  if (status === "upcoming") return "Upcoming";
  if (status === "in-progress") return "In progress";
  return "";
}
