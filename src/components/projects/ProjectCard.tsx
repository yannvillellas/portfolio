import Image from "next/image";
import CardLink from "@/components/CardLink";
import Pill from "@/components/Pill";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.screenshots?.[0]?.src;

  return (
    <CardLink href={`/projects/${project.id}`} className="overflow-hidden">
      {thumbnail ? (
        <div className="relative aspect-square">
          <Image
            src={thumbnail}
            alt={project.screenshots?.[0]?.caption ?? project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      ) : (
        <div className="flex aspect-square items-center justify-center bg-linear-to-br from-foreground/5 to-foreground/10">
          <span className="text-sm font-semibold text-foreground/20">
            {project.title}
          </span>
        </div>
      )}

      <div className="p-6">
        <h3 className="text-lg font-bold text-foreground">{project.title}</h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>
    </CardLink>
  );
}
