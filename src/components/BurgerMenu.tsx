"use client";

import React, { useRef, useState, useLayoutEffect, useEffect } from "react";
import { gsap } from "gsap";
import { Link } from "@/i18n/navigation";

export interface BurgerMenuItem {
  label: string;
  link: string;
}

export interface BurgerMenuProps {
  items?: BurgerMenuItem[];
}

const WIPE_COLORS = [
  "var(--accent-tertiary)",
  "var(--accent-secondary)",
  "var(--accent)",
];

export default function BurgerMenu({ items = [] }: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const panel = containerRef.current?.querySelector(".menu-panel");
      const layers = containerRef.current?.querySelectorAll(".wipe-layer");
      if (panel) gsap.set(panel, { xPercent: 100 });
      if (layers) gsap.set(layers, { xPercent: 100 });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.context(() => {
      const panel = containerRef.current?.querySelector(".menu-panel");
      const layers = containerRef.current
        ? Array.from(containerRef.current.querySelectorAll(".wipe-layer"))
        : [];

      if (tlRef.current) tlRef.current.kill();

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      if (isOpen) {
        if (layers.length)
          tl.to(layers, { xPercent: 0, duration: 0.5, stagger: 0.07 }, 0);
        if (panel) tl.to(panel, { xPercent: 0, duration: 0.65 }, 0.15);
      } else {
        const all = [...layers];
        if (panel) all.push(panel as Element);
        if (all.length)
          tl.to(all, {
            xPercent: 100,
            duration: 0.4,
            ease: "power3.in",
            stagger: { amount: 0.1, from: "end" },
          });
      }
      tlRef.current = tl;
    }, containerRef);

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <div ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-60 flex items-center cursor-pointer focus:outline-none text-foreground"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <div className="relative w-9 h-5">
          <span
            className={`absolute left-0 h-1 w-full bg-current transition-all duration-300 ${
              isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 h-1 w-full bg-current -translate-y-1/2 transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 h-1 w-full bg-current transition-all duration-300 ${
              isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-45"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className="fixed inset-0 pointer-events-none z-40"
        aria-hidden="true"
      >
        {WIPE_COLORS.map((color, i) => (
          <div
            key={i}
            className="wipe-layer fixed top-0 right-0 h-full w-full"
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      <aside
        id="mobile-nav-panel"
        className="menu-panel fixed top-0 right-0 h-full w-full bg-(--background-tertiary) flex flex-col p-12 pt-32 shadow-2xl z-50 overflow-y-auto"
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col gap-6">
          {items.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="group relative block overflow-hidden text-5xl font-bold font-heading tracking-tighter text-foreground no-underline pb-2"
            >
              <span className="transition-colors duration-300 group-hover:text-(--accent)">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
