import type { ComponentProps } from "react";
import { Link } from "@/i18n/navigation";

interface ActionButtonProps {
  href: ComponentProps<typeof Link>["href"];
  label: string;
}

export default function ActionButton({ href, label }: ActionButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex w-fit items-center gap-2 rounded-2xl border border-accent/50 px-4 py-2.5 font-heading font-bold text-accent no-underline transition-colors hover:bg-accent/10 hover:border-accent-hover hover:text-accent-hover"
    >
      <span>{label}</span>
      <svg
        aria-hidden="true"
        className="h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </Link>
  );
}
