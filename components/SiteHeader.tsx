"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { Container } from "@/components/container";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/navigation";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);
  useEffect(() => {
    if (!open) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-(--line)">
      <Container className="flex min-h-20 flex-wrap items-center justify-between gap-x-5 py-4">
        <Logo />
        <button
          ref={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="site-navigation"
          className="btn-ghost p-3 lg:hidden!"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`${open ? "flex" : "hidden"} mt-4 w-full flex-col gap-1 border-t border-(--line) pt-4 lg:mt-0 lg:flex lg:w-auto lg:flex-row lg:border-0 lg:pt-0`}
        >
          {navigation.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={pathname === href ? "page" : undefined}
              onClick={() => setOpen(false)}
              className="nav-link rounded-xl px-4 py-3 text-sm font-medium"
            >
              {label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
