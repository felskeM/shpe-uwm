'use client'
import Link from 'next/link'

const NAV = [
  { label: 'About Us', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
]

/**
 * Site header with SHPE main navy background.
 */
export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-shpe-main-navy text-shpe-orange z-50 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="font-bold text-xl">SHPE-UWM</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          {NAV.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-shpe-orange transition"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
