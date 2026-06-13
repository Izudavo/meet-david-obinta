import { Project } from "../types";

export const frontendProjects: Project[] = [
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
    title: "CirvaX Web Platform",
    description:
      "Designed and developed a fintech landing platform for streamlined gift card trading with WhatsApp-assisted transaction workflows, trust-focused onboarding, and conversion-driven user experience.",
    category: "frontend",
    tech: [
      "React",
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
    title: "Shopora -  A Multi-Vendor E-Commerce Marketplace",

    description:
      "Designed and developed a scalable e-commerce marketplace platform enabling vendors to manage products while providing customers with streamlined product discovery, shopping cart management, and checkout experiences across multiple categories.",

    category: "frontend",

    tech: [
      "React",
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
    title: "ArticFlow - A Modern HVAC Service Website",

    description:
      "Designed and developed a responsive HVAC company website focused on lead generation, emergency service bookings, local SEO visibility, and customer acquisition. Built conversion-focused service pages, location landing pages, and mobile-first experiences to help local contractors increase qualified service inquiries.",

    category: "frontend",

    tech: [
      "React",
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
    title: "Sovereign Nest Estate Limited",
    description:
      "Designed and developed a modern real estate platform showcasing premium residential and commercial properties across Nigeria, with a focus on trust, luxury presentation, and lead generation.",
    category: "frontend",
    tech: [
      "React",
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
];
