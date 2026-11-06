/* eslint-disable @next/next/no-img-element -- ImageResponse requires plain img elements */
import { ImageResponse } from "next/og";
import type { Project } from "@/data/projects";
import { OG_SIZE, loadSwitzer, ogFonts, screenshotDataUrl } from "./og";

export async function projectOgImage(project: Project | undefined) {
  const title = project?.title ?? "Project";
  const tags = project?.tags ?? [];
  const screenshot = project?.screenshots?.[0];
  const imageSrc = screenshot ? screenshotDataUrl(screenshot.src) : null;
  const font = await loadSwitzer();

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#f7f7f4",
        color: "#171715",
        fontFamily: "Switzer",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 32,
          padding: "56px 72px 28px",
        }}
      >
        <div
          style={{
            display: "flex",
            maxWidth: "72%",
            fontSize: 72,
            fontWeight: 600,
            letterSpacing: "-0.04em",
          }}
        >
          {title}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6f6f69" }}>
          {tags.slice(0, 3).join(" · ")}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1, padding: "0 72px" }}>
        {imageSrc ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              border: "1px solid #dcdcd4",
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            <img
              src={imageSrc}
              alt={screenshot?.caption ?? title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              border: "1px solid #dcdcd4",
              borderRadius: 12,
              backgroundColor: "#ffffff",
            }}
          />
        )}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "32px 72px 48px",
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
        <div
          style={{
            display: "flex",
            fontSize: 22,
            color: "#6f6f69",
          }}
        >
          yann.app
        </div>
      </div>
    </div>,
    { ...OG_SIZE, fonts: ogFonts(font) },
  );
}
