import { getTranslations } from "next-intl/server";
import { email } from "@/lib/site";
import Heading from "@/components/ui/Heading";
import TextLink from "@/components/ui/TextLink";

export default async function ContactBlock() {
  const t = await getTranslations("HomePage");

  return (
    <div className="mt-16 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-end md:justify-between">
      <Heading level="h2" role="block">
        {t("contactAvailability")}
      </Heading>
      <TextLink href={`mailto:${email}`} tone="accent" size="base">
        {email} <span aria-hidden="true">→</span>
      </TextLink>
    </div>
  );
}
