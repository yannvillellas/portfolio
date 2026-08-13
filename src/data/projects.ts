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
          caption: "Activity dashboard with training metrics",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.png",
          caption: "GPS route visualization",
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
        "This distributed car rental platform was built as an engineering project applying strict test-driven development practices to a microservices architecture. The system handles fleet management, reservations, and payment processing with guaranteed transactional consistency across services.\n\nBackend services were developed with Spring Boot and PostgreSQL, continuously validated through JUnit and ephemeral Testcontainers environments. The payment module integrates PayPal through a resilient pipeline using Kafka for event streaming, change data capture for database synchronization, and the Outbox pattern to ensure exactly-once processing semantics across service boundaries. Security is centralized through Keycloak with OAuth 2.0 and OIDC, with dynamic request routing handled by Spring Cloud Gateway. The user interface was built with React.\n\nThe result was zero transaction loss across distributed payment processes and elimination of critical regressions before deployment. The exhaustive test coverage produced a highly maintainable codebase.",
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
      tags: ["Flutter", "Firebase", "flutter_map", "QGIS"],
      detail:
        "mFieldTrip enables remote geography field studies through interactive, self-guided excursions powered by open-source GIS data. Built during an internship at Athabasca University, which specializes in open and online learning, the app addresses the need for distance education students to complete field assignments without traveling to campus.\n\nThe interface was prototyped in Figma and developed as a cross-platform Flutter application for Android and Web. Interactive maps combine flutter_map with QGIS2Web exports rendered through WebView, and a geospatial algorithm orders field trips by proximity. Four user roles are secured through Firebase Authentication and Cloud Firestore: students, professors, administrators, and guests, with public visibility controls for unauthenticated visitors.\n\nThe project delivered an end-to-end mobile solution for remote geography education at Athabasca University.",
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.png",
          caption: "Interactive field excursion map",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.png",
          caption: "Learning module with assessment",
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
        "This website is a personal engineering portfolio built to showcase projects, skills, and professional background. It was developed from scratch with a focus on clean architecture, bilingual support, and fast static generation.\n\nThe site is built with Next.js 16 using the App Router and Tailwind CSS v4. A design token system manages all layout spacing consistently across every page, from the navbar\u2019s chrome insets to the footer\u2019s mobile navigation clearance. Internationalization is handled through next-intl, with all content sourced from translation files rather than a CMS or database, enabling full static generation. The hero section features animated ambient gradient orbs built with CSS keyframes that create depth without JavaScript.\n\nThe entire site is statically generated at build time, serving instant page loads with zero client-side JavaScript for content rendering. Every design decision was made with long-term maintainability in mind.",
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
          caption: "Tableau de bord avec métriques d'entraînement",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.png",
          caption: "Visualisation de parcours GPS",
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
        "Cette plateforme de location de véhicules a été conçue comme un projet d\u2019ingénierie appliquant une méthodologie de développement piloté par les tests à une architecture microservices. Le système gère la gestion de flotte, les réservations et le traitement des paiements avec une cohérence transactionnelle garantie entre services.\n\nLes services backend ont été développés avec Spring Boot et PostgreSQL, validés en continu via JUnit et des environnements éphémères Testcontainers. Le module de paiement intègre PayPal via un pipeline résilient utilisant Kafka pour le streaming d\u2019événements, le CDC pour la synchronisation des bases de données et le pattern Outbox pour garantir une sémantique de traitement exactly-once entre les services. La sécurité est centralisée avec Keycloak (OAuth 2.0, OIDC) et le routage dynamique est assuré par Spring Cloud Gateway. L\u2019interface utilisateur a été construite avec React.\n\nLe résultat : zéro perte de transaction lors des processus de paiement distribués et élimination des régressions critiques avant déploiement. La couverture de test exhaustive a produit une base de code hautement maintenable.",
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
      tags: ["Flutter", "Firebase", "flutter_map", "QGIS"],
      detail:
        "mFieldTrip permet de réaliser des études de terrain en géographie à distance via des excursions interactives exploitant des données SIG open-source. Développée lors d\u2019un stage à l\u2019Athabasca University, spécialisée dans l\u2019enseignement ouvert et à distance, l\u2019application répond au besoin des étudiants de réaliser leurs travaux de terrain sans se déplacer sur le campus.\n\nL\u2019interface a été prototypée sur Figma et développée en Flutter pour Android et Web. Les cartes interactives combinent flutter_map avec les exports QGIS2Web rendus via WebView, et un algorithme géospatial classe les excursions disponibles par proximité. Quatre rôles utilisateurs sont gérés via Firebase Authentication et Cloud Firestore : étudiants, professeurs, administrateurs et visiteurs, avec des contrôles de visibilité publique pour les utilisateurs non authentifiés.\n\nLe projet a livré une solution mobile complète pour l\u2019enseignement de la géographie à distance.",
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.png",
          caption: "Carte interactive d'excursion",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.png",
          caption: "Module d'apprentissage avec évaluation",
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
        "Ce site est un portfolio d\u2019ingénierie personnel conçu pour présenter des projets, des compétences et un parcours professionnel. Il a été développé intégralement avec une attention portée à l\u2019architecture propre, au support bilingue et à la génération statique rapide.\n\nLe site est construit avec Next.js 16 (App Router) et Tailwind CSS v4. Un système de tokens de design gère tous les espacements de mise en page de manière cohérente sur chaque page, des marges de la barre de navigation aux dégagements du pied de page pour la navigation mobile. L\u2019internationalisation est assurée par next-intl, avec l\u2019ensemble du contenu provenant des fichiers de traduction plutôt que d\u2019un CMS ou d\u2019une base de données, permettant une génération statique complète. La section d\u2019accueil présente des orbes à dégradé ambiant animés par keyframes CSS, créant de la profondeur sans JavaScript.\n\nL\u2019intégralité du site est générée statiquement au moment du build, offrant des chargements de page instantanés sans JavaScript côté client pour le rendu du contenu. Chaque décision de conception a été prise dans une optique de maintenabilité à long terme.",
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
