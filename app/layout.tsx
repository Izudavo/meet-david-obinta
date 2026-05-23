import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SplashScreen from "./components/ui/splash-screen";
import SpaceBackground from "./components/ui/SpaceBackground";
import ThemeProvider from "./theme-provider";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Home/footer-section";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "David Obinta Portfolio",
  description: "Full Stack and DevOps Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen relative bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider>
          <SplashScreen/>
          
          <SpaceBackground />

          {/* GLOBAL NAV */}
          <Navbar />

          {/* PAGE CONTENT */}
          <main className="relative z-10">{children}</main>

          {/* GLOBAL FOOTER */}
          <FooterSection />
        </ThemeProvider>
      </body>
    </html>
  );
}