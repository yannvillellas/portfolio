"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";
type Mode = Theme | "system";

const THEME_KEY = "theme";
const ATTR = "data-theme";

function getStoredMode(): Mode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function getResolved(mode: Mode): Theme {
  return mode === "system" ? getSystemTheme() : mode;
}

function applyTheme(t: Theme) {
  document.documentElement.setAttribute(ATTR, t);
}

interface ThemeToggleProps {
  labels: {
    light: string;
    dark: string;
    system: string;
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
    setResolved(getResolved(stored));
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
    const handler = () => {
      const sys = getSystemTheme();
      setResolved(sys);
    };
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
    const sys = getSystemTheme();
    setMode("system");
    setResolved(sys);
  }, []);

  if (!mounted) return null;

  const buttonClass = (t: Theme) =>
    `rounded-md p-1.5 transition-colors ${
      resolved === t
        ? "bg-background text-accent shadow-sm"
        : "text-foreground/50 hover:text-foreground/80"
    }`;

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={reset}
        className={`h-9 rounded-lg border border-foreground/20 px-2 text-xs font-medium transition-colors cursor-pointer ${
          isManual ? "text-foreground/50 hover:text-foreground/80" : "invisible"
        }`}
        aria-label={labels.system}
        title={labels.system}
      >
        auto
      </button>
      <div className="flex items-center rounded-lg border border-foreground/20 bg-foreground/5 p-0.5 h-9">
        <button
          onClick={() => toggle("light")}
          className={buttonClass("light")}
          aria-label={labels.light}
        >
          <Sun size={16} />
        </button>
        <button
          onClick={() => toggle("dark")}
          className={buttonClass("dark")}
          aria-label={labels.dark}
        >
          <Moon size={16} />
        </button>
      </div>
    </div>
  );
}
