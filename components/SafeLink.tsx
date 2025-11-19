"use client";

import * as React from "react";
import { withBasePath } from "@/lib/basePath";

type SafeLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /** Internal root-relative path, e.g. "/events" */
    href: string;
};

// eslint-disable-next-line react/prop-types
export function SafeLink({ href, target, rel, ...rest }: SafeLinkProps) {
    // Always validate + prefix internal paths
    const safeHref = withBasePath(href);

    // If opening in a new tab, enforce noopener/noreferrer
    const finalRel =
        target === "_blank"
            ? [rel, "noopener", "noreferrer"].filter(Boolean).join(" ")
            : rel;

    // eslint-disable-next-line jsx-a11y/anchor-has-content
    return <a href={safeHref} target={target} rel={finalRel} {...rest} />;
}
