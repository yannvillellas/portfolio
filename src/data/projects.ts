export interface Screenshot {
  src: string;
  caption?: string;
  orientation?: "portrait" | "landscape";
  width?: number;
  height?: number;
}

export type Demo =
  | { kind: "terminal"; lines: { t: number; text: string }[]; title: string }
  | {
      kind: "window";
      title: string;
      views: { src: string; caption: string; width: number; height: number }[];
    }
  | { kind: "phone"; views: { src: string }[] };

export interface ProjectMeta {
  year?: number;
  status?: "in-progress";
  featured?: boolean;
}

export interface ProjectChapter {
  title: string;
  body: string;
  view?: number;
}

export interface Project extends ProjectMeta {
  id: string;
  title: string;
  summary?: string;
  description: string;
  tags: string[];
  demo?: Demo;
  chapters?: ProjectChapter[];
  repoUrl?: string;
  liveUrl?: string;
  detail?: string[];
  screenshots?: Screenshot[];
}

type Locale = "en" | "fr";

const meta: Record<string, ProjectMeta> = {
  "mpp-autopilot": { featured: true, year: 2026, status: "in-progress" },
  "open-endurance-coach": {
    featured: true,
    year: 2026,
    status: "in-progress",
  },
  "endurance-lab": { featured: true, year: 2025 },
  "car-rental-platform": { featured: true, year: 2024 },
  "kiruna-explorer": { year: 2024 },
  mfieldtrip: { year: 2024 },
  portfolio: { year: 2026 },
};

const demos: Record<Locale, Record<string, Demo>> = {
  en: {
    portfolio: {
      kind: "window",
      title: "yann.app",
      views: [
        {
          src: "/images/projects/portfolio/1.png",
          caption: "The previous home page",
          width: 2844,
          height: 1820,
        },
      ],
    },
    "mpp-autopilot": {
      kind: "terminal",
      title: "mpp-autopilot \u00b7 list",
      lines: [
        { t: 0.2, text: "$ mpp-autopilot list" },
        { t: 1.0, text: "" },
        {
          t: 1.2,
          text: "2026-10-25 17:15  GW8  OM - Havre AC           [62/124/140]",
        },
        {
          t: 1.4,
          text: "2026-10-25 17:15  GW8  Rennes - Strasbourg     [64/126/129]",
        },
        {
          t: 1.6,
          text: "2026-10-25 20:45  GW8  Paris SG - OL           [48/136/155]",
        },
        {
          t: 1.8,
          text: "2026-10-30 19:00  GW9  Havre AC - Paris SG     [189/155/30]",
        },
        {
          t: 2.0,
          text: "2026-10-30 21:05  GW9  LOSC - RC Lens           [85/119/104]",
        },
        {
          t: 2.2,
          text: "2026-10-31 17:15  GW9  OGC Nice - Rennes        [95/121/90]",
        },
        {
          t: 2.4,
          text: "2026-10-31 20:45  GW9  FC Lorient - Brest       [94/111/100]",
        },
        {
          t: 2.6,
          text: "2026-10-31 20:45  GW9  OL - Angers SCO          [44/140/155]",
        },
        {
          t: 2.8,
          text: "2026-11-01 17:15  GW9  Paris FC - AS Monaco     [88/119/104]",
        },
        { t: 3.0, text: "" },
        {
          t: 3.2,
          text: "9 upcoming Ligue 1 fixtures       WRITE=false \u00b7 one snapshot / day",
        },
      ],
    },
    "open-endurance-coach": {
      kind: "terminal",
      title: "coach",
      lines: [
        {
          t: 0.2,
          text: "you: thursday\u2019s session is too hard, I\u2019m cooked after three days of load",
        },
        { t: 1.4, text: "" },
        { t: 1.6, text: "Coach:" },
        {
          t: 1.8,
          text: "  I suggest 3\u00d712 min at threshold on thursday instead of 4\u00d710, and I change nothing else.",
        },
        { t: 2.0, text: "  Evidence:" },
        {
          t: 2.2,
          text: "  - load: three hard sessions in four days, above your average",
        },
        { t: 2.4, text: "  - readiness: HRV below your baseline, sleep down" },
        { t: 2.6, text: "  Open questions:" },
        { t: 2.8, text: "  ? Does saturday\u2019s long run stay at 2 h?" },
        {
          t: 3.0,
          text: "  Confirm? Reply exactly yes to apply, no to discard.",
        },
        { t: 3.8, text: "" },
        { t: 4.0, text: "you: yes" },
        { t: 4.8, text: "" },
        { t: 5.0, text: "Applied the recorded calendar changes." },
      ],
    },
    "endurance-lab": {
      kind: "phone",
      views: [
        { src: "/images/projects/endurance-lab/1.webp" },
        { src: "/images/projects/endurance-lab/2.webp" },
        { src: "/images/projects/endurance-lab/3.webp" },
      ],
    },
    mfieldtrip: {
      kind: "phone",
      views: [
        { src: "/images/projects/mfieldtrip/1.webp" },
        { src: "/images/projects/mfieldtrip/2.webp" },
        { src: "/images/projects/mfieldtrip/3.webp" },
      ],
    },
  },
  fr: {
    portfolio: {
      kind: "window",
      title: "yann.app",
      views: [
        {
          src: "/images/projects/portfolio/1.png",
          caption: "L'ancienne page d'accueil",
          width: 2844,
          height: 1820,
        },
      ],
    },
    "mpp-autopilot": {
      kind: "terminal",
      title: "mpp-autopilot \u00b7 list",
      lines: [
        { t: 0.2, text: "$ mpp-autopilot list" },
        { t: 1.0, text: "" },
        {
          t: 1.2,
          text: "2026-10-25 17:15  GW8  OM - Havre AC           [62/124/140]",
        },
        {
          t: 1.4,
          text: "2026-10-25 17:15  GW8  Rennes - Strasbourg     [64/126/129]",
        },
        {
          t: 1.6,
          text: "2026-10-25 20:45  GW8  Paris SG - OL           [48/136/155]",
        },
        {
          t: 1.8,
          text: "2026-10-30 19:00  GW9  Havre AC - Paris SG     [189/155/30]",
        },
        {
          t: 2.0,
          text: "2026-10-30 21:05  GW9  LOSC - RC Lens           [85/119/104]",
        },
        {
          t: 2.2,
          text: "2026-10-31 17:15  GW9  OGC Nice - Rennes        [95/121/90]",
        },
        {
          t: 2.4,
          text: "2026-10-31 20:45  GW9  FC Lorient - Brest       [94/111/100]",
        },
        {
          t: 2.6,
          text: "2026-10-31 20:45  GW9  OL - Angers SCO          [44/140/155]",
        },
        {
          t: 2.8,
          text: "2026-11-01 17:15  GW9  Paris FC - AS Monaco     [88/119/104]",
        },
        { t: 3.0, text: "" },
        {
          t: 3.2,
          text: "9 upcoming Ligue 1 fixtures       WRITE=false \u00b7 one snapshot / day",
        },
      ],
    },
    "open-endurance-coach": {
      kind: "terminal",
      title: "coach",
      lines: [
        {
          t: 0.2,
          text: "you: ma s\u00e9ance de jeudi est trop dure, je suis cuit apr\u00e8s trois jours de charge",
        },
        { t: 1.4, text: "" },
        { t: 1.6, text: "Coach:" },
        {
          t: 1.8,
          text: "  Je propose 3\u00d712 min au seuil jeudi \u00e0 la place de 4\u00d710, et je ne touche \u00e0 rien d'autre.",
        },
        { t: 2.0, text: "  Evidence:" },
        {
          t: 2.2,
          text: "  - charge: trois s\u00e9ances dures en quatre jours, au-dessus de ta moyenne",
        },
        {
          t: 2.4,
          text: "  - readiness: HRV sous ta ligne de base, sommeil en baisse",
        },
        { t: 2.6, text: "  Open questions:" },
        { t: 2.8, text: "  ? La sortie longue de samedi reste \u00e0 2 h ?" },
        {
          t: 3.0,
          text: "  Confirm? Reply exactly yes to apply, no to discard.",
        },
        { t: 3.8, text: "" },
        { t: 4.0, text: "you: yes" },
        { t: 4.8, text: "" },
        { t: 5.0, text: "Applied the recorded calendar changes." },
      ],
    },
    "endurance-lab": {
      kind: "phone",
      views: [
        { src: "/images/projects/endurance-lab/1.webp" },
        { src: "/images/projects/endurance-lab/2.webp" },
        { src: "/images/projects/endurance-lab/3.webp" },
      ],
    },
    mfieldtrip: {
      kind: "phone",
      views: [
        { src: "/images/projects/mfieldtrip/1.webp" },
        { src: "/images/projects/mfieldtrip/2.webp" },
        { src: "/images/projects/mfieldtrip/3.webp" },
      ],
    },
  },
};

const data: Record<Locale, Project[]> = {
  en: [
    {
      id: "mpp-autopilot",
      title: "MPP Autopilot",
      summary:
        "The market favourite's most probable score, gameweek after gameweek.",
      description:
        "Autonomous Rust service that predicts Ligue 1 scorelines for a friends' Mon Petit Prono league, betting the most probable score of the market favourite, with an Elo fallback.",
      tags: ["Rust", "Docker"],
      repoUrl: "https://github.com/yannvillellas/mpp-autopilot",
      screenshots: [
        {
          src: "/images/projects/mpp-autopilot/1.png",
          caption: "Ligue 1 fixtures and MPP quotations, fetched once per day",
          orientation: "landscape",
        },
      ],
      chapters: [
        {
          title: "The market favourite.",
          body: "Aggregated odds from The Odds API give a probability for every exact score. The service takes the outcome the market favours, then its most probable score.",
        },
        {
          title: "Measured on 79 matches.",
          body: "Three rules were tested against real MPP payouts. The favourite scored 36.3 points per match, expected value 31.1, the longest odds 25.0.",
        },
        {
          title: "The Elo when a price is missing.",
          body: "If a fixture has no usable odds, ratings computed from Football-Data results since 2020/21 stand in.",
        },
      ],
      detail: [
        "Mon Petit Prono asks for one exact score per Ligue 1 fixture, 9 per gameweek, and the market already knows which score is most likely. The service aggregates odds from The Odds API into a probability for each score, takes the outcome the market favours, then its most probable score.",
        "That rule was not chosen by intuition. 3 strategies were replayed against 79 matches of the current season with the real MPP payouts, and betting the favourite returned 36.3 points per match against 31.1 for maximizing expected value and 25.0 for the longest odds. When a fixture has no usable price, Elo ratings computed from Football-Data results since 2020/21 take over. The service runs in Rust and only publishes with WRITE=true, 4 triggers per match, with atomic state, a season ledger and 219 tests.",
      ],
    },
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      summary:
        "A coach that proposes sessions and writes only after an explicit yes.",
      description:
        "Self-hosted LLM coaching system that turns training telemetry into validated workout adjustments, gated by explicit athlete approval. Built with Python, SQLite, Pydantic, and Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail: [
        "Open Endurance Coach reads an athlete's training from Intervals.icu and reviews the work actually done against Joe Friel's periodisation, Coggan-style power analysis and current fatigue. What comes out is a proposed calendar change with its evidence and open questions, and nothing is written until the athlete replies with a literal yes.",
        "The model behind it is interchangeable. There is no provider key to hold before the first run, and the pipeline validates every answer against a strict JSON schema before a write is attempted, retrying then rejecting invalid output. Calendar changes are resolved by name and date, read back after every write and skipped when unchanged, so the same proposal applied twice changes nothing. The suite holds more than 1,000 tests behind a 95 per cent coverage gate, which is what makes the guarantee hold between releases. A personal pilot of more than 30 sessions produced no unapproved write. A guard keeps every mutation inside its own family, so a session change never lands on a race and a race can be created or moved without touching the plan. The same engine runs as a one-shot CLI with a dry-run for automation.",
      ],
      screenshots: [
        {
          src: "/images/projects/open-endurance-coach/1.png",
          caption: "Terminal chat with the coach",
        },
      ],
      chapters: [
        {
          title: "A proposal, not a write.",
          body: "Every calendar change stays a draft until the athlete answers with a literal yes.",
        },
        {
          title: "Any model, one already free.",
          body: "No provider is imposed. The coach starts on OVHcloud's anonymous free tier and moves elsewhere on request.",
        },
        {
          title: "Separate write families.",
          body: "A session change cannot reach a race, and the reverse holds. Races are created and moved inside their own family.",
        },
      ],
    },
    {
      id: "endurance-lab",
      title: "Endurance Lab",
      summary: "Garmin and Polar, one timeline.",
      description:
        "Cross-platform mobile app that normalizes training data from heterogeneous wearable ecosystems for sports-science research.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail: [
        "Endurance research drowns in exports. 4 ecosystems, 4 file formats, and no single view of what an athlete actually did across a season. Endurance Lab connects a Garmin or Polar account through OAuth, normalises every activity into one model, and shows the season as trends instead of a folder of files.",
        "The app is written in Flutter and ships to iOS and Android from one codebase, with Firebase behind authentication and storage. The client carries 6 indicators, GPS maps and 2 OAuth integrations. A 3.5-month beta collected 8 athletes, 1,001 activities, 2.7 million GPS points and 1.6 million samples, and the release pipeline runs with zero manual steps.",
      ],
      screenshots: [
        {
          src: "/images/projects/endurance-lab/1.webp",
          caption: "Metrics dashboard with performance and health trends",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.webp",
          caption: "Searchable activity list",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/3.webp",
          caption: "Activity details with GPS route map and interactive charts",
          orientation: "portrait",
        },
      ],
      chapters: [
        {
          title: "What the metrics page tells you.",
          body: "Sessions from every connected watch land in one place, and the page turns them into trends rather than a list of files.",
        },
        {
          title: "Every activity in one list.",
          body: "Garmin and Polar are wired today, behind a normalisation layer that turns either one into the same activity.",
        },
        {
          title: "A trace and charts you can move.",
          body: "On the activity screen the GPS trace and the charts respond to the finger, so a climb or a hard interval can be read in place.",
        },
      ],
    },
    {
      id: "car-rental-platform",
      title: "Car Rental Platform",
      summary:
        "Vehicle booking and fleet management, from catalog to invoicing.",
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
      detail: [
        "Renting a car touches three systems at once. The fleet has to show the vehicle as taken, the customer has to be charged, and neither can be true while the other is not. The platform splits that work across four Kotlin and Spring Boot services, users, reservations, payments and a gateway, each with its own PostgreSQL database and its own migrations.",
        "Payments travel through Kafka with the outbox pattern and Debezium change data capture, so a reservation and its PayPal confirmation stay consistent even when one side fails. Keycloak issues a single OIDC token carrying 4 roles, and the React front end uses the same JWT as the services. 42 endpoints with 75.8% line coverage, held up by Testcontainers rather than mocks.",
      ],
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
      demo: {
        kind: "window",
        title: "car-rental-platform",
        views: [
          {
            src: "/images/projects/car-rental/1.jpg",
            caption: "Fleet management interface",
            width: 2824,
            height: 1820,
          },
          {
            src: "/images/projects/car-rental/2.jpg",
            caption: "Staff booking overview",
            width: 2824,
            height: 1820,
          },
          {
            src: "/images/projects/car-rental/3.jpg",
            caption: "Customer reservation dashboard",
            width: 2824,
            height: 1820,
          },
        ],
      },
      chapters: [
        {
          title: "4 services, 42 endpoints.",
          body: "Users, reservations, payments and a gateway, each a Kotlin and Spring Boot service with its own PostgreSQL database.",
        },
        {
          title: "A payment cannot get lost.",
          body: "Kafka, the outbox pattern and Debezium CDC keep a reservation and its PayPal payment consistent when one side fails.",
        },
        {
          title: "4 roles, 1 token.",
          body: "Keycloak holds OIDC and RBAC, and the React front end authenticates with the same JWT the services already trust.",
        },
      ],
    },
    {
      id: "mfieldtrip",
      title: "mFieldTrip",
      summary: "A university's field trips, walkable from home.",
      description:
        "Cross-platform mobile app that replaces traditional geography field studies with interactive, self-guided GIS excursions.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail: [
        "Athabasca University teaches 40,000 students at a distance, and a field trip is the one thing a distance course cannot ship. mFieldTrip turns a trip into a map a student can walk through from home, with the same stops, the same media and the same credits as the real thing.",
        "The app is a single Flutter codebase running on Android, iOS and the web. Firebase handles authentication, storage and App Check, with 3 roles from amateur to professor and an admin path for moderation. A new trip is published by importing a QGIS to Web archive and a CSV of points of interest, and students sort what they see by proximity.",
      ],
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.webp",
          caption: "Interactive map of all field trips",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.webp",
          caption: "Field trip details",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/3.webp",
          caption: "Embedded QGIS web map",
          orientation: "portrait",
        },
      ],
      chapters: [
        {
          title: "Every field trip on one map.",
          body: "40,000 distance students explore their university's field trips from a map, with no travel and no paper handout.",
        },
        {
          title: "A trip, its places, its media.",
          body: "Each trip opens on its own points, sorted by proximity so the nearest stop comes first.",
        },
        {
          title: "A QGIS map, dropped in.",
          body: "A QGIS to Web archive and a CSV of points of interest are enough to publish a new trip.",
        },
      ],
    },
    {
      id: "kiruna-explorer",
      title: "Kiruna Explorer",
      summary: "A map of the documents behind Kiruna's relocation.",
      description:
        "Collaborative geospatial platform mapping Kiruna's mining-driven relocation and its local impacts. Built with Node.js, Express, React, and SQLite.",
      tags: ["Node.js", "Express", "React", "SQLite", "Docker"],
      detail: [
        "Kiruna is moving because the mine is expanding under it, and the argument about what is lost and what is compensated lives in documents scattered across agencies. Kiruna Explorer puts those documents on a map, so a plan, a complaint and a compensation claim can be read against the same piece of ground.",
        "20 documents of 5 types involve 6 stakeholders, from LKAB to the residents, and the model links each one to the 9 affected areas and to 16 associations between them. A Node.js and Express API exposes 33 routes over SQLite, the front end draws the map with Leaflet, and access runs on 2 roles plus a read-only guest. The whole thing ships in Docker, with 17 Jest test files and 6 Cypress runs.",
      ],
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
      demo: {
        kind: "window",
        title: "kiruna-explorer",
        views: [
          {
            src: "/images/projects/kiruna-explorer/listOfDocuments.png",
            caption: "List and filters",
            width: 1896,
            height: 928,
          },
          {
            src: "/images/projects/kiruna-explorer/map.png",
            caption: "Mapping",
            width: 1915,
            height: 928,
          },
          {
            src: "/images/projects/kiruna-explorer/documentVisualization.png",
            caption: "Extraction",
            width: 1916,
            height: 926,
          },
        ],
      },
      chapters: [
        {
          title: "20 documents, 6 stakeholders.",
          body: "The relocation is read one document at a time, each tied to the actor who produced it, from LKAB to the citizens.",
        },
        {
          title: "Every document on its zone.",
          body: "The map places the 20 documents across the 9 areas the mine affects, so a claim can be read where it happens.",
        },
        {
          title: "The document, not a thumbnail.",
          body: "A record opens the whole document with its type, its zones and its links to other records.",
        },
      ],
    },
    {
      id: "portfolio",
      title: "This Portfolio",
      summary: "This site, built with Next.js and Tailwind.",
      description:
        "Bilingual Next.js 16 portfolio built with Tailwind CSS v4, next-intl, and a design token system. Lighthouse desktop 100/100/100/100.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      repoUrl: "https://github.com/yannvillellas/portfolio",
      detail: [
        "Built this portfolio as a personal engineering site and a playground for design and web experiments, with a focus on clean architecture, bilingual content, and static generation. The goal was to present seven case studies in French and English without a CMS or runtime content store.",
        "The site uses Next.js 16 with the App Router and Tailwind CSS v4. A design token system manages layout spacing consistently across every page, from the navbar's chrome insets to the footer's mobile navigation clearance. Internationalization is handled through next-intl, with all content sourced from translation files rather than a CMS or database, enabling full static generation. The hero section features animated ambient gradient orbs built with CSS keyframes that create depth without JavaScript.",
        "The result is a fully static site with 24 public pages across 2 locales and 7 case studies. Lighthouse desktop scores 100/100/100/100 (performance, accessibility, best practices, SEO), with a 0.6 s LCP and zero CLS; the mobile production build records a 1.3 s LCP, zero CLS, and 412 KiB of total page weight.",
      ],
      chapters: [
        {
          title: "The site you are reading.",
          body: "One page rebuilt from scratch in Next.js and Tailwind, with 2 languages and a light and dark theme.",
        },
      ],
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
      summary:
        "Le score le plus probable de l'issue favorite, journ\u00e9e apr\u00e8s journ\u00e9e.",
      description:
        "Service Rust autonome qui pr\u00e9dit les scores de Ligue 1 pour une ligue Mon Petit Prono entre amis, en pariant le score le plus probable de l'issue favorite, avec repli sur un Elo recalcul\u00e9 en interne.",
      tags: ["Rust", "Docker"],
      repoUrl: "https://github.com/yannvillellas/mpp-autopilot",
      screenshots: [
        {
          src: "/images/projects/mpp-autopilot/1.png",
          caption:
            "Rencontres de Ligue 1 et cotes MPP, r\u00e9cup\u00e9r\u00e9es une fois par jour",
          orientation: "landscape",
        },
      ],
      chapters: [
        {
          title: "Le favori du marché.",
          body: "Les cotes agrégées de The Odds API donnent une probabilité pour chaque score exact. Le service retient l'issue favorite, puis son score le plus probable.",
        },
        {
          title: "Mesuré sur 79 matchs.",
          body: "3 règles ont été comparées aux paiements réels de MPP. Le favori rapporte 36,3 points par match, l'espérance 31,1, la cote la plus haute 25,0.",
        },
        {
          title: "L'Elo quand la cote manque.",
          body: "Sans cote exploitable, les notes calculées sur les résultats Football-Data depuis 2020/21 prennent le relais.",
        },
      ],
      detail: [
        "Mon Petit Prono demande un score exact par rencontre de Ligue 1, soit 9 par journée, et le marché sait déjà quel score est le plus probable. Le service agrège les cotes de The Odds API en une probabilité par score, retient l'issue favorite, puis son score le plus probable.",
        "Cette règle ne vient pas d'une intuition. 3 stratégies ont été rejouées sur 79 matchs de la saison en cours avec les paiements réels de MPP, et parier le favori rend 36,3 points par match contre 31,1 pour la maximisation de l'espérance et 25,0 pour la cote la plus haute. Sans cote exploitable, un Elo calculé sur les résultats Football-Data depuis 2020/21 prend le relais. Le service tourne en Rust et ne publie qu'avec WRITE=true, 4 déclencheurs par match, avec un état atomique, un registre de saison et 219 tests.",
      ],
    },
    {
      id: "open-endurance-coach",
      title: "Open Endurance Coach",
      summary:
        "Un coach qui propose des s\u00e9ances, et n\u2019\u00e9crit qu\u2019apr\u00e8s un oui explicite.",
      description:
        "Syst\u00e8me de coaching LLM auto-h\u00e9berg\u00e9 qui transforme la t\u00e9l\u00e9m\u00e9trie d\u2019entra\u00eenement en ajustements valid\u00e9s, sous r\u00e9serve d\u2019une approbation explicite de l\u2019athl\u00e8te. D\u00e9velopp\u00e9 avec Python, SQLite, Pydantic et Typer.",
      tags: ["Python", "SQLite"],
      repoUrl: "https://github.com/yannvillellas/open-endurance-coach",
      detail: [
        "Open Endurance Coach lit l'entra\u00eenement d'un athl\u00e8te depuis Intervals.icu et confronte le travail r\u00e9ellement accompli \u00e0 la p\u00e9riodisation de Joe Friel, \u00e0 l'analyse de puissance de Coggan et \u00e0 l'\u00e9tat de fatigue du moment. Ce qui en sort est une modification de calendrier propos\u00e9e avec ses preuves et ses questions ouvertes, et rien n'est \u00e9crit tant que l'athl\u00e8te n'a pas r\u00e9pondu oui.",
        "Le mod\u00e8le qui parle derri\u00e8re est interchangeable. Aucune cl\u00e9 de fournisseur LLM n'est \u00e0 d\u00e9tenir avant le premier lancement, et le pipeline valide chaque r\u00e9ponse contre un sch\u00e9ma JSON strict avant toute tentative d'\u00e9criture, avec r\u00e9essai puis rejet des sorties invalides. Les modifications sont r\u00e9solues par nom et par date, relues apr\u00e8s chaque \u00e9criture et ignor\u00e9es quand rien ne change. Une garde maintient chaque mutation dans sa famille, donc une s\u00e9ance ne se change jamais en course et une course se cr\u00e9e sans toucher au plan. La suite compte plus de 1 000 tests derri\u00e8re un seuil de couverture de 95\u00a0%, ce qui tient la garantie d'une version \u00e0 l'autre. Un pilote personnel de plus de 30 s\u00e9ances n'a produit aucune \u00e9criture non approuv\u00e9e. Le m\u00eame moteur tourne en CLI one-shot avec un dry-run pour l'automatisation.",
      ],
      screenshots: [
        {
          src: "/images/projects/open-endurance-coach/1.png",
          caption: "Chat en terminal avec le coach",
        },
      ],
      chapters: [
        {
          title: "Une proposition, pas une \u00e9criture.",
          body: "Chaque changement de calendrier reste un brouillon tant que l'athl\u00e8te n'a pas r\u00e9pondu oui.",
        },
        {
          title: "N'importe quel mod\u00e8le, un d\u00e9j\u00e0 gratuit.",
          body: "Aucun fournisseur n'est impos\u00e9. Le coach d\u00e9marre sur le palier gratuit anonyme d'OVHcloud et change de mod\u00e8le sur demande.",
        },
        {
          title: "Familles d'\u00e9criture s\u00e9par\u00e9es.",
          body: "Une modification de s\u00e9ance ne peut pas toucher une course, et l'inverse non plus. Les courses se cr\u00e9ent et se d\u00e9placent dans leur propre famille.",
        },
      ],
    },
    {
      id: "endurance-lab",
      title: "Endurance Lab",
      summary: "Garmin et Polar, une seule chronologie.",
      description:
        "Application mobile multiplateforme qui normalise les donn\u00e9es d\u2019entra\u00eenement issues d\u2019\u00e9cosyst\u00e8mes de wearables h\u00e9t\u00e9rog\u00e8nes pour la recherche en sciences du sport.",
      tags: ["Flutter", "Firebase", "GitHub Actions", "Fastlane"],
      liveUrl: "https://endurance.veebor.net/index_en.html",
      detail: [
        "La recherche en endurance se noie dans les exports. 4 \u00e9cosyst\u00e8mes, 4 formats de fichiers, et aucune vue unique sur ce qu'un athl\u00e8te a vraiment fait sur une saison. Endurance Lab connecte un compte Garmin ou Polar par OAuth, ram\u00e8ne chaque activit\u00e9 \u00e0 un mod\u00e8le unique, et pr\u00e9sente la saison en tendances au lieu d'un dossier de fichiers.",
        "L'application est \u00e9crite en Flutter et sort sur iOS comme sur Android depuis une seule base de code, avec Firebase derri\u00e8re l'authentification et le stockage. Le client porte 6 indicateurs, des cartes GPS et 2 int\u00e9grations OAuth. Une b\u00eata de 3,5 mois a rassembl\u00e9 8 athl\u00e8tes, 1\u202f001 activit\u00e9s, 2,7 millions de points GPS et 1,6 million d'\u00e9chantillons, et la cha\u00eene de publication ne demande aucune \u00e9tape manuelle.",
      ],
      screenshots: [
        {
          src: "/images/projects/endurance-lab/1.webp",
          caption:
            "Tableau de bord de m\u00e9triques avec tendances de performance et de sant\u00e9",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/2.webp",
          caption: "Liste des activit\u00e9s avec recherche",
          orientation: "portrait",
        },
        {
          src: "/images/projects/endurance-lab/3.webp",
          caption:
            "D\u00e9tails d\u2019une activit\u00e9 avec carte GPS et graphiques interactifs",
          orientation: "portrait",
        },
      ],
      chapters: [
        {
          title: "Ce que la page mesures raconte.",
          body: "Les s\u00e9ances de toutes les montres connect\u00e9es arrivent au m\u00eame endroit, et la page les transforme en tendances plut\u00f4t qu'en liste de fichiers.",
        },
        {
          title: "Toutes les activit\u00e9s, une seule liste.",
          body: "Garmin et Polar sont branch\u00e9s aujourd'hui, derri\u00e8re une couche de normalisation qui ram\u00e8ne l'un ou l'autre \u00e0 la m\u00eame activit\u00e9.",
        },
        {
          title: "Une trace et des courbes manipulables.",
          body: "Sur l'\u00e9cran d'une activit\u00e9, la trace GPS et les graphiques r\u00e9pondent au doigt, pour lire une mont\u00e9e ou un intervalle sur place.",
        },
      ],
    },
    {
      id: "car-rental-platform",
      title: "Plateforme de location de v\u00e9hicules",
      summary:
        "R\u00e9servation de v\u00e9hicules et gestion de flotte, du catalogue \u00e0 la facturation.",
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
      detail: [
        "Louer une voiture touche trois syst\u00e8mes \u00e0 la fois. La flotte doit marquer le v\u00e9hicule comme pris, le client doit \u00eatre d\u00e9bit\u00e9, et aucun des deux ne peut \u00eatre vrai pendant que l'autre ne l'est pas. La plateforme r\u00e9partit ce travail sur quatre services Kotlin et Spring Boot, utilisateurs, r\u00e9servations, paiements et passerelle, chacun avec sa base PostgreSQL et ses migrations.",
        "Les paiements passent par Kafka avec le patron Outbox et la capture de changements Debezium, donc une r\u00e9servation et sa confirmation PayPal restent coh\u00e9rentes m\u00eame si un c\u00f4t\u00e9 l\u00e2che. Keycloak \u00e9met un seul jeton OIDC porteur de 4 r\u00f4les, et le front React utilise le m\u00eame JWT que les services. 42 routes avec 75,8\u00a0% de couverture, tenues par Testcontainers plut\u00f4t que par des mocks.",
      ],
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
      demo: {
        kind: "window",
        title: "car-rental-platform",
        views: [
          {
            src: "/images/projects/car-rental/1.jpg",
            caption: "Interface de gestion de flotte",
            width: 2824,
            height: 1820,
          },
          {
            src: "/images/projects/car-rental/2.jpg",
            caption: "Vue d\u2019ensemble des r\u00e9servations",
            width: 2824,
            height: 1820,
          },
          {
            src: "/images/projects/car-rental/3.jpg",
            caption: "Tableau de r\u00e9servation client",
            width: 2824,
            height: 1820,
          },
        ],
      },
      chapters: [
        {
          title: "4 services, 42 routes.",
          body: "Utilisateurs, r\u00e9servations, paiements et passerelle, chacun en Kotlin et Spring Boot avec sa propre base PostgreSQL.",
        },
        {
          title: "Un paiement ne se perd pas en route.",
          body: "Kafka, le patron Outbox et Debezium CDC gardent la r\u00e9servation et son paiement PayPal coh\u00e9rents quand un c\u00f4t\u00e9 l\u00e2che.",
        },
        {
          title: "4 r\u00f4les, 1 seul jeton.",
          body: "Keycloak porte l'OIDC et le RBAC, et le front React s'authentifie avec le JWT que les services d\u00e9j\u00e0 reconnaissent.",
        },
      ],
    },
    {
      id: "mfieldtrip",
      title: "mFieldTrip",
      summary:
        "Les excursions de terrain d'une universit\u00e9, accessibles depuis chez soi.",
      description:
        "Application mobile multiplateforme qui remplace les \u00e9tudes de terrain traditionnelles par des excursions interactives et autonomes exploitant des donn\u00e9es SIG open-source.",
      tags: ["Flutter", "Firebase", "flutter_map"],
      detail: [
        "L'Universit\u00e9 Athabasca enseigne \u00e0 40\u202f000 \u00e9tudiants \u00e0 distance, et l'excursion sur le terrain est la seule chose qu'un cours \u00e0 distance ne peut pas livrer. mFieldTrip transforme une sortie en carte que l'\u00e9tudiant parcourt depuis chez lui, avec les m\u00eames arr\u00eats, les m\u00eames m\u00e9dias et les m\u00eames cr\u00e9dits que sur place.",
        "L'application tient dans une seule base Flutter qui tourne sur Android, iOS et le web. Firebase porte l'authentification, le stockage et App Check, avec 3 r\u00f4les de l'amateur au professeur et un acc\u00e8s admin pour la mod\u00e9ration. Une nouvelle excursion se publie en important une archive QGIS to Web et un CSV de points d'int\u00e9r\u00eat, et les \u00e9tudiants trient ce qu'ils voient par proximit\u00e9.",
      ],
      screenshots: [
        {
          src: "/images/projects/mfieldtrip/1.webp",
          caption: "Carte interactive de toutes les excursions",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/2.webp",
          caption: "D\u00e9tails d\u2019une excursion",
          orientation: "portrait",
        },
        {
          src: "/images/projects/mfieldtrip/3.webp",
          caption: "Carte web QGIS int\u00e9gr\u00e9e",
          orientation: "portrait",
        },
      ],
      chapters: [
        {
          title: "Toutes les excursions sur une carte.",
          body: "40 000 \u00e9tudiants \u00e0 distance explorent les excursions de leur universit\u00e9 depuis une carte, sans d\u00e9placement ni document papier.",
        },
        {
          title: "Une excursion, ses lieux, ses m\u00e9dias.",
          body: "Chaque sortie s'ouvre sur ses points d'int\u00e9r\u00eat, tri\u00e9s par proximit\u00e9 pour que l'arr\u00eat le plus proche arrive en t\u00eate.",
        },
        {
          title: "Une carte QGIS, d\u00e9pos\u00e9e telle quelle.",
          body: "Une archive QGIS to Web et un CSV de points d'int\u00e9r\u00eat suffisent \u00e0 publier une nouvelle excursion.",
        },
      ],
    },
    {
      id: "kiruna-explorer",
      title: "Kiruna Explorer",
      summary: "Une carte des documents de la relocalisation de Kiruna.",
      description:
        "Plateforme g\u00e9ospatiale collaborative cartographiant la relocalisation de Kiruna li\u00e9e \u00e0 l\u2019exploitation mini\u00e8re et ses impacts locaux. D\u00e9velopp\u00e9e avec Node.js, Express, React et SQLite.",
      tags: ["Node.js", "Express", "React", "SQLite", "Docker"],
      detail: [
        "Kiruna se d\u00e9place parce que la mine s'\u00e9tend sous la ville, et le d\u00e9bat sur ce qui est perdu et ce qui est compens\u00e9 vit dans des documents dispers\u00e9s entre les agences. Kiruna Explorer pose ces documents sur une carte, pour qu'un plan, une contestation et une demande de compensation se lisent sur le m\u00eame morceau de terrain.",
        "20 documents en 5 types impliquent 6 parties prenantes, de LKAB aux habitants, et le mod\u00e8le relie chacun aux 9 zones touch\u00e9es et \u00e0 16 associations entre eux. Une API Node.js et Express expose 33 routes sur SQLite, le front dessine la carte avec Leaflet, et l'acc\u00e8s repose sur 2 r\u00f4les plus un invit\u00e9 en lecture seule. Le tout tourne dans Docker, avec 17 fichiers de tests Jest et 6 parcours Cypress.",
      ],
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
      demo: {
        kind: "window",
        title: "kiruna-explorer",
        views: [
          {
            src: "/images/projects/kiruna-explorer/listOfDocuments.png",
            caption: "Liste et filtres",
            width: 1896,
            height: 928,
          },
          {
            src: "/images/projects/kiruna-explorer/map.png",
            caption: "Cartographie",
            width: 1915,
            height: 928,
          },
          {
            src: "/images/projects/kiruna-explorer/documentVisualization.png",
            caption: "Extraction",
            width: 1916,
            height: 926,
          },
        ],
      },
      chapters: [
        {
          title: "20 documents, 6 parties prenantes.",
          body: "La relocalisation se lit document par document, chacun rattach\u00e9 \u00e0 l'acteur qui l'a produit, de LKAB aux habitants.",
        },
        {
          title: "Chaque document sur sa zone.",
          body: "La carte place les 20 documents sur les 9 zones touch\u00e9es par la mine, pour lire une contestation l\u00e0 o\u00f9 elle se passe.",
        },
        {
          title: "Le document, pas sa vignette.",
          body: "Une fiche ouvre le document entier avec son type, ses zones et ses liens vers les autres fiches.",
        },
      ],
    },
    {
      id: "portfolio",
      title: "Ce portfolio",
      summary: "Ce site, construit avec Next.js et Tailwind.",
      description:
        "Portfolio bilingue Next.js 16 avec Tailwind CSS v4, next-intl et un syst\u00e8me de tokens de design. Lighthouse desktop 100/100/100/100.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl"],
      repoUrl: "https://github.com/yannvillellas/portfolio",
      detail: [
        "Cr\u00e9ation de ce portfolio comme site d\u2019ing\u00e9nierie personnel et terrain d\u2019exp\u00e9rimentation pour le design et le web, avec une attention port\u00e9e \u00e0 l\u2019architecture propre, au contenu bilingue et \u00e0 la g\u00e9n\u00e9ration statique. L\u2019objectif \u00e9tait de pr\u00e9senter sept \u00e9tudes de cas en fran\u00e7ais et en anglais sans CMS ni stockage de contenu \u00e0 l\u2019ex\u00e9cution.",
        "Le site utilise Next.js 16 avec l\u2019App Router et Tailwind CSS v4. Un syst\u00e8me de tokens de design g\u00e8re tous les espacements de mise en page de mani\u00e8re coh\u00e9rente sur chaque page, des marges de la barre de navigation aux d\u00e9gagements du pied de page pour la navigation mobile. L\u2019internationalisation est assur\u00e9e par next-intl, avec l\u2019ensemble du contenu provenant des fichiers de traduction plut\u00f4t que d\u2019un CMS ou d\u2019une base de donn\u00e9es, permettant une g\u00e9n\u00e9ration statique compl\u00e8te. La section d\u2019accueil pr\u00e9sente des orbes \u00e0 d\u00e9grad\u00e9 ambiant anim\u00e9s par keyframes CSS, cr\u00e9ant de la profondeur sans JavaScript.",
        "Le r\u00e9sultat est un site enti\u00e8rement statique avec 24 pages publiques r\u00e9parties sur 2 langues et 7 \u00e9tudes de cas. Lighthouse desktop obtient 100/100/100/100 (performance, accessibilit\u00e9, bonnes pratiques, SEO), avec un LCP de 0,6 s et un CLS nul. La version mobile en production enregistre un LCP de 1,3 s, un CLS nul et un poids total de 412 Kio.",
      ],
      chapters: [
        {
          title: "Le site que vous lisez.",
          body: "Une page reconstruite de z\u00e9ro en Next.js et Tailwind, avec 2 langues et un th\u00e8me clair et sombre.",
        },
      ],
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

export function getProjects(locale: string): Project[] {
  return data[locale === "fr" ? "fr" : "en"].map((project) => ({
    ...project,
    ...meta[project.id],
    demo: project.demo ?? demos[locale === "fr" ? "fr" : "en"][project.id],
  }));
}
