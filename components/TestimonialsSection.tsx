import Image from 'next/image'

const TESTIMONIALS = [
  {
    quote:
      'SHPE transformed my career path. The network and mentorship are priceless.',
    name: 'Monica Morales',
  },
  {
    quote:
      'Joining SHPE-–UWM was the best decision of my college experience.',
    name: 'Tyler Junk',
  },
  {
    quote:
      'I gained lifelong friends and professional growth opportunities.',
    name: 'Lexi Kossow',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Hear From Our Alumni</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src="/images/placeholder-profile.jpg"
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <span className="font-semibold">{t.name}</span>
              </div>
              <p className="text-gray-600">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
