import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";

export const alt = "Yann Villellas — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const subtitles: Record<string, string> = {
  en: "Software Engineer",
  fr: "Ingénieur logiciel",
};

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const subtitle = subtitles[locale] ?? subtitles.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          backgroundColor: "#0b0f19",
          backgroundImage:
            "radial-gradient(circle at 15% 20%, #1e3a8a 0%, transparent 45%), radial-gradient(circle at 85% 80%, #4c1d95 0%, transparent 45%)",
          color: "#f8fafc",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#93c5fd" }}>
          yann.app
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
            Yann Villellas
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 44,
              color: "#cbd5e1",
              marginTop: 16,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
