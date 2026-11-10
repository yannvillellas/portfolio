import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";

export default async function Hero() {
  const t = await getTranslations("HomePage");

  return (
    <section className="pt-14 pb-10">
      <Container>
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm text-mut">{t("eyebrow")}</p>
          <Heading level="h1" size="hero">
            {t("title")}
          </Heading>
          <Prose>
            <p>{t("heroSubtitle")}</p>
          </Prose>
        </div>
      </Container>
    </section>
  );
}
