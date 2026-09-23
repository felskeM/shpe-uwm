import Image from "@/components/BpImage";
import type { Sponsor } from "@/lib/sponsors";

export function SponsorMarquee({ items }: { items: Sponsor[] }) {
  return (
    <div className="sponsor-rail rounded-2xl border border-(--line) bg-white/5 py-6">
      <div className="sponsor-track">
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            className="sponsor-group"
            aria-hidden={copy > 0 || undefined}
            inert={copy > 0 || undefined}
          >
            {items.map((sponsor) => (
              <a
                key={sponsor.name}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 w-44 shrink-0 items-center justify-center rounded-xl p-2"
                aria-label={sponsor.name}
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.name}
                  width={220}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
