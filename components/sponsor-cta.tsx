import { withBasePath } from "@/lib/basePath";

export function SponsorCTA() {
  const packetHref = withBasePath("/documents/sponsors.pdf");
  const contact = withBasePath("/contact");

  return (
    <div
      className="relative p-5 overflow-hidden rounded-2xl border-soft"
      style={{
        background:
          "linear-gradient(90deg, color-mix(in oklab, var(--shpe-mid-navy) 92%, transparent) 0%, color-mix(in oklab, var(--shpe-light-blue) 28%, transparent) 45%, color-mix(in oklab, var(--shpe-accent) 24%, transparent) 100%)",
        boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.04)",
      }}
    >
      <div className="absolute inset-0 pointer-events-none bg-black/10" />
      <div className="relative flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-[color:color-mix(in_oklab,var(--foreground)_90%,transparent)]">
          Interested in supporting SHPE at UWM? Let’s partner on workshops,
          projects, and careers.
        </p>
        <div className="flex gap-2">
          <a
            href={contact}
            className="px-4 py-2 btn-ghost backdrop-blur ring-1 ring-white/10"
          >
            Become a sponsor
          </a>
          {/* ADD FILE */}
          <a
            href={packetHref}
            download="sponsors.pdf"
            className="px-4 py-2 btn-primary ring-1 ring-white/10 focus-brand"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download overview
          </a>
        </div>
      </div>
    </div>
  );
}
