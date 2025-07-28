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
    <section className="container px-4 py-20 mx-auto">
      <h1 className="mb-12 text-4xl font-bold text-shpe-dark">
        Executive Board
      </h1>
      <div className="grid gap-8 md:grid-cols-3">
        {boardMembers.map(({ name, role, img }) => (
          <div key={name} className="text-center">
            <Image
              src={img}
              alt={"HEADSHOT"}
              width={128}
              height={128}
              className="mx-auto rounded-full"
            />
            <h3 className="mt-4 text-xl font-semibold text-shpe-dark">
              {name}
            </h3>
            <p className="text-shpe-mid-navy">{role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
