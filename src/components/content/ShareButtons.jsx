import { useState } from "react";

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.9 2.4h3.3l-7.2 8.2 8.5 11h-6.6l-5.2-6.8-5.9 6.8H2.5l7.7-8.8L2 2.4h6.8l4.7 6.2 5.4-6.2Zm-1.1 17.3h1.8L7.3 4.2H5.4l12.4 15.5Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7.9h2.7l.4-3.1h-3.1V8.1c0-.9.25-1.5 1.53-1.5H16.7V3.8c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.96 1.44-3.96 4.08v2.23H7.6v3.1h2.76V21h3.14Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.94 8.5H3.56V20.4h3.38V8.5ZM5.25 3.6a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.45 20.4h-3.37v-6.2c0-1.48-.03-3.38-2.06-3.38-2.07 0-2.39 1.62-2.39 3.28v6.3H9.26V8.5h3.24v1.63h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.7 2.6 4.7 5.97v6.05Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.02 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 1.73.46 3.4 1.32 4.87L2.2 21.8l5.1-1.33a9.75 9.75 0 0 0 4.7 1.2h.02c5.4 0 9.8-4.4 9.8-9.8s-4.4-9.7-9.8-9.7Zm0 17.9h-.02a8.1 8.1 0 0 1-4.13-1.13l-.3-.17-3.03.79.8-2.95-.2-.31a8.06 8.06 0 0 1-1.24-4.33c0-4.46 3.63-8.1 8.11-8.1a8.07 8.07 0 0 1 8.09 8.11c0 4.46-3.63 8.09-8.28 8.09Zm4.44-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.78.95-.14.16-.29.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.49.11-.11.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05s.88 2.38 1 2.54c.12.16 1.73 2.64 4.19 3.7.59.25 1.05.4 1.4.52.59.19 1.13.16 1.55.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.11-.22-.17-.46-.29Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M9 12h6M10 17H7a4 4 0 1 1 0-8h3M14 7h3a4 4 0 1 1 0 8h-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const BASE_URL = "https://parivestrabytes.com";

export function ShareButtons({ path, title }) {
  const [copied, setCopied] = useState(false);
  const url = `${BASE_URL}${path}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Share on X",
      Icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      label: "Share on Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "Share on LinkedIn",
      Icon: LinkedInIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      label: "Share on WhatsApp",
      Icon: WhatsAppIcon,
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — nothing to fall back to gracefully, so no-op.
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-semibold tracking-widest text-ink-faint uppercase">Share</span>
      {links.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
        >
          <Icon />
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy link"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
      >
        <LinkIcon />
      </button>
      {copied && <span className="text-xs text-status-good">Link copied!</span>}
    </div>
  );
}
