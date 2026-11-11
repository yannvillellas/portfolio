import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import Hero from "@/components/home/Hero";
import AboutBlurb from "@/components/home/AboutBlurb";
import SelectedWork from "@/components/home/SelectedWork";
import ContactBlock from "@/components/home/ContactBlock";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  return {
    title: { absolute: "Yann Villellas" },
    description: t("heroSubtitle"),
    alternates: getAlternates(locale, "/"),
    openGraph: buildOpenGraph(
      locale,
      `Yann Villellas — ${t("role")}`,
      t("heroSubtitle"),
    ),
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 pb-24">
      <Hero />
      <AboutBlurb />
      <SelectedWork />
      <ContactBlock />
    </div>
  );
}
