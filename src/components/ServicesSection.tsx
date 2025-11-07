import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Film, Wand2, TrendingUp, Sparkles, Youtube, Clapperboard } from 'lucide-react';

interface ServicesSectionProps {
  scrollY: number;
}

const services = [
  {
    icon: Film,
    title: 'Video Editing',
    subtitle: 'Expert video editing with masterful transitions, color grading, and compelling storytelling.',
    skills: ['Color Grading', 'Audio Mixing', 'Seamless Transitions', 'Narrative Structure'],
  },
  {
    icon: Wand2,
    title: 'Motion Graphics',
    subtitle: 'Captivating motion graphics and animations that bring brands to life with dynamic visuals.',
    skills: ['2D/3D Animation', 'Logo Animation', 'Kinetic Typography', 'Visual Effects'],
  },
  {
    icon: TrendingUp,
    title: 'Commercial Production',
    subtitle: 'Creating compelling commercial content that captivates audiences and drives conversions.',
    skills: ['Product Videos', 'Brand Stories', 'Testimonials', 'Social Media Content'],
  },
  {
    icon: Sparkles,
    title: 'Visual Effects',
    subtitle: 'Advanced VFX mastery including compositing, green screen keying, and particle effects.',
    skills: ['Compositing', 'Green Screen', 'Particle Effects', 'CGI Integration'],
  },
  {
    icon: Youtube,
    title: 'YouTube Production',
    subtitle: 'Complete YouTube content production from concept to final cut, optimized for engagement.',
    skills: ['Thumbnail Design', 'Intros & Outros', 'B-Roll Integration', 'SEO Optimization'],
  },
  {
    icon: Clapperboard,
    title: 'Post-Production',
    subtitle: 'Complete post-production workflow with professional editing, color grading, and delivery.',
    skills: ['Color Correction', 'Sound Design', 'File Management', 'Format Delivery'],
  },
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-8 border border-red-900/30 bg-gradient-to-br from-red-950/10 to-black hover:from-red-950/20 hover:border-red-500/50 transition-all duration-300"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 group-hover:border-red-500 group-hover:bg-red-950/50 transition-all">
            <Icon className="w-6 h-6 text-red-500" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl mb-3 group-hover:text-red-400 transition-colors">
          {service.title}
        </h3>

        {/* Subtitle */}
        <p className="text-white/60 mb-6 text-sm leading-relaxed">
          {service.subtitle}
        </p>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-2">
          {service.skills.map((skill) => (
            <div
              key={skill}
              className="text-xs text-white/50 flex items-center gap-1"
            >
              <div className="w-1 h-1 bg-red-500 rounded-full" />
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection({ scrollY }: ServicesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="services" className="relative py-32 overflow-hidden" ref={ref}>
      <div 
        className="absolute left-0 top-1/2 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.08}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 border border-red-900/50 bg-red-950/20 backdrop-blur-sm mb-6">
            <p className="text-xs tracking-[0.3em] text-red-400">WHAT I OFFER</p>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            Services &<br />
            <span className="text-red-500">Expertise</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto italic">
            "Delivering excellence across every aspect of video production and motion design."
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Quote & CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-white/60 italic mb-6">
            "Every skill refined, every project a masterpiece. Ready to bring your vision to life."
          </p>
          <button
            onClick={() => scrollToSection('work')}
            className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-white tracking-wide transition-all border border-white/30 hover:border-red-500"
          >
            View My Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
