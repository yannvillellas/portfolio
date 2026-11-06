import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function getAlternates(locale: string, href: string) {
  const resolvedLocale =
    routing.locales.find((l) => l === locale) ?? routing.defaultLocale;

  return {
    canonical: getPathname({ href, locale: resolvedLocale }),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, getPathname({ href, locale: l })]),
      ),
      "x-default": getPathname({ href, locale: routing.defaultLocale }),
    },
  };
}
