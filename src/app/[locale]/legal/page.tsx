import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";
import TextLink from "@/components/ui/TextLink";
import { email } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("LegalPage");

  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(locale, "/legal"),
    openGraph: buildOpenGraph(locale, t("title"), t("description")),
  };
}

export default async function LegalPage() {
  const t = await getTranslations("LegalPage");

  const sections = [
    {
      title: t("editorTitle"),
      body: (
        <>
          <p>{t("editor")}</p>
          <p>
            {t("contact")}{" "}
            <TextLink href={`mailto:${email}`} tone="accent" size="base">
              {email}
            </TextLink>
          </p>
        </>
      ),
    },
    { title: t("hostingTitle"), body: <p>{t("hosting")}</p> },
    { title: t("propertyTitle"), body: <p>{t("property")}</p> },
    { title: t("privacyTitle"), body: <p>{t("privacy")}</p> },
  ];

  return (
    <PageShell>
      <PageHeader title={t("title")} />

      <div className="mt-12 flex max-w-prose flex-col gap-12">
        {sections.map((section) => (
          <section key={section.title}>
            <Heading level="h2" role="block">
              {section.title}
            </Heading>
            <Prose gap="tight">{section.body}</Prose>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
