import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <div className="relative z-10 flex min-h-svh items-center justify-center pb-16 pt-(--header-offset)">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <h1 className="lg:text-6xl text-foreground">{t("title")}</h1>

        <p className="text-lg md:text-xl mt-6 max-w-3xl text-foreground/80">
          {t("heroSubtitle")}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-2xl bg-accent px-6 py-3 text-base font-bold text-background no-underline transition-colors hover:bg-accent-hover"
          >
            {t("primaryCta")}
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-2xl border border-foreground/20 bg-background/60 px-6 py-3 text-base font-bold text-foreground no-underline backdrop-blur-sm transition-colors hover:border-foreground/30 hover:bg-background/70"
          >
            {t("secondaryCta")}
          </Link>
        </div>
      </div>
    </div>
  );
}
