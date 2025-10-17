"use client";
import Image from "@/components/BpImage";

export type SponsorLogo = {
    name: string;
    src: string;
    href?: string;
};

function SponsorItem({ s }: { s: SponsorLogo }) {
    const card = (
        <div
            className="logo-stage w-[180px] sm:w-[220px] flex-none flex items-center justify-center"
            title={s.name}
        >
            <Image
                src={s.src}
                alt={s.name}
                width={160}
                height={64}
                className="logo-img max-h-12"
            />
        </div>
    );
    return s.href ? (
        <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            aria-label={s.name}
        >
            {card}
        </a>
    ) : (
        card
    );
}

export function SponsorMarquee({ items }: { items: SponsorLogo[] }) {
    return (
        <div className="rounded-2xl border-soft surface-navy-18 p-4">
            <div className="marquee">
                {/* Track A */}
                <div className="marquee-track">
                    {items.map((s) => (
                        <SponsorItem key={`A-${s.name}`} s={s} />
                    ))}
                </div>

                {/* Track B: same content, starts at +100% via --offset */}
                <div className="marquee-track is-b" aria-hidden="true">
                    {items.map((s) => (
                        <SponsorItem key={`B-${s.name}`} s={s} />
                    ))}
                </div>
            </div>
        </div>
      );
}
