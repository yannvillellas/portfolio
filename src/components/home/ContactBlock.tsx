import { getTranslations } from "next-intl/server";
import { email } from "@/lib/site";
import Heading from "@/components/ui/Heading";
import TextLink from "@/components/ui/TextLink";

export default async function ContactBlock() {
  const t = await getTranslations("HomePage");

  return (
    <div className="mt-14 flex flex-col gap-4 border-t border-line pt-14 pb-10 md:flex-row md:items-end md:justify-between">
      <Heading level="h2" size="block">
        {t("contactAvailability")}
      </Heading>
      <TextLink href={`mailto:${email}`} tone="accent" size="base">
        {email} <span aria-hidden="true">→</span>
      </TextLink>
    </div>
  );
}
