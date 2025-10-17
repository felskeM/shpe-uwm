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
        width={0}
        height={0}
        sizes="(max-width: 768px) 140px, 260px"
        className="object-contain w-auto h-auto sm:h-10 md:h-12 lg:h-14"
        priority
      />

      {/* Divider — hide on small screens */}
      <span className="hidden md:block w-px h-12 lg:h-14 bg-[color:color-mix(in_oklab,var(--foreground)_20%,transparent)]" />

      {/* University text — hide on small screens, keep text for SR users */}
      <span className="sr-only md:not-sr-only md:inline leading-tight text-[15px] font-semibold tracking-tight text-[color:var(--foreground)] whitespace-nowrap sm:text-base md:text-lg lg:text-xl">
        University of
        <br className="hidden lg:inline" />
        Wisconsin–Milwaukee
      </span>
    </Link>
  );
}
