// app/about/page.tsx
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      title: "Education",
      desc: "Providing academic resources, workshops, and tutorials to help our members excel at UWM.",
      icon: "/images/placeholder-card.jpg",
    },
    {
      title: "Mentorship",
      desc: "Connecting students with industry professionals for guidance and growth.",
      icon: "/images/placeholder-card.jpg",
    },
    {
      title: "Community",
      desc: "Building a supportive network that fosters collaboration and leadership.",
      icon: "/images/placeholder-card.jpg",
    },
  ];

  return (
    <>
      {/* Hero banner */}
      <section className="relative w-full h-96">
        <Image
          src="/images/hero.png"
          alt="SHPE UWM Campus"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/60">
          <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our Mission &amp; Values
          </h1>
        </div>
      </section>

      {/* Mission copy */}
      <section className="py-16 bg-white">
        <div className="container max-w-3xl px-4 mx-auto text-center">
          <p className="text-lg leading-relaxed text-shpe-dark/80 md:text-xl">
            At UWM, SHPE is dedicated to empowering Hispanic students in STEM
            through education, mentorship, and professional development. We
            strive to create a supportive environment that fosters academic
            excellence, leadership, and community engagement. We host workshops,
            networking events, and outreach programs to help our members succeed
            academically and professionally, and to develop the next generation
            of Hispanic leaders in STEM.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-shpe-light-gray">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 text-3xl font-semibold text-center text-shpe-dark">
            Our Core Values
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {values.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="p-6 transition bg-white rounded-lg shadow hover:shadow-lg"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <Image
                    src={icon}
                    alt={`${title} icon`}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-shpe-dark">
                  {title}
                </h3>
                <p className="text-shpe-dark/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
