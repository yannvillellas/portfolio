import type { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";
import { getAlternates } from "@/i18n/alternates";
import { buildOpenGraph } from "@/i18n/metadata";
import Container from "@/components/layout/Container";
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
    <div className="pt-14 pb-24">
      <Container>
        <div className="max-w-prose">
          <h1 className="m-0 text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-mut">
            {t("introP1")}
          </p>
          <p className="mt-5 text-base leading-relaxed text-mut">
            {t("introP2")}
          </p>
        </div>

        <div className="mt-16 space-y-16">
          <section>
            <h2 className="m-0 mb-6 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("experience.title")}
            </h2>
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
            <h2 className="m-0 mb-6 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("education.title")}
            </h2>
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
            <h2 className="m-0 mb-6 text-2xl font-semibold tracking-tight lg:text-3xl">
              {t("skills.title")}
            </h2>
            <SkillList categories={skillCategories} language={language} />
          </section>
        </div>
      </Container>
    </div>
  );
}
