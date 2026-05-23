import HeroSection from './components/Home/hero-section';
import AboutSection from './components/Home/about-section';
import StackSection from './components/Home/stack-section';
import ExperienceSection from './components/Home/work-section';
import SelectedProjects from './components/Home/projects-section';
import BlogPreviewSection from './components/Home/blog-section';
import CertificationsSection from './components/Home/certifications-section';

export default function Homepage() {
  return (
    <main>

      <div id="top">
        <HeroSection />
      </div>

      <div id="about">
        <AboutSection />
        <CertificationsSection/>
      </div>

      <div id="stack">
        <StackSection />
      </div>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="projects">
        <SelectedProjects />
      </div>

      <div id="blog-preview">
        <BlogPreviewSection />
      </div>

    </main>
  );
}