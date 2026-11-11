import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/layout/PageHeader";
import Heading from "@/components/ui/Heading";
import Prose from "@/components/ui/Prose";
import SkillList from "@/components/about/SkillList";
import TimelineRow from "@/components/about/TimelineRow";
import { getExperiences } from "@/data/experience";
import { getEducation } from "@/data/education";
import { skillCategories } from "@/data/skills";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations("AboutPage");

  return {
    title: t("title"),
    description: t("description"),
    alternates: getAlternates(locale, "/about"),
    openGraph: buildOpenGraph(locale, t("title"), t("description")),
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = await getTranslations("AboutPage");
  const experiences = getExperiences(locale);
  const educationEntries = getEducation(locale);
  const language = locale === "fr" ? "fr" : "en";

  return (
    <PageShell>
      <PageHeader
        title={t("title")}
      >
        <Prose>
          <p>{t("introP1")}</p>
          <p>{t("introP2")}</p>
        </Prose>
      </PageHeader>

      <div className="mt-16 flex flex-col gap-16">
        <section>
          <Heading level="h2" role="block">
            {t("experience.title")}
          </Heading>
          <div className="border-t border-line">
            {experiences.map((experience) => (
              <TimelineRow
                key={experience.company}
                period={experience.period}
                title={experience.role}
                subtitle={[experience.company, experience.location]
                  .filter(Boolean)
                  .join(" · ")}
                summary={experience.summary}
                highlights={experience.highlights}
              />
            ))}
          </div>
        </section>

        <section>
          <Heading level="h2" role="block">
            {t("education.title")}
          </Heading>
          <div className="border-t border-line">
            {educationEntries.map((education) => (
              <TimelineRow
                key={education.school}
                period={education.period}
                title={education.degree}
                subtitle={`${education.school} · ${education.location}`}
              />
            ))}
          </div>
        </section>

        <section>
          <Heading level="h2" role="block">
            {t("skills.title")}
          </Heading>
          <SkillList categories={skillCategories} language={language} />
        </section>
      </div>
    </PageShell>
  );
}
