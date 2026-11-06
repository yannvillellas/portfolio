import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export default function Section({
  children,
  id,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 lg:py-32 ${className}`}>
      {children}
    </section>
  );
}
