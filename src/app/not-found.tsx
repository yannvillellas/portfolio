"use client";

import { usePathname } from "next/navigation";

const paper = "#f7f7f4";
const ink = "#111114";
const muted = "#6b6b73";
const accent = "#6b4ee6";

export default function RootNotFound() {
  const pathname = usePathname() ?? "";
  const isFrench = pathname.startsWith("/fr");

  const title = isFrench
    ? "Cette page n'existe pas."
    : "This page does not exist.";
  const body = isFrench
    ? "Le lien est peut-être cassé, ou la page a changé d'adresse."
    : "The link may be broken, or the page has moved.";
  const back = isFrench ? "Retour à l'accueil" : "Back to the home page";
  const home = isFrench ? "/fr" : "/en";

  return (
    <main
      style={{
        minHeight: "100svh",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "120px 24px 0",
        maxWidth: 1152,
        margin: "0 auto",
        background: paper,
        color: ink,
        fontFamily:
          'Switzer, ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif',
      }}
    >
      <p style={{ fontSize: 13, color: muted, fontWeight: 600 }}>
        {isFrench ? "Erreur 404" : "Error 404"}
      </p>
      <h1
        style={{
          margin: "12px 0 0",
          fontSize: "clamp(32px, 5vw, 48px)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
          fontWeight: 600,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          margin: "20px 0 0",
          maxWidth: 520,
          fontSize: 16,
          lineHeight: 1.6,
          color: muted,
        }}
      >
        {body}
      </p>
      <div style={{ marginTop: 32, display: "flex", gap: 24, fontSize: 14 }}>
        <a href={home} style={{ color: ink, textUnderlineOffset: 4 }}>
          {back}
        </a>
      </div>
      <div
        style={{ marginTop: 40, width: 120, height: 4, background: accent }}
      />
    </main>
  );
}
