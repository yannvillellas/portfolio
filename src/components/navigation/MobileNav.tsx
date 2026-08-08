import NavLinks from "@/components/navigation/NavLinks";
import type { NavigationItem } from "@/components/navigation/Navigation";

interface MobileNavProps {
  items: NavigationItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <nav className="fixed bottom-[calc(env(safe-area-inset-bottom,0)+var(--chrome-inset-y))] left-(--chrome-inset-x) right-(--chrome-inset-x) z-50 md:hidden">
      <div className="flex justify-around items-center h-(--mobile-nav-height) nav-glass px-2">
        <NavLinks items={items} variant="mobile" />
      </div>
    </nav>
  );
}
