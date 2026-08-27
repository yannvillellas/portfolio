"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { NavigationItem } from "@/components/navigation/Navigation";

interface NavLinksProps {
  items: NavigationItem[];
  variant: "desktop" | "mobile";
}

export default function NavLinks({ items, variant }: NavLinksProps) {
  const isMobile = variant === "mobile";
  const pathname = usePathname();

  return (
    <>
      {items.map((item) => {
        const isActive = pathname === item.link;

        return (
          <Link
            key={item.link}
            href={item.link}
            className={`no-underline transition-colors ${
              isMobile
                ? `flex flex-col items-center gap-1 font-medium text-xs px-2 py-1 ${
                    isActive ? "text-accent" : "text-foreground"
                  }`
                : `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`
            }`}
          >
            {isMobile && item.mobileIcon ? (
              <>
                {item.mobileIcon}
                <span>{item.label}</span>
              </>
            ) : (
              <span>{item.label}</span>
            )}
          </Link>
        );
      })}
    </>
  );
}
