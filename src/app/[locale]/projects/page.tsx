import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";
import ProjectCard, { type Project } from "@/components/projects/ProjectCard";

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

export default function ProjectsPage() {
  const t = useTranslations("ProjectsPage");
  const projects = t.raw("projects") as unknown as Project[];

  return (
    <PageContainer>
      <h1 className="text-4xl font-black tracking-tight md:text-6xl">
        {t("title")}
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </PageContainer>
  );
}
