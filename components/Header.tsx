'use client'
import Link from 'next/link'

const NAV = [
  { label: 'About Us', href: '#features' },
  { label: 'Programs', href: '#programs' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed w-full bg-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <span className="font-bold text-xl">SHPE-UWM</span>
        </Link>
        <nav className="space-x-6 hidden md:flex">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-red-600">
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile menu button if you want */}
      </div>
    </header>
  )
}
