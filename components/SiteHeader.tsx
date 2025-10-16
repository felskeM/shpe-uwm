"use client";

import { cn } from "@/lib/cn";
import { useState } from "react";
import Link from "next/link";
import type { Route } from "next";
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
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

function NavLink({
  href,
  active,
  children,
}: {
  href: Route;
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-xl px-3.5 py-2.5 text-[0.95rem] outline-none",
        "text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-[color:var(--foreground)] hover:bg-[color-mix(in_oklab,white_5%,transparent)]",
        active &&
          "text-[color:var(--foreground)] bg-[rgba(16,33,58,0.55)] ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
      )}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute left-3 right-3 -bottom-[7px] h-[2px] rounded-full opacity-0 transition-opacity",
          active && "opacity-100",
          "bg-[linear-gradient(90deg,var(--shpe-orange),var(--shpe-sky))]",
        )}
      />
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative top-0 z-50 w-full">
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--shpe-orange),var(--shpe-sky))]" />
      <div
        className={cn(
          "border-b border-white/8 backdrop-blur-md",
          "bg-[linear-gradient(90deg,#0C1626_0%,#0E1A2D_45%,#0B1322_100%)]",
        )}
      >
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[70px] px-3 lg:px-6">
          <div className="scale-[.9] sm:scale-100">
            <Logo />
          </div>
          <nav className="items-center hidden gap-1.5 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} active={pathname === n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* MOBILE NAV ONLY */}
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-lg p-2 text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-[color:var(--foreground)] hover:bg-[color-mix(in_oklab,white_5%,transparent)] focus-brand"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[rgba(10,16,28,0.85)] backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.6)]">
            <nav className="flex flex-col gap-1 p-3 text-base font-medium">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "rounded-xl px-3 py-2.5 outline-none text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-[color:var(--foreground)] hover:bg-[color-mix(in_oklab,white_5%,transparent)]",
                      active &&
                        "text-[color:var(--foreground)] bg-[rgba(16,33,58,0.55)] ring-1 ring-white/10",
                      "focus-brand",
                    )}
                  >
                    {n.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
