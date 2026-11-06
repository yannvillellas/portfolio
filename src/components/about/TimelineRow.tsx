import type { ReactNode } from "react";

interface TimelineRowProps {
  period: string;
  title: string;
  subtitle: string;
  summary?: string;
  highlights?: string[];
}

function emphasis(text: string): ReactNode[] {
  return text
    .split("**")
    .map((part, index) =>
      index % 2 === 1 ? <strong key={`${part}-${index}`}>{part}</strong> : part,
    );
}

export default function TimelineRow({
  period,
  title,
  subtitle,
  summary,
  highlights,
}: TimelineRowProps) {
  return (
    <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[var(--about-label)_1fr] sm:gap-6">
      <p className="text-sm text-mut">{period}</p>
      <div>
        <p className="mt-0 text-ink">{title}</p>
        <p className="mt-0.5 text-sm text-mut">{subtitle}</p>
        {summary && (
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-mut">
            {emphasis(summary)}
          </p>
        )}
        {highlights && (
          <ul className="mt-2 max-w-prose list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-mut marker:text-control">
            {highlights.map((highlight) => (
              <li key={highlight}>{emphasis(highlight)}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
