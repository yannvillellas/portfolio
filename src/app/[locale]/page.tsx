import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <nav>
        <ul>
          <li>
            <Link href="/about">{t("about")}</Link>
          </li>
          <li>
            <Link href="/projects">{t("projects")}</Link>
          </li>
          <li>
            <Link href="/contact">{t("contact")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
