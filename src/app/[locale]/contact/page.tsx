import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-foreground">
        {t("title")}
      </h1>
    </div>
  );
}
