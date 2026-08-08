import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import PageContainer from "@/components/PageContainer";
import Pill from "@/components/Pill";
import type { Project } from "@/components/projects/ProjectCard";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  const ids = [
    "endurance-lab",
    "microservices-car-rental",
    "mfieldtrip",
    "portfolio",
  ];
  return ["en", "fr"].flatMap((locale) => ids.map((id) => ({ locale, id })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale, id } = await params;
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });
  const projects = t.raw("projects") as unknown as Project[];
  const project = projects.find((p) => p.id === id);

  if (!project) return { title: t("title") };

  return { title: project.title, description: project.description };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { locale, id } = await params;
  const t = await getTranslations({
    locale,
    namespace: "ProjectsPage",
  });
  const projects = t.raw("projects") as unknown as Project[];
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const { detail, screenshots } = project;

  return (
    <PageContainer>
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-sm text-foreground/50 transition-colors hover:text-foreground"
      >
        <ArrowLeftIcon />
        {t("back")}
      </Link>

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        {project.title}
      </h1>

      <p className="mt-6 leading-relaxed text-foreground/75">
        {project.description}
      </p>

      {screenshots && screenshots.length > 0 && (
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {screenshots.map((src) => (
            <div
              key={src}
              className="flex aspect-16/10 items-center justify-center rounded-2xl bg-linear-to-br from-foreground/5 to-foreground/10"
            >
              <span className="text-sm text-foreground/20">{src}</span>
            </div>
          ))}
        </div>
      )}

      {detail && (
        <div className="mt-12 space-y-5">
          {detail.split("\n\n").map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="leading-relaxed text-foreground/75"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className="mt-8 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Pill key={tag} size="sm">
            {tag}
          </Pill>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/15 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <GitHubIcon />
            {t("source")}
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/15 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <ExternalLinkIcon />
            {t("live")}
          </a>
        )}
      </div>
    </PageContainer>
  );
}

function ArrowLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}
