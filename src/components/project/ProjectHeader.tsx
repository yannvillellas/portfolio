import { getTranslations } from "next-intl/server";
import Container from "@/components/layout/Container";
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
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
            {project.year !== undefined && (
              <span className="tabular-nums text-mut">{project.year}</span>
            )}
            {project.tags.map((tag) => (
              <span key={tag} className="text-mut">
                {tag}
              </span>
            ))}
            {project.status === "in-progress" && (
              <span className="inline-flex items-center gap-1.5 text-accent">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-accent"
                />
                {t("inProgress")}
              </span>
            )}
          </div>

          <h1 className="mt-4 mb-0 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-mut">
            {project.description}
          </p>

          {hasLinks && (
            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-mut underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
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
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-mut underline-offset-4 transition-colors hover:text-ink hover:underline"
                >
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
                </a>
              )}
            </div>
          )}
        </div>
      </Container>
    </header>
  );
}
