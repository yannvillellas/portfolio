"use client";

import Container from "@/components/layout/Container";
import AppWindow from "@/components/project/AppWindow";
import type { AppWindowView } from "@/components/project/AppWindow";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import ChapterBars from "@/components/project/ChapterBars";
import ChapterCopy from "@/components/project/ChapterCopy";
import PhoneStage from "@/components/project/PhoneStage";
import TerminalReplay from "@/components/project/TerminalReplay";
import { useScrollProgress } from "@/components/three/useScrollProgress";
import type { ProjectChapter } from "@/data/projects";
import { sequenceChapterScroll } from "@/lib/media";

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
  const { ref, progress, active, finished } = useScrollProgress(
    chapters.length,
  );
  const view = chapters[active].view ?? active;

  const selectChapter = (index: number) => {
    const element = ref.current;
    if (!element) return;
    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search,
    );
    const span = element.offsetHeight - window.innerHeight;
    const step = span / chapters.length;
    window.scrollTo({
      top: sectionTop + (index + 0.5) * step,
      behavior: "auto",
    });
  };

  const t = useTranslations("ProjectsPage");

  const stepForward = () => {
    const element = ref.current;
    if (!element) return;
    const header = window.innerWidth >= 640 ? 64 : 56;
    const sectionTop = element.getBoundingClientRect().top + window.scrollY;
    const stuck = element.getBoundingClientRect().top <= header + 1;
    const span = element.offsetHeight - window.innerHeight;
    const step = span / chapters.length;

    if (!stuck) {
      window.scrollTo({ top: sectionTop - header, behavior: "smooth" });
      return;
    }

    const next = active + 1;
    if (next < chapters.length) {
      window.scrollTo({
        top: sectionTop + (next + 0.5) * step,
        behavior: "smooth",
      });
      return;
    }

    window.scrollTo({
      top: sectionTop + element.offsetHeight - header,
      behavior: "smooth",
    });
  };

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        height: `calc(100svh + ${chapters.length * sequenceChapterScroll}px)`,
      }}
    >
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] min-h-0 flex-col justify-start gap-4 pt-8 pb-32 sm:top-16 sm:pt-8 sm:pb-6 sm:h-[calc(100svh-4rem)]">
        <Container className="flex min-h-0 flex-1 basis-0 flex-col gap-4">
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
          {!finished && (
            <button
              type="button"
              onClick={stepForward}
              aria-label={t("nextChapter", {
                title: chapters[active + 1]?.title ?? label,
              })}
              className="fixed bottom-24 left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-full p-2 text-accent sm:bottom-8"
            >
              <ChevronDown className="h-5 w-5 animate-bounce motion-reduce:animate-none" />
            </button>
          )}

          <div className="shrink-0">
            <ChapterCopy chapters={chapters} active={active} />
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
