import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";


export default function Page() {
  return (
    <Section title="Sponsors" subtitle="We’re grateful for our industry partners who invest in our members.">
      <SponsorGrid />
      <div
        className="mt-10 overflow-hidden rounded-2xl p-[1px]"
        style={{
          background:
            "linear-gradient(90deg, var(--shpe-primary), var(--shpe-accent), var(--shpe-mid-navy))",
        }}
      >
        <div className="flex flex-col items-center justify-between gap-4 rounded-[calc(1rem-1px)] bg-[--cta-bg] px-6 py-6 sm:flex-row"
          style={{ ["--cta-bg" as string]: "color-mix(in oklab, var(--shpe-dark) 85%, transparent)" }}>
          <p className="text-center text-zinc-200 sm:text-left">
            Interested in supporting SHPE at UWM? Let’s partner on workshops, projects, and careers.
          </p>
          <a
            href="/contact"
            className="px-4 py-2 font-medium text-white rounded-xl bg-shpe-primary hover:bg-shpe-accent"
          >
            Become a sponsor
          </a>
        </div>
      </div>
    </Section>
  );
}