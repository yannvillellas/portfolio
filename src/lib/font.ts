import localFont from "next/font/local";

export const FONT_FAMILY = "Allo";

export const OG_WEIGHTS = { regular: 400, bold: 700 } as const;

export const OG_FILES = {
  regular: "allo-og-400.ttf",
  bold: "allo-og-700.ttf",
};

export const siteFont = localFont({
  src: "../app/fonts/allo-var.woff2",
  weight: "100 900",
  style: "normal",
  display: "swap",
  adjustFontFallback: "Arial",
  variable: "--font-site",
});
