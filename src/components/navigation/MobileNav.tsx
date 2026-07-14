import NavLinks from "@/components/navigation/NavLinks";
import type { NavigationItem } from "@/components/navigation/NavigationContainer";

interface MobileNavProps {
  items: NavigationItem[];
}

export default function MobileNav({ items }: MobileNavProps) {
  return (
    <nav className="fixed bottom-[calc(env(safe-area-inset-bottom,0)+1rem)] left-4 right-4 z-50 md:hidden">
      <div className="flex justify-around items-center nav-glass px-2 py-3">
        <NavLinks items={items} variant="mobile" />
      </div>
    </nav>
  );
}
