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
    >
      <div className="card card-hover p-4 border-soft surface-navy-18">
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
        <div className="text-[color:var(--foreground)] font-semibold truncate">
          {s.name}
        </div>
        {s.blurb && (
          <div className="text-xs text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)] mt-0.5">
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
            <header className="mb-2 flex items-center gap-2">
              <span className={SECTION_CHIP[tier]}>{tier + " Sponsors"}</span>
            </header>
            <div className="mt-3 grid-sponsor">
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
