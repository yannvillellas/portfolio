import type { ReactNode } from "react";

interface ProseProps {
  children: ReactNode;
  size?: "base" | "sm";
  gap?: "default" | "tight";
  measure?: "prose" | "none";
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

const MEASURE = {
  prose: "max-w-prose",
  none: "",
} as const;

export default function Prose({
  children,
  size = "base",
  gap = "default",
  measure = "prose",
  className = "",
}: ProseProps) {
  return (
    <div
      className={`flex flex-col leading-relaxed text-mut ${GAP[gap]} ${MEASURE[measure]} ${SIZE[size]} ${className}`}
    >
      {children}
    </div>
  );
}
