import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = {
    className?: string;
};

export function Logo({ className }: Props) {
    return (
        <Link href="/" className={cn("flex items-center gap-3", className)} aria-label="SHPE UWM home">
            {/* Mobile: icon only */}
            <Image
                src="/images/UWMSHPE.png"
                alt="SHPE — University of Wisconsin–Milwaukee"
                width={0}
                height={0}
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 160px, 192px"
                className="object-contain w-auto h-8 sm:h-9 md:h-10 lg:h-12"
                priority
            />
        </Link>
    );
}
