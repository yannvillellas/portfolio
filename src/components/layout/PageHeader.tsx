import type { ReactNode } from "react";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";

interface PageHeaderProps {
  title: string;
  lead?: string;
  eyebrow?: ReactNode;
  width?: "prose" | "2xl" | "3xl";
  children?: ReactNode;
}

const WIDTH = {
  prose: "max-w-prose",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
} as const;

export default function PageHeader({
  title,
  lead,
  eyebrow,
  width = "prose",
  children,
}: PageHeaderProps) {
  return (
    <div className={`flex flex-col ${WIDTH[width]}`}>
      {eyebrow && <div className="mb-4">{eyebrow}</div>}
      <Heading level="h1" variant="page">
        {title}
      </Heading>
      {lead && (
        <Prose>
          <p>{lead}</p>
        </Prose>
      )}
      {children}
    </div>
  );
}
