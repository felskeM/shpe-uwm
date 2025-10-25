import { Avatar } from "@/components/avatar";
import { Section } from "@/components/section";

const officers = [
  {
    name: "President",
    person: "Diego Sarmiento",
    src: "/images/DiegoHeadshot.png",
    major: "BSE Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/diegosarmientopr/",
  },
  {
    name: "Vice President",
    person: "Erick Covarrubias",
    src: "/images/ErickHeadshot.png",
    major: "BSE Electrical Engineering",
    linkedin: "https://www.linkedin.com/in/erick-covarrubias-073601332/",
  },
  {
    name: "Treasurer",
    person: "Amanda Chavez",
    src: "/images/AmandaHeadshot.png",
    major: "BS Health Care Administration",
    linkedin: "https://www.linkedin.com/in/amanda-chavez-11b75a2aa/",
  },
  {
    name: "Secretary",
    person: "Jesus Garcia Rodriguez",
    src: "/images/JesusHeadshot.png",
    major: "BSE Mechanical Engineering",
    linkedin: "https://www.linkedin.com/in/jesus-garcia-rodriguez-92a83a333/",
  },
  {
    name: "Social Media Coordinator",
    person: "Ismael Ovalle Castorena",
    src: "/images/IsmaelHeadshot.png",
    major: "BS Computer Science",
    linkedin: "https://www.linkedin.com/in/ismael-ovalle-castorena-6239a6216/",
  },
  {
    name: "Social Media Coordinator",
    person: "Flavio Ibarra",
    src: "/images/FlavioHeadshot.png",
    major: "BSE Biomedical Engineering",
    linkedin: "https://www.linkedin.com/in/flavio-ibarra-238089251/",
  },
  {
    name: "Recruiter",
    person: "Gabriella Davila Albor",
    src: "/images/GabbyHeadshot.png",
    major: "PhD Mechanical Engineer",
    linkedin: "https://www.linkedin.com/in/iamgabby/",
  },
  {
    name: "Webmaster",
    person: "Mateo Felske",
    src: "/images/MateoHeadshot.png",
    major: "BS Information Science & Technology",
    linkedin: "https://www.linkedin.com/in/mateofelske/",
  },
];

export default function Page() {
  return (
    <Section
      title="Executive Board"
      subtitle="Meet our eboard team for the 2025-2026 academic year at UWM!"
    >
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {officers.map((o) => (
          <a
            key={`${o.name}-${o.person}`}
            href={o.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block card border-soft surface-navy-18 p-5 text-center card-hover focus-brand hover:ring-1 hover:ring-[color-mix(in_oklab,var(--shpe-light-blue)_65%,transparent)]"
          >
            <span className="absolute transition-opacity duration-300 opacity-0 top-3 right-3 group-hover:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#0A66C2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.5h.07c.65-1.2 2.25-2.5 4.63-2.5 4.95 0 5.86 3.25 5.86 7.47V24h-5v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-5V8z" />
              </svg>
            </span>
            <div className="flex items-center justify-center w-24 h-24 mx-auto">
              <Avatar
                alt={o.person}
                src={o.src}
                className="mt-3 text-lg font-semibold text-(--foreground) group-hover:text-[#0A66C2] transition-colors duration-300"
                position="center top"
              />
            </div>

            <h3 className="mt-3 text-lg font-semibold text-(--foreground) group-hover:text-[#0A66C2] transition-colors duration-300">
              {o.person}
            </h3>
            <p className="text-sm font-bold text-(--shpe-accent)">
              {o.name}
            </p>
            {o.major && (
              <p className="text-sm text-[color-mix(in_oklab,var(--foreground)_65%,transparent)]">
                {o.major}
              </p>
            )}
          </a>
        ))}
      </div>
    </Section>
  );
}
