export interface SkillCategory {
  key: string;
  label: { en: string; fr: string };
  items: string;
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: { en: "Languages", fr: "Langages" },
    items:
      "TypeScript, JavaScript, Kotlin, Dart, Python, Java, Rust, SQL, C#, C++",
  },
  {
    key: "frontend",
    label: { en: "Frontend", fr: "Frontend" },
    items: "React, Next.js, Vue.js, Angular",
  },
  {
    key: "mobile",
    label: { en: "Mobile", fr: "Mobile" },
    items: "Flutter, Android, Jetpack Compose, Jetpack Glance",
  },
  {
    key: "backend",
    label: { en: "Backend", fr: "Backend" },
    items:
      "Node.js, Express.js, Spring Boot, Kafka, Debezium, Outbox, Keycloak, OAuth 2.0, JWT, REST",
  },
  {
    key: "databases",
    label: { en: "Databases", fr: "Bases de données" },
    items: "PostgreSQL, MySQL, MongoDB, SQLite, Firebase",
  },
  {
    key: "devops",
    label: { en: "DevOps & Cloud", fr: "DevOps & Cloud" },
    items:
      "Docker, Kubernetes, Linux, Nginx, SonarQube, GitHub Actions, GitLab CI/CD, Fastlane",
  },
  {
    key: "testing",
    label: { en: "Testing", fr: "Tests" },
    items: "Testcontainers, Jest, Cypress",
  },
  {
    key: "tools",
    label: { en: "Tools", fr: "Outils" },
    items: "OpenAPI, Flyway, Postman, Git, Jira, YouTrack, Figma",
  },
];
