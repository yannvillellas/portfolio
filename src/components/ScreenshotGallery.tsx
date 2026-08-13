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

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative overflow-hidden rounded-2xl">
        <div
          className="flex items-center transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {screenshots.map((s) => (
            <div key={s.src} className="w-full shrink-0">
              <Image
                src={s.src}
                alt={s.caption ?? ""}
                width={1200}
                height={750}
                className={`w-full rounded-2xl object-cover ${
                  s.orientation === "portrait"
                    ? "mx-auto aspect-9/19 max-w-xs"
                    : "aspect-16/10"
                }`}
              />
            </div>
          ))}
        </div>

        {screenshots.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer rounded-full bg-background/70 p-2 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-background/90 hover:text-foreground"
              aria-label="Previous image"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer rounded-full bg-background/70 p-2 text-foreground/70 backdrop-blur-sm transition-colors hover:bg-background/90 hover:text-foreground"
              aria-label="Next image"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}
      </div>

      <div
        className={`mt-3 flex items-center justify-between ${
          screenshots[index].orientation === "portrait"
            ? "mx-auto w-full max-w-xs"
            : ""
        }`}
      >
        <p className="text-sm text-foreground/50">
          {screenshots[index].caption}
        </p>
        {screenshots.length > 1 && (
          <div className="flex gap-2">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-2 w-2 cursor-pointer rounded-full transition-colors ${
                  i === index ? "bg-foreground/60" : "bg-foreground/20"
                }`}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
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
