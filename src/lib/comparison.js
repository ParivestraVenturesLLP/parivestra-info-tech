export function parseComparison(title) {
  const [headline, ...rest] = title.split(":");
  const names = headline
    .split(/\s+vs\.?\s+/i)
    .map((n) => n.trim())
    .filter(Boolean);
  if (names.length < 2) return null;
  return { names, subtitle: rest.join(":").trim() };
}
