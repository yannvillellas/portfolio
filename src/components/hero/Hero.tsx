import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Background from "@/components/hero/Background";
import PageContainer from "@/components/PageContainer";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <Background>
      <div className="relative z-10 flex min-h-svh items-center justify-center pb-16 pt-(--header-clearance)">
        <PageContainer>
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            <h1 className="text-5xl font-black tracking-tight text-foreground md:text-7xl lg:text-8xl">
              {t("title")}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              {t("heroSubtitle")}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-2xl bg-accent px-6 py-3 font-heading text-base font-bold text-background no-underline transition-colors hover:bg-accent-hover"
              >
                {t("primaryCta")}
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center rounded-2xl border border-foreground/25 bg-background/55 px-6 py-3 font-heading text-base font-bold text-foreground no-underline backdrop-blur-sm transition-colors hover:border-foreground/45 hover:bg-background/75"
              >
                {t("secondaryCta")}
              </Link>
            </div>
          </div>
        </PageContainer>
      </div>
    </Background>
  );
}
