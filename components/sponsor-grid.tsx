import Image from "next/image";


type Sponsor = {
    name: string;
    src: string;
    href?: string;
};

const sponsors: Sponsor[] = [
    { name: "GE HealthCare", src: "/images/GELogo.png", href: "https://www.gehealthcare.com/" },
    { name: "Eaton", src: "/images/EatonLogo.png", href: "https://www.eaton.com/us/en-us.html" },
]


export function SponsorGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((s) => {
                const Tile = (
                    <div
                        className="group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-[2px]"
                        style={{
                            background: "color-mix(in oklab, var(--shpe-secondary) 18%, transparent)",
                            border: "1px solid color-mix(in oklab, white 10%, transparent)",
                            boxShadow: "0 1px 2px rgb(0 0 0 / 0.25), 0 8px 24px rgb(0 0 0 / 0.35)",
                        }}
                    >
                        <span className="relative h-10 w-28 shrink-0">
                            <Image
                                src={s.src}
                                alt={s.name}
                                fill
                                sizes="(max-width: 640px) 120px, 160px"
                                className="object-contain brightness-95 contrast-110 opacity-80 transition-[filter,opacity] duration-200 group-hover:opacity-100"
                            />
                        </span>
                        <span className="min-w-0 text-sm font-medium truncate text-zinc-200">
                            {s.name}
                        </span>
                    </div>
                );

                return s.href ? (
                    <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${s.name} website`}
                        className="block"
                    >
                        {Tile}
                    </a>
                ) : (
                    <div key={s.name}>{Tile}</div>
                );
            })}
        </div>
    );
}