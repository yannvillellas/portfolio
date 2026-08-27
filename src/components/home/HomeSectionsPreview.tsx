import { useTranslations } from "next-intl";
import HomeSectionCard, {
  type HomeSection,
} from "@/components/home/HomeSectionCard";

export default function HomeSectionsPreview() {
  const tHome = useTranslations("HomePage");
  const tAbout = useTranslations("AboutPage");
  const tProjects = useTranslations("ProjectsPage");
  const tContact = useTranslations("ContactPage");

  const sections: HomeSection[] = [
    {
      href: "/about",
      title: tAbout("title"),
      description: tHome("aboutPreviewDescription"),
      imageToneClassName:
        "bg-gradient-to-br from-highlight/65 via-highlight/30 to-accent/55",
    },
    {
      href: "/projects",
      title: tProjects("title"),
      description: tHome("projectsPreviewDescription"),
      imageToneClassName:
        "bg-gradient-to-br from-accent/70 via-accent/40 to-highlight/45",
    },
    {
      href: "/contact",
      title: tContact("title"),
      description: tHome("contactPreviewDescription"),
      imageToneClassName:
        "bg-gradient-to-br from-highlight/60 via-accent/50 to-foreground/30",
    },
  ];

  return (
    <div className="relative z-10">
      {sections.map((section, index) => (
        <HomeSectionCard
          key={section.href}
          section={section}
          reverseOnDesktop={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
