"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { withBasePath } from "@/lib/basePath";
import { Instagram, Linkedin, Mail, ArrowUpRight, ChevronUp } from "lucide-react";


const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/events", label: "Events" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteFooter() {
  const logo = withBasePath("/images/shpe-logo.webp");
  return (
    <footer className="relative mt-16 text-sm text-zinc-400">
      <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--shpe-orange),var(--shpe-sky))]" />
      <div className="border-t footer-bg border-white/10">
        <Container className="py-10">
          {/* top row */}
          <div className="grid gap-8 md:grid-cols-[1.1fr,1fr,1fr]">
            {/* brand + blurb */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3 group">
                {/* plain <img> so it works under static export */}
                <img
                  src={logo}
                  alt="SHPE UWM"
                  className="object-contain w-auto h-10 opacity-90 group-hover:opacity-100"
                />
                <div className="leading-tight">
                  <p className="font-semibold text-white">
                    Society of Hispanic Professional Engineers
                  </p>
                  <p className="text-zinc-400">University of Wisconsin–Milwaukee</p>
                </div>
              </Link>

              <p className="max-w-sm mt-4 text-zinc-400/90">
                Building community, leadership, and careers in STEM at UWM.
              </p>

              {/* social */}
              <div className="flex items-center gap-2 mt-5">
                <a
                  href="https://www.instagram.com/shpe_uwm/"
                  target="_blank"
                  className="social-pill"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/society-of-hispanic-professional-engineers-at-university-of-wisconsin-milwaukee-1b9031232/"
                  target="_blank"
                  className="social-pill"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:garciar9@uwm.edu"
                  target="_blank"
                  className="social-pill"
                  aria-label="Email SHPE UWM"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* site links */}
            <div>
              <h4 className="footer-heading">Navigate</h4>
              <ul className="grid grid-cols-2 mt-3 gap-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="footer-link">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* get involved */}
            <div>
              <h4 className="footer-heading">Get involved</h4>
              <p className="mt-3 text-zinc-400/90">
                Partner with us on workshops, projects, and outreach.
              </p>
              <div className="flex gap-2 mt-4">
                <Link href="/contact" className="btn-primary ring-1 ring-white/10">
                  Contact us <ArrowUpRight className="w-4 h-4 ml-1" />
                </Link>
                <Link href="/events" className="btn-ghost">
                  Upcoming events
                </Link>
              </div>
            </div>
          </div>

          {/* divider */}
          <div className="w-full h-px my-8 bg-gradient-to-r from-white/0 via-white/10 to-white/0" />

          {/* bottom row */}
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-zinc-500">
              © {new Date().getFullYear()} SHPE UWM. All rights reserved.
            </p>
            <p className="text-zinc-400/90">Go Panthers!</p>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-zinc-200 hover:bg-black/45"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
              Top
            </button>
          </div>
        </Container>
      </div>
    </footer>
  );
}
