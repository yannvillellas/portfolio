import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
import PageHeader from "@/components/layout/PageHeader";
import ProjectMeta from "@/components/projects/ProjectMeta";
import TextLink from "@/components/ui/TextLink";
import type { Project } from "@/data/projects";

interface ProjectHeaderProps {
  project: Project;
}

export default async function ProjectHeader({ project }: ProjectHeaderProps) {
  const t = await getTranslations("ProjectsPage");
  const hasLinks = Boolean(project.repoUrl || project.liveUrl);

  return (
    <header className="pt-14 pb-8">
      <Container>
        <PageHeader
          title={project.title}
          width="3xl"
          eyebrow={
            <ProjectMeta project={project} statusLabel={t("inProgress")} />
          }
          lead={project.description}
        >
          {hasLinks && (
            <div className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
              {project.repoUrl && (
                <TextLink href={project.repoUrl} newTab>
                  {t("source")}
                  <span className="sr-only">
                    {project.title}, {t("newTab")}
                  </span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </TextLink>
              )}
              {project.liveUrl && (
                <TextLink href={project.liveUrl} newTab>
                  {t("live")}
                  <span className="sr-only">
                    {project.title}, {t("newTab")}
                  </span>
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M7 17 17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </TextLink>
              )}
            </div>
          )}
        </PageHeader>
      </Container>
    </header>
  );
}
