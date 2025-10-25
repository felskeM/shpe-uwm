"use client";
import Image from "@/components/BpImage";
import { motion } from "framer-motion";
import { Container } from "@/components/container";
import { withBasePath } from "@/lib/basePath";

export function Hero() {
  const Events = withBasePath("/events");
  const Contact = withBasePath("/contact");

  return (
    <div className="relative isolate">
      <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-linear-to-t from-black/50 to-transparent" />
      <Container className="grid items-center gap-6 py-10 sm:py-16 lg:grid-cols-2 lg:py-24 relative w-full aspect-4/3 sm:aspect-video">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Building community, leadership, and careers in{" "}
            <span className="headline-gradient">STEM.</span>
          </h1>
          <p className="max-w-xl mt-4 text-lg text-[color-mix(in_oklab,var(--foreground)_75%,transparent)]">
            At UWM, SHPE empowers Hispanic students through mentorship, industry
            partnerships, and hands‑on projects — while welcoming allies of
            every background.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            <a href={Events} className="btn-primary focus-brand">
              See upcoming events
            </a>
            <a href={Contact} className="btn-ghost focus-brand">
              Get involved
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-full aspect-4/3"
        >
          <Image
            src="/images/hero.png"
            alt="SHPE UWM students at an event"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            className="object-cover shadow-2xl rounded-2xl ring-1 ring-white/10"
          />
        </motion.div>
      </Container>
    </div>
  );
}
