"use client";

import React, { useRef, useState } from "react";

interface InteractiveBackgroundProps {
  children: React.ReactNode;
}

export default function InteractiveBackground({
  children,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setPosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex items-center justify-center w-full h-dvh overflow-hidden bg-background"
    >
      <div
        className="absolute inset-0 opacity-40 transition-all duration-75 ease-out"
        style={{
          background: `radial-gradient(circle at ${position.x}% ${position.y}%, var(--accent-tertiary) 0%, transparent 95%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay">
        <svg className="w-full h-full opacity-100">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center p-8 pointer-events-none w-full">
        {children}
      </div>
    </div>
  );
}
