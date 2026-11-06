import { getTranslations } from "next-intl/server";
import { email } from "@/lib/site";

export default async function ContactBlock() {
  const t = await getTranslations("HomePage");

  return (
    <div className="mt-14 flex flex-col gap-4 border-t border-line pt-14 pb-10 md:flex-row md:items-end md:justify-between">
      <h2 className="m-0 text-2xl font-semibold tracking-tight lg:text-3xl">
        {t("contactAvailability")}
      </h2>
      <a
        href={`mailto:${email}`}
        className="text-base text-accent underline-offset-4 transition-colors hover:underline"
      >
        {email} <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
