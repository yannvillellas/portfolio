"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import TerminalLineText from "@/components/project/TerminalLineText";

const PLAYBACK_RATE = 0.55;

interface TerminalLine {
  t: number;
  text: string;
}

interface TerminalReplayProps {
  title: string;
  lines: TerminalLine[];
}

export default function TerminalReplay({ title, lines }: TerminalReplayProps) {
  const t = useTranslations("ProjectsPage");
  const total = lines.at(-1)?.t ?? 0;
  const [elapsed, setElapsed] = useState(0);
  const [run, setRun] = useState(0);
  const [paused, setPaused] = useState(false);
  const frame = useRef<number | null>(null);
  const shown = useRef(-1);
  const pausedRef = useRef(false);
  const elapsedMs = useRef(0);
  const preRef = useRef<HTMLPreElement>(null);

  const finished = elapsed >= total;

  const togglePause = () => {
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
  };

  const replay = () => {
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    pausedRef.current = false;
    setPaused(false);
    elapsedMs.current = 0;
    setElapsed(calm ? total : 0);
    setRun((value) => value + 1);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reduced-motion fallback
      setElapsed(total);
      return;
    }

    let last = performance.now();
    shown.current = -1;
    elapsedMs.current = 0;

    const tick = (now: number) => {
      const delta = now - last;
      last = now;

      if (!pausedRef.current) elapsedMs.current += delta * PLAYBACK_RATE;

      const value = elapsedMs.current / 1000;
      if (value >= total) {
        setElapsed(total);
        frame.current = null;
        return;
      }
      const count = lines.filter((line) => line.t <= value).length;

      if (count !== shown.current) {
        shown.current = count;
        setElapsed(value);
      }

      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);

    return () => {
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [run, total, lines]);

  useEffect(() => {
    const element = preRef.current;
    if (!element) return;

    const count = lines.filter((line) => line.t <= elapsed).length;
    const last = element.children[count - 1] as HTMLElement | undefined;

    element.scrollTop = last
      ? Math.max(0, last.offsetTop + last.offsetHeight - element.clientHeight)
      : 0;
  }, [elapsed, lines]);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-line bg-panel">
      <div className="flex h-7 items-center gap-2 border-b border-line bg-ink/5 px-3">
        <div className="flex gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-mut/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-mut/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-mut/70" />
        </div>
        <span className="flex-1 text-center text-xs text-chrome">{title}</span>
      </div>

      <pre
        ref={preRef}
        className="relative min-h-0 flex-1 overflow-hidden px-4 py-3 font-mono text-xs leading-relaxed whitespace-pre-wrap wrap-break-word sm:whitespace-pre sm:break-normal"
      >
        {lines.map((line) => (
          <span
            key={`${line.t}-${line.text}`}
            className={`block ${
              line.t <= elapsed ? "" : "terminal-pending opacity-0"
            }`}
          >
            {line.text ? <TerminalLineText text={line.text} /> : "\u00a0"}
          </span>
        ))}
      </pre>

      <div className="flex items-center justify-end border-t border-line px-4 py-0.5">
        <button
          type="button"
          onClick={finished ? replay : togglePause}
          aria-label={
            finished
              ? t("controls.replay")
              : paused
                ? t("controls.resume")
                : t("controls.pause")
          }
          className="inline-flex h-8 w-8 cursor-pointer items-center justify-center text-mut-on-panel transition-colors hover:text-ink"
        >
          {finished ? (
            <RotateCcw size={14} aria-hidden="true" />
          ) : paused ? (
            <Play size={14} aria-hidden="true" />
          ) : (
            <Pause size={14} aria-hidden="true" />
          )}
        </button>
      </div>

      <noscript
        dangerouslySetInnerHTML={{
          __html: "<style>.terminal-pending{opacity:1!important}</style>",
        }}
      />
    </div>
  );
}
