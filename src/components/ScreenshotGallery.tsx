"use client";

import { useState } from "react";
import Image from "next/image";
import type { Screenshot } from "@/data/projects";

export default function ScreenshotGallery({
  screenshots,
}: {
  screenshots: Screenshot[];
}) {
  return <Carousel screenshots={screenshots} />;
}

function Carousel({ screenshots }: { screenshots: Screenshot[] }) {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? screenshots.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === screenshots.length - 1 ? 0 : i + 1));

  const current = screenshots[index];
  const isPortrait = screenshots[0].orientation === "portrait";
  const multi = screenshots.length > 1;
  const landscape = !isPortrait;

  return (
    <div className="mx-auto max-w-3xl">
      <div className={`relative mx-auto ${isPortrait ? "max-w-xs" : "w-full"}`}>
        <div className="overflow-hidden rounded-2xl">
          <div
            className="flex transition-transform duration-300 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {screenshots.map((s) => (
              <div key={s.src} className="w-full shrink-0">
                <Image
                  src={s.src}
                  alt={s.caption ?? ""}
                  width={isPortrait ? 900 : 1200}
                  height={isPortrait ? 2000 : 750}
                  sizes={
                    isPortrait
                      ? "(max-width: 22rem) 100vw, 20rem"
                      : "(max-width: 48rem) 100vw, 48rem"
                  }
                  className={`w-full object-cover ${
                    isPortrait ? "aspect-9/20" : "aspect-16/10"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {multi && (
          <>
            <NavButton
              onClick={prev}
              label="Previous image"
              className={`absolute top-1/2 hidden -translate-y-1/2 -left-14 ${
                isPortrait ? "sm:block" : "lg:block"
              }`}
            >
              <ChevronLeftIcon />
            </NavButton>
            <NavButton
              onClick={next}
              label="Next image"
              className={`absolute top-1/2 hidden -translate-y-1/2 -right-14 ${
                isPortrait ? "sm:block" : "lg:block"
              }`}
            >
              <ChevronRightIcon />
            </NavButton>
          </>
        )}
      </div>

      {multi && (
        <div
          className={`mt-2 flex items-center justify-center gap-4 ${
            isPortrait ? "" : "lg:hidden"
          }`}
        >
          <NavButton
            onClick={prev}
            label="Previous image"
            className={isPortrait ? "sm:hidden" : "lg:hidden"}
          >
            <ChevronLeftIcon />
          </NavButton>
          <Dots screenshots={screenshots} index={index} onSelect={setIndex} />
          <NavButton
            onClick={next}
            label="Next image"
            className={isPortrait ? "sm:hidden" : "lg:hidden"}
          >
            <ChevronRightIcon />
          </NavButton>
        </div>
      )}

      {multi && landscape && (
        <div className="mt-2 hidden items-center justify-between gap-4 lg:flex">
          {current.caption && <p className="type-caption">{current.caption}</p>}
          <Dots screenshots={screenshots} index={index} onSelect={setIndex} />
        </div>
      )}

      {current.caption && (
        <p
          className={`type-caption mt-2 text-center ${
            landscape ? (multi ? "lg:hidden" : "lg:text-left") : ""
          }`}
        >
          {current.caption}
        </p>
      )}
    </div>
  );
}

function Dots({
  screenshots,
  index,
  onSelect,
}: {
  screenshots: Screenshot[];
  index: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex items-center gap-1">
      {screenshots.map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className="flex h-6 w-6 cursor-pointer items-center justify-center"
          aria-label={`Image ${i + 1} of ${screenshots.length}`}
          aria-current={i === index ? "true" : undefined}
        >
          <span
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-foreground/60" : "w-2 bg-foreground/20"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

function NavButton({
  onClick,
  label,
  className = "",
  children,
}: {
  onClick: () => void;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-background/70 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-background/90 hover:text-foreground ${className}`}
    >
      {children}
    </button>
  );
}

function ChevronLeftIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}
