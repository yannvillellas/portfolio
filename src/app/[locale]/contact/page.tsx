import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";
import CardLink from "@/components/CardLink";
import {
  EmailIcon,
  ExternalLinkIcon,
  GitHubIcon,
  LinkedInIcon,
  SparkleIcon,
} from "@/components/icons/Icons";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <PageContainer>
      <h1>{t("title")}</h1>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        <ContactLink
          href="mailto:hi@yann.app"
          label={t("email")}
          value="hi@yann.app"
          icon={<EmailIcon />}
        />
        <ContactLink
          href="https://www.linkedin.com/in/yannvillellas/"
          label={t("linkedin")}
          value="yannvillellas"
          icon={<LinkedInIcon />}
        />
        <ContactLink
          href="https://github.com/yannvillellas"
          label={t("github")}
          value="yannvillellas"
          icon={<GitHubIcon />}
        />
      </div>

      <div className="mt-(--section-gap) border-t border-foreground/10 pt-10">
        <div className="flex items-center gap-3">
          <SparkleIcon />
          <h2 className="text-lg md:text-xl">{t("chatComingSoon")}</h2>
        </div>
        <p className="mt-2 text-foreground/75">{t("chatDescription")}</p>
      </div>
    </PageContainer>
  );
}

function ContactLink({
  href,
  label,
  value,
  icon,
}: {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <CardLink
      href={href}
      external
      bgHover
      className="relative flex flex-col justify-between p-6"
    >
      <span className="absolute top-5 right-5 text-foreground/25 transition-colors group-hover:text-foreground/50">
        <ExternalLinkIcon />
      </span>
      <div className="flex items-center gap-3">
        <span className="text-foreground/50">{icon}</span>
        <span className="type-caption">{label}</span>
      </div>
      <span className="mt-2 block text-lg md:text-xl">{value}</span>
    </CardLink>
  );
}
