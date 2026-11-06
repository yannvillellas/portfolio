import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";

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
  const Heading = headingLevel;

  return (
    <Link
      href={`/projects/${project.id}`}
      aria-label={project.title}
      className="group flex items-center gap-6 border-b border-line py-5 transition-transform duration-250 hover:translate-x-2"
    >
      <div className="min-w-0 flex-1">
        <Heading className="m-0 text-xl font-semibold tracking-tight transition-colors duration-250 group-hover:text-accent">
          {project.title}
        </Heading>
        <div className="mt-1.5 flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm">
          {project.year !== undefined && (
            <span className="tabular-nums text-mut/60">{project.year}</span>
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
              {statusLabel}
            </span>
          )}
        </div>
        <p className="mt-2 max-w-xl text-sm leading-normal text-mut">
          {project.summary ?? project.description}
        </p>
      </div>

      <div className="relative h-21 w-33 ml-auto shrink-0 overflow-hidden rounded-md border border-line bg-panel">
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
