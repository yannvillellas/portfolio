import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Hero from "@/components/hero/Hero";
import HomeSectionsPreview from "@/components/home/HomeSectionsPreview";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
  };
}

export default function HomePage() {
  return (
    <main className="relative bg-background text-foreground">
      <Hero />
      <HomeSectionsPreview />
    </main>
  );
}
