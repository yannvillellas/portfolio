import { readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { FONT_FAMILY, OG_FILES, OG_WEIGHTS } from "./font";

export const OG_SIZE = { width: 1200, height: 630 };

const normalStyle = "normal" as const;

export interface OgFontData {
  regular: ArrayBuffer | null;
  bold: ArrayBuffer | null;
}

function readFont(file: string): ArrayBuffer | null {
  try {
    const buffer = readFileSync(
      join(process.cwd(), "src", "app", "fonts", file),
    );
    return Uint8Array.from(buffer).buffer;
  } catch {
    return null;
  }
}

let fontsPromise: Promise<OgFontData | null> | null = null;

export function loadFonts(): Promise<OgFontData | null> {
  fontsPromise ??= Promise.resolve({
    regular: readFont(OG_FILES.regular),
    bold: readFont(OG_FILES.bold),
  });
  return fontsPromise;
}

export interface OgFont {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: "normal";
}

export function ogFonts(fonts: OgFontData | null): OgFont[] | undefined {
  if (!fonts) return undefined;
  const entries: OgFont[] = [];
  if (fonts.regular) {
    entries.push({
      name: FONT_FAMILY,
      data: fonts.regular,
      weight: OG_WEIGHTS.regular,
      style: normalStyle,
    });
  }
  if (fonts.bold) {
    entries.push({
      name: FONT_FAMILY,
      data: fonts.bold,
      weight: OG_WEIGHTS.bold,
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
