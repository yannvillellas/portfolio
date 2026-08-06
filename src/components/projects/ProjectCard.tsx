import { Link } from "@/i18n/navigation";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  detail?: string;
  screenshots?: string[];
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group overflow-hidden rounded-2xl border border-foreground/10 bg-background-secondary/20 transition-colors hover:border-foreground/20"
    >
      <div className="flex aspect-square items-center justify-center bg-linear-to-br from-foreground/5 to-foreground/10">
        <span className="text-sm font-semibold text-foreground/20">
          {project.title}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block rounded-full border border-foreground/15 bg-background-secondary/40 px-3 py-1 text-xs text-foreground/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
