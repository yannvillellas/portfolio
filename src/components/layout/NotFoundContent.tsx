import type { ReactNode } from "react";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";

interface NotFoundContentProps {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
  };
  link: ReactNode;
}

export default function NotFoundContent({ copy, link }: NotFoundContentProps) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm text-mut">{copy.eyebrow}</p>
      <div className="flex flex-col gap-4">
        <Heading level="h1" variant="page">
          {copy.title}
        </Heading>
        <Prose>
          <p>{copy.description}</p>
        </Prose>
      </div>
      <div>{link}</div>
    </div>
  );
}
