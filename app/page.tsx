import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Users, GraduationCap, Megaphone } from "lucide-react";
import { SponsorMarquee } from "@/components/sponsor-marquee";
import { sponsors } from "@/lib/sponsors";

export default function Page() {
  return (
    <>
      <Hero />
      <Section
        headingLevel="h2"
        title="A place to belong. Room to grow."
        subtitle="Professional development, mentorship, and community."
      >
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
            <div key={t} className="p-7 card feature-card">
              <div className="flex flex-col items-start gap-6">
                <span className="feature-icon">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="text-lg font-semibold">{t}</h3>
              </div>
              <p className="mt-3 text-sm leading-7 text-(--muted)">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        headingLevel="h2"
        title="Investing in our future"
        subtitle="Thank you to the partners helping our community go further."
      >
        <SponsorMarquee items={sponsors} />
      </Section>
    </>
  );
}
