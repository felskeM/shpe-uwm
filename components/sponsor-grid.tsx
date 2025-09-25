import Image from "next/image";
import { Card } from "@/components/card";

const sponsors = [
    { name: "GE HealthCare", src: "/images/GELogo.png", href: "https://www.gehealthcare.com/" },
    { name: "Eaton", src: "/images/EatonLogo.png", href: "https://www.eaton.com/us/en-us.html" },
]


export function SponsorGrid() {
    return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sponsors.map((s) => (
        <Card
          key={s.name}
          className="group flex items-center gap-4 p-5 border-soft surface-navy-18 transition-transform hover:-translate-y-[2px]"
        >
          <div className="relative h-12 w-28 shrink-0">
            <Image
              src={s.src}
              alt={s.name}
              fill
              sizes="112px"
              className="object-contain"
              priority
            />
          </div>
          <div className="truncate text-zinc-200">{s.name}</div>
        </Card>
      ))}
    </div>
  );
}