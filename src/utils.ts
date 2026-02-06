export function formatTimeline(from: Date, to: Date | null): string {
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const duration = calculateDuration(from, to);

  return `${formatDate(from)} - ${to ? formatDate(to) : "Present"} (${duration})`;
}

export function calculateDuration(from: Date, to: Date | null): string {
  const end = to || new Date();
  const months =
    (end.getFullYear() - from.getFullYear()) * 12 +
    (end.getMonth() - from.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0)
    return `${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
  if (remainingMonths === 0)
    return `${years} ${years === 1 ? "year" : "years"}`;
  return `${years} ${years === 1 ? "year" : "years"}, ${remainingMonths} ${remainingMonths === 1 ? "month" : "months"}`;
}
