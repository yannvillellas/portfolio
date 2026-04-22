import { useTranslations } from "next-intl";
import Background from "@/components/hero/Background";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <Background>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-center text-foreground">
        {t("title")}
      </h1>
    </Background>
  );
}
