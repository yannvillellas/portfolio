import Navigation from "@/components/navigation/Navigation";

export interface NavigationItem {
  label: string;
  link: string;
  mobileIcon?: React.ReactNode;
}

export interface NavigationProps {
  items: NavigationItem[];
}

export default function NavigationContainer({ items }: NavigationProps) {
  return <Navigation items={items} />;
}
