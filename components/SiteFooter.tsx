"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { withBasePath } from "@/lib/basePath";

export function SiteFooter() {
  const logo = withBasePath("/images/shpe-logo.webp");
  const navLinks = [
    ["/about", "About"],
    ["/officers", "Officers"],
    ["/events", "Events"],
    ["/sponsors", "Sponsors"],
    ["/contact", "Contact"],
  ] as const;

  return (
    <footer className="mt-16 text-sm border-t border-[color:var(--line)] footer-bg">
      <Container className="py-10">
        <div className="grid gap-10 md:grid-cols-[1fr_auto_1fr] md:items-start">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              <img
                src={logo}
                alt="SHPE UWM"
                className="object-contain w-auto h-10 opacity-90 group-hover:opacity-100"
              />
              <p className="leading-tight text-[color:color-mix(in_oklab,var(--foreground)_70%,transparent)]">
                University of Wisconsin–Milwaukee
              </p>
            </Link>
            <p className="mt-3 text-[color:color-mix(in_oklab,var(--foreground)_65%,transparent)]">
              Leading Hispanics in STEM at University of Wisconsin–Milwaukee.
            </p>

            {/* Mobile-only: socials + nav side-by-side */}
            <div className="mt-5 grid grid-cols-[auto_1fr] items-start gap-4 md:hidden">
              <div className="flex gap-2">
                <a
                  className="social-pill"
                  aria-label="Instagram"
                  href="https://www.instagram.com/shpe_uwm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2zM17.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
                  </svg>
                </a>
                <a
                  className="social-pill"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/society-of-hispanic-professional-engineers-at-university-of-wisconsin-milwaukee-1b9031232/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2">
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.5h.07c.65-1.2 2.25-2.5 4.63-2.5 4.95 0 5.86 3.25 5.86 7.47V24h-5v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-5V8z" />
                  </svg>
                </a>
                <a className="social-pill" aria-label="Email" href="mailto:garciar9@uwm.edu">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                    <path d="M2 4h20v16H2z" fill="none" />
                    <path d="M20 6v.01L12 12 4 6.01V6h16m0-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" />
                  </svg>
                </a>
              </div>

              {/* Nav (right of socials) */}
              <nav>
                <div className="font-semibold text-[color:var(--foreground)]">Navigate</div>
                <ul className="mt-2 space-y-1.5">
                  {navLinks.map(([href, label]) => (
                    <li key={href}>
                      <Link
                        className="footer-link block rounded-md px-2 py-1.5 focus-brand"
                        href={href}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Center column (md+ only): centered nav */}
          <nav className="hidden md:block md:justify-self-center md:text-center">
            <div className="font-semibold text-[color:var(--foreground)]">Navigate</div>
            <ul className="mt-2 space-y-1.5">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <Link
                    className="footer-link block rounded-md px-2 py-1.5 focus-brand"
                    href={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div className="md:justify-self-end">
            <div className="font-semibold text-[color:var(--foreground)]">Join us</div>
            <p className="mt-2 text-[color:color-mix(in_oklab,var(--foreground)_65%,transparent)]">
              Partner on workshops, projects, and careers.
            </p>
            <div className="mt-3 grid gap-2 sm:flex">
              <a href="/contact" className="btn-primary w-full sm:w-auto">Become a sponsor</a>
              <a href="/events" className="btn-ghost w-full sm:w-auto">Attend an event</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[color:var(--line)] text-[color:color-mix(in_oklab,var(--foreground)_60%,transparent)] flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SHPE UWM.</p>
          <p>Go Panthers!</p>
        </div>
      </Container>
    </footer>
  );
}
