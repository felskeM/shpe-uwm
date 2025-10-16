import { withBasePath } from "@/lib/basePath";

export function SponsorCTA() {
  const packetHref = withBasePath("/documents/sponsor.pdf");
  const contact = withBasePath("/contact/");

  return (
    <div
      className="relative overflow-hidden rounded-2xl border-soft p-4 sm:p-5"
      style={{
        background:
          "linear-gradient(90deg, color-mix(in oklab, var(--shpe-mid-navy) 92%, transparent) 0%, color-mix(in oklab, var(--shpe-light-blue) 28%, transparent) 45%, color-mix(in oklab, var(--shpe-accent) 24%, transparent) 100%)",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      }}
    >
      {/* softer overlay so content pops a bit more */}
      <div className="pointer-events-none absolute inset-0 bg-black/8" />

      <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="max-w-2xl text-sm text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          Interested in supporting SHPE at UWM? Let’s partner on workshops,
          projects, and careers.
        </p>

        <div className="flex flex-wrap gap-2">
          <a
            href={contact}
            className="btn-ghost backdrop-blur ring-1 ring-white/10 focus-brand"
          >
            Become a sponsor
          </a>

          <a
            href={packetHref}
            download="sponsor.pdf"
            className="btn-primary ring-1 ring-white/10 focus-brand"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download sponsor overview (PDF)"
            title="Download sponsor overview (PDF)"
          >
            Download overview
          </a>
        </div>
      </div>
    </div>
  );
}
