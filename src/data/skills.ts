export interface SkillCategory {
  key: string;
  label: { en: string; fr: string };
  items: string;
}

export const skillCategories: SkillCategory[] = [
  {
    key: "languages",
    label: { en: "Languages", fr: "Langages" },
    items: "TypeScript, JavaScript, Dart, Python, Kotlin, Java, C#, C++",
  },
  {
    key: "mobile",
    label: { en: "Mobile", fr: "Mobile" },
    items: "Flutter, Android, React Native",
  },
  {
    key: "web",
    label: { en: "Web", fr: "Web" },
    items: "React, Next.js, Express.js, Vue.js, Angular, HTML, CSS",
  },
  {
    key: "backend",
    label: { en: "Backend", fr: "Backend" },
    items: "Node.js, Spring Boot, Django, .NET, OAuth2/OIDC",
  },
  {
    key: "databases",
    label: { en: "Databases", fr: "Bases de données" },
    items: "PostgreSQL, MySQL, SQLite, Firebase, MongoDB",
  },
  {
    key: "testing",
    label: { en: "Testing", fr: "Tests" },
    items: "Jest, JUnit, SonarQube",
  },
  {
    key: "infrastructure",
    label: { en: "Infrastructure", fr: "Infrastructure" },
    items: "Docker, Kubernetes, Linux, Nginx, CI/CD",
  },
  {
    key: "practices",
    label: { en: "Practices", fr: "Pratiques" },
    items: "Scrum, TDD, Pair Programming, Agile",
  },
];
