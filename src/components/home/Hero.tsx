import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";

export default async function Hero() {
  const t = await getTranslations("HomePage");

  return (
    <section className="pt-14 pb-10">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm text-mut">{t("eyebrow")}</p>
          <h1 className="mt-4 mb-0 text-5xl font-semibold tracking-tight text-balance lg:text-6xl">
            {t("title")}
          </h1>
          <p className="mt-4.5 max-w-prose text-base leading-relaxed text-mut">
            {t("heroSubtitle")}
          </p>
        </div>
      </Container>
    </section>
  );
}
