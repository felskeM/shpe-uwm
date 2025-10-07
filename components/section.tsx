// components/section.tsx
import type { ReactNode } from "react";
type Props = { title: ReactNode; subtitle?: ReactNode; children: ReactNode; center?: boolean; };


export function Section({ title, subtitle, children, center }: Props) {
    return (
        <section className={center ? "text-center" : ""}>
            <header className="mb-6">
                <h2 className="text-2xl font-bold">{title}</h2>
                {subtitle && <p className="mt-1 text-white/80">{subtitle}</p>}
            </header>
            {children}
        </section>
    );
}
