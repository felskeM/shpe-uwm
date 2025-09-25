import { Section } from "@/components/section";
import { ContactCard } from "@/components/contact-card";

export default function Page() {
  return (
    <Section
      title="Contact"
      subtitle="Have questions about joining, partnering, or sponsoring? We’d love to hear from you."
      center
    >
      <ContactCard />
    </Section>
  );
}