import React from "react";
import { useTranslations } from "next-intl";
import InteractiveBackground from "./InteractiveBackground";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <InteractiveBackground>
      <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-center text-foreground">
        {t("title")}
      </h1>
    </InteractiveBackground>
  );
}
