import { getLocale, getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/layout/SectionHeader";
import ProjectRow from "@/components/projects/ProjectRow";
import { getProjects } from "@/data/projects";

export default async function SelectedWork() {
  const locale = await getLocale();
  const t = await getTranslations("HomePage");
  const projects = getProjects(locale).filter((project) => project.featured);

  return (
    <section className="pb-2">
      <Container>
        <SectionHeader
          title={t("projectsTitle")}
          href="/projects"
          linkLabel={t("allProjects")}
        />
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
