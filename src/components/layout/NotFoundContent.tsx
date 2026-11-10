import type { ReactNode } from "react";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";

interface NotFoundContentProps {
  copy: {
    eyebrow: string;
    title: string;
    description: string;
    back: string;
  };
  link: ReactNode;
}

export default function NotFoundContent({ copy, link }: NotFoundContentProps) {
  return (
    <>
      <p className="text-sm text-mut">{copy.eyebrow}</p>
      <Heading level="h1" size="page" className="mt-3">
        {copy.title}
      </Heading>
      <Prose className="mt-4">
        <p>{copy.description}</p>
      </Prose>
      <div className="mt-8">{link}</div>
    </>
  );
}
