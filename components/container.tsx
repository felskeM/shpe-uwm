// Update the import path to match your project structure, for example:
import { cn } from "../lib/cn";
// or create the file at /workspaces/shpe-uwm/lib/cn.ts if it does not exist


export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
    return <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}