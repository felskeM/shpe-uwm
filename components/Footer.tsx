import Link from 'next/link'

/**
 * Site footer with social links and chapter branding.
 */
export default function Footer() {
  return (
    <footer className="bg-shpe-main-navy text-shpe-light-gray py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-white text-lg font-bold">SHPE-UWM</h3>
          <p className="text-shpe-light-gray">Empowering Hispanic STEM leaders.</p>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://www.facebook.com/shpeuwm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-shpe-red transition"
          >
            Facebook
          </Link>
          <Link
            href="https://twitter.com/shpeuwm"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-shpe-red transition"
          >
            Twitter
          </Link>
          <Link
            href="https://www.instagram.com/shpe_uwm/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-shpe-red transition"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
