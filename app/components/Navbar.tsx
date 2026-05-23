"use client";

import {
  Home,
  Folder,
  Briefcase,
  Edit3,
  Sun,
  Moon,
  WorkflowIcon,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  const isHome = pathname === "/";

  const iconClass = (active: boolean) =>
    `w-5 h-5 transition-all duration-200 ${
      active
        ? "text-white scale-110 drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
        : "text-gray-400 hover:text-white"
    }`;

  /**
   * Handles smooth navigation:
   * - If already on home - scroll
   * - If not - navigate to "/#section"
   */
  const handleSectionNav = (section: string) => {
    if (isHome) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/#${section}`);
    }
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#1A1A1A]/80 dark:bg-black/60 backdrop-blur-md border border-white/10 px-5 py-3 rounded-2xl flex items-center gap-5 z-50">

      {/* HOME */}
      <button onClick={() => router.push("/")} aria-label="Home">
        <Home className={iconClass(isActive("/"))} />
      </button>

      {/* ABOUT */}
      <button
        onClick={() => handleSectionNav("about")}
        aria-label="About"
      >
        <Folder className={iconClass(false)} />
      </button>

      {/* EXPERIENCE */}
      <button
        onClick={() => handleSectionNav("experience")}
        aria-label="Experience"
      >
        <Briefcase className={iconClass(false)} />
      </button>

      {/* PROJECTS */}
      <button
        onClick={() => handleSectionNav("projects")}
        aria-label="Projects"
      >
        <WorkflowIcon className={iconClass(false)} />
      </button>

      {/* BLOG (real route) */}
      <Link href="/blog" aria-label="Blog">
        <Edit3 className={iconClass(isActive("/blog"))} />
      </Link>

      {/* DIVIDER */}
      <div className="w-px h-5 bg-white/10" />

      {/* THEME TOGGLE */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="flex items-center justify-center"
        aria-label="Toggle Theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400 hover:scale-110 transition" />
        ) : (
          <Moon className="w-5 h-5 text-gray-300 hover:scale-110 transition" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;