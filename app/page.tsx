import HeroSection from './components/Home/hero-section';
import PortfolioShowcase from './components/Home/portfolio-showcase';
import PortfolioSwitcher from './components/Home/portfolio-switcher';
import AboutSection from './components/Home/about-section';
import StackSection from './components/Home/stack-section';
import ExperienceSection from './components/Home/work-section';
//import SelectedProjects from './components/Home/projects-section';
import BlogPreviewSection from './components/Home/blog-section';
import CertificationsSection from './components/Home/certifications-section';
import ServicesSection from './components/Home/services-section';
import ContactSection from './components/Home/contact-section';

export default function Homepage() {
  return (
    <main>

      <div id="top">
        <HeroSection />
      </div>

      <PortfolioShowcase />

      <div id="about">
        <AboutSection />
      </div>

      <div id="stack">
        <StackSection />
      </div>

        <ServicesSection/>
        <CertificationsSection/>

      <div id="experience">
        <ExperienceSection />
      </div>

      <div id="blog-preview">
        <BlogPreviewSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <PortfolioSwitcher />

    </main>
  );
}