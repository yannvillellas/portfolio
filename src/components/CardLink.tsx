import { Link } from "@/i18n/navigation";
import type { ReactNode } from "react";

interface CardLinkProps {
  children: ReactNode;
  href: string;
  external?: boolean;
  bgHover?: boolean;
  className?: string;
}

export default function CardLink({
  children,
  href,
  external,
  bgHover,
  className = "",
}: CardLinkProps) {
  const base = [
    "group",
    "rounded-2xl",
    "border border-foreground/10",
    "bg-background-secondary/20",
    "transition-colors",
    "hover:border-foreground/20",
    bgHover && "hover:bg-background-secondary/30",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={base}>
      {children}
    </Link>
  );
}
