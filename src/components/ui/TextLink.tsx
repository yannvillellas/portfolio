import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

export type TextLinkTone = "muted" | "accent" | "ink";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  tone?: TextLinkTone;
  size?: "sm" | "base" | "2xl";
  underline?: boolean;
  newTab?: boolean;
}

const TONE: Record<TextLinkTone, string> = {
  muted: "text-mut hover:text-ink",
  accent: "text-accent",
  ink: "text-ink hover:text-accent",
};

const SIZE = {
  sm: "text-sm",
  base: "text-base",
  "2xl": "text-2xl",
} as const;

const EXTERNAL = /^(https?:|mailto:)/;

export default function TextLink({
  href,
  children,
  tone = "muted",
  size = "sm",
  underline = true,
  newTab = false,
}: TextLinkProps) {
  const classes = [
    "inline-flex w-fit items-center gap-1 underline-offset-4 transition-colors",
    underline ? "hover:underline" : "",
    TONE[tone],
    SIZE[size],
  ]
    .filter(Boolean)
    .join(" ");

  if (EXTERNAL.test(href)) {
    return (
      <a
        href={href}
        {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
