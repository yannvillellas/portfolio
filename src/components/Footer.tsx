import { getTranslations } from "next-intl/server";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default async function Footer() {
  const t = await getTranslations("Footer");

  const themeLabels = {
    light: t("themeLight"),
    dark: t("themeDark"),
    system: t("themeSystem"),
  };

  return (
    <footer className="border-t border-foreground/10 pb-(--mobile-nav-clearance)">
      <div className="mx-(--chrome-inset-x) px-6 py-3">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="type-caption">{t("copyright")}</p>

          <div className="flex items-center gap-3">
            <ThemeToggle labels={themeLabels} />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
