"use client";

import { useEffect, useRef, useState } from "react";
import { RotateCcw } from "lucide-react";
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
  const frame = useRef<number | null>(null);
  const shown = useRef(-1);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reduced-motion fallback
      setElapsed(total);
      return;
    }

    let start: number | null = null;
    shown.current = -1;

    const tick = (now: number) => {
      if (start === null) start = now;
      const value = ((now - start) / 1000) * PLAYBACK_RATE;
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

      <pre className="min-h-0 flex-1 overflow-hidden px-4 py-3 font-mono text-xs leading-relaxed whitespace-pre-wrap wrap-break-word sm:whitespace-pre sm:break-normal">
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

      <div className="flex items-center justify-end border-t border-line px-4 py-1.5">
        <button
          type="button"
          onClick={() => {
            const calm = window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches;

            setElapsed(calm ? total : 0);
            setRun((value) => value + 1);
          }}
          className="inline-flex h-11 cursor-pointer items-center gap-2 text-sm text-mut-on-panel transition-colors hover:text-ink"
        >
          <RotateCcw size={14} aria-hidden="true" />
          {t("replay")}
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
