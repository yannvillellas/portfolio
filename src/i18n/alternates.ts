import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export function getAlternates(locale: string, href: string) {
  return {
    canonical: getPathname({ href, locale: locale as Locale }),
    languages: {
      ...Object.fromEntries(
        routing.locales.map((l) => [l, getPathname({ href, locale: l })]),
      ),
      "x-default": getPathname({ href, locale: routing.defaultLocale }),
    },
  };
}
