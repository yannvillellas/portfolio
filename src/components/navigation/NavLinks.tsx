"use client";

import { Link, usePathname } from "@/i18n/navigation";
import type { NavigationItem } from "@/components/navigation/NavigationContainer";

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
        const isActive = isMobile && pathname === item.link;

        return (
          <Link
            key={item.link}
            href={item.link}
            className={`font-medium font-heading no-underline transition-colors ${
              isMobile
                ? `flex flex-col items-center gap-1 text-xs px-2 py-1 ${
                    isActive ? "text-(--accent)" : "text-foreground"
                  }`
                : "text-foreground text-base duration-300 hover:text-(--accent)"
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
