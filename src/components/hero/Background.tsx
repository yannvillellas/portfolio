import type { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return (
    <section className="ambient-bg relative isolate min-h-svh overflow-hidden bg-background text-foreground">
      <div className="ambient-bg-layer absolute inset-0" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-a" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-b" aria-hidden="true" />

      <div className="relative z-10 flex min-h-svh items-center justify-center px-6 pb-16 pt-28 md:px-12">
        <div className="ambient-content-reveal max-w-5xl">{children}</div>
      </div>
    </section>
  );
}
