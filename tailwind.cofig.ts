import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },

      typography: {
        blog: {
          css: {
            maxWidth: "none",
            
            /* Core text binds perfectly to global variables without opacity clipping */
            color: "var(--foreground)",

            h1: {
              fontSize: "3rem",
              fontWeight: "900",
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
            },

            h2: {
              fontSize: "1.875rem",
              marginTop: "5rem",
              marginBottom: "2rem",
              fontWeight: "800",
              letterSpacing: "-0.025em",
              color: "var(--foreground)",
            },

            h3: {
              fontSize: "1.5rem",
              marginTop: "3.5rem",
              marginBottom: "1.5rem",
              fontWeight: "800",
              color: "var(--foreground)",
            },

            p: {
              lineHeight: "2rem",
              marginBottom: "1.5rem",
              color: "var(--foreground)",
            },

            li: {
              lineHeight: "2rem",
              color: "var(--foreground)",
            },

            strong: {
              color: "var(--foreground)",
              fontWeight: "700",
            },

            a: {
              color: "#38bdf8",
              textDecoration: "none",
              "&:hover": {
                color: "#7dd3fc",
              },
            },

            blockquote: {
              backgroundColor: "rgba(125, 211, 252, 0.05)",
              borderLeftColor: "#0ea5e9",
              borderRadius: "0.75rem",
              padding: "1rem 1.5rem",
              fontStyle: "normal",
              color: "var(--foreground)",
            },
            "blockquote p::before": { content: "none" },
            "blockquote p::after": { content: "none" },

            /* INLINE CODE - Adapts visibly between modes */
            code: {
              backgroundColor: "rgba(15, 23, 42, 0.06)", /* Soft slate for light mode */
              paddingLeft: "0.375rem",
              paddingRight: "0.375rem",
              paddingTop: "0.125rem",
              paddingBottom: "0.125rem",
              borderRadius: "0.375rem",
              color: "#0284c7", /* Rich blue for light mode legibility */
              fontWeight: "600",
            },
            /* Dark mode nesting override for inline code snippets */
            ".dark & code": {
              color: "#7dd3fc",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
            },
            "code::before": { content: "none" },
            "code::after": { content: "none" },

            /* CODE BLOCKS - Stays dark and crisp in both modes */
            pre: {
              backgroundColor: "#0B1120",
              borderWidth: "1px",
              borderColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "1rem",
              padding: "1.5rem",
              fontSize: "0.875rem",
              lineHeight: "1.75rem",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.25)",
              overflowX: "auto",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
              color: "#e2e8f0",
            },

            img: {
              borderRadius: "1rem",
              borderWidth: "1px",
              borderColor: "rgba(0, 0, 0, 0.08)",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            },
            ".dark & img": {
              borderColor: "rgba(255, 255, 255, 0.1)",
            },
          },
        },
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};

export default config;