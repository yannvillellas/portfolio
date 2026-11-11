import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import ProjectRow from "@/components/projects/ProjectRow";
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
  const projects = getProjects(locale);

  return (
    <PageShell>
      <PageHeader
        title={t("title")}
        width="3xl"
        lead={t("description")}
      />

      <div className="mt-10 border-t border-line">
        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            statusLabel={t("inProgress")}
            headingLevel="h2"
          />
        ))}
      </div>
    </PageShell>
  );
}
