import Image from "next/image";
import { phoneAspectRatio } from "@/lib/media";

interface PhoneFallbackView {
  src: string;
}

interface PhoneFallbackProps {
  views: PhoneFallbackView[];
  activeIndex: number;
  label: string;
}

export default function PhoneFallback({
  views,
  activeIndex,
  label,
}: PhoneFallbackProps) {
  if (views.length === 0) return null;

  return (
    <div className="mx-auto w-full max-w-40 sm:max-w-52">
      <div
        className="relative overflow-hidden rounded-4xl border border-line bg-panel"
        style={{ aspectRatio: phoneAspectRatio }}
      >
        {views.map((view, index) => (
          <Image
            key={view.src}
            src={view.src}
            alt={index === activeIndex ? label : ""}
            fill
            sizes="240px"
            className={`object-cover transition-opacity duration-400 motion-reduce:transition-none ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
