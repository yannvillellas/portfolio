import { ogCard, ogStaticParams, size, alt, contentType } from "@/lib/og-card";
import en from "../../../../messages/en.json";
import fr from "../../../../messages/fr.json";

export { size, alt, contentType };
export const generateStaticParams = ogStaticParams;

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = locale === "fr" ? fr : en;

  return ogCard(
    messages.ProjectsPage.title,
    messages.ProjectsPage.description,
    messages.HomePage.role,
  );
}
