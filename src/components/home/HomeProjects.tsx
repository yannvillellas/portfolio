import { existsSync } from "fs";
import path from "path";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Pill from "@/components/Pill";
import { getProjects, type Project } from "@/data/projects";

function firstAvailableScreenshot(project: Project) {
  return project.screenshots?.find((s) =>
    existsSync(path.join(process.cwd(), "public", s.src)),
  );
}

export default function HomeProjects({ locale }: { locale: string }) {
  const t = useTranslations("ProjectsPage");
  const tHome = useTranslations("HomePage");
  const projects = getProjects(locale as "en" | "fr")
    .map((project) => ({
      project,
      screenshot: firstAvailableScreenshot(project),
    }))
    .filter((entry) => entry.screenshot)
    .slice(0, 3);

  return (
    <section className="relative z-10 mx-auto w-full max-w-5xl pb-(--content-footer-gap)">
      <h2>{t("title")}</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {projects.map(({ project, screenshot }) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className="group flex flex-col gap-4 no-underline"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-foreground/10 bg-background-secondary/30">
              {screenshot && (
                <Image
                  src={screenshot.src}
                  alt={screenshot.caption ?? project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
            </div>
            <div className="flex flex-col">
              <h3 className="transition-colors group-hover:text-accent">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <Pill key={tag}>{tag}</Pill>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/projects"
        className="mt-8 inline-block text-foreground/60 transition-colors hover:text-foreground"
      >
        {tHome("allProjects")}
      </Link>
    </section>
  );
}
