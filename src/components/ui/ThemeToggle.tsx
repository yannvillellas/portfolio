"use client";

import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import {
  applyTheme,
  getResolvedTheme,
  getStoredMode,
  getSystemTheme,
  THEME_KEY,
} from "@/lib/theme";
import type { Mode, Theme } from "@/lib/theme";

interface ThemeToggleProps {
  labels: {
    light: string;
    dark: string;
    system: string;
    auto: string;
  };
}

export default function ThemeToggle({ labels }: ThemeToggleProps) {
  const [mode, setMode] = useState<Mode>("system");
  const [resolved, setResolved] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  const isManual = mode !== "system";

  useEffect(() => {
    const stored = getStoredMode();
    /* eslint-disable react-hooks/set-state-in-effect -- reading persisted theme from localStorage on mount */
    setMode(stored);
    setResolved(getResolvedTheme(stored));
    setMounted(true);
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  useEffect(() => {
    if (!mounted) return;
    applyTheme(resolved);
  }, [resolved, mounted]);

  useEffect(() => {
    if (isManual) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setResolved(getSystemTheme());
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [isManual]);

  const toggle = useCallback((newTheme: Theme) => {
    localStorage.setItem(THEME_KEY, newTheme);
    setMode(newTheme);
    setResolved(newTheme);
  }, []);

  const reset = useCallback(() => {
    localStorage.removeItem(THEME_KEY);
    setMode("system");
    setResolved(getSystemTheme());
  }, []);

  const buttonClass = (theme: Theme) =>
    `flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg transition-colors ${
      resolved === theme
        ? "bg-paper text-ink ring-1 ring-inset ring-line"
        : "text-mut hover:text-ink"
    }`;

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={reset}
        className={`h-8 cursor-pointer rounded-lg px-2 text-xs text-mut transition-colors hover:text-ink ${
          isManual ? "" : "invisible"
        }`}
        aria-label={`${labels.auto} (${labels.system})`}
        title={labels.system}
      >
        {labels.auto}
      </button>
      <div className="inline-flex h-8 items-center rounded-lg bg-ink/5 ring-1 ring-inset ring-line">
        <button
          type="button"
          onClick={() => toggle("light")}
          className={buttonClass("light")}
          aria-label={labels.light}
          aria-pressed={resolved === "light"}
        >
          <Sun size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => toggle("dark")}
          className={buttonClass("dark")}
          aria-label={labels.dark}
          aria-pressed={resolved === "dark"}
        >
          <Moon size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
