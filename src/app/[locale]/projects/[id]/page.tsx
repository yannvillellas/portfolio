import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/data/projects";
import type { Demo, Project, ProjectChapter } from "@/data/projects";
import { getImageSize } from "@/lib/imageSize";
import ChapterSequence from "@/components/project/ChapterSequence";
import ProjectArticle from "@/components/project/ProjectArticle";
import ProjectHeader from "@/components/project/ProjectHeader";

interface PageProps {
  params: Promise<{ locale: string; id: string }>;
}

export async function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({ locale, id: project.id })),
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations("ProjectsPage");
  const project = getProjects(locale).find((item) => item.id === id);

  if (!project) return { title: t("title") };

  return {
    title: project.title,
    description: project.description,
    alternates: getAlternates(locale, `/projects/${id}`),
    openGraph: buildOpenGraph(locale, project.title, project.description),
  };
}

function fallbackChapters(project: Project, demo: Demo): ProjectChapter[] {
  const captions = new Map<string, string>();
  for (const screenshot of project.screenshots ?? []) {
    if (screenshot.caption) captions.set(screenshot.src, screenshot.caption);
  }

  const views = demo.kind === "terminal" ? [] : demo.views;
  const chapters = views.map((view, index) => {
    const viewCaption =
      "caption" in view && typeof view.caption === "string"
        ? view.caption
        : captions.get(view.src);
    return {
      title: viewCaption ?? project.title,
      body: project.summary ?? project.description,
      view: index,
    };
  });

  return chapters.length > 0
    ? chapters
    : [
        {
          title: project.title,
          body: project.summary ?? project.description,
          view: 0,
        },
      ];
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const locale = await getLocale();
  const project = getProjects(locale).find((item) => item.id === id);

  if (!project) notFound();

  const demo = project.demo;
  const chapters = project.chapters ?? [];
  const sequenceChapters =
    demo && chapters.length === 0 ? fallbackChapters(project, demo) : chapters;
  const showSequence = demo !== undefined;

  return (
    <>
      <ProjectHeader project={project} />
      {demo && (
        <ChapterSequence
          chapters={sequenceChapters}
          demo={demo}
          label={project.title}
        />
      )}
      <ProjectArticle detail={project.detail} />
    </>
  );
}
