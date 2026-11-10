import type { ReactNode } from "react";

type Level = "h1" | "h2" | "h3";

export type HeadingSize = "hero" | "page" | "block" | "card" | "section";

interface HeadingProps {
  level: Level;
  size: HeadingSize;
  children: ReactNode;
  className?: string;
}

const SIZE: Record<HeadingSize, string> = {
  hero: "text-5xl lg:text-6xl",
  page: "text-4xl lg:text-5xl",
  block: "text-2xl lg:text-3xl",
  card: "text-xl",
  section: "text-lg",
};

export default function Heading({
  level: Level,
  size,
  children,
  className,
}: HeadingProps) {
  return (
    <Level
      className={[
        "font-semibold tracking-tight text-balance",
        SIZE[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Level>
  );
}
