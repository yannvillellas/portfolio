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
        "Designed and built Endurance Lab, a cross-platform mobile app that normalizes training data from heterogeneous wearable ecosystems (Garmin, Polar) to solve vendor lock-in and provide standardized data collection for sports science research. Implemented MVVM architecture with interactive charts (fl_chart), GPS mapping (flutter_map), Firebase JWT authentication, and OAuth 2.0 deep-linking. Automated full lifecycle (CI/CD via GitHub Actions and Fastlane) through Google Play deployment. Achieved real-time processing of 1,000+ activities, 2.7 million GPS points, and 1.6 million physiological samples in closed beta.",
    },
    {
      role: "Software Engineer Intern",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "Apr 2024\u2013Jul 2024",
      description:
        "Built mFieldTrip, a cross-platform mobile app developed at Athabasca University that replaces traditional geography field studies with interactive, self-guided excursions using open-source GIS data. Designed the interface in Figma and developed for Android, iOS, and Web using Flutter. Integrated interactive maps (flutter_map, QGIS2Web exports) and implemented a geospatial sorting algorithm based on Euclidean distance. Secured the app with Firebase Authentication and Cloud Firestore, managing four distinct user roles with content moderation.",
    },
    {
      role: "Tools & Application Security Intern",
      company:
        "Direction de l'Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "Jul 2022\u2013Aug 2022",
      description:
        "Integrated software composition analysis into the Java/Maven build pipeline and wrote suppression rules to reduce OWASP Dependency-Check false positives. Helped configure the SEKOIA.IO threat intelligence platform to qualify and categorize security alerts.",
    },
  ],
  fr: [
    {
      role: "Ing\u00e9nieur Logiciel (M\u00e9moire)",
      company: "Politecnico di Torino",
      location: "Turin, Italie",
      period: "Octobre 2025 \u2013 Mars 2026",
      description:
        "Conception et d\u00e9veloppement d\u2019Endurance Lab, une application mobile cross-platform qui centralise et normalise les donn\u00e9es d\u2019entra\u00eenement issues d\u2019\u00e9cosyst\u00e8mes de montres connect\u00e9es h\u00e9t\u00e9rog\u00e8nes (Garmin, Polar) pour r\u00e9soudre le probl\u00e8me d\u2019enfermement propri\u00e9taire et fournir une infrastructure de collecte standardis\u00e9e pour la recherche en sciences du sport. Mise en \u0153uvre d\u2019une architecture MVVM avec des graphiques interactifs (fl_chart), une cartographie GPS (flutter_map), une authentification Firebase JWT et l\u2019int\u00e9gration de flux OAuth 2.0 via deep-linking. Automatisation compl\u00e8te du cycle de vie (CI/CD via GitHub Actions et Fastlane) jusqu\u2019au d\u00e9ploiement Google Play. Traitement en temps r\u00e9el valid\u00e9 en b\u00eata ferm\u00e9e : plus de 1\u00a0000 activit\u00e9s, 2,7 millions de points GPS et 1,6 million d\u2019\u00e9chantillons physiologiques.",
    },
    {
      role: "Stagiaire Ing\u00e9nieur Logiciel",
      company: "Athabasca University",
      location: "Edmonton, Canada",
      period: "Avril 2024 \u2013 Juillet 2024",
      description:
        "D\u00e9veloppement de mFieldTrip, une application mobile cross-platform d\u00e9velopp\u00e9e \u00e0 l\u2019Athabasca University, destin\u00e9e aux \u00e9tudes de terrain pour l\u2019enseignement de la g\u00e9ographie \u00e0 distance. Prototypage de l\u2019interface sur Figma et d\u00e9veloppement cross-platform (Android, iOS, Web). Int\u00e9gration de cartes interactives (flutter_map, exports QGIS2Web via WebView) et impl\u00e9mentation d\u2019un algorithme de tri g\u00e9ospatial bas\u00e9 sur le calcul de la distance euclidienne. S\u00e9curisation via Firebase Authentication et Cloud Firestore avec contr\u00f4le d\u2019acc\u00e8s selon quatre r\u00f4les utilisateurs distincts et mod\u00e9ration des contenus.",
    },
    {
      role: "Stagiaire S\u00e9curit\u00e9 Applicative & Outillage",
      company:
        "Direction de l\u2019Information L\u00e9gale et Administrative (DILA)",
      location: "Paris, France",
      period: "Juillet 2022 \u2013 Ao\u00fbt 2022",
      description:
        "Int\u00e9gration de l\u2019analyse de composition logicielle (SCA) dans le pipeline Java/Maven et r\u00e9daction de r\u00e8gles de suppression pour r\u00e9duire les faux positifs d\u2019OWASP Dependency-Check. Participation \u00e0 la configuration de la plateforme de threat intelligence SEKOIA.IO pour qualifier et cat\u00e9goriser les alertes de s\u00e9curit\u00e9.",
    },
  ],
};

export function getExperiences(locale: Locale): ExperienceEntry[] {
  return data[locale];
}
