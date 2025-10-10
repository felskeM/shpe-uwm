import Image from '@/components/BpImage';
import { cn } from "@/lib/cn";

type Props = {
    src: string;
    alt: string;
    className?: string;
    position?: string;
};

export function Avatar({ src, alt, className, position = "center top" }: Props) {
    return (
        <div className={cn("relative h-24 w-24 overflow-hidden rounded-2xl", className)}>
            <Image
                src={src}
                alt={alt}
                fill
                sizes="96px"
                className="object-cover"
                style={{ objectPosition: position }}
                priority
            />
        </div>
    );
}
