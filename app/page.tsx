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
      <section className="relative h-screen w-full overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 z-0" />
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Welcome to <span className="text-shpe-primary">SHPE-UWM</span>
          </h1>
          <p className="mt-6 text-white text-xl md:text-3xl max-w-3xl">
            Empowering Hispanic STEM leaders on campus, in industry, and beyond.
          </p>
          <Link
            href="/about"
            className="
              mt-10 inline-block px-8 py-4
              bg-shpe-primary hover:bg-shpe-accent
              text-white text-lg rounded-full
              font-semibold transition
              transform hover:scale-105 duration-300
              shadow-lg hover:shadow-xl
            "
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Quick-links Grid */}
      <section className="py-20 bg-shpe-light-gray">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-shpe-secondary mb-4">
            Explore Our Chapter
          </h2>
          <p className="text-shpe-dark/75 max-w-2xl mx-auto mb-12">
            Dive into our mission, meet the team, connect with our sponsors, or
            get in touch.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <Link
              href="/about"
              className="
                block p-6 bg-white border border-shpe-light-gray
                rounded-lg hover:shadow-lg transition
              "
            >
              <div className="h-20 mb-4 flex items-center justify-center">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt="About"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-shpe-secondary mb-2">
                About SHPE-UWM
              </h3>
              <p className="text-shpe-dark/75">
                Learn about our chapter’s history and mission.
              </p>
            </Link>

            {/* Board */}
            <Link
              href="/board"
              className="
                block p-6 bg-white border border-shpe-light-gray
                rounded-lg hover:shadow-lg transition
              "
            >
              <div className="h-20 mb-4 flex items-center justify-center">
                <Image
                  src="/images/placeholder-profile.jpg"
                  alt="Board"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-shpe-secondary mb-2">
                Meet the Board
              </h3>
              <p className="text-shpe-dark/75">
                Get to know our executive team.
              </p>
            </Link>

            {/* Sponsors */}
            <Link
              href="/sponsors"
              className="
                block p-6 bg-white border border-shpe-light-gray
                rounded-lg hover:shadow-lg transition
              "
            >
              <div className="h-20 mb-4 flex items-center justify-center">
                <Image
                  src="/images/placeholder-logo.png"
                  alt="Sponsors"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-shpe-secondary mb-2">
                Our Sponsors
              </h3>
              <p className="text-shpe-dark/75">See who supports our chapter.</p>
            </Link>

            {/* Contact */}
            <Link
              href="/contact"
              className="
                block p-6 bg-white border border-shpe-light-gray
                rounded-lg hover:shadow-lg transition
              "
            >
              <div className="h-20 mb-4 flex items-center justify-center">
                <Image
                  src="/images/placeholder-card.jpg"
                  alt="Contact"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-shpe-secondary mb-2">
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
      <section className="py-20 bg-shpe-secondary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join Our Chapter</h2>
          <p className="max-w-xl mx-auto mb-6 text-lg">
            Become a member today and elevate your STEM journey with SHPE-UWM.
          </p>
          <Link
            href="/contact"
            className="
              inline-block px-8 py-4
              bg-shpe-primary hover:bg-shpe-accent
              text-white font-semibold rounded-full
              transition hover:scale-105 duration-300
            "
          >
            Get Involved
          </Link>
        </div>
      </section>
    </main>
  );
}
