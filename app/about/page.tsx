import Image from "@/components/BpImage";
import { Section } from "@/components/section";
import { Users, GraduationCap, Handshake, Rocket } from "lucide-react";

export default function Page() {
  const values = [
    {
      title: "Outreach",
      desc: "Serving Milwaukee high school STEM exposure and community events.",
      icon: Handshake,
    },
    {
      title: "Familia",
      desc: "Building a welcoming, supportive network for everyone.",
      icon: Users,
    },
    {
      title: "Education",
      desc: "Workshops, study groups, and hands-on projects to level up skills.",
      icon: GraduationCap,
    },
    {
      title: "Professionalism",
      desc: "Resume reviews, interview prep, and direct access to industry.",
      icon: Rocket,
    },
  ];

  const surface = "bg-shpe-secondary-20";
  const surfaceFallback: Record<string, string> = {
    ["--card-bg"]:
      "color-mix(in oklab, var(--shpe-secondary) 20%, transparent)",
  };
  return (
    <Section title="About SHPE UWM">
      <div className="card border-soft surface-navy-18 [--tw-ring-color:var(--shpe-accent)]">
        <div className="grid gap-6 p-6 md:grid-cols-[1fr]">
          <p className="text-[color:color-mix(in_oklab,var(--foreground)_75%,transparent)]">
            At UWM, SHPE is dedicated to empowering Hispanic students in STEM
            through education, mentorship, and professional development. We
            strive to create a supportive environment that fosters academic
            excellence, leadership, and community engagement. We host workshops,
            networking events, and outreach programs to help our members succeed
            academically and professionally, and to develop the next generation
            of Hispanic leaders in STEM.
          </p>
          <div className="h-px mt-3 bg-gradient-to-r from-transparent via-[color:color-mix(in_oklab,var(--foreground)_10%,transparent)] to-transparent" />
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-shpe-accent/20 text-shpe-accent">
              Mentorship
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-shpe-primary/20 text-shpe-primary">
              Professional Dev
            </span>
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-shpe-mid-navy/30 text-shpe-light-gray">
              Outreach
            </span>
          </div>
        </div>
        <div className="h-1 w-full rounded-b-[inherit] bg-gradient-to-r from-shpe-primary via-shpe-accent to-shpe-mid-navy" />
      </div>
      {/* Values */}
      <h3 className="mt-12 text-xl font-semibold text-[color:var(--foreground)]">
        Our values
      </h3>
      <p className="mt-2 text-[color:color-mix(in_oklab,var(--foreground)_65%,transparent)]">
        The pillars that shape how we learn, lead, and serve.
      </p>
      <div className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ title, desc, icon: Icon }) => (
          <div
            key={title}
            className="card group border-soft surface-navy-18 p-5 transition-transform hover:-translate-y-1"
            style={
              surface === "bg-shpe-secondary-20"
                ? undefined
                : (surfaceFallback as React.CSSProperties)
            }
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-shpe-accent/15 ring-1 ring-white/10">
                <Icon className="w-5 h-5 text-shpe-accent" />
              </div>
              <h4 className="font-semibold text-[color:var(--foreground)]">
                {title}
              </h4>
            </div>
            <p className="mt-3 text-sm text-[color:color-mix(in_oklab,var(--foreground)_65%,transparent)]">
              {desc}
            </p>
          </div>
        ))}
      </div>

      {/* Photo strip (swap images later) */}
      <div className="grid grid-cols-3 gap-3 mt-12">
        {[
          "/images/hero.png",
          "/images/speeddating.png",
          "/images/studentorgspicnic.png",
        ].map((src, i) => (
          <div
            key={i}
            className="relative aspect-[16/9] overflow-hidden rounded-2xl ring-1 ring-white/10"
          >
            <Image
              src={src}
              alt="SHPE UWM"
              fill
              sizes="(max-width:1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 grid gap-4 sm:grid-cols-[1fr_auto] items-center">
        <p className="text-[color:color-mix(in_oklab,var(--foreground)_75%,transparent)]">
          Want to get involved, sponsor an event, or speak at a meeting?
        </p>
        <div className="flex gap-3">
          <a
            href="/events"
            className="px-4 py-2 text-sm font-medium rounded-xl btn-primary"
          >
            See events
          </a>
          <a
            href="/contact"
            className="px-4 py-2 text-sm font-medium rounded-xl btn-ghost"
          >
            Contact us
          </a>
        </div>
      </div>
    </Section>
  );
}
