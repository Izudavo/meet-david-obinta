"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

// deterministic star field (no Math.random = no hydration issues)
const stars = Array.from({ length: 70 }).map((_, i) => ({
  top: `${(i * 13) % 100}%`,
  left: `${(i * 29) % 100}%`,
  size: i % 6 === 0 ? 3 : 2,
  duration: `${3 + (i % 5)}s`,
}));

const shootingStars = [
  { top: "10%", left: "15%", delay: "0s" },
  { top: "35%", left: "75%", delay: "4s" },
  { top: "60%", left: "40%", delay: "8s" },
  { top: "25%", left: "60%", delay: "12s" },
  { top: "80%", left: "20%", delay: "16s" },
];

export default function SpaceBackground() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* STARS */}
      {stars.map((star, i) => (
        <span
          key={i}
          className={`absolute rounded-full animate-pulse ${
            isDark ? "bg-white/40" : "bg-black/40"
          }`}
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
          }}
        />
      ))}

      {/* SHOOTING STARS */}
      {shootingStars.map((s, i) => (
        <span
          key={i}
          className="shooting-star"
          style={{
            top: s.top,
            left: s.left,
            animationDelay: s.delay,
            opacity: isDark ? 1 : 0.8,
          }}
        />
      ))}
    </div>
  );
}