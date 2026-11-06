import { ImageResponse } from "next/og";
import { routing } from "@/i18n/routing";
import { OG_SIZE, loadSwitzer, ogFonts } from "@/lib/og";

export const size = OG_SIZE;
export const alt = "Yann Villellas";
export const contentType = "image/png";

export function ogStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function ogCard(
  title: string,
  subtitle: string,
  role: string,
) {
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
        backgroundColor: "#f6f6f7",
        color: "#171717",
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
        <div style={{ display: "flex" }}>{role}</div>
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
          {title}
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
          {subtitle}
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
