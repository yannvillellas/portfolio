import { getTranslations } from "next-intl/server";
import ThemeToggle from "@/components/ThemeToggle";
import LocaleSwitcher from "@/components/LocaleSwitcher";

interface FooterProps {
  locale: string;
}

export default async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale, namespace: "Footer" });

  const themeLabels = {
    light: t("themeLight"),
    dark: t("themeDark"),
    system: t("themeSystem"),
  };

  return (
    <footer className="border-t border-foreground/10 bg-background-secondary/30">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <p className="text-sm text-foreground/60">{t("copyright")}</p>

          <div className="flex items-center gap-3">
            <ThemeToggle labels={themeLabels} />
            <LocaleSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
