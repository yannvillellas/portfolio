import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  wide?: boolean;
  className?: string;
}

export default function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-6 md:px-8 ${
        wide ? "max-w-7xl" : "max-w-6xl"
      } ${className}`}
    >
      {children}
    </div>
  );
}
