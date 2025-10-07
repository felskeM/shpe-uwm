import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";


export default function Page() {
  return (
    <Section
      title="Sponsors"
      subtitle="We’re grateful for our industry partners who invest in our members."
    >
      <SponsorGrid />
      <div
        className="p-5 mt-8 rounded-2xl border-soft"
        style={{
          background:
            "linear-gradient(90deg, var(--shpe-mid-navy), color-mix(in oklab, var(--shpe-light-blue) 60%, transparent), color-mix(in oklab, var(--shpe-accent) 40%, transparent))",
        }}
      >
        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-white/90">
            Interested in supporting SHPE at UWM? Let’s partner on workshops, projects, and careers.
          </p>
          <a
            href="/contact"
            className="px-4 py-2 btn-ghost bg-black/30 backdrop-blur"
          >
            Become a sponsor
          </a>
        </div>
      </div>
    </Section>
  );
}
