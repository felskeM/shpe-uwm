import type { Metadata, Viewport } from "next";
import "../globals.css";
import type { ReactNode } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Poppins } from "next/font/google";
import Script from "next/script";



const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const siteUrl = process.env.SITE_URL ?? "https://shpeuwm.org";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  title: "SHPE UW-Milwaukee",
  description:
    "Society of Hispanic Professional Engineers — University of Wisconsin–Milwaukee",
  applicationName: "SHPE UW-Milwaukee",
  authors: [{ name: "Matthew (Mateo) Salvador Felske" }],
  keywords: ["SHPE", "UWM", "Hispanic", "STEM", "engineering"],
  icons: {
    icon: [{ url: `${basePath}/favicon.ico` }],
    apple: [{ url: `${basePath}/apple-touch-icon.png`, sizes: "180x180" }],
  },
  manifest: `${basePath}/site.webmanifest`, // change the android-chrome icons in the manifest later
  openGraph: {
    url: siteUrl,
    siteName: "SHPE UWM",
    title: "SHPE UW-Milwaukee",
    description:
      "Society of Hispanic Professional Engineers — University of Wisconsin–Milwaukee",
    images: [{ url: new URL(`${basePath}/og.webp`, siteUrl).toString() }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SHPE UW-Milwaukee",
    description:
      "Society of Hispanic Professional Engineers — University of Wisconsin–Milwaukee",
    images: [{ url: new URL(`${basePath}/og.webp`, siteUrl).toString() }],
  },
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`dark scroll-smooth ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased selection:bg-[color-mix(in_oklab,var(--shpe-accent)_28%,transparent)]">
        {/* Cloudflare Web Analytics — changed to manual injection, no SRI */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"8daff2a6fd7c4326b16eedd330e79906"}'
          strategy="afterInteractive"
        />
        <div className="relative flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
