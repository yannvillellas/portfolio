import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Prose from "@/components/ui/Prose";
import TextLink from "@/components/ui/TextLink";
import { email, githubUrl, linkedinUrl } from "@/lib/site";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("ContactPage");

  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(locale, "/contact"),
    openGraph: buildOpenGraph(locale, t("title"), t("description")),
  };
}

export default async function ContactPage() {
  const t = await getTranslations("ContactPage");

  return (
    <PageShell>
      <PageHeader
        title={t("title")}
        width="2xl"
        leadMeasure="none"
        lead={t("description")}
      >
        <div className="mt-4 flex flex-col gap-8">
          <TextLink href={`mailto:${email}`} tone="accent" size="2xl">
            {email}
            <ArrowUpRight
              size={12}
              aria-hidden="true"
              className="-translate-y-0.75 text-mut"
            />
          </TextLink>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <TextLink href={githubUrl} newTab>
              {t("github")}
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="-translate-y-0.75 text-mut"
              />
            </TextLink>
            <TextLink href={linkedinUrl} newTab>
              {t("linkedin")}
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="-translate-y-0.75 text-mut"
              />
            </TextLink>
          </div>
        </div>
      </PageHeader>

      <div className="mt-14 max-w-2xl border-t border-line pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="text-sm text-mut">{t("soonTitle")}</p>
          <span className="rounded-full border border-line px-2.5 py-0.5 text-xs text-mut">
            {t("soonBadge")}
          </span>
        </div>
        <Prose size="sm" className="mt-2">
          <p>{t("soonDescription")}</p>
        </Prose>
      </div>
    </PageShell>
  );
}
