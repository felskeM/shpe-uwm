import { cn } from "@/lib/cn";


export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("card border border-zinc-800/70", className)}>{children}</div>;
}