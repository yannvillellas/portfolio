import Heading from "@/components/ui/Heading";
import TextLink from "@/components/ui/TextLink";

interface SectionHeaderProps {
  title: string;
  href: string;
  linkLabel: string;
}

export default function SectionHeader({
  title,
  href,
  linkLabel,
}: SectionHeaderProps) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-line pb-4">
      <Heading level="h2" role="section">
        {title}
      </Heading>
      <TextLink href={href} tone="muted" size="sm" underline={false}>
        {linkLabel}
      </TextLink>
    </div>
  );
}
