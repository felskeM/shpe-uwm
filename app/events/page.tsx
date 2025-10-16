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
      <div
        className="p-5 mt-8 rounded-2xl border-soft surface-navy-18"
        style={{
          background:
            "linear-gradient(90deg, var(--shpe-mid-navy), color-mix(in oklab, var(--shpe-light-blue) 60%, transparent), color-mix(in oklab, var(--shpe-accent) 40%, transparent))",
        }}
      >
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
            Want to host a workshop or recruit with us?
          </p>
          <a
            href="/contact"
            className="px-4 py-2 btn-ghost bg-black/30 backdrop-blur"
          >
            Partner with SHPE-UWM
          </a>
        </div>
      </div>
    </Section>
  );
}
