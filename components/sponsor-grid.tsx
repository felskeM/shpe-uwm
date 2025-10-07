import { Card } from "@/components/card";
import Image from "next/image";

type Tier = "Gold" | "Silver" | "Bronze";

type Sponsor = {
  name: string;
  src: string;
  href: string;
  tier: Tier;
};

const sponsors: Sponsor[] = [
  { name: "GE HealthCare", src: "/images/GELogo.png", href: "https://www.gehealthcare.com/", tier: "Gold" },
  { name: "Eaton", src: "/images/EatonLogo.png", href: "https://www.eaton.com/us/en-us.html", tier: "Gold" },
  { name: "Roberto Hernandez Center", src: "/images/RHCLogo.png", href: "https://uwm.edu/community-empowerment-institutional-inclusivity/services/roberto-hernandez-center/", tier: "Silver" },
]

const TIER_ORDER: Tier[] = ["Gold", "Silver", "Bronze"];

const TIER_STYLES: Record<Tier, { surface: string; label: string }> = {
  Gold: { surface: "surface-gold-18", label: "Gold Sponsor" },
  Silver: { surface: "surface-silver-18", label: "Silver Sponsor" },
  Bronze: { surface: "surface-bronze-18", label: "Bronze Sponsor" },
};

function SponsorCard({ s }: { s: Sponsor }) {
  const { surface, label } = TIER_STYLES[s.tier];
  return (
    <a
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${s.name} — ${label}`}
    >
      <Card
        className={`group relative flex items-center gap-4 p-5 border-soft ${surface} transition-transform hover:-translate-y-[2px]`}
      >
        <span className="tier-ribbon">{s.tier}</span>
        <div className="relative h-12 w-28 shrink-0">
          <Image
            src={s.src}
            alt={s.name}
            fill
            sizes="112px"
            className="object-contain"
            priority
          />
        </div>
        <div className="truncate text-zinc-100">{s.name}</div>
      </Card>
    </a>
  );
}
export function SponsorGrid() {
  const grouped = TIER_ORDER
    .map((tier) => ({
      tier,
      items: sponsors.filter((s) => s.tier === tier),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <div className="space-y-8">
      {grouped.map(({ tier, items }) => (
        <section key={tier} aria-labelledby={`tier-${tier}`}>
          <h3
            id={`tier-${tier}`}
            className="mb-3 text-sm font-semibold tracking-wide uppercase text-white/80"
          >
            {tier} Sponsors
          </h3>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((s) => (
              <SponsorCard key={s.name} s={s} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
