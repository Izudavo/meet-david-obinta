import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SplashScreen from "./components/ui/splash-screen";
import SpaceBackground from "./components/ui/SpaceBackground";
import ThemeProvider from "./theme-provider";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Home/footer-section";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://davidobinta.xyz"),

  title: {
    default: "David Obinta | Full Stack & Cloud Engineer",
    template: "%s | David Obinta",
  },

  description:
    "Full-stack, cloud and DevOps engineer building scalable web applications, scalable backend systems, and cloud infrastructure.",

  keywords: [
    "David Obinta",
    "Full Stack Developer",
    "Frontend Developer",
    "Cloud Engineer",
    "DevOps Engineer",
    "Web Engineer",
    "React",
    "Next.js",
    "AWS",
    "JavaScript",
    "TypeScript",
    "AWS Solutions Architect",
    "Bash",
    "Linux",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
  title: "David Obinta | Full Stack & Cloud Engineer",
  description:
    "Full-stack, cloud and DevOps engineer building scalable web applications and infrastructure.",
  url: "https://davidobinta.xyz",
  siteName: "David Obinta",
  type: "website",
  images: [
    {
      url: "/opengraph-image.jpg",
      width: 1200,
      height: 630,
      alt: "David Obinta - Full Stack & Cloud/DevOps Engineer",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "David Obinta | Full Stack & Cloud Engineer",
  description:
    "Full-stack, cloud and DevOps engineer building scalable web applications and infrastructure.",
  images: ["/opengraph-image.jpg"],
},
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

           {/* TOAST */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: "16px",
                border: "1px solid hsl(var(--border))",
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
              },
            }}
          />

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