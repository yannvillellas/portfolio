import type { ProjectChapter } from "@/data/projects";

interface ChapterCopyProps {
  chapters: ProjectChapter[];
  active: number;
}

export default function ChapterCopy({ chapters, active }: ChapterCopyProps) {
  return (
    <>
      <div className="grid">
        {chapters.map((chapter, index) => (
          <div
            key={chapter.title}
            aria-hidden={index !== active}
            inert={index !== active}
            className={`col-start-1 row-start-1 transition-opacity duration-200 motion-reduce:transition-none ${
              index === active ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <h2 className="mt-0 mb-0 text-2xl font-semibold tracking-tight lg:text-3xl">
              {chapter.title}
            </h2>
            <p className="mt-2 line-clamp-2 max-w-prose text-base leading-relaxed text-mut sm:line-clamp-none">
              {chapter.body}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
