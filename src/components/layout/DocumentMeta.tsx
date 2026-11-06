"use client";

import { useEffect } from "react";

interface DocumentMetaProps {
  lang: string;
  title: string;
}

export default function DocumentMeta({ lang, title }: DocumentMetaProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = `${title} · Yann Villellas`;
  }, [lang, title]);

  return null;
}
