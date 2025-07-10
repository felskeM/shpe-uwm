// app/sponsors/page.tsx
import Image from 'next/image'

const sponsors = Array.from({ length: 6 }).map((_, i) => ({
  name: `Sponsor ${i + 1}`,
  logo: '/images/placeholder-logo.png',
}))

export default function SponsorsPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-shpe-dark mb-12">
        Our Sponsors
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {sponsors.map(({ name, logo }) => (
          <div key={name} className="flex justify-center">
            <Image
              src={logo}
              alt={name}
              width={100}
              height={60}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
