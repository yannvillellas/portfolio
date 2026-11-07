"use client";

import { ArrowLeft } from "lucide-react";
import { usePathname, useRouter } from "@/i18n/navigation";

interface BackLinkProps {
  label: string;
}

export default function BackLink({ label }: BackLinkProps) {
  const router = useRouter();
  const pathname = usePathname();

  const goBack = () => {
    let previous: string | null = null;

    try {
      previous = sessionStorage.getItem("previous-path");
    } catch {
      previous = null;
    }

    if (previous && previous !== pathname) {
      router.back();
      return;
    }

    router.push("/");
  };

  return (
    <button
      type="button"
      onClick={goBack}
      className="inline-flex h-11 cursor-pointer items-center gap-2 text-sm text-mut transition-colors hover:text-ink"
    >
      <ArrowLeft size={16} aria-hidden="true" />
      {label}
    </button>
  );
}
