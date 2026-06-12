import { Project } from "../types";

export const backendProjects: Project[] = [
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

];