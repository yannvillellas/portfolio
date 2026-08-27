import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";
import Pill from "@/components/Pill";
import { getExperiences } from "@/data/experience";
import { getEducation } from "@/data/education";
import { skillCategories } from "@/data/skills";
import { getInterests } from "@/data/interests";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "AboutPage" });
  const experiences = getExperiences(locale as "en" | "fr");
  const educationEntries = getEducation(locale as "en" | "fr");
  const interests = getInterests(locale as "en" | "fr");

  return (
    <PageContainer>
      <h1>{t("title")}</h1>

      <p className="mt-6 text-foreground/75">{t("intro")}</p>

      <section className="mt-16">
        <h2>{t("experience.title")}</h2>

        <div className="mt-8 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-foreground/10 pl-6"
            >
              <h3>{exp.company}</h3>
              <p className="type-caption">
                {exp.role} · {exp.location} · {exp.period}
              </p>
              <p className="mt-3 text-foreground/75">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2>{t("education.title")}</h2>

        <div className="mt-8 space-y-6">
          {educationEntries.map((edu) => (
            <div key={edu.school}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3>{edu.school}</h3>
                <span className="type-caption">{edu.location}</span>
              </div>
              <p className="text-foreground/75">{edu.degree}</p>
              <p className="type-caption">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2>{t("skills.title")}</h2>

        <div className="mt-8 space-y-6">
          {skillCategories.map((cat) => (
            <SkillCategory
              key={cat.key}
              label={cat.label[locale as "en" | "fr"]}
              items={cat.items}
            />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2>{t("interests.title")}</h2>
        <p className="mt-6 text-foreground/75">{interests}</p>
      </section>
    </PageContainer>
  );
}

function SkillCategory({ label, items }: { label: string; items: string }) {
  const skills = items.split(", ");

  return (
    <div>
      <h3>{label}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Pill key={skill}>{skill}</Pill>
        ))}
      </div>
    </div>
  );
}
