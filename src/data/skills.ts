export interface SkillCategory {
  key: string;
  label: { en: string; fr: string };
  items: string;
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: { en: "Languages", fr: "Langages" },
    items: "Python, TypeScript, JavaScript, Java, Dart, Kotlin, C++, C#, SQL",
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
    items: "Node.js, Express.js, Spring Boot",
  },
  {
    key: "databases",
    label: { en: "Databases", fr: "Bases de données" },
    items: "PostgreSQL, MySQL, MongoDB, SQLite, Firebase",
  },
  {
    key: "devops",
    label: { en: "DevOps & Cloud", fr: "DevOps & Cloud" },
    items: "Docker, Kubernetes, Linux, Nginx, CI/CD, SonarQube",
  },
  {
    key: "tools",
    label: { en: "Tools", fr: "Outils" },
    items: "Git, Jira, YouTrack, Postman, Figma",
  },
];
