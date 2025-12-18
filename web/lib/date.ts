const isoDateRegex = /^\d{4}-\d{2}-\d{2}$/;

export function parsePublishedAt(publishedAt: string): Date {
  if (!isoDateRegex.test(publishedAt)) {
    throw new Error(
      `Invalid publishedAt "${publishedAt}". Use ISO format YYYY-MM-DD (e.g. 2024-06-01).`
    );
  }

  const utcMidnight = new Date(`${publishedAt}T00:00:00.000Z`);
  if (Number.isNaN(utcMidnight.getTime())) {
    throw new Error(
      `Invalid publishedAt "${publishedAt}". Use ISO format YYYY-MM-DD (e.g. 2024-06-01).`
    );
  }

  return utcMidnight;
}

export function formatPublishedAt(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatPublishedAtWithRelative(
  date: Date,
  now: Date = new Date()
): string {
  const fullDate = formatPublishedAt(date);
  const diffMs = now.getTime() - date.getTime();

  if (diffMs < 0) {
    return fullDate;
  }

  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffDays / 365);

  let relative = "Today";
  if (diffYears > 0) {
    relative = `${diffYears}y ago`;
  } else if (diffMonths > 0) {
    relative = `${diffMonths}mo ago`;
  } else if (diffDays > 0) {
    relative = `${diffDays}d ago`;
  }

  return `${fullDate} (${relative})`;
}
