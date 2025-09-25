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
          <div
            key={o.name}
            className="group card border-soft surface-navy-18 p-5 text-center transition-transform hover:-translate-y-[2px]"
          >
            <div className="flex items-center justify-center w-24 h-24 mx-auto">
              <Avatar
                alt={o.person}
                src={o.src}
                className="rounded-full ring-2 ring-[color-mix(in_oklab,var(--shpe-mid-navy)_55%,transparent)] group-hover:ring-[color-mix(in_oklab,var(--shpe-light-blue)_65%,transparent)] h-24 w-24"
                position="center top"
              />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-white">{o.person}</h3>
            <p className="text-sm font-bold text-[var(--shpe-accent)]">{o.name}</p>
            {o.major && <p className="text-sm text-zinc-400">{o.major}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}