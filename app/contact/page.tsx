import { Section } from "@/components/section";
import { ContactCard } from "@/components/contact-card";


export default function Page() {
  return (
    <Section
      title="Contact"
      subtitle="Have questions about joining, partnering, or sponsoring? We’d love to hear from you."
    >
      <div className="max-w-2xl mx-auto">
        <ContactCard />
      </div>
    </Section>
  );
}