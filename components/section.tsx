import type { ReactNode } from "react";
import { Container } from "@/components/container";

type Props = {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  center?: boolean;
  headingLevel?: "h1" | "h2";
};

export function Section({
  title,
  subtitle,
  children,
  center,
  headingLevel: Heading = "h1",
}: Props) {
  return (
    <section className="py-10 sm:py-14">
      <Container>
        <header
          className={center ? "mb-8 text-center sm:mb-10" : "mb-8 sm:mb-10"}
        >
          <Heading className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </Heading>
          {subtitle && (
            <p className="mt-3 text-(--muted) leading-7">{subtitle}</p>
          )}
        </header>
        {children}
      </Container>
    </section>
  );
}
