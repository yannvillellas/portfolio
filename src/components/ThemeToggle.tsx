"use client";

import { useState, useEffect, useCallback } from "react";
import { Sun, Monitor, Moon } from "lucide-react";

type Theme = "light" | "dark" | "system";

const THEME_KEY = "theme";
const ATTR = "data-theme";

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark" || stored === "system") return stored;
  return "system";
}

function getResolvedTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  if (theme === "system") {
    root.setAttribute(ATTR, getResolvedTheme());
  } else {
    root.setAttribute(ATTR, theme);
  }
}

interface ThemeToggleProps {
  labels: {
    light: string;
    dark: string;
    system: string;
  };
}

export default function ThemeToggle({ labels }: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- reading persisted theme from localStorage on mount
    setTheme(getStoredTheme());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (theme !== "system") return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [theme]);

  const set = useCallback((next: Theme) => {
    if (next === "system") localStorage.removeItem(THEME_KEY);
    setTheme(next);
  }, []);

  if (!mounted) return null;

  const segmentClass = (value: Theme) =>
    `rounded-md p-1.5 transition-colors ${
      theme === value
        ? "bg-background text-accent shadow-sm"
        : "text-foreground/50 hover:text-foreground/80"
    }`;

  return (
    <div className="flex items-center rounded-lg border border-foreground/20 bg-foreground/5 p-0.5 h-9">
      <button
        onClick={() => set("light")}
        className={segmentClass("light")}
        aria-label={labels.light}
      >
        <Sun size={16} />
      </button>
      <button
        onClick={() => set("system")}
        className={segmentClass("system")}
        aria-label={labels.system}
      >
        <Monitor size={16} />
      </button>
      <button
        onClick={() => set("dark")}
        className={segmentClass("dark")}
        aria-label={labels.dark}
      >
        <Moon size={16} />
      </button>
    </div>
  );
}
