import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import Prose from "@/components/ui/Prose";

interface ProjectArticleProps {
  detail?: string[];
}

export default function ProjectArticle({ detail }: ProjectArticleProps) {
  if (!detail) return null;

  return (
    <Section>
      <Container>
        <Prose>
          {detail.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Prose>
      </Container>
    </Section>
  );
}
