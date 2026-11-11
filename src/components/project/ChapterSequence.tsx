"use client";

import Container from "@/components/layout/Container";
import type { CSSProperties } from "react";
import AppWindow from "@/components/project/AppWindow";
import type { AppWindowView } from "@/components/project/AppWindow";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import ChapterBars from "@/components/project/ChapterBars";
import ChapterCopy from "@/components/project/ChapterCopy";
import PhoneStage from "@/components/project/PhoneStage";
import TerminalReplay from "@/components/project/TerminalReplay";
import { useScrollProgress } from "@/components/project/useScrollProgress";
import type { ProjectChapter } from "@/data/projects";
import { chapterTarget, sequenceEnd } from "@/lib/chapter-scroll";

export type SequenceDemo =
  | { kind: "terminal"; title: string; lines: { t: number; text: string }[] }
  | { kind: "window"; title: string; views: AppWindowView[] }
  | { kind: "phone"; views: { src: string }[] };

interface ChapterSequenceProps {
  chapters: ProjectChapter[];
  demo: SequenceDemo;
  label: string;
}

export default function ChapterSequence({
  chapters,
  demo,
  label,
}: ChapterSequenceProps) {
  const { ref, progress, active, position } = useScrollProgress(
    chapters.length,
  );
  const view = chapters[active].view ?? active;
  const atEnd = active === chapters.length - 1 && position >= 1;
  const target = active === 0 && position === 0 ? 0 : active + 1;

  const selectChapter = (index: number) => {
    const element = ref.current;
    if (!element) return;
    window.scrollTo({
      top: chapterTarget(element, index, chapters.length),
      behavior: "auto",
    });
  };

  const t = useTranslations("ProjectsPage");

  const stepForward = () => {
    const element = ref.current;
    if (!element) return;
    const next = target;

    window.scrollTo({
      top:
        next < chapters.length
          ? chapterTarget(element, next, chapters.length)
          : sequenceEnd(element),
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={ref}
      className="chapter-section relative"
      style={{ "--chapter-count": chapters.length } as CSSProperties}
    >
      <div className="chapter-stage sticky top-14 flex min-h-0 flex-col justify-start gap-4 pt-8 pb-32 sm:top-16 sm:pt-8 sm:pb-6">
        <Container className="relative flex min-h-0 flex-1 basis-0 flex-col gap-4">
          <div className="flex min-h-0 flex-1 basis-0 items-start justify-center">
            {demo.kind === "phone" && (
              <PhoneStage
                views={demo.views}
                activeIndex={view}
                label={label}
                progress={progress}
              />
            )}
            {demo.kind === "terminal" && (
              <TerminalReplay title={demo.title} lines={demo.lines} />
            )}
            {demo.kind === "window" && (
              <AppWindow
                title={`${demo.title} · ${demo.views[view]?.caption ?? ""}`}
                views={demo.views}
                activeIndex={view}
              />
            )}
          </div>
          {!atEnd && (
            <button
              type="button"
              onClick={stepForward}
              aria-label={t("nextChapter", {
                title: chapters[target]?.title ?? label,
              })}
              className="fixed bottom-24 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full p-3 text-accent sm:bottom-8"
            >
              <ChevronDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
            </button>
          )}

          <div className="shrink-0">
            <ChapterCopy
              chapters={chapters}
              active={active}
              position={position}
            />
            <div className="mt-3">
              <ChapterBars
                chapters={chapters}
                active={active}
                onSelect={selectChapter}
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
