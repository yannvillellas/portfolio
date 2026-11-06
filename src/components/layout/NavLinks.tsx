"use client";

import type { ReactNode } from "react";
import { Link, usePathname } from "@/i18n/navigation";

export interface NavigationItem {
  label: string;
  link: string;
  mobileIcon?: ReactNode;
}

interface NavLinksProps {
  items: NavigationItem[];
  variant: "desktop" | "mobile";
}

export default function NavLinks({ items, variant }: NavLinksProps) {
  const pathname = usePathname();
  const isMobile = variant === "mobile";
  const links = isMobile ? items : items.filter((item) => item.link !== "/");

  return (
    <>
      {links.map((item) => {
        const isActive =
          item.link === "/"
            ? pathname === "/"
            : pathname === item.link || pathname.startsWith(`${item.link}/`);

        return (
          <Link
            key={item.link}
            href={item.link}
            aria-current={isActive ? "page" : undefined}
            className={
              isMobile
                ? `flex h-full flex-col items-center justify-center gap-1 text-xs font-medium transition-colors ${
                    isActive ? "text-accent" : "text-mut"
                  }`
                : `text-sm transition-colors ${
                    isActive ? "text-ink" : "text-mut hover:text-ink"
                  }`
            }
          >
            {isMobile && item.mobileIcon}
            <span>{item.label}</span>
          </Link>
        );
      })}
    </>
  );
}
