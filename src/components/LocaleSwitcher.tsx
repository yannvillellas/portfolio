"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <select
      value={locale}
      onChange={(e) => router.replace(pathname, { locale: e.target.value })}
      className="h-9 rounded-lg border border-foreground/20 bg-background px-3 py-1.5 text-sm font-medium text-foreground/80 focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer hover:border-foreground/30 transition-colors"
      aria-label="Select language"
    >
      <option value="en">English</option>
      <option value="fr">Français</option>
    </select>
  );
}
