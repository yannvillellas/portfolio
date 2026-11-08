"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { pinOffset, scrollRunway } from "@/lib/chapter-scroll";

export function useScrollProgress(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(0);
  const [position, setPosition] = useState(0);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    let pin = 0;
    let runway = 0;

    const onScroll = () => {
      const value =
        runway > 0
          ? Math.max(
              0,
              Math.min(1, (pin - element.getBoundingClientRect().top) / runway),
            )
          : 0;

      progress.current = value;

      const raw = value * count;
      const index = Math.min(count - 1, Math.floor(raw));
      setPosition(Math.min(1, raw - index));
      setActive(index);
    };

    const measure = () => {
      pin = pinOffset(element);
      runway = scrollRunway(element);
      onScroll();
    };

    measure();

    const frame = requestAnimationFrame(measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [count]);

  return { ref, progress, active, position };
}
