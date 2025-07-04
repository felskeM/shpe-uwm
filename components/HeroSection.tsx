import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative h-screen">
      <Image
        src="/images/placeholder-hero.jpg"
        alt="Hero placeholder"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold">
          Leading Hispanics in STEM
        </h1>
        <p className="mt-4 text-white text-lg md:text-2xl max-w-2xl">
          SHPE is the nation’s largest association dedicated to fostering Hispanic
          leadership in the STEM field.
        </p>
        <Link
          href="#programs"
          className="mt-6 px-6 py-3 bg-shpe-red hover:bg-shpe-orange text-white rounded-xl font-medium transition"
        >
          Explore Programs
        </Link>
      </div>
    </section>
  )
}
