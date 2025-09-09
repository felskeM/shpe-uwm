import Image from "next/image";
import { Card } from "@/components/card";


const sponsors = new Array(8).fill(null).map((_, i) => ({
    name: `Sponsor ${i + 1}`,
    src: i % 2 === 0 ? "/images/placeholder-sponsor-dark.png" : "/images/placeholder-sponsor-light.png",
}));


export function SponsorGrid() {
    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {sponsors.map((s) => (
                <Card key={s.name} className="flex items-center justify-center p-6">
                    <div className="relative h-10 w-28 opacity-80">
                        <Image src={s.src} alt={s.name} fill className="object-contain" />
                    </div>
                </Card>
            ))}
        </div>
    );
}