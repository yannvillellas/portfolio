import { ImageResponse } from "next/og";
import { getProjects } from "@/data/projects";

export const alt = "Project — Yann Villellas";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const projects = getProjects(locale as "en" | "fr");
  const project = projects.find((p) => p.id === id);

  const title = project?.title ?? "Project";
  const tags = project?.tags ?? [];

  return new ImageResponse(
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
          "radial-gradient(circle at 85% 15%, #1e3a8a 0%, transparent 45%), radial-gradient(circle at 15% 85%, #4c1d95 0%, transparent 45%)",
        color: "#f8fafc",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 30, color: "#93c5fd" }}>
        yann.app
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700 }}>
          {title}
        </div>

        <div style={{ display: "flex", marginTop: 32 }}>
          {tags.slice(0, 4).map((tag) => (
            <div
              key={tag}
              style={{
                display: "flex",
                fontSize: 26,
                color: "#cbd5e1",
                border: "2px solid #334155",
                borderRadius: 9999,
                padding: "10px 28px",
                marginRight: 16,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>,
    { ...size },
  );
}
