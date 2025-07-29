// app/sponsors/page.tsx
import Image from 'next/image'

const sponsors = [
  {
    name: 'GE Healthcare',
    logo: '/images/GELogo.png',
    description: 'Leading provider of medical imaging and healthcare IT solutions.',
  },
  {
    name: 'Eaton',
    logo: '/images/EatonLogo.png',
    description: 'Power management company providing energy-efficient solutions.',
  },
];

export default function SponsorsPage() {
  return (
    <section className="container px-4 py-20 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-shpe-dark">
        Our Sponsors
      </h1>
      <div className="grid items-center grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-6">
        {sponsors.map(({ name, logo, description }) => (
          <div key={name} className="flex justify-center">
            <Image
              src={logo}
              alt={name}
              width={100}
              height={60}
            />
            <p className="mt-1 text-xs text-center text-shpe-dark">{description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
