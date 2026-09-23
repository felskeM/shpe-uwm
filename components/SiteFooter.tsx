import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";
import { Logo } from "@/components/logo";
import { navigation } from "@/lib/navigation";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/shpe_uwm/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/society-of-hispanic-professional-engineers-at-university-of-wisconsin-milwaukee-1b9031232/",
  },
  { label: "Email", href: "mailto:garciar9@uwm.edu" },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-(--line) bg-[#08111e]">
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_.7fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-(--muted)">
              Leading Hispanics in STEM at the University of
              Wisconsin–Milwaukee. Grow with our familia.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("https") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn-ghost px-3"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 text-sm sm:grid-cols-1">
              {navigation
                .filter(({ href }) => href !== "/")
                .map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-(--muted) hover:text-white"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Build what comes next</p>
            <p className="mt-4 text-xl font-semibold">
              Great futures start together.
            </p>
            <p className="mt-3 text-sm leading-7 text-(--muted)">
              Partner on workshops, projects, and careers.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Become a sponsor <ArrowUpRight size={16} />
              </Link>
              <Link href="/events" className="btn-ghost">
                Attend an event
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-between gap-3 border-t border-(--line) pt-6 text-xs text-(--muted)">
          <p>© {new Date().getFullYear()} SHPE UWM.</p>
          <p>Milwaukee, Wisconsin · Go Panthers!</p>
        </div>
      </Container>
    </footer>
  );
}
