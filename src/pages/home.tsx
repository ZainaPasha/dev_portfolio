import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TechTape from '@/components/TechTape';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  useEffect(() => {
    // Scroll progress indicator
    const scrollIndicator = document.getElementById('scrollIndicator');
    
    function updateScrollProgress() {
      if (scrollIndicator) {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
      }
    }

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div className="scroll-indicator" id="scrollIndicator" />
      
      <Navigation />
      <HeroSection />
      {/* <TechTape /> */}
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CTASection />
      <Footer />
      <BackToTop />
    </div>
  );
}
