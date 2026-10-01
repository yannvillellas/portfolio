import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type Locale = (typeof routing.locales)[number];

export function getAlternates(locale: string, href: string) {
  return {
    canonical: getPathname({ href, locale: locale as Locale }),
  };
}
