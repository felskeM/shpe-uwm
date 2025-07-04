import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-bold">SHPE-UWM</h3>
          <p>Empowering Hispanic STEM leaders.</p>
        </div>
        <div className="space-x-4">
          <Link href="#" className="hover:text-white">Instagram</Link>
          <Link href="#" className="hover:text-white">LinkedIn</Link>
          <Link href="#" className="hover:text-white">Facebook</Link>
        </div>
      </div>
    </footer>
  )
}
