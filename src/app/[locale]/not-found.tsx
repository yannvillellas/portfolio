import { getTranslations } from "next-intl/server";
import NotFoundContent from "@/components/layout/NotFoundContent";
import TextLink from "@/components/ui/TextLink";

export default async function LocaleNotFound() {
  const t = await getTranslations("NotFound");

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col justify-center px-6 py-16">
      <NotFoundContent
        copy={{
          eyebrow: t("eyebrow"),
          title: t("title"),
          description: t("description"),
        }}
        link={
          <TextLink href="/" tone="ink">
            {t("back")}
          </TextLink>
        }
      />
    </div>
  );
}
