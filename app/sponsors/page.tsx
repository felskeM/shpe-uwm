import { Section } from "@/components/section";
import { SponsorGrid } from "@/components/sponsor-grid";
import { SponsorCTA } from "@/components/sponsor-cta";
import { SponsorMarquee } from "@/components/sponsor-marquee";

export default function Page() {
  return (
    <Section
      title="Sponsors"
      subtitle="We’re grateful for our industry partners who invest in our members."
    >

      {/* logos by tier */}
      <div className="mt-6">
        <SponsorGrid />
      </div>

      <SponsorMarquee />

      {/* calm gradient CTA */}
      <div className="mt-8">
        <SponsorCTA />
      </div>
    </Section>
  );
}
