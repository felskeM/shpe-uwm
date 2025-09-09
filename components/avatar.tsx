import Image from "next/image";
import { cn } from "@/lib/cn";


export function Avatar({ src = "/images/placeholder-officer.jpg", alt, className }: { src?: string; alt: string; className?: string }) {
    return (
        <div className={cn("relative h-20 w-20 overflow-hidden rounded-2xl", className)}>
            <Image src={src} alt={alt} fill className="object-cover" />
        </div>
    );
}