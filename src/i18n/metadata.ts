import type { Metadata } from "next";

type OpenGraph = NonNullable<Metadata["openGraph"]>;

export function buildOpenGraph(
  locale: string,
  title: string,
  description: string,
): OpenGraph {
  const isFrench = locale === "fr";

  return {
    title,
    description,
    type: "website",
    siteName: "Yann Villellas",
    locale: isFrench ? "fr_FR" : "en_US",
    alternateLocale: isFrench ? ["en_US"] : ["fr_FR"],
  };
}
