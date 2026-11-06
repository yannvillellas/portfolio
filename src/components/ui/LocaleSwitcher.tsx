"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LocaleSwitcher() {
  const t = useTranslations("Footer");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
      className="h-8 cursor-pointer rounded-lg border border-line bg-paper px-3 text-xs text-mut transition-colors hover:border-ink/30"
      aria-label={t("language")}
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
