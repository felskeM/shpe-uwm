import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = { className?: string };

export function Logo({ className }: Props) {
    return (
    <Link
            href="/"
            aria-label="SHPE UWM home"
            className={cn("group flex items-center gap-3", className)}
        >
            <Image
                src="/images/shpe-logo.webp"
                alt="SHPE logo"
                width={0}
                height={0}
                sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 320px"
                className="object-contain w-auto h-auto sm:h-14 md:h-16 lg:h-20"
                priority
            />

            {/* Divider */}
            <span className="w-px h-14 sm:block md:h-12 bg-white/20" />

            <span className="text-base font-semibold tracking-tight text-white whitespace-nowrap sm:text-lg md:text-xl lg:text-2xl">
                University of <br /> Wisconsin–Milwaukee
            </span>
        </Link>
    );
}
