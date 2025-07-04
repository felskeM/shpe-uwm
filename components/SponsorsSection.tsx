import Image from 'next/image'

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Sponsoring Partners
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex justify-center">
              <Image
                src="/images/placeholder-logo.png"
                alt="Sponsor logo"
                width={100}
                height={60}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
