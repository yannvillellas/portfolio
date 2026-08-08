import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Background from "@/components/hero/Background";
import PageContainer from "@/components/PageContainer";
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
    description: t("heroSubtitle"),
  };
}

export default function HomePage() {
  return (
    <div className="relative bg-background text-foreground">
      <Background>
        <PageContainer vertical={false}>
          <Hero />
          <HomeSectionsPreview />
        </PageContainer>
      </Background>
    </div>
  );
}
