import type { ReactNode } from "react";

export default function Emphasis({ children }: { children: ReactNode }) {
  return <strong className="font-medium text-ink">{children}</strong>;
}
