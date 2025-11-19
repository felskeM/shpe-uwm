import { SafeLink } from "@/components/SafeLink";

export function SponsorCTA() {
  return (
    <div className="cta-shell cta-gradient">
      <div className="cta-overlay" />

      <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-sm text-[color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          Interested in supporting SHPE at UWM? Let’s partner on workshops,
          projects, and careers.
        </p>

        <div className="flex flex-wrap gap-2">
          <SafeLink href="/contact" className="btn-ghost focus-brand">
            Become a sponsor
          </SafeLink>

          <SafeLink
            href="/documents/sponsor.pdf"
            download="sponsor.pdf"
            className="btn-primary focus-brand"
            target="_blank"
            aria-label="Download sponsor overview (PDF)"
            title="Download sponsor overview (PDF)"
          >
            Download overview
          </SafeLink>
        </div>
      </div>
    </div>
  );
}
