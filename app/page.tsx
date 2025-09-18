import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";


export default function Page() {
  return (
    <>
      <Hero />


      <Section title="What we do" subtitle="Professional development, mentorship, and community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Mentorship", d: "Peer & professional guidance and support for more than just STEM." },
            { t: "Workshops", d: "Resume reviews, interview prep, and hands-on work with employers." },
            { t: "Outreach", d: "Highschool STEM outreach and volunteering around Milwaukee." },
          ].map((c) => (
            <div key={c.t} className="p-5 border card border-zinc-200/70 dark:border-zinc-800/70">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.d}</p>
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