import type { Metadata } from "next";
import ProjectsSection from "../components/Projects/projects-block";
import StackSection from "../components/Home/stack-section";
import PortfolioSwitcher from "../components/Home/portfolio-switcher";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software engineering portfolio covering product design, frontend, backend, and cloud infrastructure.",
};

export default function EngineeringPage() {
  return (
    <main className="pt-28">
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:pt-24">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-sky-500">
          Software engineering portfolio
        </p>
        <h1 className="max-w-4xl text-5xl font-black tracking-[-0.06em] text-foreground sm:text-7xl">
          I build the systems behind useful products.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          From thoughtful interfaces to reliable APIs and cloud deployments, I
          work across the product lifecycle to turn ideas into dependable,
          production-ready experiences.
        </p>
      </section>

       <div id="stack">
        <StackSection mode="engineering" />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>
     
      <PortfolioSwitcher />
    </main>
  );
}
