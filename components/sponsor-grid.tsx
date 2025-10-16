import Image from "@/components/BpImage";

type Tier = "Gold" | "Silver" | "Bronze";

type Sponsor = {
  name: string;
  src: string;
  href: string;
  tier: Tier;
  blurb?: string;
};

const sponsors: Sponsor[] = [
  {
    name: "GE HealthCare",
    src: "/images/GELogo.png",
    href: "https://www.gehealthcare.com/",
    tier: "Gold",
    blurb: "Healthcare tech partner supporting workshops and career prep.",
  },
  {
    name: "Eaton",
    src: "/images/EatonLogo.png",
    href: "https://www.eaton.com/us/en-us.html",
    tier: "Gold",
    blurb: "Power management company partnering on engineering outreach.",
  },
  {
    name: "Roberto Hernandez Center",
    src: "/images/RHCLogo.png",
    href: "https://uwm.edu/community-empowerment-institutional-inclusivity/services/roberto-hernandez-center/",
    tier: "Silver",
    blurb: "UWM student success center uplifting Latinx scholars on campus.",
  },
];

const TIER_ORDER: Tier[] = ["Gold", "Silver", "Bronze"];
const SECTION_CHIP: Record<Tier, string> = {
  Gold: "section-chip section-chip--gold",
  Silver: "section-chip section-chip--silver",
  Bronze: "section-chip section-chip--bronze",
};

function SponsorCard({ s }: { s: Sponsor }) {
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${s.name} — ${s.tier} Sponsor`}
      className="focus-brand"
    >
      <div
        className={[
          "card card-hover border-soft surface-navy-18 p-5",
          "transition-all hover:-translate-y-0.5 hover:ring-1",
          "hover:ring-[color-mix(in_oklab,var(--shpe-light-blue)_60%,transparent)]",
        ].join(" ")}
      >
        <div className="logo-stage mb-3">
          <Image
            src={s.src}
            alt={s.name}
            fill
            sizes="320px"
            className="logo-img"
            priority
          />
        </div>
        <div className="text-[color:var(--foreground)] font-semibold text-base text-center">
          {s.name}
        </div>

        {s.blurb && (
          <div className="mt-1.5 text-center text-[11.5px] leading-5 text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
            {s.blurb}
          </div>
        )}
      </div>
    </a>
  );
}

export function SponsorGrid() {
  return (
    <div className="space-y-8">
      {TIER_ORDER.map((tier) => {
        const items = sponsors.filter((s) => s.tier === tier);
        if (!items.length) return null;

        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            <header className="mb-3 flex items-center gap-2">
              <span id={`tier-${tier}`} className={SECTION_CHIP[tier]}>
                {tier} Sponsors
              </span>
              <div className="h-px flex-1 bg-[color:color-mix(in_oklab,white_10%,transparent)]" />
            </header>

            {/* KEY FIX: use the utility that exists (auto-fit min cards) */}
            <div className="grid-auto-fit">
              {items.map((s) => (
                <SponsorCard key={`${s.name}-${s.tier}`} s={s} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
