import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yann.app";
  const locales = ["en", "fr"];
  const routes = ["", "/about", "/projects", "/contact"];
  const projectIds = [
    "endurance-lab",
    "microservices-car-rental",
    "mfieldtrip",
    "kiruna-explorer",
    "open-endurance-coach",
    "portfolio",
  ];

  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
    })),
  );

  const projectPages = locales.flatMap((locale) =>
    projectIds.map((id) => ({
      url: `${baseUrl}/${locale}/projects/${id}`,
    })),
  );

  return [...pages, ...projectPages];
}
