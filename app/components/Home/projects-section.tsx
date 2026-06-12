"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef, useMemo, useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { FaGithub, FaFigma } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  category: "uiux" | "frontend" | "backend" | "cloud";
  tech: string[];
  highlights?: string[];
  github?: string;
  live?: string;
  figma?: string;
  image: string; // cover image
  gallery?: string[]; // additional screenshots
  metrics?: {
    label: string;
    value: string;
  }[];
  accent: string;
};

const projects: Project[] = [
  // UI/UX
  {
    title: "AT Budget App UI",
    description:
      "A modern mobile budgeting experience focused on expense tracking, smart savings goals, analytics, and clean financial insights.",
    category: "uiux",
    tech: ["Figma", "Mobile UI", "Prototype", "Design System"],
    figma:
      "https://www.figma.com/proto/W3TP2BfFeOWvg3fmlqjcB1/AT_MVP_MOBILE?node-id=140-256&p=f&t=r8yuVXLd24o1xJSV-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=29%3A152&show-proto-sidebar=1",
    image: "/projects/budget-ui.png",
    accent: "#6366F1",
  },

  {
    title: "CirvaX Giftcard Trading App UI",
    description:
      "Mobile-first gift card trading experience designed for fast transactions, wallet management, rate visibility, and trust-driven user flows.",
    category: "uiux",
    tech: ["Figma", "Fintech UX", "Prototype"],
    figma:
      "https://www.figma.com/proto/WrZFNPAzz5UIgchCGYjobd/circle-of-smarter-money?node-id=2-513&p=f&t=zgT4ZSNLsxIbslNj-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    image: "/projects/giftcard-ui.png",
    accent: "#F59E0B",
  },

  // FRONTEND
  {
    title: "ArticFlow - A Modern HVAC Service Website",

    description:
      "Designed and developed a responsive HVAC company website focused on lead generation, emergency service bookings, local SEO visibility, and customer acquisition. Built conversion-focused service pages, location landing pages, and mobile-first experiences to help local contractors increase qualified service inquiries.",

    category: "frontend",

    tech: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "SEO",
      "Responsive Design",
    ],

    highlights: [
      "Built conversion-focused HVAC service website optimized for local lead generation",
      "Developed dedicated service pages for installation, repair, maintenance, and emergency support",
      "Created location-specific landing pages targeting local search traffic",
      "Implemented mobile-first responsive layouts across all devices",
      "Optimized page structure, metadata, and content for SEO performance",
      "Designed high-converting contact and service request workflows",
      "Integrated trust-building sections including reviews, certifications, and service guarantees",
    ],

    live: undefined,

    image: "/projects/hvac/home.png",

    gallery: [
      "/projects/hvac/services.png",
      "/projects/hvac/emergency-service.png",
      "/projects/hvac/blog.png",
      "/projects/hvac/contact.png",
    ],

    accent: "#0EA5E9",
  },

  {
    title: "RapidFlow - A Lead-Generation Plumbing Website",

    description:
      "Designed and developed a modern plumbing business website focused on customer acquisition, emergency service requests, and local search visibility. Built responsive service pages, trust-focused conversion funnels, and optimized user journeys to drive service bookings and inquiries.",

    category: "frontend",

    tech: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Local SEO",
      "Responsive Design",
    ],

    highlights: [
      "Developed responsive plumbing company website optimized for lead generation",
      "Built dedicated pages for residential and commercial plumbing services",
      "Implemented emergency service request and contact workflows",
      "Created local SEO landing pages targeting service-area keywords",
      "Designed conversion-focused layouts with strong call-to-action placement",
      "Integrated testimonials, guarantees, and trust-building elements",
      "Optimized performance, accessibility, and mobile experience",
    ],

    live: undefined,

    image: "/projects/plumbing/home.png",

    gallery: [
      "/projects/plumbing/services.png",
      "/projects/plumbing/emergency.png",
      "/projects/plumbing/location.png",
      "/projects/plumbing/contact.png",
    ],

    accent: "#8B5CF6",
  },

  {
    title: "Shopora -  A Multi-Vendor E-Commerce Marketplace",

    description:
      "Designed and developed a scalable e-commerce marketplace platform enabling vendors to manage products while providing customers with streamlined product discovery, shopping cart management, and checkout experiences across multiple categories.",

    category: "frontend",

    tech: [
      "Vite",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Marketplace UI",
      "E-Commerce",
    ],

    highlights: [
      "Built modern marketplace experience for buyers and sellers",
      "Developed product discovery workflows with category filtering and search",
      "Implemented shopping cart and checkout user journeys",
      "Created vendor-facing product management interfaces",
      "Designed reusable component architecture for marketplace scalability",
      "Optimized responsive experiences for desktop, tablet, and mobile users",
      "Focused on conversion-oriented product listing and browsing experiences",
    ],

    live: undefined,

    image: "/projects/marketplace/home.png",

    gallery: [
      "/projects/marketplace/products.png",
      "/projects/marketplace/product-details.png",
      "/projects/marketplace/cart.png",
      "/projects/marketplace/vendor-dashboard.png",
      "/projects/marketplace/signup.png",
    ],

    accent: "#2563EB",
  },

  {
    title: "CoinTrack",
    description:
      "A responsive cryptocurrency tracking web application that displays real-time prices and market data for popular cryptocurrencies using the CoinGecko API.",
    category: "frontend",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Firebase Hosting",
      "GitHub",
    ],
    highlights: [
      "Integrated CoinGecko API for real-time cryptocurrency market data",
      "Built responsive grid-based UI optimized for multiple screen sizes",
      "Implemented automatic 30-second data refresh system",
      "Handled API failures gracefully with structured error states",
      "Deployed production-ready application using Firebase Hosting",
    ],
    github: "https://github.com/Izudavo/CoinTrackSetup",
    live: "https://cointrack-91a8e.web.app",
    image: "/projects/cointrack-img.png",
    accent: "#EAB308",
  },

  {
    title: "GHAN Platform",
    description:
      "Led the end-to-end redesign and development of the GHAN platform, transforming product requirements and Figma concepts into a scalable production-ready web application focused on performance, maintainability, and operational efficiency.",
    category: "frontend",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "CMS",
      "API Integration",
      "SEO",
    ],
    highlights: [
      "Designed and implemented responsive user interfaces from Figma concepts",
      "Built scalable frontend architecture using Next.js and TypeScript",
      "Integrated backend services for forms, messaging, and content workflows",
      "Optimized SEO, accessibility, and performance across pages",
      "Implemented automated email workflows and validation systems",
      "Integrated dynamic content management using a headless CMS",
      "Improved platform reliability with structured error handling and abuse prevention",
      "Managed production deployments and release iterations",
    ],
    live: "https://www.globalharvestnetworks.com",
    image: "/projects/ghan-platform.png",
    accent: "#EAB308",
  },

  {
    title: "Sovereign Nest Estate Limited",
    description:
      "Designed and developed a modern real estate platform showcasing premium residential and commercial properties across Nigeria, with a focus on trust, luxury presentation, and lead generation.",
    category: "frontend",
    tech: [
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Real Estate UI",
      "Responsive Design",
    ],
    highlights: [
      "Built a premium real estate website for showcasing luxury properties across Lagos and Abuja",
      "Developed responsive property listing experiences optimized for desktop and mobile users",
      "Created conversion-focused inquiry and contact flows for prospective property buyers",
      "Designed reusable components for property cards, listings, testimonials, and service sections",
      "Implemented trust-building elements including verified listings, client testimonials, and company credentials",
      "Structured content to highlight investment opportunities, property details, and advisory services",
    ],
    live: "https://sovereignnestltd.com",
    image: "/projects/sovereign-nest.png",
    accent: "#8A2BE2",
  },

  {
    title: "CirvaX Web Platform",
    description:
      "Designed and developed a fintech landing platform for streamlined gift card trading with WhatsApp-assisted transaction workflows, trust-focused onboarding, and conversion-driven user experience.",
    category: "frontend",
    tech: [
      "Vite",
      "TypeScript",
      "WhatsApp Integration",
      "Tailwind",
      "Fintech UI",
    ],
    highlights: [
      "Built responsive fintech landing experience optimized for mobile users",
      "Integrated WhatsApp-driven customer interaction and trading workflows",
      "Designed trust-focused UI patterns for rates, transactions, and onboarding",
      "Developed reusable frontend components and scalable layout system",
      "Focused on conversion-oriented UX and simplified trading flows",
    ],
    live: "https://cirvax.com",
    image: "/projects/cirva-gift-landing.png",
    accent: "#3B82F6",
  },

  {
    title: "Authentic Technologies",
    description:
      "Designed and developed a modern enterprise solutions platform focused on workflow automation, operational efficiency, and interactive smart tools for digital decision-making.",
    category: "frontend",
    tech: ["Vite", "TypeScript", "Tailwind", "Interactive UI", "Enterprise UX"],
    highlights: [
      "Built modern enterprise landing platform with scalable frontend architecture",
      "Designed interactive Smart Test Labs for user engagement and lead generation",
      "Developed AI-assisted budgeting calculator experience",
      "Created industry-based app preview and demo interaction flows",
      "Implemented security assessment experience with scoring and recommendations",
      "Optimized responsive layouts, accessibility, and performance",
      "Designed reusable UI systems and modular frontend components",
    ],
    live: "https://authentictechnologies.co",
    image: "/projects/authentic-tech.png",
    accent: "#2563EB",
  },

  // BACKEND
  {
    title: "RideIT",
    description:
      "RideIT - A backend API for a student transport solution system, similar to Uber/Bolt but designed for campus rides.",
    category: "backend",
    tech: [" JavaScript, Node.js, Express, Prisma, MySQL, and Render"],
    github: "https://github.com/Web-dev-ENT-302/transport-backend",
    image: "/projects/rideit.png",
    accent: "#D4AF37",
  },

  {
    title: "AT Budget App",
    description:
      "A backend API powering modern mobile budgeting experience focused on expense tracking, smart savings goals, analytics, and clean financial insights.",
    category: "backend",
    tech: [" TypeScript, Node.js, Express, Prisma, MySQL, and AWS EC2"],
    github: "https://github.com/Web-Af-dev/AT-Budget-Backend",
    image: "/projects/budget-ui.png",
    accent: "#A78BFA",
  },

  {
    title: "CirvaX Giftcard API",
    description:
      "Backend API for Cirva-X card trade operations, both handling user and admin actions, deployed to AWS infra, using Sentry for monitoring",
    category: "backend",
    tech: [
      " TypeScript, Node.js, Express, Prisma, MySQL, Sentry, Resend, and AWS",
    ],
    github: "https://github.com/devcirvax/node-backend",
    image: "/projects/giftcard-ui.png",
    accent: "#10B981",
  },

  // Cloud
  {
    title: "Weather Dashboard Cloud Pipeline",
    description:
      "Developed a cloud-based weather data pipeline that fetches near real-time weather information from Nigerian cities and stores structured data in Amazon S3 for future analysis.",
    category: "cloud",
    tech: ["AWS S3", "Python", "Boto3", "OpenWeather API", "AWS CLI", "dotenv"],
    highlights: [
      "Fetched live weather data using the OpenWeather API",
      "Stored structured datasets securely in Amazon S3",
      "Managed AWS credentials and secrets using environment variables",
      "Built cloud automation workflows with Python and Boto3",
      "Configured AWS infrastructure",
    ],
    github: "https://github.com/Izudavo/Day1_CozyCloud_DevopsChallenge",
    image: "/projects/weatherapp_demo.png",
    accent: "#0EA5E9",
  },

  {
    title: "NBA Data Lake",
    description:
      "Designed a serverless AWS data lake pipeline for storing, transforming, and querying NBA standings data using S3, AWS Glue, and Amazon Athena.",
    category: "cloud",
    tech: [
      "AWS S3",
      "AWS Glue",
      "Amazon Athena",
      "Python",
      "SQL",
      "SportsDataIO",
    ],
    highlights: [
      "Built a cloud-native NBA data lake architecture on AWS",
      "Extracted and transformed NBA standings data using AWS Glue",
      "Queried structured datasets directly with Amazon Athena and SQL",
      "Stored season statistics in Amazon S3 for long-term access",
      "Implemented secure IAM role permissions across AWS services",
    ],
    github: "https://github.com/Izudavo/DAY3-COZYCLOUD-DEVOPS--NBADATALAKE",
    image: "/projects/nba_sns.jpeg",
    accent: "#8B5CF6",
  },

  {
    title: "Football Matchday Notifications",
    description:
      "Built a cloud-based football fixtures notification system that delivers scheduled match updates from major leagues to subscribed users using AWS serverless infrastructure.",
    category: "cloud",
    tech: [
      "AWS Lambda",
      "Amazon SNS",
      "EventBridge",
      "Python",
      "REST API",
      "IAM",
    ],
    highlights: [
      "Integrated football-data.org API for live football fixtures",
      "Automated hourly notifications using Amazon EventBridge",
      "Delivered email alerts through Amazon SNS",
      "Implemented secure IAM policies using least privilege principles",
      "Built serverless workflow using AWS Lambda and Python",
    ],
    github: "https://github.com/Izudavo/Day2_CozyCloud_DevopsChallenge",
    image: "/projects/football_sns.png",
    accent: "#22C55E",
  },
];

const tabs = [
  { key: "uiux", label: "UI/UX" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "cloud", label: "Cloud" },
] as const;

export default function SelectedProjects() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("uiux");

  const [selected, setSelected] = useState<Project | null>(null);

  const [figmaLoaded, setFigmaLoaded] = useState(false);

  const [activeImage, setActiveImage] = useState(0);

  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  const ref = useRef(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const filtered = useMemo(
    () => projects.filter((p) => p.category === active),
    [active]
  );

  // reset loader whenever modal changes
  useEffect(() => {
    setActiveImage(0);
    setFigmaLoaded(false);
  }, [selected]);

  const getFigmaEmbedUrl = (url: string) => {
    if (!url) return "";

    const match = url.match(/figma\.com\/proto\/([^/?]+)/);

    if (match) {
      const fileKey = match[1];
      return `https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/${fileKey}`;
    }

    return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(
      url
    )}`;
  };

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-4 py-28 space-y-10">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="space-y-3"
      >
        <h2 className="text-3xl md:text-5xl font-black uppercase text-foreground">
          Selected Projects
        </h2>

        <p className="text-muted-foreground max-w-2xl leading-relaxed">
          A collection of products, mobile experiences, backend systems, and
          cloud infrastructure projects spanning engineering and UI/UX design.
        </p>
      </motion.div>

      {/* TABS */}
      <div className="flex flex-wrap gap-3">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`px-4 py-2 rounded-full border text-sm transition-all duration-300 ${
              active === t.key
                ? "bg-black text-white dark:bg-white dark:text-black"
                : "border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-400 hover:text-black dark:hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filtered.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{
                duration: 0.45,
                delay: i * 0.05,
              }}
              whileHover={{
                y: -8,
              }}
              onClick={() => setSelected(p)}
              className="group relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5"
            >
              {/* glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 blur-3xl transition duration-700"
                style={{ background: p.accent }}
              />

              {/* IMAGE */}
              <div className="relative h-[300px] overflow-hidden">
                {p.gallery && p.gallery.length > 0 && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs">
                      {p.gallery.length} Screenshots
                    </span>
                  </div>
                )}
                <motion.img
                  src={p.image}
                  alt={p.title}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-6 space-y-4 relative z-20">
                <div className="space-y-2">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: p.accent }}
                  >
                    {p.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                    {p.description}
                  </p>
                </div>

                {/* tech stack */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* links */}
                <div className="flex items-center gap-5 pt-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <FaGithub className="w-4 h-4" />
                      View Github repo →
                    </a>
                  )}

                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Click to see live url
                    </a>
                  )}

                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <FaFigma className="w-4 h-4" />
                      Figma →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 10 }}
              transition={{ duration: 0.22 }}
              onClick={(e) => e.stopPropagation()}
              className="
relative
w-[95vw]
md:w-full
max-w-4xl
max-h-[95vh]
overflow-hidden
rounded-2xl
border
border-zinc-200
dark:border-zinc-800
bg-white
dark:bg-black
shadow-2xl
"
            >
              {/* close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-50 w-9 h-9 rounded-full bg-black/5 dark:bg-white/10 backdrop-blur-md flex items-center justify-center hover:scale-105 transition"
              >
                <X className="w-4 h-4 text-black dark:text-white" />
              </button>

              {/* content (scroll container) */}
              <div className="p-5 md:p-6 space-y-4 overflow-y-auto max-h-[90vh]">
                {/* top */}
                <div className="space-y-3 pr-6">
                  <h3
                    className="text-xl md:text-2xl font-black"
                    style={{ color: selected.accent }}
                  >
                    {selected.title}
                  </h3>

                  <p className="leading-relaxed text-sm md:text-base text-zinc-700 dark:text-zinc-300">
                    {selected.description}
                  </p>

                  {/* tech */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selected.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-900"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* links */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaGithub />
                        Code
                      </a>
                    )}

                    {selected.live && (
                      <a
                        href={selected.live}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}

                    {selected.figma && (
                      <a
                        href={selected.figma}
                        target="_blank"
                        className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                      >
                        <FaFigma className="w-4 h-4" />
                        View in Figma
                      </a>
                    )}
                  </div>
                </div>

                {/* FIGMA */}
                {selected.figma && (
                  <div className="rounded-xl overflow-hidden border">
                    {!figmaLoaded && (
                      <div className="h-[360px] flex items-center justify-center">
                        <div className="animate-spin h-8 w-8 border-2 border-t-black dark:border-t-white rounded-full" />
                      </div>
                    )}

                    <iframe
                      src={getFigmaEmbedUrl(selected.figma)}
                      className={`w-full h-[360px] ${
                        figmaLoaded ? "block" : "hidden"
                      }`}
                      allowFullScreen
                      onLoad={() => setFigmaLoaded(true)}
                    />
                  </div>
                )}

                {/* highlights */}
                {/* GALLERY */}
                {selected.gallery && selected.gallery.length > 0 && (
                  <div className="space-y-3">
                    <div
                      className="overflow-hidden rounded-xl border bg-zinc-100 dark:bg-zinc-900 p-2 md:p-4 cursor-pointer"
                      onClick={() =>
                        setFullscreenImage(selected.gallery![activeImage])
                      }
                    >
                      <img
                        src={selected.gallery[activeImage]}
                        alt={selected.title}
                        className="
      w-full
      h-auto
      object-contain
      rounded-lg
    "
                      />
                    </div>

                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {selected.gallery.map((img, idx) => (
                        <button
                          key={img}
                          onClick={() => setActiveImage(idx)}
                          className={`shrink-0 rounded-lg overflow-hidden border-2 transition ${
                            activeImage === idx
                              ? "border-blue-500"
                              : "border-transparent"
                          }`}
                        >
                          <img
                            src={img}
                            alt=""
                            className="w-24 h-16 object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* METRICS */}
                {selected.metrics && (
                  <div className="grid grid-cols-3 gap-3">
                    {selected.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl border p-4 text-center"
                      >
                        <div className="text-2xl font-bold">{m.value}</div>

                        <div className="text-xs text-muted-foreground">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {selected.highlights && (
                  <div className="space-y-3">
                    <h4 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Key Contributions
                    </h4>

                    <div className="grid gap-3">
                      {selected.highlights.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 rounded-xl border border-zinc-200 dark:border-zinc-800 p-3 bg-zinc-50 dark:bg-zinc-950"
                        >
                          <div
                            className="mt-1 h-2 w-2 rounded-full shrink-0"
                            style={{ background: selected.accent }}
                          />

                          <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setFullscreenImage(null)}
          >
            <img
              src={fullscreenImage}
              alt=""
              className="
w-auto
h-auto
max-w-[95vw]
max-h-[95vh]
object-contain
rounded-lg
"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
