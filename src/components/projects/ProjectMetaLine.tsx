import type { Project } from "@/data/projects";

interface ProjectMetaLineProps {
  project: Project;
  statusLabel: string;
  gap?: "tight" | "wide";
}

const GAP = {
  tight: "gap-x-3.5",
  wide: "gap-x-4",
} as const;

export default function ProjectMetaLine({
  project,
  statusLabel,
  gap = "tight",
}: ProjectMetaLineProps) {
  return (
    <div className={`flex flex-wrap items-center gap-y-1 text-sm ${GAP[gap]}`}>
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
