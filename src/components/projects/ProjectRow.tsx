import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";
import Heading from "@/components/ui/Heading";
import ProjectMeta from "@/components/projects/ProjectMeta";

interface ProjectRowProps {
  project: Project;
  statusLabel: string;
  headingLevel?: "h2" | "h3";
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
      className="group flex items-center gap-6 border-b border-line py-5 transition-transform duration-250 hover:translate-x-2"
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <div className="flex flex-col gap-1.5">
          <Heading
            level={headingLevel}
            size="card"
            className="transition-colors duration-250 group-hover:text-accent"
          >
            {project.title}
          </Heading>
          <ProjectMeta project={project} statusLabel={statusLabel} />
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
