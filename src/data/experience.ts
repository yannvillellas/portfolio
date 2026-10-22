export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
}

type Locale = "en" | "fr";

const data: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      role: "Software Engineer (Master's thesis)",
      company: "Politecnico di Torino",
      location: "Turin, Italy",
      period: "Oct 2025\u2013Mar 2026",
      description:
        "Built Endurance Lab to unify fragmented training data across wearable providers for athletes and sports-science researchers, removing vendor lock-in and giving research teams a standardized collection layer. Delivered a device-agnostic Flutter client built on MVVM, with six health and performance indicators, GPS route maps, and two OAuth 2.0 provider integrations. Automated the Android release pipeline with GitHub Actions and Fastlane\u2014tests, build, signing, GitHub Release, and Play beta\u2014with zero manual signing or upload steps. Ran a 3.5-month closed beta with eight athletes that validated the platform as a research data foundation: 1,001 activities, 2.7 million GPS points, and 1.6 million physiological samples were collected and normalized.",
    },
    {
      role: "Software Engineer Intern",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "Apr 2024\u2013Jul 2024",
      description:
        "Co-built mFieldTrip at Athabasca University for 40,000 distance-education students, who needed to complete self-guided GIS field trips without travelling to the field. Developed a cross-platform Flutter app for Android, iOS, and Web, with flutter_map and QGIS2Web exports, plus a geospatial sort that orders excursions by proximity. Implemented Firebase Authentication, Firestore, and App Check around three user roles\u2014Amateur, Student, and Professor\u2014with a separate admin role for content moderation. Delivered the app to Athabasca University with field-trip upload (QGIS2Web ZIP, CSV POIs, images, PDF credits) and seven filters, giving the geography program a complete workflow for remote field assignments.",
    },
    {
      role: "Tools and Application Security Intern",
      company:
        "Direction de l'Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "Jul 2022\u2013Aug 2022",
      description:
        "Replaced a manual Excel-based dependency triage with automated scanning in the Java/Maven build pipeline at DILA. Integrated OWASP Dependency-Check to cover direct and transitive dependencies, eliminating the manual pass and saving 15\u201330 minutes per day. Tuned the scanner with eight XML suppression rules that removed eight recurring false positives, so the team could focus on real vulnerabilities. Configured three DILA-specific SEKOIA.IO CTI profiles to filter threat reports by sector and collect 150+ indicators of compromise for monitoring, turning a manual review into a targeted watchlist.",
    },
  ],
  fr: [
    {
      role: "Ing\u00e9nieur Logiciel (M\u00e9moire)",
      company: "Politecnico di Torino",
      location: "Turin, Italie",
      period: "Octobre 2025 \u2013 Mars 2026",
      description:
        "Conception d\u2019Endurance Lab pour unifier des donn\u00e9es d\u2019entra\u00eenement fragment\u00e9es entre fournisseurs de wearables, au b\u00e9n\u00e9fice des athl\u00e8tes et des chercheurs en sciences du sport, en supprimant l\u2019enfermement propri\u00e9taire et en fournissant une couche de collecte standardis\u00e9e. Livraison d\u2019un client Flutter ind\u00e9pendant des appareils, fond\u00e9 sur une architecture MVVM, avec six indicateurs de sant\u00e9 et de performance, des cartes GPS et deux int\u00e9grations OAuth 2.0. Automatisation de la publication Android avec GitHub Actions et Fastlane \u2014 tests, build, signature, GitHub Release et b\u00eata Play \u2014 sans aucune \u00e9tape manuelle de signature ou d\u2019envoi. Validation de la plateforme comme socle de recherche par une b\u00eata ferm\u00e9e de 3,5 mois avec huit athl\u00e8tes : 1\u00a0001 activit\u00e9s, 2,7 millions de points GPS et 1,6 million d\u2019\u00e9chantillons physiologiques collect\u00e9s et normalis\u00e9s.",
    },
    {
      role: "Stagiaire Ing\u00e9nieur Logiciel",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "Avril 2024 \u2013 Juillet 2024",
      description:
        "Cr\u00e9ation en \u00e9quipe de mFieldTrip \u00e0 l\u2019Athabasca University pour 40\u00a0000 \u00e9tudiants \u00e0 distance, qui devaient r\u00e9aliser des excursions SIG autonomes sans se d\u00e9placer sur le terrain. D\u00e9veloppement d\u2019une application Flutter multiplateforme (Android, iOS, Web) avec flutter_map et les exports QGIS2Web, ainsi qu\u2019un tri g\u00e9ospatial des excursions par proximit\u00e9. Mise en place de Firebase Authentication, Firestore et App Check autour de trois r\u00f4les utilisateurs \u2014 Amateur, Student et Professor \u2014 avec un r\u00f4le administrateur distinct pour la mod\u00e9ration des contenus. Livraison de l\u2019application \u00e0 l\u2019Athabasca University avec l\u2019import d\u2019excursions (ZIP QGIS2Web, POI CSV, images, cr\u00e9dits PDF) et sept filtres, offrant au programme de g\u00e9ographie un flux complet pour les travaux de terrain \u00e0 distance.",
    },
    {
      role: "Stagiaire Outillage et S\u00e9curit\u00e9 des Applications",
      company:
        "Direction de l\u2019Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "Juillet 2022 \u2013 Ao\u00fbt 2022",
      description:
        "Remplacement d\u2019un tri des d\u00e9pendances manuel, fond\u00e9 sur Excel, par un scan automatis\u00e9 dans le pipeline Java/Maven de la DILA. Int\u00e9gration d\u2019OWASP Dependency-Check pour couvrir les d\u00e9pendances directes et transitives, avec suppression des v\u00e9rifications manuelles et un gain de 15 \u00e0 30 minutes par jour. R\u00e9glage du scanner avec huit r\u00e8gles XML de suppression ayant \u00e9limin\u00e9 huit faux positifs r\u00e9currents, pour recentrer l\u2019\u00e9quipe sur les vraies vuln\u00e9rabilit\u00e9s. Configuration de trois profils SEKOIA.IO CTI propres \u00e0 la DILA, avec filtrage sectoriel des rapports de menace et collecte de plus de 150 IOC pour une surveillance cibl\u00e9e, transformant une revue manuelle en veille exploitable.",
    },
  ],
};

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return data[locale];
}
