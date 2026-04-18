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
          className={`text-foreground no-underline transition-colors hover:text-(--accent) ${
            isMobile
              ? "flex justify-between items-center text-2xl font-bold font-heading tracking-tight"
              : "text-base font-medium tracking-wider duration-300"
          }`}
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
