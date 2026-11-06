interface TerminalLineTextProps {
  text: string;
}

export default function TerminalLineText({ text }: TerminalLineTextProps) {
  const timestamp = text.match(/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2})(.*)$/);
  if (timestamp) {
    const rest = timestamp[2];
    const odds = rest.match(/^(.*)(\[[^\]]+\])$/);
    return (
      <>
        <span className="text-chrome">{timestamp[1]}</span>
        {odds ? (
          <>
            <span className="text-ink">{odds[1]}</span>
            <span className="text-accent-on-panel">{odds[2]}</span>
          </>
        ) : (
          <span className="text-ink">{rest}</span>
        )}
      </>
    );
  }

  if (text.startsWith("$")) {
    return (
      <>
        <span className="text-accent-on-panel">$</span>
        <span className="text-ink">{text.slice(1)}</span>
      </>
    );
  }

  const speaker = text.match(/^(you:|Coach:)(.*)$/);
  if (speaker) {
    return (
      <>
        <span className="font-semibold text-accent-on-panel">{speaker[1]}</span>
        <span className="text-ink">{speaker[2]}</span>
      </>
    );
  }

  if (text.startsWith("Applied")) {
    return <span className="text-accent-on-panel">{text}</span>;
  }

  return <span className="text-ink">{text}</span>;
}
