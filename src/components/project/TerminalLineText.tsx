interface TerminalLineTextProps {
  text: string;
}

const DATE_TIME = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2})(.*)$/;
const DATE = /^(\d{4}-\d{2}-\d{2})(\s+)(.*)$/;
const GAP = /(\s{2,})/;

const COLUMNS = [
  "text-accent-on-panel",
  "text-ink",
  "text-ink",
  "text-mut-on-panel",
  "text-mut-on-panel",
  "text-chrome",
  "text-chrome",
];

function ScoreLine({ text }: { text: string }) {
  const [head, ...rest] = text.split(GAP);
  const date = head.match(DATE);
  let column = 0;

  return (
    <>
      {date ? (
        <>
          <span className="text-chrome">{date[1]}</span>
          {date[2]}
          <span className="text-ink">{date[3]}</span>
        </>
      ) : (
        <span className="text-ink">{head}</span>
      )}
      {rest.map((part, index) => {
        if (/^\s+$/.test(part)) return part;
        const className = COLUMNS[column] ?? "text-ink";
        column += 1;
        return (
          <span key={index} className={className}>
            {part}
          </span>
        );
      })}
    </>
  );
}

export default function TerminalLineText({ text }: TerminalLineTextProps) {
  const timestamp = text.match(DATE_TIME);
  if (timestamp) {
    const parts = timestamp[2].match(/^(.*?)(\[[^\]]+\])(.*)$/);
    return (
      <>
        <span className="text-chrome">{timestamp[1]}</span>
        {parts ? (
          <>
            <span className="text-ink">{parts[1]}</span>
            <span className="text-accent-on-panel">{parts[2]}</span>
            <span className="text-chrome">{parts[3]}</span>
          </>
        ) : (
          <span className="text-ink">{timestamp[2]}</span>
        )}
      </>
    );
  }

  if (DATE.test(text) && !text.startsWith("date ")) {
    return <ScoreLine text={text} />;
  }

  if (text.startsWith("date ")) {
    return <span className="text-chrome">{text}</span>;
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

  if (text.startsWith("Fetch:")) {
    return <span className="text-chrome">{text}</span>;
  }

  if (text.startsWith("Applied")) {
    return <span className="text-accent-on-panel">{text}</span>;
  }

  return <span className="text-ink">{text}</span>;
}
