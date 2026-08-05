import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import PageContainer from "@/components/PageContainer";

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

interface ExperienceEntry {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string;
}

interface EducationEntry {
  school: string;
  degree: string;
  location: string;
  period: string;
}

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const experiences = t.raw(
    "experience.entries",
  ) as unknown as ExperienceEntry[];
  const educationEntries = t.raw(
    "education.entries",
  ) as unknown as EducationEntry[];

  return (
    <div className="pt-(--header-clearance) pb-(--mobile-nav-clearance)">
      <PageContainer className="py-16 md:py-24">
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
            <SkillCategory
              label={t("skills.categories.languages")}
              items={t("skills.languages")}
            />
            <SkillCategory
              label={t("skills.categories.mobile")}
              items={t("skills.mobile")}
            />
            <SkillCategory
              label={t("skills.categories.web")}
              items={t("skills.web")}
            />
            <SkillCategory
              label={t("skills.categories.backend")}
              items={t("skills.backend")}
            />
            <SkillCategory
              label={t("skills.categories.databases")}
              items={t("skills.databases")}
            />
            <SkillCategory
              label={t("skills.categories.testing")}
              items={t("skills.testing")}
            />
            <SkillCategory
              label={t("skills.categories.infrastructure")}
              items={t("skills.infrastructure")}
            />
            <SkillCategory
              label={t("skills.categories.practices")}
              items={t("skills.practices")}
            />
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-black tracking-tight md:text-3xl">
            {t("interests.title")}
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/75">
            {t("interests.entries")}
          </p>
        </section>
      </PageContainer>
    </div>
  );
}

function SkillCategory({ label, items }: { label: string; items: string }) {
  const skills = items.split(", ");

  return (
    <div>
      <span className="text-lg font-bold text-foreground">{label}</span>
      <div className="mt-2 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-full border border-foreground/15 bg-background-secondary/40 px-3 py-1 text-sm text-foreground/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
