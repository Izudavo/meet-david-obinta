"use client";

import {
  Home,
  Folder,
  Briefcase,
  Edit3,
  Sun,
  Moon,
  WorkflowIcon,
  Mail,
} from "lucide-react";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    label: "About",
    id: "about",
    icon: Folder,
  },
  {
    label: "Projects",
    id: "projects",
    icon: WorkflowIcon,
  },
  {
    label: "Experience",
    id: "experience",
    icon: Briefcase,
  },
  {
    label: "Contact",
    id: "contact",
    icon: Mail,
  },
];

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // stores clicked item only
  const [activeSection, setActiveSection] = useState("home");

  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    if (pathname.startsWith("/blog")) {
      setActiveSection("blog");
    } else {
      setActiveSection("home");
    }
  }, [pathname]);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  const isHome = pathname === "/";

  const handleSectionNav = (section: string) => {
    setActiveSection(section);

    if (isHome) {
      const el = document.getElementById(section);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      router.push(`/#${section}`);
    }
  };

  const iconClass = (active: boolean) =>
    `w-5 h-5 transition-all duration-300 ${
      active
        ? `
          text-blue-950 dark:text-blue-400
          scale-110
          drop-shadow-[0_0_8px_rgba(30,64,175,0.45)]
        `
        : `
          text-muted-foreground
          hover:text-black
          dark:hover:text-white
        `
    }`;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-2xl border border-border bg-background/80 backdrop-blur-xl px-5 py-3 flex items-center gap-5 shadow-sm">
      {/* HOME */}
      <button
        onClick={() => {
          setActiveSection("home");
          router.push("/");
        }}
        className="relative group"
      >
        {activeSection === "home" && (
          <div className="absolute inset-0 scale-[2] rounded-full bg-blue-950/35 dark:bg-blue-900/45 blur-md" />
        )}

        <Home className={iconClass(activeSection === "home")} />

        <span className="absolute left-1/2 top-10 -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none">
          Home
        </span>
      </button>

      {/* SECTION ITEMS */}
      {navItems.map((item) => {
        const Icon = item.icon;

        const active = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => handleSectionNav(item.id)}
            className="relative group"
          >
            {active && (
              <div className="absolute inset-0 scale-[2] rounded-full bg-blue-950/35 dark:bg-blue-900/45 blur-md" />
            )}

            <Icon className={iconClass(active)} />

            <span className="absolute left-1/2 top-10 -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none">
              {item.label}
            </span>
          </button>
        );
      })}

      {/* BLOG */}
      <Link
        href="/blog"
        onClick={() => setActiveSection("blog")}
        className="relative group"
      >
        {pathname.startsWith("/blog") && (
          <div className="absolute inset-0 scale-[2] rounded-full bg-blue-950/35 dark:bg-blue-900/45 blur-md" />
        )}

        <Edit3 className={iconClass(pathname.startsWith("/blog"))} />

        <span className="absolute left-1/2 top-10 -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none">
          Blog
        </span>
      </Link>

      <div className="w-px h-5 bg-border" />

      {/* THEME */}
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative group"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-muted-foreground" />
        )}

        <span className="absolute left-1/2 top-10 -translate-x-1/2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition bg-black text-white dark:bg-white dark:text-black text-xs px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none">
          Theme
        </span>
      </button>
    </nav>
  );
};

export default Navbar;
