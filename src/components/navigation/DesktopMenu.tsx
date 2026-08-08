import NavLinks from "@/components/navigation/NavLinks";
import type { NavigationItem } from "@/components/navigation/Navigation";

interface DesktopMenuProps {
  items: NavigationItem[];
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <nav className="hidden md:flex items-center gap-8">
      <NavLinks items={items} variant="desktop" />
    </nav>
  );
}
