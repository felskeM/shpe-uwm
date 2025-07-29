import Link from 'next/link'

/**
 * Site footer with social links and chapter branding.
 */
export default function Footer() {
  return (
    <footer className="py-8 bg-shpe-main-navy text-shpe-light-gray">
      <div className="container flex flex-col items-center justify-between px-4 mx-auto md:flex-row">
        <div className="mb-4 text-center md:mb-0 md:text-left">
          <h3 className="text-lg font-bold text-white">SHPE-UWM</h3>
          <p className="text-shpe-light-gray">Empowering Hispanic STEM leaders.</p>
        </div>
        <div className="flex space-x-6">
          <Link
            href="https://www.linkedin.com/in/society-of-hispanic-professional-engineers-at-university-of-wisconsin-milwaukee-1b9031232/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-shpe-red"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/shpe_uwm/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-shpe-red"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  )
}
