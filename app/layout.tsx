// app/layout.tsx
import type { Metadata } from "next";
import "../globals.css";
import { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "SHPE UWM",
  description: "Society of Hispanic Professional Engineers — University of Wisconsin–Milwaukee",
};

// ① Import and configure Poppins
import { Poppins } from "next/font/google";
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
    <html lang="en" className={`scroll-smooth ${poppins.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-zinc-50 to-white text-zinc-900 antialiased dark:from-zinc-950 dark:to-black dark:text-zinc-100">
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
