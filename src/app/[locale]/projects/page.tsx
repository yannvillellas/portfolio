import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import Container from "@/components/layout/Container";
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
    <div className="pt-14 pb-24">
      <Container>
        <div className="max-w-3xl">
          <h1 className="m-0 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-mut">
            {t("description")}
          </p>
        </div>

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
      </Container>
    </div>
  );
}
