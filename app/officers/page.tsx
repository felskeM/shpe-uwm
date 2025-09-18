import { Section } from "@/components/section";
import { Avatar } from "@/components/avatar";


const officers = [
  { name: "President", person: "Diego Sarmiento", src: "/images/DiegoHeadshot.png", major: "BSE Mechanical Engineering" },
  { name: "Vice President", person: "Erick Covarrubias", src: "/images/ErickHeadshot.png", major: "BSE Electrical Engineering" },
  { name: "Treasurer", person: "Amanda Chavez", src: "/images/AmandaHeadshot.png", major: "BS Health Care Administration" },
  { name: "Secretary", person: "Jesus Garcia Rodriguez", src: "/images/JesusHeadshot.png", major: "BSE Mechanical Engineering" },
  { name: "Social Media Coordinator", person: "Ismael Ovalle Castorena", src: "/images/IsmaelHeadshot.png", major: "BS Computer Science" },
  { name: "Social Media Coordinator", person: "Flavio Ibarra", src: "/images/FlavioHeadshot.png", major: "BSE Biomedical Engineering" },
  { name: "Recruiter", person: "Gabriella Davila Albor", src: "/images/GabbyHeadshot.png", major: "PhD Mechanical Engineer" },
  { name: "Webmaster", person: "Mateo Felske", src: "/images/MateoHeadshot.png", major: "BS Information Science & Technology" }
];


export default function Page() {
  return (
    <Section title="Executive Board" subtitle="Meet our eboard team for the 2025-2026 academic year at UWM!">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {officers.map((o) => (
          <div key={o.name} className="p-5 text-center transition-transform border card group border-zinc-800 bg-shpe-secondary-30 hover:-translate-y-1 hover:border-shpe-accent/70 h-full min-h-[220px]">
            <div className="mx-auto">
              <Avatar alt={o.person} src={o.src} className="w-20 h-20 rounded-full md:h-24 md:w-24 ring-2 ring-shpe-primary/40 group-hover:ring-shpe-accent/60" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{o.person}</h3>
            <div className="pt-3 mt-3 border-t border-white/5">
              <p className="text-sm font-bold text-shpe-accent">{o.name}</p>
              {o.major && (
                <p className="text-sm text-shpe-light-blue">{o.major}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}