import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  size?: "base" | "sm";
  gap?: "default" | "tight";
  className?: string;
}

const SIZE = {
  base: "text-base",
  sm: "text-sm",
} as const;

const GAP = {
  default: "gap-5",
  tight: "gap-3",
} as const;

export default function Prose({
  children,
  size = "base",
  gap = "default",
  className,
}: ProseProps) {
  return (
    <div
      className={[
        "flex max-w-prose flex-col leading-relaxed text-mut",
        GAP[gap],
        SIZE[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
