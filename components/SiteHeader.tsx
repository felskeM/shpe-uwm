"use client";

import { cn } from "@/lib/cn";
import { useEffect, useState } from "react";
import Link from "next/link";
import type { Route } from "next";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { usePathname } from "next/navigation";

type SessionUser = {
  id: number;
  name: string | null;
  email: string;
  role: string;
};

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
] as const satisfies ReadonlyArray<{ href: Route; label: string }>;

const baseNavItem =
  "relative rounded-xl px-3.5 py-2.5 text-[0.95rem] outline-none text-[color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-(--foreground) hover:bg-[color-mix(in_oklab,white_5%,transparent)]";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    void (async () => {
      try {
        const res = await fetch("/api/me", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as SessionUser;
        if (data && data.email) {
          setUser(data);
        }
      } catch {
        // treat as not logged in
      }
    })();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    void (async () => {
      try {
        await fetch("/api/logout", { method: "POST" });
      } catch {
        // ignore errors, still nuke local state
      } finally {
        setUser(null);
        window.location.href = "/";
      }
    })();
  };

  const displayName = user?.name || user?.email?.split("@")[0] || "Member";

  const authItems = user
    ? ([
      { key: "user", type: "label" as const, label: displayName },
      { key: "logout", type: "logout" as const, label: "Logout" },
    ] as const)
    : ([
      { key: "login", type: "login" as const, label: "Board Login" },
    ] as const);

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

          {/* DESKTOP NAV ONLY */}
          <nav className="items-center hidden gap-1.5 md:flex">
            {nav.map((n) => {
              const active = pathname === n.href;
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={cn(
                    baseNavItem,
                    active &&
                    "text-(--foreground) bg-[rgba(16,33,58,0.55)] ring-1 ring-white/10 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]",
                  )}
                >
                  <span className="relative inline-flex items-center">
                    {n.label}
                  </span>
                  {active && (
                    <span
                      className={cn(
                        "pointer-events-none absolute left-3 right-3 -bottom-[7px] h-0.5 rounded-full",
                        "bg-[linear-gradient(90deg,var(--shpe-orange),var(--shpe-sky))]",
                      )}
                    />
                  )}
                </Link>
              );
            })}

            {/* Auth items */}
            {authItems.map((item) => {
              if (item.type === "label") {
                return (
                  <span
                    key={item.key}
                    className={cn(
                      baseNavItem,
                      "cursor-default text-white/80 hover:bg-transparent",
                    )}
                  >
                    {item.label}
                  </span>
                );
              }

              if (item.type === "logout") {
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={handleLogout}
                    className={baseNavItem}
                  >
                    {item.label}
                  </button>
                );
              }

              return (
                <Link
                  key={item.key}
                  href="/login"
                  className={baseNavItem}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* MOBILE NAV ONLY */}
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="md:hidden rounded-lg p-2 text-[color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-(--foreground) hover:bg-[color-mix(in_oklab,white_5%,transparent)] focus-brand"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="md:hidden border-t border-white/10 bg-[rgba(10,16,28,0.85)] backdrop-blur-md shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.6)]"
          >
            <nav className="flex flex-col gap-1 p-3 text-base font-medium">
              {nav.map((n) => {
                const active = pathname === n.href;
                return (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-xl px-3 py-2.5 outline-none text-[color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-(--foreground) hover:bg-[color-mix(in_oklab,white_5%,transparent)]",
                      active &&
                      "text-(--foreground) bg-[rgba(16,33,58,0.55)] ring-1 ring-white/10",
                      "focus-brand",
                    )}
                  >
                    {n.label}
                  </Link>
                );
              })}

              {user ? (
                <>
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      handleLogout();
                    }}
                    className="mt-2 rounded-xl px-3 py-2.5 text-left outline-none text-[color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-(--foreground) hover:bg-[color-mix(in_oklab,white_5%,transparent)]"
                  >
                    Logout
                  </button>
                  <span className="mt-1 text-sm text-white/70">
                    {displayName}
                  </span>
                </>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="mt-2 rounded-xl px-3 py-2.5 outline-none text-[color-mix(in_oklab,var(--foreground)_90%,transparent)] hover:text-(--foreground) hover:bg-[color-mix(in_oklab,white_5%,transparent)]"
                >
                  Board Login
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
