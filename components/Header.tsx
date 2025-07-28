"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Board", href: "/board" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClasses = [
    "fixed top-0 w-full z-50 transition-colors duration-300",
    scrolled
      ? "bg-white text-shpe-secondary shadow-md dark:bg-shpe-secondary/90 dark:text-white"
      : "bg-transparent text-white",
  ].join(" ");

  return (
    <header className={headerClasses}>
      <div className="container flex items-center justify-between p-4 mx-auto">
        {/* Logo as Link without nested <a> */}
        <Link href="/" className="text-xl font-bold">
          SHPE-UWM
        </Link>

        {/* Desktop nav */}
        <nav className="hidden space-x-8 md:flex">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-shpe-primary"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-shpe-primary"
          aria-label="Toggle menu"
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="bg-white shadow-lg md:hidden dark:bg-shpe-secondary">
          <ul className="flex flex-col p-4 space-y-2">
            {NAV.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block px-4 py-2 rounded hover:bg-shpe-light-gray dark:hover:bg-shpe-secondary/80"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
