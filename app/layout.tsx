// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Poppins } from "next/font/google";
import type { Viewport } from 'next'


export const viewport: Viewport = {
  themeColor: "#0a0a0a",
}

export const metadata: Metadata = {
  title: "UWM-SHPE",
  description: "Society of Hispanic Professional Engineers — University of Wisconsin–Milwaukee",
  themeColor: viewport.themeColor,
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
    <html lang="en" className={`dark scroll-smooth ${poppins.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased selection:bg-[color-mix(in_oklab,var(--shpe-accent)_28%,transparent)]">
        <div className="relative flex flex-col min-h-screen">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
