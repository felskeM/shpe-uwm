"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";


export function Hero() {
    return (
        <div className="relative isolate">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_30rem_at_50%_-10%,rgba(253,230,138,.25),transparent)] dark:bg-[radial-gradient(45rem_30rem_at_50%_-10%,rgba(253,230,138,.12),transparent)]" />
            <Container className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:py-24">
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Building community, leadership, and careers in STEM.
                    </h1>
                    <p className="mt-4 max-w-xl text-lg text-zinc-600 dark:text-zinc-300">
                        SHPE UWM empowers Hispanic and Latinx students through mentorship, industry partnerships, and hands‑on projects — while welcoming allies of every background.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href="/events" className="rounded-xl bg-shpe-primary px-4 py-2 font-medium text-white shadow hover:bg-shpe-accent">See upcoming events</a>
                        <a href="/contact" className="rounded-xl border border-zinc-300 px-4 py-2 font-medium hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900">Get involved</a>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative aspect-[4/3] w-full">
                    <Image
                        src="/images/hero.png"
                        alt="SHPE UWM students at an event"
                        fill
                        priority
                        className="rounded-2xl object-cover shadow-2xl"
                    />
                </motion.div>
            </Container>
        </div>
    );
}