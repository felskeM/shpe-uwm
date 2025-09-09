"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Container } from "@/components/container";
import { Menu, X } from "lucide-react";

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


  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/70 bg-white/70 backdrop-blur-md dark:border-zinc-800/70 dark:bg-zinc-950/70">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          SHPE <span className="text-shpe-primary">UWM</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white">
              {n.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Open Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </Container>
      {open && (
        <div className="border-t border-zinc-200/70 bg-white/90 p-4 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-950/90 md:hidden">
          <nav className="flex flex-col gap-3 text-sm font-medium">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-900">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}