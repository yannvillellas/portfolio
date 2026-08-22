import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import PageContainer from "@/components/PageContainer";
import Pill from "@/components/Pill";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import StickyLink from "@/components/StickyLink";
import {
  ArrowLeftIcon,
  ExternalLinkIcon,
  GitHubIcon,
} from "@/components/icons/Icons";
import { getProjects } from "@/data/projects";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  const ids = [
    "endurance-lab",
    "microservices-car-rental",
    "mfieldtrip",
    "open-endurance-coach",
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
  const projects = getProjects(locale as "en" | "fr");
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
  const projects = getProjects(locale as "en" | "fr");
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const { detail, screenshots } = project;

  return (
    <PageContainer>
      <StickyLink href="/projects" icon={<ArrowLeftIcon />} label={t("back")} />

      <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
        {project.title}
      </h1>

      <p className="mt-6 leading-relaxed text-foreground/75">
        {project.description}
      </p>

      {screenshots && screenshots.length > 0 && (
        <div className="mt-10">
          <ScreenshotGallery screenshots={screenshots} />
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
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/20 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
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
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/20 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            <ExternalLinkIcon />
            {t("live")}
          </a>
        )}
      </div>
    </PageContainer>
  );
}
