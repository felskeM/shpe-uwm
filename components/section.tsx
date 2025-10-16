import type { ReactNode } from "react";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  center?: boolean;
};

export function Section({ title, subtitle, children, center }: Props) {
  return (
    <section className="pt-10 sm:pt-12 lg:pt-8">
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {" "}
        {/* ↑ wider */}
        <header className={center ? "mb-6 text-center" : "mb-6"}>
          <h2 className="text-2xl font-bold text-[color:var(--foreground)]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-1 text-[color:color-mix(in_oklab,var(--foreground)_80%,transparent)]">
              {subtitle}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
