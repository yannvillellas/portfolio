import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative z-10 flex min-h-svh items-center justify-center pb-16 pt-(--header-offset)">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="type-caption">{t("eyebrow")}</p>
        <h1 className="mt-3 lg:text-6xl text-foreground">{t("title")}</h1>

        <p className="text-lg md:text-xl mt-6 max-w-3xl text-foreground/80">
          {t("heroSubtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">
            {t("primaryCta")}
          </Link>

          <Link href="/projects" className="btn btn-secondary">
            {t("secondaryCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
