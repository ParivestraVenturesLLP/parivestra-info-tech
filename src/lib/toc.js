import { slugify } from "./slug";

export function extractHeadings(markdown = "") {
  const lines = markdown.split("\n");
  const headings = [];

  for (const line of lines) {
    const match = line.match(/^(#{2,3})\s+(.*)/);
    if (match) {
      const depth = match[1].length;
      const text = match[2].trim();
      headings.push({ id: slugify(text), text, depth });
    }
  }

  return headings;
}
