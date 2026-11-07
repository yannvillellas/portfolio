"use client";

import { phoneAspectRatio } from "@/lib/media";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import PhoneFallback from "@/components/project/PhoneFallback";
import { createPhoneScene } from "./phone-scene";
import type { PhoneSceneHandle } from "./phone-scene";

interface PhoneSceneProps {
  views: { src: string }[];
  activeIndex: number;
  label: string;
  progress: RefObject<number>;
}

export default function PhoneScene({
  views,
  activeIndex,
  label,
  progress,
}: PhoneSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<PhoneSceneHandle | null>(null);
  const activeRef = useRef(activeIndex);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    activeRef.current = activeIndex;
    handleRef.current?.setActive(activeIndex);
  }, [activeIndex]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.className = "h-full w-full";
    container.append(canvas);

    let disposed = false;
    let handle: PhoneSceneHandle | null = null;
    let frame = 0;
    let running = false;
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");

    let calmFrames = 0;

    const tick = () => {
      if (!running || !handle) return;
      handle.update(progress.current, calm.matches);

      if (calm.matches && ++calmFrames > 45) {
        running = false;
        return;
      }

      frame = requestAnimationFrame(tick);
    };

    const wake = () => {
      calmFrames = 0;
      start();
    };

    const onVisibility = () => (document.hidden ? stop() : wake());
    const start = () => {
      if (running) return;
      running = true;
      frame = requestAnimationFrame(tick);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    let resizeObserver: ResizeObserver | null = null;
    let intersectionObserver: IntersectionObserver | null = null;
    let themeObserver: MutationObserver | null = null;

    window.addEventListener("scroll", wake, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    createPhoneScene(
      canvas,
      views.map((view) => view.src),
    )
      .then((created) => {
        if (disposed) {
          created.dispose();
          return;
        }
        handle = created;
        handleRef.current = created;
        created.setActive(activeRef.current);
        resizeObserver = new ResizeObserver(() => created.resize());
        if (canvas.parentElement) resizeObserver.observe(canvas.parentElement);
        intersectionObserver = new IntersectionObserver(
          ([entry]) => (entry.isIntersecting ? start() : stop()),
          { threshold: 0 },
        );
        intersectionObserver.observe(canvas.parentElement ?? canvas);
        themeObserver = new MutationObserver(() => created.applyTheme());
        themeObserver.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["data-theme"],
        });
      })
      .catch(() => {
        if (!disposed) setFailed(true);
      });

    return () => {
      disposed = true;
      stop();
      window.removeEventListener("scroll", wake);
      document.removeEventListener("visibilitychange", onVisibility);
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      themeObserver?.disconnect();
      handle?.dispose();
      handleRef.current = null;
      canvas.remove();
    };
  }, [views, progress]);

  if (failed) {
    return (
      <PhoneFallback views={views} activeIndex={activeIndex} label={label} />
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto h-full w-auto max-w-full"
      style={{ aspectRatio: phoneAspectRatio }}
    >
      <div ref={containerRef} className="h-full w-full" />
    </div>
  );
}
