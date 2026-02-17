import { Section } from "@/components/section";
import CalendarShell from "@/components/calendar-shell";
import { events } from "@/lib/events-data";

export default function Page() {
  return (
    <Section
      title={<span className="headline-gradient">Events</span>}
      subtitle="Workshops, recruiting, socials, and outreach—all in one place."
    >
      <div className="max-w-6xl mx-auto">
        <CalendarShell all={events} />
      </div>
      <div className="relative p-5 mt-8 rounded-2xl overflow-hidden border border-(--line)">
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: `
              radial-gradient(70% 140% at 0% 50%, var(--shpe-mid-navy) 0 38%, transparent 62%),
              radial-gradient(70% 140% at 50% 40%, color-mix(in oklab, var(--shpe-sky) 75%, var(--shpe-light-blue) 25%) 0 34%, transparent 68%),
              radial-gradient(70% 140% at 100% 50%, color-mix(in oklab, var(--shpe-accent) 80%, var(--shpe-primary) 20%) 0 40%, transparent 65%)
            `,
            filter: "blur(40px)",
            transform: "scale(1.08)",
            opacity: 0.9,
          }}
        />
        <div className="absolute inset-0 rounded-2xl bg-black/25 backdrop-blur-sm mask-[radial-gradient(130%_100%_at_50%_50%,#000_70%,transparent_100%)]" />
        <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-white/90">Want to host a workshop or recruit with us?</p>
          <a href="/contact" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white font-medium backdrop-blur-sm">
            Partner with SHPE-UWM
          </a>
        </div>
      </div>

    </Section>
  );
}
