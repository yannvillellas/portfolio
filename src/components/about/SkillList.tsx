import type { SkillCategory } from "@/data/skills";

interface SkillListProps {
  categories: SkillCategory[];
  language: "en" | "fr";
}

export default function SkillList({ categories, language }: SkillListProps) {
  return (
    <div className="border-t border-line">
      {categories.map((category) => (
        <div
          key={category.key}
          className="grid gap-0.5 border-b border-line py-3 sm:grid-cols-[var(--about-label)_1fr] sm:gap-6"
        >
          <p className="text-sm text-mut">{category.label[language]}</p>
          <p className="mt-0 text-sm text-ink">
            {typeof category.items === "string"
              ? category.items
              : category.items[language]}
          </p>
        </div>
      ))}
    </div>
  );
}
