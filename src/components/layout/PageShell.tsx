import type { ReactNode } from "react";
import Container from "@/components/layout/Container";

interface PageShellProps {
  children: ReactNode;
}

export default function PageShell({ children }: PageShellProps) {
  return (
    <div className="pt-14 pb-24">
      <Container>{children}</Container>
    </div>
  );
}
