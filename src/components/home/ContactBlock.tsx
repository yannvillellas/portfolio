import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { email } from "@/lib/site";
import Container from "@/components/layout/Container";
import Heading from "@/components/ui/Heading";
import TextLink from "@/components/ui/TextLink";

export default async function ContactBlock() {
  const t = await getTranslations("HomePage");

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-baseline md:justify-between">
          <Heading level="h2" variant="block">
            {t("contactAvailability")}
          </Heading>
          <TextLink href={`mailto:${email}`} tone="accent" size="base">
            {email}
            <ArrowUpRight
              size={12}
              aria-hidden="true"
              className="-translate-y-0.75 text-mut"
            />
          </TextLink>
        </div>
      </Container>
    </section>
  );
}
