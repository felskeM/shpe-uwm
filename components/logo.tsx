import Image from "@/components/BpImage";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Props = { className?: string };

export function Logo({ className }: Props) {
  return (
    <Link
      href="/"
      aria-label="SHPE UWM home"
      className={cn("group flex items-center gap-3 shrink-0", className)}
    >
      <Image
        src="/images/shpe-logo.webp"
        alt="SHPE logo"
        width={320}
        height={90}
        className="block h-10 sm:h-8 lg:h-10 w-auto shrink-0 object-contain"
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 320px"
        priority
      />

      <span className="hidden sm:block w-px h-12 md:h-12 lg:h-14 bg-[color-mix(in_oklab,var(--foreground)_20%,transparent)]" />

      <span className="hidden sm:inline font-medium text-(--foreground) whitespace-nowrap md:text-sm lg:text-base">
        University of
        <br className="hidden md:inline" />
        Wisconsin–Milwaukee
      </span>
    </Link>
  );
}
