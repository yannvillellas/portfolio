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
    <>
      <p className="text-sm text-mut">{copy.eyebrow}</p>
      <Heading level="h1" role="page" className="mt-4">
        {copy.title}
      </Heading>
      <Prose>
        <p>{copy.description}</p>
      </Prose>
      <div className="mt-6">{link}</div>
    </>
  );
}
