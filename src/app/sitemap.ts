import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/data/projects";

const baseUrl = "https://yann.app";

function languages(path: string) {
  return {
    en: `${baseUrl}/en${path}`,
    fr: `${baseUrl}/fr${path}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/projects", "/contact", "/legal"];

  const pages = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      alternates: { languages: languages(route) },
    })),
  );

  const projectPages = routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.id}`,
      alternates: {
        languages: languages(`/projects/${project.id}`),
      },
    })),
  );

  return [...pages, ...projectPages];
}
