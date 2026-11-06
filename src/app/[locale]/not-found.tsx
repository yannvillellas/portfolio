import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("NotFound");

  return (
    <Section>
      <Container>
        <p className="text-sm text-mut">{t("eyebrow")}</p>
        <h1 className="mt-3 text-4xl tracking-tight lg:text-5xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-prose text-base leading-relaxed text-mut">
          {t("description")}
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-1 text-sm text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
        >
          {t("back")}
        </Link>
      </Container>
    </Section>
  );
}
