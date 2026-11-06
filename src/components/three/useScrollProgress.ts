"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollProgress(count: number) {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [active, setActive] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const element = ref.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const sticky = element.firstElementChild as HTMLElement | null;
      const viewport = sticky ? sticky.offsetHeight : window.innerHeight;
      const span = element.offsetHeight - viewport;
      const value = span > 0 ? Math.max(0, Math.min(1, -rect.top / span)) : 0;
      progress.current = value;
      setFinished(value >= 0.995);
      const index = Math.min(count - 1, Math.floor(value * count));
      setActive(index);
    };

    const frame = requestAnimationFrame(onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, [count]);

  return { ref, progress, active, finished };
}
