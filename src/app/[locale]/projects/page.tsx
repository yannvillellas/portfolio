import { useTranslations } from "next-intl";

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");

  return (
    <div className="h-dvh w-full flex items-center justify-center">
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-foreground">
        {t("title")}
      </h1>
    </div>
  );
}
