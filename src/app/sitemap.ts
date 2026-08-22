import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://yann.app";
  const locales = ["en", "fr"];
  const routes = ["", "/about", "/projects", "/contact"];
  const projectIds = [
    "endurance-lab",
    "microservices-car-rental",
    "mfieldtrip",
    "open-endurance-coach",
    "portfolio",
  ];

  const pages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
  );

  const projectPages = locales.flatMap((locale) =>
    projectIds.map((id) => ({
      url: `${baseUrl}/${locale}/projects/${id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  );

  return [...pages, ...projectPages];
}
