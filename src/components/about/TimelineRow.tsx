interface TimelineRowProps {
  period: string;
  title: string;
  subtitle: string;
}

export default function TimelineRow({
  period,
  title,
  subtitle,
}: TimelineRowProps) {
  return (
    <div className="grid gap-1 border-b border-line py-4 sm:grid-cols-[var(--about-label)_1fr] sm:gap-6">
      <p className="text-sm text-mut">{period}</p>
      <div>
        <p className="mt-0 text-ink">{title}</p>
        <p className="mt-0.5 text-sm text-mut">{subtitle}</p>
      </div>
    </div>
  );
}
