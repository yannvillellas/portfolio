import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import Prose from "@/components/ui/Prose";

export default async function AboutBlurb() {
  const t = await getTranslations("HomePage");
  const rich = {
    b: (chunks: ReactNode) => (
      <strong className="font-medium text-ink">{chunks}</strong>
    ),
  };

  return (
    <section>
      <Container>
        <SectionHeader
          title={t("pathTitle")}
          href="/about"
          linkLabel={t("pathLink")}
        />
        <Prose className="pt-6">
          <p>{t.rich("aboutP1", rich)}</p>
          <p>{t.rich("aboutP2", rich)}</p>
          <p>{t.rich("aboutP3", rich)}</p>
        </Prose>
      </Container>
    </section>
  );
}
