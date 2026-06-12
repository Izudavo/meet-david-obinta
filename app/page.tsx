import HeroSection from './components/Home/hero-section';
import AboutSection from './components/Home/about-section';
import StackSection from './components/Home/stack-section';
import ExperienceSection from './components/Home/work-section';
//import SelectedProjects from './components/Home/projects-section';
import BlogPreviewSection from './components/Home/blog-section';
import CertificationsSection from './components/Home/certifications-section';
import ServicesSection from './components/Home/services-section';
import ProjectsSection from "./components/Projects/projects-block";

export default function Homepage() {
  return (
    <main>

      <div id="top">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="stack">
        <StackSection />
      </div>

       <div id="projects">
        <ProjectsSection />
      </div>

        <ServicesSection/>
        <CertificationsSection/>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="blog-preview">
        <BlogPreviewSection />
      </div>

    </main>
  );
}