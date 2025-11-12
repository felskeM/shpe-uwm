"use client";
import { useEffect, useRef } from "react";
import Image from "@/components/BpImage";

export type SponsorLogo = {
    name: string;
    src: string;
    href?: string;
};

function SponsorItem({ s }: { s: SponsorLogo }) {
    const card = (
        <div
            className="logo-stage min-w-[220px] sm:min-w-[260px] flex-none flex items-center justify-center"
            title={s.name}
        >
            <Image
                src={s.src}
                alt={s.name}
                width={220}
                height={80}
                className="logo-img block h-16 sm:h-20 w-auto object-contain filter-none"
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
    const railRef = useRef<HTMLDivElement>(null);
    // quadruple items in same rail until more sponsors
    const quadrupled = [...items, ...items, ...items, ...items];
    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;
        const total = rail.scrollWidth;
        // loop distance == half marguee loop
        rail.style.setProperty("--marquee-dist", `${Math.floor(total / 2)}px`);

        // Duration/distance
        const pxPerSec = 30;
        const dur = Math.max(12, Math.round((total / 2) / pxPerSec));
        rail.style.setProperty("--marquee-dur", `${dur}s`);

        // Content circle at breakpoints
        const ro = new ResizeObserver(() => {
            const t = rail.scrollWidth;
            rail.style.setProperty("--marquee-dist", `${Math.floor(t / 2)}px`);
            rail.style.setProperty("--marquee-dur", `${Math.max(12, Math.round((t / 2) / pxPerSec))}s`);
        });
        ro.observe(rail);
        return () => ro.disconnect();
    }, []);

    return (
        <div className="rounded-2xl border-soft surface-navy-18 p-4 overflow-hidden">
            <div className="relative">
                <div
                    ref={railRef}
                    className="flex gap-8 sm:gap-12 will-change-transform animate-[shpe-marquee_var(--marquee-dur,30s)_linear_infinite]"
                    style={{ width: "max-content" }}
                >
                    {quadrupled.map((s, i) => (
                        <SponsorItem key={`${s.name}-${i}`} s={s} />
                    ))}
                </div>
            </div>
        </div>
      );
}
