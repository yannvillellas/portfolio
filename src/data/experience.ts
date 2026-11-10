export interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
}

type Locale = "en" | "fr";

const data: Record<Locale, ExperienceEntry[]> = {
  en: [
    {
      role: "Software Engineer (Master's thesis)",
      company: "Politecnico di Torino",
      location: "Turin, Italy",
      period: "Oct 2025\u2013Mar 2026",
      summary:
        "Built Endurance Lab to unify fragmented training data across wearable providers for athletes and sports-science researchers.",
      highlights: [
        "Delivered a device-agnostic **Flutter** client (MVVM) with **6** indicators, GPS route maps and **2** OAuth 2.0 integrations.",
        "Ran a **3.5**-month beta with **8** athletes (**1,001** activities, **2.7M** GPS points, **1.6M** samples), validating a research data foundation.",
        "Automated Android tests, signing, GitHub Release and Play beta with **GitHub Actions** and Fastlane, with **0** manual steps.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "Apr 2024\u2013Jul 2024",
      summary:
        "Co-built mFieldTrip for **40,000** distance-education students to complete self-guided GIS field trips, guided by GPS on site.",
      highlights: [
        "Developed a cross-platform **Flutter** app (Android, iOS, Web) with flutter_map, sorting excursions by proximity.",
        "Implemented **Firebase** Auth, Firestore and App Check, with **3** user roles (Amateur, Student, Professor) plus admin moderation.",
        "Delivered the app to Athabasca University, including field-trip upload (**QGIS2Web** ZIP, CSV POIs, images, PDF credits) and **7** filters.",
      ],
    },
    {
      role: "Tools and Application Security Intern",
      company:
        "Direction de l'Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "Jun 2022\u2013Jul 2022",
      summary:
        "Replaced slow, noisy Excel-based dependency triage with automated scanning for the Direction de l'Information L\u00e9gale et Administrative.",
      highlights: [
        "Integrated **OWASP Dependency-Check**, eliminating manual checks of direct and transitive dependencies and saving 15\u201330 min per day.",
        "Tuned the scanner with **8** XML rules, removing **8** recurring false positives so the team could focus on real vulnerabilities.",
        "Configured **3** **SEKOIA.IO** CTI profiles, with sector filtering and **150+** collected IOCs for targeted DILA monitoring.",
      ],
    },
  ],
  fr: [
    {
      role: "Ing\u00e9nieur Logiciel (M\u00e9moire)",
      company: "Politecnico di Torino",
      location: "Turin, Italie",
      period: "oct. 2025\u2013mars 2026",
      summary:
        "Cr\u00e9ation d'Endurance Lab pour unifier les donn\u00e9es fragment\u00e9es de multiples fournisseurs de wearables pour athl\u00e8tes et chercheurs.",
      highlights: [
        "Livraison d'un client **Flutter** ind\u00e9pendant des appareils (MVVM) avec **6** indicateurs, cartes GPS et 2 int\u00e9grations OAuth 2.0.",
        "Validation d'une b\u00eata de 3,5 mois (8 athl\u00e8tes, 1\u202f001 activit\u00e9s, 2,7 M GPS, 1,6 M \u00e9chantillons), socle de recherche.",
        "Automatisation des tests, de la signature et de la publication Play b\u00eata avec **GitHub Actions** et Fastlane, avec 0 \u00e9tape manuelle.",
      ],
    },
    {
      role: "Stagiaire Ing\u00e9nieur Logiciel",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "avr. 2024\u2013juil. 2024",
      summary:
        "Cr\u00e9ation de mFieldTrip en \u00e9quipe pour les 40\u202f000 \u00e9tudiants \u00e0 distance, avec des excursions SIG en autonomie, guid\u00e9es par GPS sur le terrain.",
      highlights: [
        "D\u00e9veloppement d'une application **Flutter** multiplateforme (Android, iOS, Web) avec tri des excursions par proximit\u00e9.",
        "Mise en place de **Firebase** Auth, Firestore et App Check, avec 3 r\u00f4les (Amateur, Student, Professor) et mod\u00e9ration admin.",
        "Livraison de l'application \u00e0 Athabasca University, avec l'import de ZIP **QGIS2Web**, POIs CSV, images et cr\u00e9dits PDF, et **7** filtres.",
      ],
    },
    {
      role: "Stagiaire Outillage et S\u00e9curit\u00e9 des Applications",
      company:
        "Direction de l\u2019Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "juin 2022\u2013juil. 2022",
      summary:
        "Remplacement d'un triage Excel lent et bruyant par un scan automatis\u00e9 pour la Direction de l'Information L\u00e9gale et Administrative.",
      highlights: [
        "Int\u00e9gration d'**OWASP Dependency-Check**, sans v\u00e9rifications manuelles des d\u00e9pendances directes et transitives, 15\u201330 min par jour.",
        "R\u00e9glage du scanner avec 8 r\u00e8gles XML, supprimant 8 faux positifs r\u00e9currents pour recentrer l'\u00e9quipe sur les vraies vuln\u00e9rabilit\u00e9s.",
        "Configuration de **3** profils **SEKOIA.IO** CTI, filtrage sectoriel et collecte de **150+** IOC pour une surveillance DILA cibl\u00e9e.",
      ],
    },
  ],
};

export function getExperiences(locale: string): ExperienceEntry[] {
  return data[locale === "fr" ? "fr" : "en"];
}
