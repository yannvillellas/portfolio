"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "@/i18n/navigation";

interface BackLinkProps {
  label: string;
}

export default function BackLink({ label }: BackLinkProps) {
  const router = useRouter();

  const goBack = () => {
    if (window.history.length > 1) {
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
