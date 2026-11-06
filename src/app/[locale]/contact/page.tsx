import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import Container from "@/components/layout/Container";
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
    <div className="pt-14 pb-24">
      <Container>
        <div className="max-w-2xl">
          <h1 className="m-0 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-mut">
            {t("description")}
          </p>
          <a
            href={`mailto:${email}`}
            className="mt-8 inline-flex items-center gap-1 text-2xl text-accent underline-offset-4 transition-colors hover:underline"
          >
            {email}
            <ArrowUpRight
              size={12}
              aria-hidden="true"
              className="-translate-y-0.75 text-mut"
            />
          </a>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-mut underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t("github")}
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="-translate-y-0.75 text-mut"
              />
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-mut underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              {t("linkedin")}
              <ArrowUpRight
                size={12}
                aria-hidden="true"
                className="-translate-y-0.75 text-mut"
              />
            </a>
          </div>

          <div className="mt-14 border-t border-line pt-6 text-mut">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-sm">{t("soonTitle")}</p>
              <span className="text-sm text-mut/70">{t("soonBadge")}</span>
            </div>
            <p className="mt-2 max-w-prose text-sm leading-relaxed">
              {t("soonDescription")}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
