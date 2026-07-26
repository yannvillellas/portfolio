import type { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <section className="ambient-bg relative isolate overflow-hidden bg-background text-foreground">
      <div className="ambient-bg-layer absolute inset-0" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-a" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-b" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-c" aria-hidden="true" />
      <div
        className="ambient-hero-fade absolute inset-x-0 bottom-0"
        aria-hidden="true"
      />

      {children}
    </section>
  );
}
