"use client";

import { useTranslations } from "next-intl";
import type { ProjectChapter } from "@/data/projects";

interface ChapterBarsProps {
  chapters: ProjectChapter[];
  active: number;
  onSelect: (index: number) => void;
}

export default function ChapterBars({
  chapters,
  active,
  onSelect,
}: ChapterBarsProps) {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="flex gap-2" role="group" aria-label={t("chapters")}>
      {chapters.map((chapter, index) => (
        <button
          key={chapter.title}
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`${index + 1}. ${chapter.title}`}
          aria-current={index === active ? "step" : undefined}
          className="group flex h-11 w-8 cursor-pointer items-center justify-center"
        >
          <span
            className={`h-0.5 rounded-full transition-all duration-300 ${
              index === active
                ? "w-7 bg-accent"
                : "w-5 bg-line group-hover:bg-mut"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
