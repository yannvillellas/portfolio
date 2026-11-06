"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import type { RefObject } from "react";
import PhoneFallback from "@/components/project/PhoneFallback";

const PhoneScene = dynamic(() => import("@/components/three/PhoneScene"), {
  ssr: false,
  loading: () => (
    <div
      aria-hidden="true"
      className="mx-auto h-full"
      style={{ aspectRatio: "1482 / 3209" }}
    />
  ),
});

interface PhoneStageProps {
  views: { src: string }[];
  activeIndex: number;
  label: string;
  progress: RefObject<number>;
}

let cachedSupport: boolean | null = null;

function supportsWebgl(): boolean {
  if (cachedSupport !== null) return cachedSupport;

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("webgl2") ?? canvas.getContext("webgl");

  cachedSupport = Boolean(context);
  context?.getExtension("WEBGL_lose_context")?.loseContext();

  return cachedSupport;
}

export default function PhoneStage({
  views,
  activeIndex,
  label,
  progress,
}: PhoneStageProps) {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- WebGL support is browser-only
    setWebgl(supportsWebgl());
  }, []);

  if (webgl === null) {
    return (
      <div
        aria-hidden="true"
        className="mx-auto h-full"
        style={{ aspectRatio: "1482 / 3209" }}
      />
    );
  }

  if (webgl === false) {
    return (
      <PhoneFallback views={views} activeIndex={activeIndex} label={label} />
    );
  }

  return (
    <PhoneScene
      views={views}
      activeIndex={activeIndex}
      label={label}
      progress={progress}
    />
  );
}
