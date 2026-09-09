export interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  period: string;
  coursework?: string;
}

type Locale = "en" | "fr";

const data: Record<Locale, EducationEntry[]> = {
  en: [
    {
      school: "Politecnico di Torino",
      degree: "Master of Science, Computer Software Engineering",
      location: "Turin, Italy",
      period: "2024\u20132026",
      coursework:
        "Distributed Systems Programming, Cloud Computing Technologies, Advanced Software Engineering, Information & Embedded Systems Security, Optimization Algorithms, Web & Mobile Application Development",
    },
    {
      school: "\u00c9cole Sup\u00e9rieure d\u2019Ing\u00e9nieurs L\u00e9onard de Vinci",
      degree:
        "Engineering degree (Dipl\u00f4me d\u2019ing\u00e9nieur), Cybersecurity and Cloud Computing",
      location: "Paris, France",
      period: "2020\u20132025",
      coursework:
        "Cloud Computing, DevOps & DevSecOps, Penetration Testing, Network Security, Applied Cryptography, Machine Learning & AI, Web & Mobile Development",
    },
    {
      school: "Riga Technical University",
      degree: "Semester abroad",
      location: "Riga, Latvia",
      period: "2022\u20132023",
      coursework:
        "Object-Oriented Design (C++), Computer Systems Architecture, Computer Networks, Advanced Data Structures, Numerical Analysis",
    },
  ],
  fr: [
    {
      school: "Politecnico di Torino",
      degree: "Master of Science, Computer Software Engineering",
      location: "Turin, Italie",
      period: "2024 \u2013 2026",
      coursework:
        "Programmation de syst\u00e8mes distribu\u00e9s, Cloud Computing, G\u00e9nie logiciel avanc\u00e9, S\u00e9curit\u00e9 de l\u2019information et des syst\u00e8mes embarqu\u00e9s, Algorithmes d\u2019optimisation, D\u00e9veloppement d\u2019applications web et mobiles",
    },
    {
      school: "\u00c9cole Sup\u00e9rieure d\u2019Ing\u00e9nieurs L\u00e9onard de Vinci",
      degree:
        "Dipl\u00f4me d\u2019ing\u00e9nieur, Cybers\u00e9curit\u00e9 et Cloud Computing",
      location: "Paris, France",
      period: "2020 \u2013 2025",
      coursework:
        "Cloud Computing, DevOps & DevSecOps, Tests d\u2019intrusion, S\u00e9curit\u00e9 r\u00e9seau, Cryptographie appliqu\u00e9e, Machine Learning & IA, D\u00e9veloppement web et mobile",
    },
    {
      school: "Riga Technical University",
      degree: "Semestre d\u2019\u00e9change",
      location: "Riga, Lettonie",
      period: "2022 \u2013 2023",
      coursework:
        "Conception orient\u00e9e objet (C++), Architecture des syst\u00e8mes informatiques, R\u00e9seaux informatiques, Structures de donn\u00e9es, Analyse num\u00e9rique",
    },
  ],
};

export function getEducation(locale: Locale): EducationEntry[] {
  return data[locale];
}
