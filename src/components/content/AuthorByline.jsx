export function AuthorByline({ author, date, readingTimeMinutes, size = "md" }) {
  const initials = author?.name
    ? author.name
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join("")
    : "PV";

  return (
    <div className={`flex items-center gap-3 ${size === "sm" ? "text-xs" : "text-sm"}`}>
      {author?.avatarUrl ? (
        <img
          src={author.avatarUrl}
          alt={author.name}
          className={`rounded-full object-cover ${size === "sm" ? "h-8 w-8" : "h-10 w-10"}`}
        />
      ) : (
        <div
          className={`flex items-center justify-center rounded-full bg-accent-soft font-mono font-semibold text-accent ${
            size === "sm" ? "h-8 w-8 text-xs" : "h-10 w-10 text-sm"
          }`}
        >
          {initials}
        </div>
      )}
      <div>
        <p className="font-medium text-ink">{author?.name || "Parivestra Research Desk"}</p>
        <p className="text-ink-faint">
          {date}
          {readingTimeMinutes ? ` · ${readingTimeMinutes} min read` : ""}
        </p>
      </div>
    </div>
  );
}
