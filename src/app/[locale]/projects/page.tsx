import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <p>
        <Link href="/">{t("back")}</Link>
      </p>
    </div>
  );
}
