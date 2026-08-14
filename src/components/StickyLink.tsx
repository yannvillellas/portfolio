"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";

interface StickyLinkProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export default function StickyLink({
  href,
  icon,
  label,
  className = "",
}: StickyLinkProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Link
      href={href}
      className={`sticky top-(--header-offset) z-30 inline-flex items-center gap-2 rounded-2xl border p-2 text-sm text-foreground/50 transition-[background-color,backdrop-filter,border-color,color] hover:text-foreground ${
        scrolled
          ? "border-foreground/5 bg-background/20 backdrop-blur-md"
          : "border-transparent"
      } ${className}`}
    >
      {icon}
      {label}
    </Link>
  );
}
