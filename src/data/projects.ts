export interface Screenshot {
  src: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
  width?: number;
  height?: number;
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
      id: "mpp-autopilot",
      title: "MPP Autopilot",
      description:
        "Autonomous Rust service that predicts Ligue 1 scorelines for a friends' Mon Petit Prono league, choosing the exact score that maximizes expected points from Elo ratings and MPP quotations.",
      tags: ["Rust", "Docker"],
      repoUrl: "https://github.com/yannvillellas/mpp-autopilot",
      screenshots: [
        {
          src: "/images/projects/mpp-autopilot/1.png",
          caption: "Ligue 1 fixtures and MPP quotations, fetched once per day",
          orientation: "landscape",
        },
        {
          src: "/images/projects/mpp-autopilot/2.png",
          caption:
            "Architecture: one daily MPP snapshot, three triggers, persistent state",
          orientation: "landscape",
        },
      ],
      detail:
        "Built MPP Autopilot to automate a weekly Ligue 1 prediction routine for a friends' Mon Petit Prono (MPP) league. The service takes one daily snapshot of fixtures and quotations, converts ClubElo ratings into home and away expected goals with a Poisson model and a Dixon-Coles correction, then builds a 7\u00d77 score matrix to select the score with the highest expected points.\n\nIt schedules three submission triggers (publication, T-60, and T-5), keeps persistent state that prevents completed triggers from being replayed across restarts, and enables dry-run by default.\n\nThe result is a weekly routine that runs without manual intervention: 57 integration tests cover the trigger and state paths, and the service ships as a single stripped Rust binary in a distroless image, deployed with Docker Compose on Debian.",
    },
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      description:
        "Self-hosted LLM coaching system that turns training telemetry into validated workout adjustments, gated by explicit athlete approval. Built with Python, SQLite, Pydantic, and Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail:
        "Built Open Endurance Coach as an open-source, provider-agnostic alternative to proprietary AI coaches at \u20ac5/month and human coaching at \u20ac200+, because generic training plans do not adapt to an athlete's actual telemetry. The system reads training from Intervals.icu and compares executed work with planned targets, Joe Friel's periodization principles, Andrew Coggan's power analytics, and current readiness before proposing any change.\n\nThe LLM pipeline is written in Python and enforces a strict JSON schema on every model response. Invalid output is retried and then rejected, calendar changes are resolved by name and date, and a workout-only guard prevents races and non-workout events from being touched. Every write requires a literal yes from the athlete; the same engine is exposed as a one-shot CLI with dry-run defaults for automation.\n\nThe codebase is covered by more than 1,000 tests with a 95% coverage threshold. A personal pilot with one athlete across 30+ workouts produced zero unapproved writes.",
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
        "Cross-platform mobile app that normalizes training data from heterogeneous wearable ecosystems for sports-science research.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail:
        "Built Endurance Lab, a cross-platform mobile app that removes vendor lock-in for athletes by centralizing and normalizing training data from heterogeneous wearable ecosystems. The project was developed as a master's thesis at Politecnico di Torino with sports-science researchers who needed standardized data collection infrastructure.\n\nThe client is a device-agnostic Flutter application built on MVVM, with six health and performance indicators, interactive charts via fl_chart, GPS route mapping through flutter_map, Firebase JWT authentication, and two OAuth 2.0 provider integrations. The Android release pipeline was automated end to end with GitHub Actions and Fastlane, covering tests, build, signing, GitHub Release, and Play beta, with zero manual signing or upload steps.\n\nA 3.5-month closed beta with eight athletes validated the platform as a research data foundation: 1,001 activities, 2.7 million GPS points, and 1.6 million physiological samples were collected and normalized.",
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
      tags: [
        "Spring Boot",
        "Kotlin",
        "React",
        "Kafka",
        "Keycloak",
        "PostgreSQL",
      ],
      detail:
        "Co-built a distributed car-rental platform as a team engineering project, covering fleet management, reservations, and payments across service boundaries. The goal was to keep reservations and payments consistent when several services write concurrently.\n\nOwned the reservation and payment services, built with Kotlin and Spring Boot on PostgreSQL. PayPal payments flow through Kafka and the Outbox pattern for at-least-once delivery and idempotent processing, while Debezium CDC keeps service databases synchronized. Keycloak centralizes OIDC/RBAC for four roles across the backend services and the React frontend via JWT, and Spring Cloud Gateway handles request routing.\n\nThe platform delivers 42 REST endpoints across four Kotlin/Spring Boot services, with 75.8% coverage measured through Testcontainers-backed tests. That test suite exercises the payment pipeline across service boundaries, catching regressions before deployment.",
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
        "Cross-platform mobile app that replaces traditional geography field studies with interactive, self-guided GIS excursions.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail:
        "Co-built mFieldTrip at Athabasca University, which specializes in open and online learning, for 40,000 distance-education students who needed to complete geography field assignments without travelling to campus. The app replaces traditional field studies with interactive, self-guided excursions built on open-source GIS data.\n\nThe client is a cross-platform Flutter app for Android, iOS, and Web. Interactive maps combine flutter_map with QGIS2Web exports rendered through WebView, and a geospatial sort orders excursions by proximity. Firebase Authentication, Firestore, and App Check secure the platform around three user roles (Amateur, Student, and Professor), with a separate admin role for content moderation.\n\nThe app was delivered to Athabasca University for its 40,000-student distance program, with field-trip upload (QGIS2Web ZIP, CSV POIs, images, PDF credits) and seven filters, giving the geography program a complete workflow for remote field assignments.",
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
      id: "kiruna-explorer",
      title: "Kiruna Explorer",
      description:
        "Collaborative geospatial platform mapping Kiruna's mining-driven relocation and its local impacts. Built with Node.js, Express, React, and SQLite.",
      tags: ["Node.js", "Express", "React", "SQLite", "Docker"],
      repoUrl:
        "https://github.com/yannvillellas/polito-se2-24-20-Kiruna-eXplorer",
      detail:
        "Co-built Kiruna Explorer, a collaborative geospatial platform that documents Kiruna's mining-driven relocation and maps its local impacts as the city prepares to become European Capital of Culture 2029. The project was developed with the City of Kiruna and Politecnico di Torino so residents and planners could follow how political, technical, and spatial decisions reshaped the city.\n\nThe platform models 20 documents across five types and six stakeholder groups, from LKAB to citizens, and maps relocation impacts by area. Its backend is a 33-route Node.js/Express API on SQLite, while the React frontend uses Leaflet and Turf for thematic maps and D3 for data visualization. Role-based access covers two roles plus guest access, and the platform includes nine areas and sixteen associations.\n\nThe application is containerized with Docker and covered by 17 Jest tests and six Cypress end-to-end tests. Development followed a continuous testing workflow with a layered Express architecture, session-based authentication, input validation, and file uploads.",
      screenshots: [
        {
          src: "/images/projects/kiruna-explorer/map.png",
          caption: "Interactive thematic map",
        },
        {
          src: "/images/projects/kiruna-explorer/listOfDocuments.png",
          caption: "List of documents",
        },
        {
          src: "/images/projects/kiruna-explorer/documentVisualization.png",
          caption: "Document visualization",
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
        "Built this portfolio as a personal engineering site and a playground for design and web experiments, with a focus on clean architecture, bilingual content, and static generation.\n\nThe site uses Next.js 16 with the App Router and Tailwind CSS v4. A design token system manages layout spacing consistently across every page, from the navbar's chrome insets to the footer's mobile navigation clearance. Internationalization is handled through next-intl, with all content sourced from translation files rather than a CMS or database, enabling full static generation. The hero section features animated ambient gradient orbs built with CSS keyframes that create depth without JavaScript.\n\nThe entire site is statically generated at build time, serving pre-rendered pages with zero client-side JavaScript for content rendering.",
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
      id: "mpp-autopilot",
      title: "MPP Autopilot",
      description:
        "Service Rust autonome qui pr\u00e9dit les scores de Ligue 1 pour une ligue Mon Petit Prono entre amis, en choisissant le score exact qui maximise les points attendus \u00e0 partir des ratings Elo et des cotes MPP.",
      tags: ["Rust", "Docker"],
      repoUrl: "https://github.com/yannvillellas/mpp-autopilot",
      screenshots: [
        {
          src: "/images/projects/mpp-autopilot/1.png",
          caption:
            "Rencontres de Ligue 1 et cotes MPP, r\u00e9cup\u00e9r\u00e9es une fois par jour",
          orientation: "landscape",
        },
        {
          src: "/images/projects/mpp-autopilot/2.png",
          caption:
            "Architecture : un instantan\u00e9 MPP quotidien, trois d\u00e9clencheurs, \u00e9tat persistant",
          orientation: "landscape",
        },
      ],
      detail:
        "Cr\u00e9ation de MPP Autopilot pour automatiser une routine hebdomadaire de pronostics Ligue 1 pour une ligue Mon Petit Prono (MPP) entre amis. Le service prend un instantan\u00e9 quotidien des rencontres et des cotes, convertit les ratings ClubElo en buts attendus \u00e0 domicile et \u00e0 l\u2019ext\u00e9rieur avec un mod\u00e8le de Poisson et une correction Dixon-Coles, puis construit une matrice de scores 7\u00d77 pour retenir le score qui maximise les points attendus.\n\nLe service planifie trois d\u00e9clencheurs de soumission (publication, T-60 et T-5), conserve un \u00e9tat persistant qui emp\u00eache le rejeu des d\u00e9clencheurs ex\u00e9cut\u00e9s apr\u00e8s red\u00e9marrage, et active le mode dry-run par d\u00e9faut.\n\nLe r\u00e9sultat est une routine hebdomadaire qui tourne sans intervention manuelle : 57 tests d\u2019int\u00e9gration couvrent les d\u00e9clencheurs et l\u2019\u00e9tat, et le service est livr\u00e9 sous forme d\u2019un binaire Rust unique all\u00e9g\u00e9 dans une image distroless, d\u00e9ploy\u00e9e avec Docker Compose sur Debian.",
    },
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      description:
        "Syst\u00e8me de coaching LLM auto-h\u00e9berg\u00e9 qui transforme la t\u00e9l\u00e9m\u00e9trie d\u2019entra\u00eenement en ajustements valid\u00e9s, sous r\u00e9serve d\u2019une approbation explicite de l\u2019athl\u00e8te. D\u00e9velopp\u00e9 avec Python, SQLite, Pydantic et Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail:
        "Cr\u00e9ation d\u2019Open Endurance Coach comme alternative open-source et agnostique du fournisseur LLM aux coachs IA propri\u00e9taires \u00e0 5\u00a0\u20ac/mois et au coaching humain \u00e0 plus de 200\u00a0\u20ac, parce que les plans d\u2019entra\u00eenement g\u00e9n\u00e9riques ne s\u2019adaptent pas \u00e0 la t\u00e9l\u00e9m\u00e9trie r\u00e9elle d\u2019un athl\u00e8te. Le syst\u00e8me lit l\u2019entra\u00eenement depuis Intervals.icu et compare le travail r\u00e9alis\u00e9 aux objectifs planifi\u00e9s, aux principes de p\u00e9riodisation de Joe Friel, \u00e0 l\u2019analyse de puissance d\u2019Andrew Coggan et \u00e0 la condition du moment avant de proposer un changement.\n\nLe pipeline LLM est \u00e9crit en Python et impose un sch\u00e9ma JSON strict \u00e0 chaque r\u00e9ponse du mod\u00e8le. Les sorties invalides sont r\u00e9essay\u00e9es puis rejet\u00e9es, les modifications de calendrier sont r\u00e9solues par nom et par date, et une garde limite les \u00e9critures aux s\u00e9ances d\u2019entra\u00eenement, sans jamais toucher aux courses. Chaque \u00e9criture exige un \u00ab\u00a0oui\u00a0\u00bb explicite de l\u2019athl\u00e8te ; le m\u00eame moteur est expos\u00e9 en CLI one-shot avec un mode dry-run par d\u00e9faut pour l\u2019automatisation.\n\nLe code est couvert par plus de 1\u00a0000 tests avec un seuil de couverture de 95\u00a0%. Un pilote personnel avec un athl\u00e8te sur plus de 30 s\u00e9ances a produit z\u00e9ro \u00e9criture non approuv\u00e9e.",
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
        "Application mobile multiplateforme qui normalise les donn\u00e9es d\u2019entra\u00eenement issues d\u2019\u00e9cosyst\u00e8mes de wearables h\u00e9t\u00e9rog\u00e8nes pour la recherche en sciences du sport.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail:
        "Cr\u00e9ation d\u2019Endurance Lab, une application mobile multiplateforme qui l\u00e8ve l\u2019enfermement propri\u00e9taire en centralisant et normalisant les donn\u00e9es d\u2019entra\u00eenement issues d\u2019\u00e9cosyst\u00e8mes de wearables h\u00e9t\u00e9rog\u00e8nes. Le projet a \u00e9t\u00e9 d\u00e9velopp\u00e9 dans le cadre d\u2019un m\u00e9moire au Politecnico di Torino avec des chercheurs en sciences du sport ayant besoin d\u2019une infrastructure de collecte standardis\u00e9e.\n\nLe client est une application Flutter ind\u00e9pendante des appareils, fond\u00e9e sur une architecture MVVM, avec six indicateurs de sant\u00e9 et de performance, des graphiques interactifs via fl_chart, une cartographie GPS via flutter_map, une authentification Firebase JWT et deux int\u00e9grations OAuth 2.0. La publication Android est automatis\u00e9e de bout en bout avec GitHub Actions et Fastlane, couvrant les tests, le build, la signature, la GitHub Release et la b\u00eata Play, sans aucune \u00e9tape manuelle de signature ou d\u2019envoi.\n\nUne b\u00eata ferm\u00e9e de 3,5 mois avec huit athl\u00e8tes a valid\u00e9 la plateforme comme socle de recherche : 1\u00a0001 activit\u00e9s, 2,7 millions de points GPS et 1,6 million d\u2019\u00e9chantillons physiologiques collect\u00e9s et normalis\u00e9s.",
      screenshots: [
        {
          src: "/images/projects/endurance-lab/1.png",
          caption:
            "Tableau de bord de m\u00e9triques avec tendances de performance et de sant\u00e9",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.png",
          caption: "Liste des activit\u00e9s avec recherche",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/3.png",
          caption:
            "D\u00e9tails d\u2019une activit\u00e9 avec carte GPS et graphiques interactifs",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "microservices-car-rental",
      title: "Plateforme de location de v\u00e9hicules",
      description:
        "Syst\u00e8me distribu\u00e9 en microservices avec coh\u00e9rence transactionnelle via Kafka et le pattern Outbox. D\u00e9velopp\u00e9 avec Spring Boot, React et Keycloak.",
      tags: [
        "Spring Boot",
        "Kotlin",
        "React",
        "Kafka",
        "Keycloak",
        "PostgreSQL",
      ],
      detail:
        "Cr\u00e9ation en \u00e9quipe d\u2019une plateforme de location de v\u00e9hicules distribu\u00e9e, couvrant la gestion de flotte, les r\u00e9servations et les paiements entre services. L\u2019objectif \u00e9tait de garantir la coh\u00e9rence des r\u00e9servations et des paiements lorsque plusieurs services \u00e9crivent simultan\u00e9ment.\n\nPrise en charge des services de r\u00e9servation et de paiement, d\u00e9velopp\u00e9s avec Kotlin et Spring Boot sur PostgreSQL. Les paiements PayPal passent par Kafka et le pattern Outbox pour une livraison au moins une fois et un traitement idempotent, tandis que Debezium CDC synchronise les bases de donn\u00e9es des services. Keycloak centralise l\u2019OIDC/RBAC pour quatre r\u00f4les sur les services backend et le frontend React via JWT, et Spring Cloud Gateway g\u00e8re le routage des requ\u00eates.\n\nLa plateforme expose 42 endpoints REST r\u00e9partis sur quatre services Kotlin/Spring Boot, avec 75,8\u00a0% de couverture mesur\u00e9e par des tests adoss\u00e9s \u00e0 Testcontainers. Cette suite de tests couvre le pipeline de paiement de bout en bout, \u00e0 travers les fronti\u00e8res des services, et d\u00e9tecte les r\u00e9gressions avant d\u00e9ploiement.",
      screenshots: [
        {
          src: "/images/projects/car-rental/1.jpg",
          caption: "Interface de gestion de flotte",
        },
        {
          src: "/images/projects/car-rental/2.jpg",
          caption: "Vue d\u2019ensemble des r\u00e9servations",
        },
        {
          src: "/images/projects/car-rental/3.jpg",
          caption: "Tableau de r\u00e9servation client",
        },
      ],
    },
    {
      id: "mfieldtrip",
      title: "mFieldTrip",
      description:
        "Application mobile multiplateforme qui remplace les \u00e9tudes de terrain traditionnelles par des excursions interactives et autonomes exploitant des donn\u00e9es SIG open-source.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail:
        "Cr\u00e9ation en \u00e9quipe de mFieldTrip \u00e0 l\u2019Athabasca University, sp\u00e9cialis\u00e9e dans l\u2019enseignement ouvert et \u00e0 distance, pour 40\u00a0000 \u00e9tudiants qui devaient r\u00e9aliser leurs travaux de terrain en g\u00e9ographie sans se d\u00e9placer sur le campus. L\u2019application remplace les \u00e9tudes de terrain traditionnelles par des excursions interactives et autonomes exploitant des donn\u00e9es SIG open-source.\n\nLe client est une application Flutter multiplateforme pour Android, iOS et Web. Les cartes interactives combinent flutter_map et les exports QGIS2Web rendus dans une WebView, et un tri g\u00e9ospatial classe les excursions par proximit\u00e9. Firebase Authentication, Firestore et App Check s\u00e9curisent la plateforme autour de trois r\u00f4les utilisateurs (Amateur, Student et Professor), avec un r\u00f4le administrateur distinct pour la mod\u00e9ration des contenus.\n\nL\u2019application a \u00e9t\u00e9 livr\u00e9e \u00e0 l\u2019Athabasca University pour son programme \u00e0 distance de 40\u00a0000 \u00e9tudiants, avec l\u2019import d\u2019excursions (ZIP QGIS2Web, POI CSV, images, cr\u00e9dits PDF) et sept filtres, offrant au programme de g\u00e9ographie un flux complet pour les travaux de terrain \u00e0 distance.",
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.png",
          caption: "Carte interactive de toutes les excursions",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.png",
          caption: "D\u00e9tails d\u2019une excursion",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/3.png",
          caption: "Carte web QGIS int\u00e9gr\u00e9e",
          orientation: "portrait",
        },
      ],
    },
    {
      id: "kiruna-explorer",
      title: "Kiruna Explorer",
      description:
        "Plateforme g\u00e9ospatiale collaborative cartographiant la relocalisation de Kiruna li\u00e9e \u00e0 l\u2019exploitation mini\u00e8re et ses impacts locaux. D\u00e9velopp\u00e9e avec Node.js, Express, React et SQLite.",
      tags: ["Node.js", "Express", "React", "SQLite", "Docker"],
      repoUrl:
        "https://github.com/yannvillellas/polito-se2-24-20-Kiruna-eXplorer",
      detail:
        "Cr\u00e9ation en \u00e9quipe de Kiruna Explorer, une plateforme g\u00e9ospatiale collaborative qui documente la relocalisation de Kiruna li\u00e9e \u00e0 l\u2019exploitation mini\u00e8re et cartographie ses impacts locaux, alors que la ville se pr\u00e9pare \u00e0 devenir Capitale europ\u00e9enne de la culture 2029. Le projet a \u00e9t\u00e9 d\u00e9velopp\u00e9 avec la ville de Kiruna et le Politecnico di Torino pour permettre aux habitants et aux urbanistes de suivre la mani\u00e8re dont les d\u00e9cisions politiques, techniques et spatiales ont transform\u00e9 la ville.\n\nLa plateforme mod\u00e9lise 20 documents r\u00e9partis en cinq types et six groupes de parties prenantes, de LKAB aux citoyens, et cartographie les impacts de la relocalisation par zone. Le backend est une API Node.js/Express \u00e0 33 routes sur SQLite, tandis que le frontend React utilise Leaflet et Turf pour les cartes th\u00e9matiques et D3 pour la visualisation de donn\u00e9es. Le contr\u00f4le d\u2019acc\u00e8s couvre deux r\u00f4les et un acc\u00e8s invit\u00e9, avec neuf zones et seize associations.\n\nL\u2019application est conteneuris\u00e9e avec Docker et couverte par 17 tests Jest et six tests Cypress de bout en bout. Le d\u00e9veloppement a suivi un workflow de tests continus, avec une architecture Express en couches, une authentification par session, une validation des entr\u00e9es et l\u2019envoi de fichiers.",
      screenshots: [
        {
          src: "/images/projects/kiruna-explorer/map.png",
          caption: "Carte th\u00e9matique interactive",
        },
        {
          src: "/images/projects/kiruna-explorer/listOfDocuments.png",
          caption: "Liste des documents",
        },
        {
          src: "/images/projects/kiruna-explorer/documentVisualization.png",
          caption: "Visualisation d\u2019un document",
        },
      ],
    },
    {
      id: "portfolio",
      title: "Ce portfolio",
      description:
        "Portfolio d\u00e9velopp\u00e9 avec Next.js 16, Tailwind CSS v4 et un syst\u00e8me de tokens de design pour la mise en page. Internationalisation avec next-intl.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      repoUrl: "https://github.com/yannvillellas/portfolio",
      detail:
        "Cr\u00e9ation de ce portfolio comme site d\u2019ing\u00e9nierie personnel et terrain d\u2019exp\u00e9rimentation pour le design et le web, avec une attention port\u00e9e \u00e0 l\u2019architecture propre, au contenu bilingue et \u00e0 la g\u00e9n\u00e9ration statique.\n\nLe site utilise Next.js 16 avec l\u2019App Router et Tailwind CSS v4. Un syst\u00e8me de tokens de design g\u00e8re tous les espacements de mise en page de mani\u00e8re coh\u00e9rente sur chaque page, des marges de la barre de navigation aux d\u00e9gagements du pied de page pour la navigation mobile. L\u2019internationalisation est assur\u00e9e par next-intl, avec l\u2019ensemble du contenu provenant des fichiers de traduction plut\u00f4t que d\u2019un CMS ou d\u2019une base de donn\u00e9es, permettant une g\u00e9n\u00e9ration statique compl\u00e8te. La section d\u2019accueil pr\u00e9sente des orbes \u00e0 d\u00e9grad\u00e9 ambiant anim\u00e9s par keyframes CSS, cr\u00e9ant de la profondeur sans JavaScript.\n\nL\u2019int\u00e9gralit\u00e9 du site est g\u00e9n\u00e9r\u00e9e statiquement au moment du build, avec des pages pr\u00e9-rendues et z\u00e9ro JavaScript c\u00f4t\u00e9 client pour le rendu du contenu.",
      screenshots: [
        {
          src: "/images/projects/portfolio/1.png",
          caption:
            "Page d\u2019accueil avec orbes \u00e0 d\u00e9grad\u00e9 ambiant",
        },
      ],
    },
  ],
};

export function getProjects(locale: Locale): Project[] {
  return data[locale];
}
