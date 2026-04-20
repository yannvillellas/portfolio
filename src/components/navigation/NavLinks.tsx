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
          className={`text-foreground font-medium font-heading no-underline transition-colors hover:text-(--accent) ${
            isMobile
              ? "flex justify-between items-center text-lg"
              : "text-base duration-300"
          }`}
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </>
  );
}
