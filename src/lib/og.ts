import { readFileSync } from "node:fs";
import sharp from "sharp";
import { join } from "node:path";

export const OG_SIZE = { width: 1200, height: 630 };

const FONT_CSS =
  "https://api.fontshare.com/v2/css?f[]=switzer@400,500,600&display=swap";
const normalStyle = "normal" as const;

export interface SwitzerFonts {
  regular: ArrayBuffer | null;
  bold: ArrayBuffer | null;
}

let fontsPromise: Promise<SwitzerFonts | null> | null = null;

async function fetchWeight(css: string, weight: number) {
  const block = css
    .split("@font-face")
    .find((part) => part.includes(`font-weight: ${weight}`));
  const match = block?.match(/url\('([^']+\.ttf)'\)/);
  if (!match) return null;
  const url = match[1].startsWith("//") ? `https:${match[1]}` : match[1];
  return fetch(url).then((response) => response.arrayBuffer());
}

export function loadSwitzer(): Promise<SwitzerFonts | null> {
  fontsPromise ??= (async () => {
    try {
      const css = await fetch(FONT_CSS).then((response) => response.text());
      const [regular, bold] = await Promise.all([
        fetchWeight(css, 400),
        fetchWeight(css, 600),
      ]);
      return { regular, bold };
    } catch {
      return null;
    }
  })();
  return fontsPromise;
}

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 600;
  style: "normal";
}

export function ogFonts(fonts: SwitzerFonts | null): OgFont[] | undefined {
  if (!fonts) return undefined;
  const entries: OgFont[] = [];
  if (fonts.regular) {
    entries.push({
      name: "Switzer",
      data: fonts.regular,
      weight: 400,
      style: normalStyle,
    });
  }
  if (fonts.bold) {
    entries.push({
      name: "Switzer",
      data: fonts.bold,
      weight: 600,
      style: normalStyle,
    });
  }
  return entries.length > 0 ? entries : undefined;
}

const mimeTypes: Record<string, string> = {
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
};

export async function screenshotDataUrl(src: string): Promise<string | null> {
  const extension = src.split(".").pop()?.toLowerCase() ?? "";
  const file = join(process.cwd(), "public", src);
  try {
    const mime = mimeTypes[extension];
    if (mime) {
      return `data:${mime};base64,${readFileSync(file, "base64")}`;
    }
    const jpeg = await sharp(file).jpeg({ quality: 84 }).toBuffer();
    return `data:image/jpeg;base64,${jpeg.toString("base64")}`;
  } catch {
    return null;
  }
}
