import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { getProjects } from "@/data/projects";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
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
