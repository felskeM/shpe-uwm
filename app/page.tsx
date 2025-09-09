import { Hero } from "@/components/hero";
import { StatBar } from "@/components/stat-bar";
import { Section } from "@/components/section";
import { EventCard } from "@/components/event-card";
import { SponsorGrid } from "@/components/sponsor-grid";


export default function Page() {
  return (
    <>
      <Hero />
      <StatBar />


      <Section title="What we do" subtitle="Professional development, mentorship, outreach, and community.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Mentorship", d: "Peer & professional mentorship matching and resume help." },
            { t: "Workshops", d: "Resume reviews, interview prep, Git & cloud basics, and more." },
            { t: "Outreach", d: "K‑12 STEM outreach and volunteering around Milwaukee." },
          ].map((c) => (
            <div key={c.t} className="card border border-zinc-200/70 p-5 dark:border-zinc-800/70">
              <h3 className="text-lg font-semibold">{c.t}</h3>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{c.d}</p>
            </div>
          ))}
        </div>
      </Section>


      <Section title="Upcoming events" subtitle="A sample list — hook to Google Calendar or Airtable later.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <EventCard title="Kickoff + Icebreaker Night" date="Sep 18, 6:00 PM" location="UWM EMS E170" />
          <EventCard title="Resume + LinkedIn Workshop" date="Sep 25, 5:30 PM" location="EMS 120" />
          <EventCard title="Industry Panel: Careers in Cyber" date="Oct 2, 6:00 PM" location="Lubar N140" />
        </div>
      </Section>


      <Section title="Our sponsors">
        <SponsorGrid />
      </Section>
    </>
  );
}