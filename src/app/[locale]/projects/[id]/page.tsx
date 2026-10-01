import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getAlternates } from "@/i18n/alternates";
import PageContainer from "@/components/PageContainer";
import Pill from "@/components/Pill";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import { getImageSize } from "@/lib/imageSize";
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
    "kiruna-explorer",
    "open-endurance-coach",
    "portfolio",
  ];
  return ["en", "fr"].flatMap((locale) => ids.map((id) => ({ locale, id })));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage");
  const projects = getProjects(locale as "en" | "fr");
  const project = projects.find((p) => p.id === id);

  if (!project) return { title: t("title") };

  return {
    title: project.title,
    description: project.description,
    alternates: getAlternates(locale, `/projects/${id}`),
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage");
  const projects = getProjects(locale as "en" | "fr");
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const { detail, screenshots } = project;

  const sizedScreenshots = screenshots?.map((s) => {
    const size = getImageSize(s.src);
    return size ? { ...s, width: size.width, height: size.height } : s;
  });

  return (
    <PageContainer>
      <StickyLink href="/projects" icon={<ArrowLeftIcon />} label={t("back")} />

      <h1 className="mt-8">{project.title}</h1>

      <p className="text-foreground/75">{project.description}</p>

      {sizedScreenshots && sizedScreenshots.length > 0 && (
        <div className="mt-12">
          <ScreenshotGallery screenshots={sizedScreenshots} />
        </div>
      )}

      {detail && (
        <div className="mt-16">
          {detail.split("\n\n").map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-foreground/75">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Pill key={tag}>{tag}</Pill>
        ))}
      </div>

      <div className="mt-12 flex flex-wrap gap-4">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/20 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {t("source")}
            <GitHubIcon />
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-2xl border border-foreground/20 px-5 py-2 text-sm text-foreground/70 transition-colors hover:border-foreground/30 hover:text-foreground"
          >
            {t("live")}
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </PageContainer>
  );
}
