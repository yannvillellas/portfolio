import { Link } from "@/i18n/navigation";
import type { NavigationItem } from "@/components/navigation/NavigationContainer";

interface NavLinksProps {
  items: NavigationItem[];
  variant: "desktop" | "mobile";
}

export default function NavLinks({ items, variant }: NavLinksProps) {
  const isMobile = variant === "mobile";

  return (
    <>
      {items.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={`text-foreground font-medium font-heading no-underline transition-colors hover:text-(--accent) ${
            isMobile
              ? "flex flex-col items-center gap-1 text-xs px-2 py-1"
              : "text-base duration-300"
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
      ))}
    </>
  );
}
