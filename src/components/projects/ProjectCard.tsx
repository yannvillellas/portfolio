import Image from "next/image";
import CardLink from "@/components/CardLink";
import Pill from "@/components/Pill";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const thumbnail = project.screenshots?.[0]?.src;

  return (
    <CardLink href={`/projects/${project.id}`} className="overflow-hidden">
      {thumbnail && (
        <div className="relative aspect-square">
          <Image
            src={thumbnail}
            alt={project.screenshots?.[0]?.caption ?? project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      )}

      <div className="p-6">
        <h3>{project.title}</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>
      </div>
    </CardLink>
  );
}
