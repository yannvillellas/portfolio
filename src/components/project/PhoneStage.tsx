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

export default function PhoneStage({
  views,
  activeIndex,
  label,
  progress,
}: PhoneStageProps) {
  const [webgl, setWebgl] = useState<boolean | null>(null);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const supported = Boolean(
      canvas.getContext("webgl2") ?? canvas.getContext("webgl"),
    );
    // eslint-disable-next-line react-hooks/set-state-in-effect -- WebGL support is browser-only
    setWebgl(supported);
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
