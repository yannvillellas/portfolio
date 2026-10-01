import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import Background from "@/components/hero/Background";
import PageContainer from "@/components/PageContainer";
import Hero from "@/components/hero/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";

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
    alternates: getAlternates(locale, "/"),
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  return (
    <div className="relative bg-background text-foreground">
      <Background>
        <PageContainer vertical={false}>
          <Hero />
          <HomeAbout />
          <HomeProjects locale={locale} />
        </PageContainer>
      </Background>
    </div>
  );
}
