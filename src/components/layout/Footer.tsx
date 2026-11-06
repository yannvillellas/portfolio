import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import LocaleSwitcher from "@/components/ui/LocaleSwitcher";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const t = await getTranslations("Footer");

  const themeLabels = {
    light: t("themeLight"),
    dark: t("themeDark"),
    system: t("themeSystem"),
    auto: t("themeAuto"),
  };

  return (
    <footer className="site-footer border-t border-line">
      <Container className="flex flex-col items-center gap-4 py-6 text-xs text-mut sm:flex-row sm:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
          <p>{t("copyright")}</p>
          <Link href="/legal" className="transition-colors hover:text-ink">
            {t("legalAndPrivacy")}
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle labels={themeLabels} />
          <LocaleSwitcher />
        </div>
      </Container>
    </footer>
  );
}
