import React from "react";
import { Link } from "@/i18n/navigation";
import { NavigationItem } from "./NavigationContainer";

interface NavLinksProps {
  items: NavigationItem[];
  variant: "desktop" | "mobile";
  onItemClick?: () => void;
}

export default function NavLinks({
  items,
  variant,
  onItemClick,
}: NavLinksProps) {
  const isMobile = variant === "mobile";

  return (
    <>
      {items.map((item, idx) => (
        <Link
          key={idx}
          href={item.link}
          onClick={onItemClick}
          className={
            isMobile
              ? "flex justify-between items-center text-2xl font-bold font-heading tracking-tight text-foreground no-underline transition-colors hover:text-(--accent)"
              : "text-base font-medium tracking-wider text-foreground no-underline transition-colors duration-300 hover:text-(--accent)"
          }
        >
          <span>{item.label}</span>
          {isMobile && (
            <span className="text-xl font-normal opacity-50">&gt;</span>
          )}
        </Link>
      ))}
    </>
  );
}
