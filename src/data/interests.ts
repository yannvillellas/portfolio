type Locale = "en" | "fr";

const data: Record<Locale, string> = {
  en: "Sports (ski, rugby, cycling, kayak), tech watch",
  fr: "Sports (ski, rugby, cyclisme, kayak), veille technologique",
};

export function getInterests(locale: Locale): string {
  return data[locale];
}
