import type { ReactNode } from "react";

export type Level = "h1" | "h2" | "h3";

type HeadingRole = "hero" | "page" | "block" | "card" | "section";

interface HeadingProps {
  level: Level;
  role?: HeadingRole;
  children: ReactNode;
  className?: string;
}

const STYLE: Record<HeadingRole, string> = {
  hero: "mb-4 text-5xl lg:text-6xl",
  page: "mb-4 text-4xl lg:text-5xl",
  block: "mb-4 text-2xl lg:text-3xl",
  card: "mb-1.5 text-xl",
  section: "mb-0 text-lg",
};

const ROLE_BY_LEVEL: Record<Level, HeadingRole> = {
  h1: "page",
  h2: "block",
  h3: "card",
};

export default function Heading({
  level: Level,
  role,
  children,
  className,
}: HeadingProps) {
  const resolved = role ?? ROLE_BY_LEVEL[Level];

  return (
    <Level
      className={[
        "font-semibold tracking-tight text-balance",
        STYLE[resolved],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Level>
  );
}
