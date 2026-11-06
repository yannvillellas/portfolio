import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import ContactBlock from "@/components/home/ContactBlock";
import { Link } from "@/i18n/navigation";

export default async function AboutBlurb() {
  const t = await getTranslations("HomePage");
  const rich = {
    b: (chunks: ReactNode) => (
      <strong className="font-medium text-ink">{chunks}</strong>
    ),
  };

  return (
    <section className="pt-16">
      <Container>
        <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <h2 className="m-0 text-lg font-semibold tracking-tight">
            {t("pathTitle")}
          </h2>
          <Link
            href="/about"
            className="text-sm text-mut transition-colors hover:text-ink"
          >
            {t("pathLink")}
          </Link>
        </div>

        <div className="max-w-prose space-y-4 pt-8">
          <p className="text-base leading-relaxed text-mut">
            {t.rich("aboutP1", rich)}
          </p>
          <p className="text-base leading-relaxed text-mut">
            {t.rich("aboutP2", rich)}
          </p>
          <p className="text-base leading-relaxed text-mut">
            {t.rich("aboutP3", rich)}
          </p>
        </div>

        <ContactBlock />
      </Container>
    </section>
  );
}
