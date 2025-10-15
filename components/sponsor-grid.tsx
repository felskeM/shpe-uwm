import Image from '@/components/BpImage';

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

const TIER_STYLES: Record<Tier, { header: string }> = {
  Gold: { header: "tier-header tier-header--gold" },
  Silver: { header: "tier-header tier-header--silver" },
  Bronze: { header: "tier-header tier-header--bronze" },
};


function SponsorCard({ s }: { s: Sponsor }) {
  return (
    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} — ${s.tier} Sponsor`}>
      <div className="sponsor-card">
        <div className="logo-tile--compact">
          <Image src={s.src} alt={s.name} fill sizes="320px" className="logo-img--compact" priority />
        </div>
        <div>
          <div className="sponsor-name">{s.name}</div>
          {s.blurb && <div className="sponsor-desc">{s.blurb}</div>}
        </div>
      </div>
    </a>
  );
}

export function SponsorGrid() {
  return (
    <div className="space-y-10">
      {TIER_ORDER.map((tier) => {
        const items = sponsors.filter((s) => s.tier === tier);
        if (!items.length) return null;

        return (
          <section key={tier} aria-labelledby={`tier-${tier}`}>
            {/* filled, colored bar outside the cards */}
            <div className={TIER_STYLES[tier].header}>
              <h3 id={`tier-${tier}`} className="tier-header__label">
                {tier} Sponsors
              </h3>
            </div>

            <div className="mt-3 grid-sponsor">
              {items.map((s) => (
                <SponsorCard key={s.name} s={s} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
