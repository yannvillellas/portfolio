import type { Project } from "@/data/projects";

interface ProjectMetaProps {
  project: Project;
  statusLabel: string;
}

export default function ProjectMeta({
  project,
  statusLabel,
}: ProjectMetaProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-3.5 gap-y-1 text-sm">
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
          {statusLabel}
        </span>
      )}
    </div>
  );
}
