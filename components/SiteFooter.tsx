"use client";

import Link from "next/link";
import { Container } from "@/components/container";
import { withBasePath } from "@/lib/basePath";
import { ArrowUpRight, ChevronUp } from "lucide-react";

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
    <footer className="mt-16 text-sm border-t border-zinc-800/70 footer-bg">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 group">
              {/* plain <img> so it works under static export */}
              <img
                src={logo}
                alt="SHPE UWM"
                  className="object-contain w-auto h-10 opacity-90 group-hover:opacity-100"
              />
              <div className="leading-tight">
                <p className="text-zinc-400">University of Wisconsin–Milwaukee</p>
              </div>
            </Link>
            <p className="mt-1 text-zinc-400">Leading Hispanics in STEM at University of Wisconsin–Milwaukee.</p>
            <div className="mt-4 flex gap-2">
              <a className="social-pill" aria-label="Instagram" href="https://www.instagram.com/shpe_uwm/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm0 2.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2zM17.5 6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" /></svg>
              </a>
              <a className="social-pill" aria-label="LinkedIn" href="https://www.linkedin.com/in/society-of-hispanic-professional-engineers-at-university-of-wisconsin-milwaukee-1b9031232/" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#0A66C2"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.5h.07c.65-1.2 2.25-2.5 4.63-2.5 4.95 0 5.86 3.25 5.86 7.47V24h-5v-7.8c0-1.86-.03-4.25-2.6-4.25-2.6 0-3 2.03-3 4.12V24h-5V8z" /></svg>
              </a>
              <a className="social-pill" aria-label="Email" href="mailto:garciar9@uwm.edu">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M2 4h20v16H2z" fill="none" /><path d="M20 6v.01L12 12 4 6.01V6h16m0-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" /></svg>
              </a>
              </div>
            </div>
          <div>
            <div className="font-semibold text-white">Navigation</div>
            <ul className="mt-2 space-y-1">
              <li><a className="footer-link" href="/about">About</a></li>
              <li><a className="footer-link" href="/officers">Officers</a></li>
              <li><a className="footer-link" href="/events">Events</a></li>
              <li><a className="footer-link" href="/sponsors">Sponsors</a></li>
              <li><a className="footer-link" href="/contact">Contact</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold text-white">Join us</div>
            <p className="mt-2 text-zinc-400">Partner on workshops, projects, and careers.</p>
            <div className="mt-3 flex gap-2">
              <a href="/contact" className="btn-primary">Become a sponsor</a>
              <a href="/events" className="btn-ghost">Attend an event</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-800/70 text-zinc-500 flex items-center justify-between">
          <p>© {new Date().getFullYear()} SHPE UWM.</p>
          <p>Go Panthers!</p>
        </div>
        </Container>
    </footer>
  );
}
