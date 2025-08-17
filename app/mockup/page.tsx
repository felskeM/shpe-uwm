'use client'
import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Linkedin, Mail, Star } from "lucide-react";

/**
 * SHPE UWM – Visual Mockups (Home + Sponsors + Style Guide)
 * ---------------------------------------------------------
 * Drop this into /app/mockups/page.tsx in a Next.js app (or preview here).
 * Uses Tailwind v4 utilities (works with v3.x too). Minimal custom CSS.
 */

const container = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.06, when: "beforeChildren" },
  },
};

const item = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } };

function Navbar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-neutral-900/60">
      <div className="flex items-center max-w-6xl gap-6 px-4 mx-auto h-14">
        <a className="inline-flex items-center gap-2 group" href="#home">
          <div className="grid w-8 h-8 font-bold text-white bg-blue-600 rounded-lg place-items-center">S</div>
          <span className="font-semibold tracking-tight">SHPE @ UWM</span>
        </a>
        <div className="items-center hidden gap-6 ml-auto text-sm sm:flex">
          <a href="#events" className="hover:text-blue-700">Events</a>
          <a href="#officers" className="hover:text-blue-700">Officers</a>
          <a href="#sponsors" className="hover:text-blue-700">Sponsors</a>
          <a href="#contact" className="rounded-full bg-blue-600 px-3 py-1.5 text-white hover:bg-blue-700 transition">Join us</a>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-600/20 via-blue-600/10 to-transparent" />
      <div className="absolute rounded-full -left-24 -top-20 -z-10 h-72 w-72 bg-blue-500/20 blur-3xl" />
      <div className="absolute rounded-full -right-24 -bottom-20 -z-10 h-72 w-72 bg-amber-400/20 blur-3xl" />

      <div className="grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 mx-auto lg:grid-cols-2 lg:py-24">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Building community, leadership, and careers in STEM.
          </motion.h1>
          <motion.p variants={item} className="mt-4 max-w-prose text-neutral-600 dark:text-neutral-300">
            SHPE @ University of Wisconsin–Milwaukee connects Hispanic/Latine students with industry mentors,
            hands‑on projects, and career‑ready opportunities.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mt-6">
            <a href="#events" className="inline-flex items-center gap-2 px-4 py-2 text-white transition bg-blue-600 rounded-full hover:bg-blue-700">
              See upcoming events <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 bg-white border rounded-full border-black/10 hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
              Become a member
            </a>
          </motion.div>
          <motion.div variants={item} className="flex items-center gap-6 mt-8">
            <SponsorChip name="GE HealthCare" />
            <SponsorChip name="Eaton" />
            <SponsorChip name="Rockwell" />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <div className="relative p-3 bg-white border shadow-xl isolate rounded-2xl border-black/5 dark:bg-neutral-900">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-800">
              {/* Photo collage mock */}
              <div className="grid h-full grid-cols-3 gap-2 p-2">
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="col-span-2 rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
                <div className="rounded-lg bg-[linear-gradient(135deg,#2563eb20,#f59e0b10)]" />
              </div>
            </div>
            <div className="absolute px-3 py-1 text-xs font-semibold text-black rounded-full shadow right-3 top-3 bg-amber-400">Recruiting Season</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SponsorChip({ name }: { name: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs border rounded-full shadow-sm border-black/10 bg-white/70 backdrop-blur dark:bg-neutral-900/70">
      <Star className="h-3.5 w-3.5" />
      <span className="font-medium">{name}</span>
    </div>
  );
}

function Section({ id, title, eyebrow, children }: { id: string; title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-16 lg:py-24">
      <div className="max-w-6xl px-4 mx-auto">
        {eyebrow && <div className="text-xs font-semibold tracking-widest text-blue-600 uppercase">{eyebrow}</div>}
        <h2 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function EventsSection() {
  const events = [
    { date: "Sep 10, 2025", title: "Kickoff + Networking Night", where: "UWM Union 191", tag: "On‑campus" },
    { date: "Sep 18, 2025", title: "Resume Sprint (with GE HealthCare)", where: "EMS E170", tag: "Workshop" },
    { date: "Oct 2, 2025", title: "Plant Tour: Eaton", where: "Tour Bus departs EMS", tag: "Industry" },
  ];
  return (
    <Section id="events" eyebrow="What’s Next" title="Upcoming events">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {events.map((e) => (
          <motion.div key={e.title} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25 }}
            className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-neutral-900">
            <div className="flex items-center gap-2 text-xs">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">{e.date}</span>
              <span className="ml-auto rounded-full bg-blue-50 px-2 py-0.5 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">{e.tag}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold tracking-tight">{e.title}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              <MapPin className="w-4 h-4" /> {e.where}
            </div>
            <div className="mt-4 text-sm">
              <a href="#" className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-neutral-50 px-3 py-1.5 text-neutral-700 transition hover:bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700">
                Details <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
            <div className="absolute inset-0 transition opacity-0 pointer-events-none -z-10 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:opacity-10" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function OfficersSection() {
  const people = [
    { name: "Ana Ramirez", role: "President", major: "EE", linkedin: "#", email: "#" },
    { name: "Luis Ortega", role: "VP External", major: "CS", linkedin: "#", email: "#" },
    { name: "Maya Santos", role: "Treasurer", major: "ME", linkedin: "#", email: "#" },
    { name: "Tristan Velasquez", role: "Secretary", major: "CE", linkedin: "#", email: "#" },
  ];
  return (
    <Section id="officers" eyebrow="Leadership" title="Meet the 2025–26 officer team">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {people.map((p) => (
          <motion.div key={p.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25 }}
            className="group rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-neutral-900">
            <div className="w-full overflow-hidden aspect-square rounded-xl bg-gradient-to-br from-blue-600/15 via-amber-400/10 to-transparent" />
            <div className="mt-3">
              <div className="text-sm text-neutral-600 dark:text-neutral-300">{p.role}</div>
              <h3 className="text-base font-semibold tracking-tight">{p.name}</h3>
              <div className="text-sm text-neutral-600 dark:text-neutral-300">{p.major}</div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <a aria-label="LinkedIn" href={p.linkedin} className="inline-flex items-center p-2 bg-white border rounded-full border-black/10 hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <Linkedin className="w-4 h-4" />
              </a>
              <a aria-label="Email" href={p.email} className="inline-flex items-center p-2 bg-white border rounded-full border-black/10 hover:bg-neutral-50 dark:bg-neutral-900 dark:hover:bg-neutral-800">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function SponsorsSection() {
  const tiers = [
    { name: "Platinum", cols: "sm:col-span-2", logos: ["GE HealthCare", "Eaton"] },
    { name: "Gold", cols: "", logos: ["Rockwell Automation", "Kohl's", "Harley‑Davidson", "Northwestern Mutual"] },
    { name: "Silver", cols: "", logos: ["Sponsor A", "Sponsor B", "Sponsor C", "Sponsor D", "Sponsor E", "Sponsor F"] },
  ];
  return (
    <Section id="sponsors" eyebrow="Partners" title="Sponsors who make it possible">
      <div className="mb-6 max-w-prose text-neutral-600 dark:text-neutral-300">
        Tiered layout with auto‑fit grid. Upload SVG/PNG logos and drop them in these cards.
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className={`rounded-2xl border border-black/5 bg-white p-5 shadow-sm dark:bg-neutral-900 ${t.cols}`}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold">{t.name}</h3>
              <div className="text-xs text-neutral-500">{t.logos.length} sponsors</div>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-3">
              {t.logos.map((l) => (
                <div key={l} className="group relative grid aspect-[3/2] place-items-center overflow-hidden rounded-xl border border-black/5 bg-neutral-50 p-2 transition hover:-translate-y-0.5 hover:shadow">
                  <div className="text-sm font-medium text-center text-neutral-600 group-hover:text-neutral-800">
                    {l}
                  </div>
                  <div className="absolute inset-0 transition opacity-0 pointer-events-none bg-gradient-to-br from-amber-300/0 to-amber-300/20 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 p-5 mt-6 bg-white border border-dashed rounded-2xl border-black/10 dark:bg-neutral-900">
        <div>
          <div className="text-sm font-semibold">Become a sponsor</div>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Get visibility at events, mentorship access, and priority recruiting.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-2 px-4 py-2 text-black rounded-full shadow bg-amber-400 hover:bg-amber-300">
          View sponsorship deck <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="py-10 border-t border-black/5">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="grid w-8 h-8 font-bold text-white bg-blue-600 rounded-lg place-items-center">S</div>
              <div className="font-semibold tracking-tight">SHPE @ UWM</div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">Diversity, equity, and excellence in STEM.</p>
          </div>
          <div>
            <div className="text-sm font-semibold">Quick Links</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><a href="#events" className="hover:underline">Events</a></li>
              <li><a href="#officers" className="hover:underline">Officers</a></li>
              <li><a href="#sponsors" className="hover:underline">Sponsors</a></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>uwm‑shpe@example.edu</li>
              <li>UWM EMS Building</li>
              <li><a href="#" className="inline-flex items-center gap-1 hover:underline">Follow on LinkedIn <Linkedin className="h-3.5 w-3.5" /></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-xs text-neutral-500">© {new Date().getFullYear()} SHPE UWM. All rights reserved.</div>
      </div>
    </footer>
  );
}

function StyleGuide() {
  return (
    <Section id="style" eyebrow="Reference" title="Mini style guide">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Typography</h3>
          <div className="p-5 space-y-2 bg-white border rounded-2xl border-black/5 dark:bg-neutral-900">
            <div className="text-3xl font-extrabold tracking-tight">Display / Heading</div>
            <div className="text-xl font-semibold tracking-tight">H2 / Section title</div>
            <div className="text-base">Body text – comfortable line-height, readable contrast.</div>
            <div className="text-sm text-neutral-600 dark:text-neutral-300">Small text for metadata and captions.</div>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Buttons</h3>
          <div className="flex flex-wrap gap-3 p-5 bg-white border rounded-2xl border-black/5 dark:bg-neutral-900">
            <button className="px-4 py-2 text-white bg-blue-600 rounded-full hover:bg-blue-700">Primary</button>
            <button className="px-4 py-2 bg-white border rounded-full border-black/10 hover:bg-neutral-50 dark:bg-neutral-900">Secondary</button>
            <button className="inline-flex items-center gap-2 px-4 py-2 text-black rounded-full bg-amber-400 hover:bg-amber-300">Accent <ArrowRight className="w-4 h-4" /></button>
          </div>
          <h3 className="text-xl font-bold">Cards</h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 bg-white border shadow-sm rounded-2xl border-black/5 dark:bg-neutral-900">Default card</div>
            <div className="p-4 transition bg-white border shadow rounded-2xl border-black/5 hover:shadow-lg dark:bg-neutral-900">Hoverable card</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function SHPE_UWM_Mockups() {
  return (
    <div className="min-h-screen antialiased bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white">
      <Navbar />
      <Hero />
      <EventsSection />
      <OfficersSection />
      <SponsorsSection />
      <StyleGuide />
      <Footer />
    </div>
  );
}
