// app/board/page.tsx
import Image from 'next/image'

const boardMembers = [
  { name: 'Alice Alvarez', role: 'President',   img: '/images/placeholder-profile.jpg' },
  { name: 'Ben Cortez',    role: 'Vice President', img: '/images/placeholder-profile.jpg' },
  { name: 'Clara Diaz',    role: 'Treasurer',   img: '/images/placeholder-profile.jpg' },
  // …add your exec board here
]

export default function BoardPage() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h1 className="text-4xl font-bold text-shpe-dark mb-12">
        Executive Board
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        {boardMembers.map(({ name, role, img }) => (
          <div key={name} className="text-center">
            <Image
              src={img}
              alt={name}
              width={128}
              height={128}
              className="rounded-full mx-auto"
            />
            <h3 className="mt-4 text-xl font-semibold text-shpe-dark">{name}</h3>
            <p className="text-shpe-mid-navy">{role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
