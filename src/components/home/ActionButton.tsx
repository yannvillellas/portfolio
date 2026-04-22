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
      className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/50 px-4 py-2.5 font-heading font-bold text-accent no-underline transition-all duration-200 hover:-translate-y-px hover:border-accent-hover hover:bg-accent/10 hover:text-accent-hover"
    >
      <span>{label}</span>
      <span aria-hidden="true">{"->"}</span>
    </Link>
  );
}
