"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface AppWindowView {
  src: string;
  caption: string;
  width: number;
  height: number;
}

interface AppWindowProps {
  title: string;
  views: AppWindowView[];
  activeIndex: number;
}

const BAR = 26;

export default function AppWindow({
  title,
  views,
  activeIndex,
}: AppWindowProps) {
  const active = views[activeIndex] ?? views[0];
  const wrapRef = useRef<HTMLDivElement>(null);
  const [frame, setFrame] = useState<{ width: number; height: number } | null>(
    null,
  );

  const ratio = active ? active.width / active.height : 1;

  useEffect(() => {
    const element = wrapRef.current;
    if (!element) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      const imageHeight = Math.min(height - BAR, width / ratio);
      setFrame({
        width: Math.round(imageHeight * ratio),
        height: Math.round(imageHeight + BAR),
      });
    });
    observer.observe(element);

    return () => observer.disconnect();
  }, [ratio]);

  if (!active) return null;

  return (
    <div
      ref={wrapRef}
      className="flex h-full w-full items-start justify-center"
    >
      <div
        className="flex flex-col overflow-hidden rounded-lg border border-line bg-panel shadow-sm"
        style={
          frame
            ? { width: frame.width, height: frame.height }
            : {
                width: "100%",
                aspectRatio: `${active.width} / ${active.height + BAR}`,
              }
        }
      >
        <div className="flex h-6.5 shrink-0 items-center gap-2 border-b border-line bg-ink/5 px-2.5">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </div>
          <span className="flex-1 text-center text-xs text-chrome">
            {title}
          </span>
        </div>

        <div className="relative min-h-0 flex-1">
          {views.map((view, index) => (
            <Image
              key={view.src}
              src={view.src}
              alt={view.caption}
              fill
              sizes="(min-width: 1280px) 1152px, 100vw"
              className={`object-cover object-top transition-opacity duration-300 motion-reduce:transition-none ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
