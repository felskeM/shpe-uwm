import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";
import { Users, GraduationCap, Megaphone } from "lucide-react";


export default function Page() {
  const whatWeDo = [
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
  ];
  return (
    <>
      <Hero />



      <Section title="What we do" subtitle="Professional development, mentorship, and community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map(({ t, d, Icon }) => (
            <div className="card border-soft surface-navy-18 p-5 transition-transform hover:-translate-y-[2px]">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl ring-1"
                  style={{
                    background: "color-mix(in oklab, var(--shpe-accent) 18%, transparent)",
                    boxShadow: "inset 0 0 0 1px color-mix(in oklab, white 10%, transparent)",
                  }}>
                  <Icon className="w-5 h-5" style={{ color: "var(--shpe-accent)" }} />
                </span>
                <h3 className="text-lg font-semibold text-white">{t}</h3>
              </div>
              <p className="mt-2 text-sm text-zinc-400">{d}</p>

              <div className="mt-4 h-[3px] w-0 rounded-full bg-gradient-to-r from-[var(--shpe-primary)] via-[var(--shpe-accent)] to-[var(--shpe-mid-navy)] transition-all duration-300 group-hover:w-full" />
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