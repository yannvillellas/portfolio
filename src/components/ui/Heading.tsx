import type { ReactNode } from "react";

export type Level = "h1" | "h2" | "h3";

export type HeadingVariant =
  | "hero"
  | "page"
  | "heading"
  | "block"
  | "card"
  | "section";

interface HeadingProps {
  level: Level;
  variant?: HeadingVariant;
  children: ReactNode;
  className?: string;
}

const STYLE: Record<HeadingVariant, string> = {
  hero: "text-5xl lg:text-6xl font-bold",
  page: "text-4xl lg:text-5xl font-bold",
  heading: "text-2xl lg:text-3xl font-bold",
  block: "text-2xl lg:text-3xl font-semibold",
  card: "text-xl font-semibold",
  section: "text-lg font-medium",
};

const VARIANT_BY_LEVEL: Record<Level, HeadingVariant> = {
  h1: "page",
  h2: "block",
  h3: "card",
};

export default function Heading({
  level: Tag,
  variant,
  children,
  className,
}: HeadingProps) {
  const resolved = variant ?? VARIANT_BY_LEVEL[Tag];

  return (
    <Tag
      className={["text-balance", STYLE[resolved], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}
