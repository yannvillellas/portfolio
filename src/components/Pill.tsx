import type { ReactNode } from "react";

interface PillProps {
  children: ReactNode;
  className?: string;
  size?: "xs" | "sm";
}

export default function Pill({
  children,
  className = "",
  size = "xs",
}: PillProps) {
  const textSize = size === "sm" ? "text-sm" : "text-xs";

  return (
    <span
      className={`inline-block rounded-full border border-foreground/10 bg-background-secondary/40 px-3 py-1 ${textSize} text-foreground/80 ${className}`}
    >
      {children}
    </span>
  );
}
