export interface Screenshot {
  src: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  detail?: string;
  screenshots?: Screenshot[];
}

type Locale = "en" | "fr";

const data: Record<Locale, Project[]> = {
  en: [
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      description:
        "Self-hosted AI coaching system that turns training telemetry into LLM-validated workout adjustments, gated by explicit athlete approval. Built with Python, SQLite, Pydantic, and Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail:
        "Open Endurance Coach is a self-hosted, AI-driven coaching system that turns raw telemetry from Intervals.icu into validated training decisions. It combines a strict LLM analysis pipeline with Joe Friel's periodization principles and Andrew Coggan's power analytics to compare executed training against planned targets and current readiness.\n\nThe daily interface is a terminal chat. Free text triggers a fresh analysis when needed or answers conversationally from a cached data snapshot. Every calendar change is drafted under a strict schema and proposed to the athlete with the exact plan. Nothing is written to Intervals.icu without a literal yes.\n\nThe result is a coaching loop where the athlete controls every write. Invalid LLM output is retried and rejected, creates resolve by name and date, and a workout-only category guard ensures races and non-workout events are never touched. The same engine is exposed as a one-shot CLI with dry-run defaults for automation.",
      screenshots: [
        {
          src: "/images/projects/open-endurance-coach/1.png",
          caption: "Terminal chat with the coach",
        },
      ],
    },
    {
      id: "endurance-lab",
      title: "Endurance Lab",
      description:
        "Cross-platform mobile app normalizing training data from heterogeneous wearable ecosystems for sports science research.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail:
        "Endurance Lab is a cross-platform mobile app that solves vendor lock-in for athletes by centralizing and normalizing training data from heterogeneous wearable ecosystems including Garmin and Polar watches. The project was developed as a master\u2019s thesis at Politecnico di Torino in collaboration with sports science researchers who needed standardized data collection infrastructure.\n\nThe app was built with an MVVM architecture in Flutter, integrating interactive charts via fl_chart and GPS mapping through flutter_map. Authentication uses Firebase JWT tokens, and third-party API integration is handled through OAuth 2.0 deep-linking. The full development lifecycle was automated through CI/CD pipelines using GitHub Actions and Fastlane, deploying directly to Google Play.\n\nThe closed beta deployment validated the real-time data processing pipeline: over 1,000 activities, 2.7 million GPS points, and 1.6 million physiological samples were ingested and normalized. The application is now used as a data collection platform for ongoing sports science studies.",
      screenshots: [
        {
          src: "/images/projects/endurance-lab/1.png",
          caption: "Metrics dashboard with performance and health trends",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.png",
          caption: "Searchable activity list",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/3.png",
          caption: "Activity details with GPS route map and interactive charts",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "microservices-car-rental",
      title: "Car Rental Platform",
      description:
        "Distributed microservices system with transactional consistency via Kafka and the Outbox pattern. Built with Spring Boot, React, and Keycloak.",
      tags: ["Spring Boot", "Java", "React", "Kafka", "Keycloak", "PostgreSQL"],
      detail:
        "This distributed car rental platform was built as an engineering project applying test-driven development to a microservices architecture. The system handles fleet management, reservations, and payment processing with transactional consistency across services.\n\nBackend services were developed with Spring Boot and PostgreSQL, validated through JUnit and ephemeral Testcontainers environments. The payment module integrates PayPal through a resilient pipeline using Kafka for event streaming, change data capture for database synchronization, and the Outbox pattern to ensure exactly-once processing semantics across service boundaries. Security is centralized through Keycloak with OAuth 2.0 and OIDC, with dynamic request routing handled by Spring Cloud Gateway. The user interface was built with React.\n\nThe test suite runs end to end, covering the payment pipeline across service boundaries and catching regressions before they reach deployment. This project taught me a lot about distributed consistency and testing at scale.",
      screenshots: [
        {
          src: "/images/projects/car-rental/1.jpg",
          caption: "Fleet management interface",
        },
        {
          src: "/images/projects/car-rental/2.jpg",
          caption: "Staff booking overview",
        },
        {
          src: "/images/projects/car-rental/3.jpg",
          caption: "Customer reservation dashboard",
        },
      ],
    },
    {
      id: "mfieldtrip",
      title: "mFieldTrip",
      description:
        "Cross-platform mobile app replacing traditional geography field studies with interactive, self-guided GIS excursions.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail:
        "mFieldTrip enables remote geography field studies through interactive, self-guided excursions powered by open-source GIS data. Built during an internship at Athabasca University, which specializes in open and online learning, the app addresses the need for distance education students to complete field assignments without traveling to campus.\n\nThe interface was prototyped in Figma and developed as a cross-platform Flutter application for Android, iOS, and Web. Interactive maps combine flutter_map with QGIS2Web exports rendered through WebView, and a geospatial algorithm orders field trips by proximity. Four user roles are secured through Firebase Authentication and Cloud Firestore: students, professors, administrators, and guests, with public visibility controls for unauthenticated visitors.\n\nThe project resulted in a working mobile app used to support remote geography education at Athabasca University.",
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.png",
          caption: "Interactive map of all field trips",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.png",
          caption: "Field trip details",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/3.png",
          caption: "Embedded QGIS web map",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "portfolio",
      title: "This Portfolio",
      description:
        "Next.js 16 portfolio built with Tailwind CSS v4, i18n via next-intl, and a design token system for layout spacing.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      repoUrl: "https://github.com/yannvillellas/portfolio",
      detail:
        "This website is a personal engineering portfolio to showcase projects, skills, and professional background. It was developed from scratch with attention to clean architecture, bilingual support, and fast static generation.\n\nThe site is built with Next.js 16 using the App Router and Tailwind CSS v4. A design token system manages all layout spacing consistently across every page, from the navbar\u2019s chrome insets to the footer\u2019s mobile navigation clearance. Internationalization is handled through next-intl, with all content sourced from translation files rather than a CMS or database, enabling full static generation. The hero section features animated ambient gradient orbs built with CSS keyframes that create depth without JavaScript.\n\nThe entire site is statically generated at build time, serving instant page loads with zero client-side JavaScript for content rendering. It also doubles as my playground for design and web experiments.",
      screenshots: [
        {
          src: "/images/projects/portfolio/1.png",
          caption: "Home page with ambient gradient orbs",
        },
      ],
    },
  ],
  fr: [
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      description:
        "Système de coaching IA auto-hébergé qui transforme la télémétrie d'entraînement en ajustements validés par LLM, sous réserve d'une approbation explicite de l'athlète. Développé avec Python, SQLite, Pydantic et Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail:
        "Open Endurance Coach est un système de coaching piloté par IA, auto-hébergé, qui transforme la télémétrie brute d'Intervals.icu en décisions d'entraînement validées. Il combine un pipeline d'analyse LLM strict avec les principes de périodisation de Joe Friel et l'analyse de puissance d'Andrew Coggan pour comparer l'entraînement réalisé aux objectifs planifiés et à la condition du moment.\n\nL'interface quotidienne est un chat en terminal. Le texte libre déclenche une nouvelle analyse quand c'est nécessaire ou répond de manière conversationnelle à partir d'un instantané de données mis en cache. Chaque modification du calendrier est rédigée sous un schéma strict et proposée à l'athlète avec le plan exact. Rien n'est écrit sur Intervals.icu sans un « oui » explicite.\n\nLe résultat est une boucle de coaching où l'athlète contrôle chaque écriture. Les sorties LLM invalides sont réessayées puis rejetées, les créations sont résolues par nom et date, et une garde limite les mises à jour aux événements d'entraînement, sans jamais toucher aux courses. Le même moteur est exposé en CLI one-shot avec un mode dry-run par défaut.",
      screenshots: [
        {
          src: "/images/projects/open-endurance-coach/1.png",
          caption: "Chat en terminal avec le coach",
        },
      ],
    },
    {
      id: "endurance-lab",
      title: "Endurance Lab",
      description:
        "Application mobile cross-platform qui normalise les données d\u2019entraînement issues d\u2019écosystèmes de montres connectées hétérogènes pour la recherche en sciences du sport.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail:
        "Endurance Lab est une application mobile cross-platform qui résout le problème d\u2019enfermement propriétaire en centralisant et normalisant les données d\u2019entraînement issues d\u2019écosystèmes de montres connectées hétérogènes comme Garmin et Polar. Le projet a été développé dans le cadre d\u2019un mémoire d\u2019ingénierie au Politecnico di Torino, en collaboration avec des chercheurs en sciences du sport ayant besoin d\u2019une infrastructure de collecte de données standardisée.\n\nL\u2019application a été construite avec une architecture MVVM en Flutter, intégrant des graphiques interactifs via fl_chart et une cartographie GPS via flutter_map. L\u2019authentification utilise des jetons Firebase JWT, et l\u2019intégration d\u2019API tierces est gérée par OAuth 2.0 avec deep-linking. Le cycle de développement complet a été automatisé via des pipelines CI/CD avec GitHub Actions et Fastlane, jusqu\u2019au déploiement sur Google Play.\n\nLe déploiement en bêta fermée a validé le pipeline de traitement en temps réel : plus de 1 000 activités, 2,7 millions de points GPS et 1,6 million d\u2019échantillons physiologiques ont été ingérés et normalisés. L\u2019application est aujourd\u2019hui utilisée comme plateforme de collecte de données pour des études en sciences du sport.",
      screenshots: [
        {
          src: "/images/projects/endurance-lab/1.png",
          caption:
            "Tableau de bord de métriques avec tendances de performance et de santé",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.png",
          caption: "Liste des activités avec recherche",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/3.png",
          caption:
            "Détails d'une activité avec carte GPS et graphiques interactifs",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "microservices-car-rental",
      title: "Plateforme de location de véhicules",
      description:
        "Système distribué en microservices avec cohérence transactionnelle via Kafka et le pattern Outbox. Développé avec Spring Boot, React et Keycloak.",
      tags: ["Spring Boot", "Java", "React", "Kafka", "Keycloak", "PostgreSQL"],
      detail:
        "Cette plateforme de location de véhicules a été conçue comme un projet d\u2019ingénierie appliquant le développement piloté par les tests à une architecture microservices. Le système gère la gestion de flotte, les réservations et le traitement des paiements avec une cohérence transactionnelle entre services.\n\nLes services backend ont été développés avec Spring Boot et PostgreSQL, validés via JUnit et des environnements éphémères Testcontainers. Le module de paiement intègre PayPal via un pipeline résilient utilisant Kafka pour le streaming d\u2019événements, le CDC pour la synchronisation des bases de données et le pattern Outbox pour garantir une sémantique de traitement exactly-once entre les services. La sécurité est centralisée avec Keycloak (OAuth 2.0, OIDC) et le routage dynamique est assuré par Spring Cloud Gateway. L\u2019interface utilisateur a été construite avec React.\n\nLa suite de tests couvre le pipeline de paiement de bout en bout, à travers les frontières des services, et détecte les régressions avant déploiement. Ce projet m\u2019a beaucoup appris sur la cohérence distribuée et les tests à grande échelle.",
      screenshots: [
        {
          src: "/images/projects/car-rental/1.jpg",
          caption: "Interface de gestion de flotte",
        },
        {
          src: "/images/projects/car-rental/2.jpg",
          caption: "Vue d'ensemble des réservations",
        },
        {
          src: "/images/projects/car-rental/3.jpg",
          caption: "Tableau de réservation client",
        },
      ],
    },
    {
      id: "mfieldtrip",
      title: "mFieldTrip",
      description:
        "Application mobile cross-platform remplaçant les études de terrain traditionnelles par des excursions interactives exploitant des données SIG open-source.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail:
        "mFieldTrip permet de réaliser des études de terrain en géographie à distance via des excursions interactives exploitant des données SIG open-source. Développée lors d\u2019un stage à l\u2019Athabasca University, spécialisée dans l\u2019enseignement ouvert et à distance, l\u2019application répond au besoin des étudiants de réaliser leurs travaux de terrain sans se déplacer sur le campus.\n\nL\u2019interface a été prototypée sur Figma et développée en Flutter pour Android, iOS et Web. Les cartes interactives combinent flutter_map avec les exports QGIS2Web rendus via WebView, et un algorithme géospatial classe les excursions disponibles par proximité. Quatre rôles utilisateurs sont gérés via Firebase Authentication et Cloud Firestore : étudiants, professeurs, administrateurs et visiteurs, avec des contrôles de visibilité publique pour les utilisateurs non authentifiés.\n\nLe projet a abouti à une application mobile fonctionnelle utilisée pour soutenir l\u2019enseignement de la géographie à distance.",
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.png",
          caption: "Carte interactive de toutes les excursions",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.png",
          caption: "Détails d'une excursion",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/3.png",
          caption: "Carte web QGIS intégrée",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "portfolio",
      title: "Ce portfolio",
      description:
        "Portfolio développé avec Next.js 16, Tailwind CSS v4 et un système de tokens de design pour la mise en page. Internationalisation avec next-intl.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      repoUrl: "https://github.com/yannvillellas/portfolio",
      detail:
        "Ce site est un portfolio d\u2019ingénierie personnel conçu pour présenter des projets, des compétences et un parcours professionnel. Il a été développé intégralement avec une attention portée à l\u2019architecture propre, au support bilingue et à la génération statique rapide.\n\nLe site est construit avec Next.js 16 (App Router) et Tailwind CSS v4. Un système de tokens de design gère tous les espacements de mise en page de manière cohérente sur chaque page, des marges de la barre de navigation aux dégagements du pied de page pour la navigation mobile. L\u2019internationalisation est assurée par next-intl, avec l\u2019ensemble du contenu provenant des fichiers de traduction plutôt que d\u2019un CMS ou d\u2019une base de données, permettant une génération statique complète. La section d\u2019accueil présente des orbes à dégradé ambiant animés par keyframes CSS, créant de la profondeur sans JavaScript.\n\nL\u2019intégralité du site est générée statiquement au moment du build, offrant des chargements de page instantanés sans JavaScript côté client pour le rendu du contenu. Ce site me sert aussi de terrain d\u2019expérimentation pour le design et le web.",
      screenshots: [
        {
          src: "/images/projects/portfolio/1.png",
          caption: "Page d'accueil avec orbes à dégradé ambiant",
        },
      ],
    },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return data[locale];
}
