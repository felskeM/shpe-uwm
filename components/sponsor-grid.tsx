import Image from "next/image";
import { Card } from "./card";


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
                    <Card className="flex items-center gap-4 p-6 border-soft surface-navy-18 transition-transform hover:-translate-y-[2px] hover:border-[color-mix(in_oklab,var(--shpe-light-blue)_55%,transparent)]">
                        <div
                            className="group flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-[2px] border-soft surface-secondary-16">
                            <Image
                                src={s.src}
                                alt={s.name}
                                fill
                                sizes="(max-width: 640px) 120px, 160px"
                                className="object-contain brightness-95 contrast-110 opacity-80 transition-[filter,opacity] duration-200 group-hover:opacity-100"
                            />
                        </div>
                        <div className="font-medium truncate text-zinc-100">{s.name}</div>
                    </Card>
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