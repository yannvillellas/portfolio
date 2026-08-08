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
      <h1 className="text-4xl font-black tracking-tight md:text-6xl">
        {t("title")}
      </h1>

      <p className="mt-6 leading-relaxed text-foreground/75">{t("intro")}</p>

      <section className="mt-16">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          {t("experience.title")}
        </h2>

        <div className="mt-8 space-y-10">
          {experiences.map((exp) => (
            <div
              key={exp.company}
              className="border-l-2 border-foreground/15 pl-6"
            >
              <h3 className="text-lg font-bold text-foreground">
                {exp.company}
              </h3>
              <p className="text-sm text-foreground/50">
                {exp.role} · {exp.location} · {exp.period}
              </p>
              <p className="mt-3 leading-relaxed text-foreground/75">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          {t("education.title")}
        </h2>

        <div className="mt-8 space-y-6">
          {educationEntries.map((edu) => (
            <div key={edu.school}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-foreground">
                  {edu.school}
                </h3>
                <span className="text-sm text-foreground/50">
                  {edu.location}
                </span>
              </div>
              <p className="text-foreground/75">{edu.degree}</p>
              <p className="text-sm text-foreground/50">{edu.period}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          {t("skills.title")}
        </h2>

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
        <h2 className="text-2xl font-black tracking-tight md:text-3xl">
          {t("interests.title")}
        </h2>
        <p className="mt-6 leading-relaxed text-foreground/75">{interests}</p>
      </section>
    </PageContainer>
  );
}

function SkillCategory({ label, items }: { label: string; items: string }) {
  const skills = items.split(", ");

  return (
    <div>
      <span className="text-lg font-bold text-foreground">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Pill key={skill} size="sm">
            {skill}
          </Pill>
        ))}
      </div>
    </div>
  );
}
