import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { OG_SIZE, loadSwitzer, ogFonts } from "@/lib/og";
import en from "../../../messages/en.json";
import fr from "../../../messages/fr.json";

export const alt = "Yann Villellas";
export const size = OG_SIZE;
export const contentType = "image/png";

const messages = { en, fr };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const home = (locale === "fr" ? messages.fr : messages.en).HomePage;
  const font = await loadSwitzer();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px 64px",
        backgroundColor: "#f7f7f4",
        color: "#171715",
        fontFamily: "Switzer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 24,
          color: "#6f6f69",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              display: "flex",
              width: 10,
              height: 10,
              backgroundColor: "#6d4aff",
            }}
          />
          Yann Villellas
        </div>
        <div style={{ display: "flex" }}>{home.role}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            lineHeight: 1.04,
            fontWeight: 600,
            letterSpacing: "-0.04em",
            maxWidth: 940,
          }}
        >
          {home.title}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            lineHeight: 1.35,
            color: "#6f6f69",
            marginTop: 26,
            maxWidth: 880,
          }}
        >
          {home.heroSubtitle}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontSize: 22,
          color: "#6f6f69",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 4,
            backgroundColor: "#6d4aff",
          }}
        />
        <div style={{ display: "flex" }}>yann.app</div>
      </div>
    </div>,
    { ...size, fonts: ogFonts(font) },
  );
}
