import Image from "@/components/BpImage";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export function Hero() {
  return (
    <section className="hero-section">
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:py-24">
        <div>
          <p className="eyebrow">
            <span className="h-2 w-2 rounded-full bg-(--shpe-orange)" /> SHPE ·
            UW–Milwaukee
          </p>
          <h1 className="mt-6 text-[clamp(2.35rem,4.3vw,3.9rem)] font-semibold leading-[1.08] tracking-[-0.055em]">
            Your community.
            <br />
            Your potential.
            <br />
            <span className="text-(--shpe-sky)">Our future.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-(--muted) sm:text-lg">
            Building community, leadership, and careers in STEM. We empower
            Hispanic students at UWM—and welcome allies of every background.
          </p>
          <div className="mt-8 flex flex-col gap-3 min-[400px]:flex-row">
            <Link href="/events" className="btn-primary">
              Explore events <ArrowRight size={18} />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get involved <ArrowUpRight size={18} />
            </Link>
          </div>
          <p className="mt-7 text-sm text-(--muted)">
            Rooted in community. Ready for what’s next.
          </p>
        </div>
        <div className="relative">
          <div className="relative aspect-[4/4.3] overflow-hidden rounded-[2rem] sm:aspect-[5/4] lg:aspect-[4/4.5]">
            <Image
              src="/images/hero.png"
              alt="SHPE UWM students together at a chapter event"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0e1a2d]/95 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <p className="eyebrow text-white/75">
                More than a student organization
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">
                Find your familia.
              </p>
            </div>
          </div>
          <span
            aria-hidden="true"
            className="absolute -right-2 top-10 h-20 w-1 rounded-full bg-(--shpe-orange) sm:-right-4"
          />
        </div>
      </Container>
    </section>
  );
}
