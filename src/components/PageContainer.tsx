import type { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  vertical?: boolean;
}

export default function PageContainer({
  children,
  className = "",
  vertical = true,
}: PageContainerProps) {
  return (
    <div
      className={
        vertical ? "pt-(--header-offset) pb-(--content-footer-gap)" : undefined
      }
    >
      <div className={`mx-auto w-full max-w-page px-6 md:px-12 ${className}`}>
        {children}
      </div>
    </div>
  );
}
