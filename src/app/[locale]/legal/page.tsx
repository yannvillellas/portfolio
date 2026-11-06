import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import Container from "@/components/layout/Container";
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

  return (
    <div className="pt-14 pb-24">
      <Container>
        <div className="max-w-prose">
          <h1 className="m-0 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {t("title")}
          </h1>

          <section>
            <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("editorTitle")}
            </h2>
            <p className="text-base leading-relaxed text-mut">{t("editor")}</p>
            <p className="mt-3 text-base leading-relaxed text-mut">
              {t("contact")}{" "}
              <a
                href={`mailto:${email}`}
                className="text-accent underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </p>

            <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("hostingTitle")}
            </h2>
            <p className="text-base leading-relaxed text-mut">{t("hosting")}</p>

            <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("propertyTitle")}
            </h2>
            <p className="text-base leading-relaxed text-mut">
              {t("property")}
            </p>
          </section>

          <section>
            <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("privacyTitle")}
            </h2>
            <p className="text-base leading-relaxed text-mut">{t("privacy")}</p>
          </section>
        </div>
      </Container>
    </div>
  );
}
