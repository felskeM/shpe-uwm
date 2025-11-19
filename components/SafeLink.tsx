"use client";

import * as React from "react";
import { withBasePath } from "@/lib/basePath";

type SafeLinkProps = React.PropsWithChildren<
    React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        href: string;
        target?: React.HTMLAttributeAnchorTarget;
        rel?: string;
    }
>;

export function SafeLink({
    href,
    target,
    rel,
    children,
    ...rest
}: SafeLinkProps) {
    const safeHref = withBasePath(href);

    const finalRel =
        target === "_blank"
            ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
            : rel;

    return (
        <a href={safeHref} target={target} rel={finalRel} {...rest}>
            {children}
        </a>
    );
  }
