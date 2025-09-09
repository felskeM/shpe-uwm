import Image from "next/image";
import { Card } from "@/components/card";


export function EventCard({ title, date, location, image = "/images/placeholder-event.jpg", href = "#" }: { title: string; date: string; location: string; image?: string; href?: string; }) {
    return (
        <a href={href} className="group block">
            <Card className="overflow-hidden p-0">
                <div className="relative aspect-[16/9]">
                    <Image src={image} alt="event" fill className="object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                </div>
                <div className="p-5">
                    <div className="text-xs uppercase tracking-wide text-amber-700 dark:text-amber-400">{date} • {location}</div>
                    <h3 className="mt-2 text-lg font-semibold">{title}</h3>
                </div>
            </Card>
        </a>
    );
}