import { useEffect, useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MouseFollower } from './components/MouseFollower';
import { StrangerThingsElements } from './components/StrangerThingsElements';
import { DemogorgonScroll } from './components/DemogorgonScroll';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-black text-white overflow-x-hidden cursor-none">
      {/* Mouse Follower */}
      <MouseFollower />

      {/* Stranger Things Abstract Elements */}
      <StrangerThingsElements />

      {/* Interactive Demogorgon */}
      <DemogorgonScroll scrollY={scrollY} />

      {/* Stranger Things ambient background effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-black to-black"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,0,0,0.1),transparent_50%)]" />
      </div>

      <Navigation />
      
      <main className="relative">
        <HeroSection scrollY={scrollY} />
        <StatsSection scrollY={scrollY} />
        <AboutSection scrollY={scrollY} />
        <ServicesSection scrollY={scrollY} />
        <PortfolioSection scrollY={scrollY} />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
