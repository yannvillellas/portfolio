import type { ReactNode } from "react";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";

interface PageHeaderProps {
  title: string;
  lead?: string;
  leadMeasure?: "prose" | "none";
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
  leadMeasure = "prose",
  eyebrow,
  width = "prose",
  children,
}: PageHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${WIDTH[width]}`}>
      {eyebrow}
      <Heading level="h1" size="page">
        {title}
      </Heading>
      {lead && (
        <Prose measure={leadMeasure}>
          <p>{lead}</p>
        </Prose>
      )}
      {children}
    </div>
  );
}
