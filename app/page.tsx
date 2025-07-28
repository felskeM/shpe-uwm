// app/page.tsx
import Image from "next/image";
import Link from "next/link";

/**
 * Home page for SHPE-UWM chapter.
 */
export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/hero.png"
            alt="SHPE-UWM Chapter event"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Dark Overlay */}
        <div className="absolute inset-0 z-0 bg-black/60" />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
            Welcome to <span className="var(--shpe-primary)">SHPE-UWM</span>
          </h1>
          <p className="max-w-3xl mt-6 text-xl text-white md:text-3xl">
            Empowering Hispanic STEM leaders on campus, in industry, and beyond.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 mt-10 text-lg font-semibold text-white transition duration-300 transform rounded-full shadow-lg  bg-shpe-primary hover:bg-shpe-accent hover:scale-105 hover:shadow-xl"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Quick-links Grid */}
      <section className="py-20 bg-shpe-light-gray">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-shpe-secondary">
            Explore Our Chapter
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-shpe-dark/75">
            Dive into our mission, meet the team, connect with our sponsors, or
            get in touch.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <Link
              href="/about"
              className="block p-6 transition bg-white border rounded-lg  border-shpe-light-gray hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-20 mb-4">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt="About"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-shpe-secondary">
                About SHPE-UWM
              </h3>
              <p className="text-shpe-dark/75">
                Learn about our chapter’s history and mission.
              </p>
            </Link>

            {/* Board */}
            <Link
              href="/board"
              className="block p-6 transition bg-white border rounded-lg  border-shpe-light-gray hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-20 mb-4">
                <Image
                  src="/images/placeholder-profile.jpg"
                  alt="Board"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-shpe-secondary">
                Meet the Board
              </h3>
              <p className="text-shpe-dark/75">
                Get to know our executive team.
              </p>
            </Link>

            {/* Sponsors */}
            <Link
              href="/sponsors"
              className="block p-6 transition bg-white border rounded-lg  border-shpe-light-gray hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-20 mb-4">
                <Image
                  src="/images/placeholder-logo.png"
                  alt="Sponsors"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-shpe-secondary">
                Our Sponsors
              </h3>
              <p className="text-shpe-dark/75">See who supports our chapter.</p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="block p-6 transition bg-white border rounded-lg  border-shpe-light-gray hover:shadow-lg"
            >
              <div className="flex items-center justify-center h-20 mb-4">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt="Contact"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-shpe-secondary">
                Contact Us
              </h3>
              <p className="text-shpe-dark/75">
                Questions? Reach out via email or social media.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 text-center text-white bg-shpe-secondary">
        <div className="container px-4 mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Join Our Chapter</h2>
          <p className="max-w-xl mx-auto mb-6 text-lg">
            Become a member today and elevate your STEM journey with SHPE-UWM.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 font-semibold text-white transition duration-300 rounded-full  bg-shpe-primary hover:bg-shpe-accent hover:scale-105"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}
