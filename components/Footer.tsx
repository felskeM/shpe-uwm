import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-shpe-mainNavy text-shpe-lightGray py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-bold">SHPE-UWM</h3>
          <p>Empowering Hispanic STEM leaders.</p>
        </div>
        <div className="space-x-4">
          {['Instagram', 'LinkedIn', 'Facebook'].map((site) => (
            <Link
              key={site}
              href="#"
              className="hover:text-shpe-red transition"
            >
              {site}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
