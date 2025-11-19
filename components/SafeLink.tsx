"use client";

import * as React from "react";
import { withBasePath } from "@/lib/basePath";

type SafeLinkProps = React.PropsWithChildren<
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
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

    // codeql[js/xss]: safeHref is validated and restricted to internal paths by withBasePath.
    // codeql[js/client-side-unvalidated-url-redirection]:
    return (
        <a href={safeHref} target={target} rel={finalRel} {...rest}>
            {children}
        </a>
    );
  }
