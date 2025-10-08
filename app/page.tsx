import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Users, GraduationCap, Megaphone } from "lucide-react";


export default function Page() {

  return (
    <>
      <Hero />
      <Section title="What we do" subtitle="Professional development, mentorship, and community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              t: "Mentorship",
              d: "Peer & professional guidance and support for more than just STEM.",
              Icon: Users,
            },
            {
              t: "Workshops",
              d: "Resume reviews, interview prep, and hands-on work with employers.",
              Icon: GraduationCap,
            },
            {
              t: "Outreach",
              d: "High-school STEM outreach and volunteering around Milwaukee.",
              Icon: Megaphone,
            },
          ].map(({ t, d, Icon }) => (
            <div className="p-5 card card-meter border-soft surface-navy-18">
              <div className="flex items-center gap-3">
                <Icon className="w-7 h-7" style={{ color: "var(--shpe-accent)" }} />
                <h3 className="text-lg font-semibold">{t}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Our sponsors">
        <SponsorGrid />
      </Section>
    </>
  );
}
