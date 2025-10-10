import { Card } from "@/components/card";
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

const TIER_STYLES: Record<Tier, { surface: string; chip: string }> = {
  Gold:   { surface: "surface-gold-18",   chip: "bg-[#ffd867] text-black" },
  Silver: { surface: "surface-silver-18", chip: "bg-[#e5e7eb] text-black" },
  Bronze: { surface: "surface-bronze-18", chip: "bg-[#e0b08a] text-black" },
};

function SponsorCard({ s }: { s: Sponsor }) {
  const style = TIER_STYLES[s.tier];
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${s.name} — ${s.tier} Sponsor`}
    >
      <Card className={`sponsor-card group p-4 border-soft ${style.surface} transition-transform hover:-translate-y-[2px]`}>
        {/* Top row: tier chip */}
        <div className="flex items-center justify-between">
          <span className={`tier-chip ${style.chip}`}>{s.tier}</span>
        </div>

        {/* Logo stage */}
        <div className="logo-tile--compact">
          <div className="relative w-full h-full">
            <Image
              src={s.src}
              alt={s.name}
              fill
              sizes="420px"
              className="logo-img--compact"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <div className="pt-3">
          <div className="truncate text-zinc-100">{s.name}</div>
          {s.blurb && (
            <p className="mt-0.5 line-clamp-2 text-xs text-white/70">
              {s.blurb}
            </p>
          )}
        </div>
      </Card>
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
            <header className="flex items-center gap-2 mb-3">
              <h3
                id={`tier-${tier}`}
                className="text-sm font-semibold tracking-wide uppercase text-white/80"
              >
                {tier} Sponsors
              </h3>
              <span className="tier-chip bg-black/10 text-white/80 border-white/10">
                Verified
              </span>
            </header>

            {/* fixed, smaller cards */}
            <div className="grid-sponsor">
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
