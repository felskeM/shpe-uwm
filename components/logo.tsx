import Image from '@/components/BpImage';
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
                className="object-contain w-auto h-auto sm:h-10 md:h-12 lg:h-14"
                priority
            />

            {/* Divider */}
            <span className="w-px h-14 sm:block md:h-12 bg-white/20" />

            <span className="leading-tight text-[15px] font-semibold tracking-tight text-white whitespace-nowrap sm:text-base md:text-lg lg:text-xl">
                University of<br className="hidden sm:inline" />Wisconsin–Milwaukee
            </span>
        </Link>
    );
}
