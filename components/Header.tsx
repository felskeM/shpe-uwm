// components/Header.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Board", href: "/board" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full text-white shadow bg-shpe-main-navy">
      <div className="container flex items-center justify-between p-4 mx-auto">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/shpe-logo.webp"
            alt="SHPE Logo"
            width={100}
            height={100}
            className="float-left h-auto max-w-3xs"
          />
          <span className="text-xl font-bold">SHPE-UWM</span>
        </Link>
        <nav className="hidden space-x-8 md:flex">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="transition hover:text-shpe-orange"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
