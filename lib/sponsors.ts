export type Tier = "Gold" | "Silver" | "Bronze";

export type Sponsor = {
  name: string;
  src: string;
  href: string;
  tier: Tier;
  blurb?: string;
};

export const sponsors: Sponsor[] = [
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
