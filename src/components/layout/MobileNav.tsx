import NavLinks from "@/components/layout/NavLinks";
import type { NavigationItem } from "@/components/layout/NavLinks";

interface MobileNavProps {
  items: NavigationItem[];
  label: string;
}

export default function MobileNav({ items, label }: MobileNavProps) {
  return (
    <nav className="mobile-tabbar sm:hidden" aria-label={label}>
      <div className="mobile-tabbar-surface grid grid-cols-4 px-1">
        <NavLinks items={items} variant="mobile" />
      </div>
    </nav>
  );
}
