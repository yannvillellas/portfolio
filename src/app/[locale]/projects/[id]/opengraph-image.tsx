import { routing } from "@/i18n/routing";
import { getProjects } from "@/data/projects";
import { OG_SIZE } from "@/lib/og";
import { projectOgImage } from "@/lib/og-project";

export const alt = "Projet · Yann Villellas";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({ locale, id: project.id })),
  );
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  return projectOgImage(getProjects(locale).find((item) => item.id === id));
}
