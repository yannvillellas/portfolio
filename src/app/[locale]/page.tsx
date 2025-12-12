import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="h-dvh w-full flex items-center justify-center overflow-hidden p-8">
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-foreground text-center">
        {t("title")}
      </h1>
    </div>
  );
}
