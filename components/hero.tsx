"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/container";


export function Hero() {
    return (
        <div className="relative isolate">
            <div className="absolute inset-0 -z-10 hero-radial" />
            <div className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-black/50 to-transparent" />
            <Container className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                        Building community, leadership, and careers in <span className="headline-gradient">STEM.</span>
                    </h1>
                    <p className="max-w-xl mt-4 text-lg text-zinc-300">
                        At UWM, SHPE empowers Hispanic students through mentorship, industry partnerships, and hands‑on projects — while welcoming allies of every background.
                    </p>
                    <div className="flex flex-wrap gap-3 mt-6">
                        <a href="/events" className="btn-primary focus:ring-brand">See upcoming events</a>
                        <a href="/contact" className="btn-ghost focus:ring-brand">Get involved</a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-[4/3]"
                >
                    <div className="hero-image-glow" />
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
