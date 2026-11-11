import Container from "@/components/layout/Container";
import Prose from "@/components/ui/Prose";

interface ProjectArticleProps {
  detail?: string[];
}

export default function ProjectArticle({ detail }: ProjectArticleProps) {
  if (!detail) return null;

  return (
    <section className="pt-16 pb-24">
      <Container>
        <Prose>
          {detail.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </Prose>
      </Container>
    </section>
  );
}
