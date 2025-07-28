// app/board/page.tsx
import Image from "next/image";

const boardMembers = [
  {
    name: "Diego Sarmiento",
    role: "President",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Erick Covarrubias",
    role: "Vice President",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Amanda Chavez",
    role: "Treasurer",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Jesus Garcia Rodriguez",
    role: "Secretary",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Ismael Ovalle Castorena",
    role: "Social Media Coordinator",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Flavio Ibarra",
    role: "Social Media Coordinator",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Gabriella Davila Albor",
    role: "Recruiter",
    img: "/images/headshot-placeholder.png",
  },
  {
    name: "Matthew Felske",
    role: "Webmaster",
    img: "/images/headshot-placeholder.png",
  },
];

export default function BoardPage() {
  return (
    <main className="min-h-screen pt-24 bg-shpe-light-gray">
      {/* Intro */}
      <section className="container px-4 py-12 mx-auto text-center">
        <h1 className="mb-4 text-4xl font-bold text-shpe-secondary">
          Meet Our Executive Board
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-shpe-dark/75">
          These dedicated individuals lead SHPE-UWM’s mission to empower
          Hispanic STEM students.
        </p>
      </section>

      {/* Member Grid */}
      <section className="container px-4 pb-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {boardMembers.map(({ name, role, img }) => (
            <div
              key={name}
              className="flex flex-col items-center p-6 transition bg-white shadow rounded-xl hover:shadow-lg"
            >
              <Image
                src={img}
                alt={name}
                width={160}
                height={160}
                className="rounded-full"
              />
              <h3 className="mt-4 text-xl font-semibold text-shpe-dark">
                {name}
              </h3>
              <p className="mt-2 italic text-shpe-mid-navy">{role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
