import type { ProjectChapter } from "@/data/projects";
import Heading from "@/components/ui/Heading";

interface ChapterCopyProps {
  chapters: ProjectChapter[];
  active: number;
  position: number;
}

const FADE = 0.4;
const BODY_LAG = 0.06;

function clamp(value: number) {
  return Math.max(0, Math.min(1, value));
}

export default function ChapterCopy({
  chapters,
  active,
  position,
}: ChapterCopyProps) {
  const last = chapters.length - 1;
  const enter = clamp(position / FADE);
  const leave = active === last ? 1 : clamp((1 - position) / FADE);
  const shown = Math.min(enter, leave);
  const bodyShown = Math.min(clamp((position - BODY_LAG) / FADE), leave);

  return (
    <>
      <ol className="sr-only">
        {chapters.map((chapter) => (
          <li key={chapter.title}>
            <h2>{chapter.title}</h2>
            <p>{chapter.body}</p>
          </li>
        ))}
      </ol>

      <div className="grid" aria-hidden="true">
        {chapters.map((chapter, index) => {
          const isActive = index === active;

          return (
            <div
              key={chapter.title}
              style={{ opacity: isActive ? shown : undefined }}
              className={`col-start-1 row-start-1 ${
                isActive
                  ? "motion-reduce:opacity-100!"
                  : "pointer-events-none opacity-0"
              }`}
            >
              <Heading level="h2" variant="block">
                {chapter.title}
              </Heading>
              <p
                style={isActive ? { opacity: bodyShown } : undefined}
                className="max-w-prose text-base leading-relaxed text-mut motion-reduce:opacity-100!"
              >
                {chapter.body}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
