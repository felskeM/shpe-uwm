export default function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="grid gap-12 md:grid-cols-3">
          {[
            'Develop critical leadership & professional skills.',
            'Build a strong network of peers & professionals.',
            'Gain real-world opportunities to apply expertise.',
          ].map((text) => (
            <div key={text} className="border p-6 rounded-lg shadow hover:shadow-lg transition">
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
