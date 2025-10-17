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
        className="block h-10 sm:h-12 lg:h-14 w-auto shrink-0 object-contain"
        sizes="(max-width: 640px) 180px, (max-width: 1024px) 260px, 320px"
        priority
      />

      {/* Hide on small screens */}
      <span className="hidden sm:block w-px h-12 md:h-12 lg:h-14 bg-[color:color-mix(in_oklab,var(--foreground)_20%,transparent)]" />

      <span className="hidden sm:inline leading-tight text-[15px] font-semibold tracking-tight text-[color:var(--foreground)] whitespace-nowrap md:text-lg lg:text-xl">
        University of
        <br className="hidden md:inline" />
        Wisconsin–Milwaukee
      </span>
    </Link>
  );
}
