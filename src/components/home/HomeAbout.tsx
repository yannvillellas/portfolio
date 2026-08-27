import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomeAbout() {
  const t = useTranslations("HomePage");
  const tAbout = useTranslations("AboutPage");

  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl">
      <h2>{tAbout("title")}</h2>
      <p className="text-foreground/80">{t("aboutBlurb")}</p>
      <Link
        href="/about"
        className="mt-4 inline-block text-foreground/60 transition-colors hover:text-foreground"
      >
        {t("aboutLink")}
      </Link>
    </section>
  );
}
