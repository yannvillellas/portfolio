import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/data/projects";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage");

  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(locale, "/projects"),
    openGraph: buildOpenGraph(locale, t("title"), t("description")),
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage");
  const projects = getProjects(locale as "en" | "fr");

  return (
    <PageContainer>
      <h1>{t("title")}</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
