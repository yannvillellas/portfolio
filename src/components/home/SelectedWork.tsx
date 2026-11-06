import { getLocale, getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import ProjectRow from "@/components/projects/ProjectRow";
import { Link } from "@/i18n/navigation";
import { getProjects } from "@/data/projects";

export default async function SelectedWork() {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");
  const projects = getProjects(locale).filter((project) => project.featured);

  return (
    <section className="pb-2">
      <Container>
        <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
          <h2 className="m-0 text-lg font-semibold tracking-tight">
            {t("projectsTitle")}
          </h2>
          <Link
            href="/projects"
            className="text-sm text-mut transition-colors hover:text-ink"
          >
            {t("allProjects")}
          </Link>
        </div>

        {projects.map((project) => (
          <ProjectRow
            key={project.id}
            project={project}
            statusLabel={t("inProgress")}
          />
        ))}
      </Container>
    </section>
  );
}
