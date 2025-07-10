// app/page.tsx
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/placeholder-hero.jpg"
        alt="Campus chapter"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Welcome to SHPE-UWM
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl max-w-2xl">
          Empowering Hispanic STEM leaders on campus, in industry, and beyond.
        </p>
        <Link
          href="/about"
          className="mt-6 px-6 py-3 bg-shpe-red hover:bg-shpe-orange text-white rounded-xl font-medium transition"
        >
          Learn More
        </Link>
      </div>
    </section>
  )
}
