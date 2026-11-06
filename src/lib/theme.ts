export type Theme = "light" | "dark";
export type Mode = Theme | "system";

export const THEME_KEY = "theme";
export const THEME_ATTR = "data-theme";

export function getStoredMode(): Mode {
  if (typeof window === "undefined") return "system";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return "system";
}

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function getResolvedTheme(mode: Mode): Theme {
  return mode === "system" ? getSystemTheme() : mode;
}

export function applyTheme(theme: Theme) {
  document.documentElement.setAttribute(THEME_ATTR, theme);
}

export const themeInitScript = `(function(){try{var t=localStorage.getItem("${THEME_KEY}");if(t==="dark")document.documentElement.setAttribute("${THEME_ATTR}","dark");else if(t==="light")document.documentElement.setAttribute("${THEME_ATTR}","light");else if(window.matchMedia("(prefers-color-scheme:dark)").matches)document.documentElement.setAttribute("${THEME_ATTR}","dark")}catch(e){}})()`;
