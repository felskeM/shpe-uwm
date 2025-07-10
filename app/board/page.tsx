// app/board/page.tsx
import Image from 'next/image'

const boardMembers = [
  { name: 'Diego Sarmiento', role: 'President',   img: '/images/placeholder-profile.jpg' },
  { name: 'Erick Covarrubias',    role: 'Vice President', img: '/images/placeholder-profile.jpg' },
  { name: 'Amanda Chavez',    role: 'Treasurer', img: '/images/placeholder-profile.jpg' },
  { name: 'Jesus Garcia Rodriguez',    role: 'Secretary', img: '/images/placeholder-profile.jpg' },
  { name: 'Ismael Ovalle Castorena',    role: 'Social Media Coordinator', img: '/images/placeholder-profile.jpg' },
  { name: 'Flavio Ibarra',    role: 'Social Media Coordinator', img: '/images/placeholder-profile.jpg' },
  { name: 'Gabriella Davila Albor',    role: 'Recruiter', img: '/images/placeholder-profile.jpg' },
  { name: 'Matthew Felske',    role: 'Webmaster',   img: '/images/placeholder-profile.jpg' },
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
