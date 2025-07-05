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
    <header className="fixed top-0 w-full bg-shpe-main-navy text-white z-50 shadow">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/"><span className="font-bold text-xl">SHPE-UWM</span></Link>
        <nav className="hidden md:flex space-x-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-shpe-orange transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}