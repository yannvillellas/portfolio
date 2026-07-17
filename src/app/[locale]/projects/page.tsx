import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="flex min-h-svh items-center justify-center pt-(--header-clearance) pb-(--mobile-nav-clearance)">
      <PageContainer>
        <h1 className="text-center text-6xl md:text-9xl font-black tracking-tighter text-foreground">
          {t("title")}
        </h1>
      </PageContainer>
    </div>
  );
}
