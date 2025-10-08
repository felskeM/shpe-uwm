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
        "relative rounded-lg px-3 py-2 text-sm transition-colors outline-none",
        "text-zinc-200/90 hover:text-white",
        "hover:bg-white/5",
        active && [
          "text-white",
          "bg-[rgba(16,33,58,0.55)]",
          "ring-1 ring-white/10",
          "shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
        ],
        "focus-visible:ring-2 focus-visible:ring-[var(--shpe-sky,#68A5D0)]/60"
      )}
    >
      {children}
      <span
        className={cn(
          "pointer-events-none absolute left-2 right-2 -bottom-[6px] h-[2px] rounded-full",
          "opacity-0 transition-opacity",
          active && "opacity-100",
          "bg-[linear-gradient(90deg,var(--shpe-orange,#F26522),var(--shpe-sky,#68A5D0))]"
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
      {/* thin accent strip */}
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--shpe-orange,#F26522),var(--shpe-sky,#68A5D0))]" />

      {/* shell */}
      <div
        className={cn(
          "border-b border-white/8 backdrop-blur-md",
          // navy → slate gradient; dark, subtle
          "bg-[linear-gradient(90deg,#0C1626_0%,#0E1A2D_45%,#0B1322_100%)]"
        )}
      >
        {/* soft vignette highlight on the left, behind the logo */}
        <div className="absolute inset-0 pointer-events-none -z-10">
          <div className="absolute top-0 h-40 rounded-full -left-24 w-72 blur-3xl opacity-20 md:opacity-30"
            style={{ background: "radial-gradient(60% 60% at 40% 40%, var(--shpe-sky,#68A5D0), transparent 70%)" }} />
        </div>

        <div className="flex items-center justify-between h-16 px-2 mx-auto sm:h-20 lg:h-24 lg:px-6">
          <Logo />

          {/* desktop nav */}
          <nav className="items-center hidden gap-1 md:flex">
            {nav.map((n) => (
              <NavLink key={n.href} href={n.href} active={pathname === n.href}>
                {n.label}
              </NavLink>
            ))}
          </nav>

          {/* mobile toggle */}
          <button
            aria-label="Toggle menu"
            className="md:hidden rounded-md p-2 text-zinc-200/90 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[var(--shpe-sky,#68A5D0)]/60"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {/* mobile drawer */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-[rgba(10,16,28,0.85)] backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.6)]">
            <nav className="flex flex-col gap-1 p-3 text-sm font-medium">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    className={cn(
                      "rounded-lg px-3 py-2 transition-colors outline-none",
                      "text-zinc-200/90 hover:text-white hover:bg-white/5",
                      active && "text-white bg-[rgba(16,33,58,0.55)] ring-1 ring-white/10",
                      "focus-visible:ring-2 focus-visible:ring-[var(--shpe-sky,#68A5D0)]/60"
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
