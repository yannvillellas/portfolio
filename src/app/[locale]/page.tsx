import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import Background from "@/components/hero/Background";
import PageContainer from "@/components/PageContainer";
import Hero from "@/components/hero/Hero";
import HomeAbout from "@/components/home/HomeAbout";
import HomeProjects from "@/components/home/HomeProjects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  return {
    title: t("title"),
    description: t("heroSubtitle"),
    alternates: getAlternates(locale, "/"),
  };
}

export default async function HomePage() {
  return (
    <div className="relative bg-background text-foreground">
      <Background>
        <PageContainer vertical={false}>
          <Hero />
          <HomeAbout />
          <HomeProjects />
        </PageContainer>
      </Background>
    </div>
  );
}
