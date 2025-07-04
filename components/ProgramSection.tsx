import Image from 'next/image'

const PROGRAMS = [
  { title: 'MentorSHPE', desc: 'Grow your network & build skills.' },
  { title: 'InternSHPE', desc: 'Support during internships.' },
  { title: 'Noche de Ciencias', desc: 'Family STEM nights.' },
]

export default function ProgramSection() {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-shpe-dark mb-12">
          Our Programs
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {PROGRAMS.map((p) => (
            <div key={p.title} className="text-center">
              <div className="mx-auto w-32 h-32 text-shpe-mainNavy">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt={p.title}
                  width={128}
                  height={128}
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-shpe-dark">
                {p.title}
              </h3>
              <p className="mt-2 text-shpe-dark/75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
