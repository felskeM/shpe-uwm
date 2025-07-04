import Image from 'next/image'

const FEATURES = [
  {
    title: 'Professional Growth',
    desc: 'Workshops, mentorship, & corporate networking.',
  },
  {
    title: 'Leadership Development',
    desc: 'Hands-on roles and events to build real skills.',
  },
  {
    title: 'Lifelong Community',
    desc: 'A familia that lasts long after graduation.',
  },
]

export default function FeatureSection() {
  return (
    <section
      id="features"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="text-center">
              <div className="mx-auto w-20 h-20">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt="icon"
                  width={80}
                  height={80}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
