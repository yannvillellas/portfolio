import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

interface ProjectArticleProps {
  detail?: string[];
}

export default function ProjectArticle({ detail }: ProjectArticleProps) {
  if (!detail) return null;

  return (
    <Section>
      <Container>
        <div className="max-w-prose space-y-5">
          {detail.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-base leading-relaxed text-mut"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
