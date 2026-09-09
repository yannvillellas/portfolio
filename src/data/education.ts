export interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  period: string;
}

type Locale = "en" | "fr";

const data: Record<Locale, EducationEntry[]> = {
  en: [
    {
      school: "Politecnico di Torino",
      degree: "Master of Science, Computer Software Engineering",
      location: "Turin, Italy",
      period: "2024\u20132026",
    },
    {
      school:
        "ESILV (\u00c9cole Sup\u00e9rieure d\u2019Ing\u00e9nieurs L\u00e9onard de Vinci)",
      degree: "Master of Science, Cybersecurity and Cloud Computing",
      location: "Paris, France",
      period: "2020\u20132025",
    },
    {
      school: "Riga Technical University",
      degree: "Semester abroad",
      location: "Riga, Latvia",
      period: "2022\u20132023",
    },
  ],
  fr: [
    {
      school: "Politecnico di Torino",
      degree: "Master of Science, Computer Software Engineering",
      location: "Turin, Italie",
      period: "2024 \u2013 2026",
    },
    {
      school:
        "ESILV (\u00c9cole Sup\u00e9rieure d\u2019Ing\u00e9nieurs L\u00e9onard de Vinci)",
      degree: "Master of Science, Cybersecurity and Cloud Computing",
      location: "Paris, France",
      period: "2020 \u2013 2025",
    },
    {
      school: "Riga Technical University",
      degree: "Semestre d\u2019\u00e9change",
      location: "Riga, Lettonie",
      period: "2022 \u2013 2023",
    },
  ],
};

export function getEducation(locale: Locale): EducationEntry[] {
  return data[locale];
}
