import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yann.app";
  const routes = ["", "/about", "/projects", "/contact"];

  const pages = routing.locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
    })),
  );

  const projectPages = routing.locales.flatMap((locale) =>
    getProjects(locale).map((project) => ({
      url: `${baseUrl}/${locale}/projects/${project.id}`,
    })),
  );

  return [...pages, ...projectPages];
}
