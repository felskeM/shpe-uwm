"use client";

import { Container } from "@/components/container";
import { motion } from "framer-motion";

export function Section({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle?: string;
    children: React.ReactNode;
}) {
    return (
        <section className="py-14 sm:py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
                    {subtitle && (
                        <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-300">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
                <div className="mt-8">{children}</div>
            </Container>
        </section>
    );
}
