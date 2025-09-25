"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  return (
    <header className="relative header">
      <div className="header-underline" />
      <div className="flex items-center justify-between px-2 mx-auto h-14 sm:h-16 sm:px-3 lg:h-20 lg:px-6">
        <Logo />
        <nav className="items-center hidden gap-1 text-sm md:flex">
          {nav.map((n) => {
            const active = pathname === n.href;
            return (
              <Link
                key={n.href}
                href={n.href}
                className={cn(
                  "rounded-lg px-3 py-2 transition-colors",
                  active
                    ? "bg-[color-mix(in_oklab,var(--shpe-secondary)_25%,transparent)] text-white border border-soft"
                    : "text-zinc-300 hover:bg-[color-mix(in_oklab,var(--shpe-secondary)_18%,transparent)] hover:text-white"
                )}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="p-3 border-t shadow-sm md:hidden border-zinc-800/70 bg-zinc-950/90 backdrop-blur-md">
          <nav className="flex flex-col gap-1 text-sm font-medium">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    "rounded-lg px-3 py-2 transition-colors",
                    active
                      ? "border-soft surface-secondary-16 text-white"
                      : "text-zinc-300 hover:surface-secondary-12 hover:text-white"
                  )}
                >
                  {n.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}