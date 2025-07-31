// app/sponsors/page.tsx
import Image from 'next/image'
import Link from 'next/link'

type Sponsor = {
  name: string
  logo: string
  description: string
}

const sponsors: Sponsor[] = [
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
    <main className="min-h-screen pt-24 bg-shpe-light-gray">
      <section className="container px-4 py-12 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold text-shpe-secondary">
          Our Sponsoring Partners
        </h1>
        <p className="max-w-2xl mx-auto text-shpe-dark/75">
          SHPE at UWM could never succeed reaching our mission without the generous support of these organizations.
        </p>
      </section>
      <section className='flex py-12 bg-white bg-shpe-light-gray'>
        <div className="container flex flex-col items-center px-4 mx-auto">
          <h2 className="mb-6 text-2xl font-semibold text-shpe-primary">
            Sponsors
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {sponsors.map(({ name, logo, description }) => (
              <div
                key={name}
                className="flex flex-col items-center p-4 transition rounded-lg shadow-sm bg-shpe-secondary hover:shadow-lg"
              >
                <div className="relative w-20 h-20">
                  <Image
                    src={logo}
                    alt={name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-3 text-sm font-medium text-center text-shpe-light-gray">
                  {name}
                </span>
                <p className="mt-1 text-xs text-center text-shpe-light-gray">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 text-center text-white bg-shpe-secondary">
        <div className="container px-4 mx-auto">
          <h3 className="mb-4 text-2xl font-bold">
            Want to see your logo here?
          </h3>
          <p className="max-w-lg mx-auto mb-6">
            Partner with SHPE-UWM to support Hispanic STEM leaders—and get
            your brand in front of our passionate community.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 font-semibold transition transform rounded-full bg-shpe-primary hover:bg-shpe-accent hover:scale-105"
          >
            Become a Sponsor
          </Link>
        </div>
      </section>
    </main >
  )
}