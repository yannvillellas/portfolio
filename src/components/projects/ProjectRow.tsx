import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import Heading, { type Level } from "@/components/ui/Heading";
import ProjectMetaLine from "@/components/projects/ProjectMetaLine";

interface ProjectRowProps {
  project: Project;
  statusLabel: string;
  headingLevel?: Extract<Level, "h2" | "h3">;
}

export default function ProjectRow({
  project,
  statusLabel,
  headingLevel = "h3",
}: ProjectRowProps) {
  const screenshot = project.screenshots?.[0];

  return (
    <Link
      href={`/projects/${project.id}`}
      aria-label={project.title}
      className="group flex items-center gap-6 border-b border-line py-5 transition-transform duration-250 last:border-b-0 last:pb-0 hover:translate-x-2"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div>
          <Heading
            level={headingLevel}
            role="card"
            className="transition-colors duration-250 group-hover:text-accent"
          >
            {project.title}
          </Heading>
          <ProjectMetaLine project={project} statusLabel={statusLabel} />
        </div>
        <p className="max-w-xl text-sm leading-normal text-mut">
          {project.summary ?? project.description}
        </p>
      </div>

      <div className="relative ml-auto h-21 w-33 shrink-0 overflow-hidden rounded-md border border-line bg-panel">
        {screenshot && (
          <Image
            src={screenshot.src}
            alt={screenshot.caption ?? project.title}
            fill
            sizes="132px"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-104"
          />
        )}
      </div>
    </Link>
  );
}
