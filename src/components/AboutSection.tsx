import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

interface AboutSectionProps {
  scrollY: number;
}

const skills = [
  'After Effects',
  'Premiere Pro',
  'DaVinci Resolve',
  'Final Cut Pro',
  'Cinema 4D',
  'Blender',
  'Photoshop',
  'Illustrator',
];

export function AboutSection({ scrollY }: AboutSectionProps) {
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
    <section id="about" className="relative py-32 overflow-hidden" ref={ref}>
      <div 
        className="absolute right-0 top-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-block px-4 py-2 border border-red-900/50 bg-red-950/20 backdrop-blur-sm mb-4">
            <p className="text-xs tracking-[0.3em] text-red-400">MY STORY</p>
          </div>
          <h2 className="text-5xl md:text-7xl">
            Crafting Stories
            <br />
            <span className="text-red-500">Through Motion</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-white/70">
              I'm Sahal Muhammed, a visual storyteller specializing in motion design and video editing. I transform ideas into compelling visual narratives that captivate and inspire.
            </p>

            <p className="text-lg text-white/70">
              With expertise in Adobe After Effects, Premiere Pro, and DaVinci Resolve, I've delivered outstanding results for brands, creators, and agencies worldwide.
            </p>

            <div className="p-6 border-l-2 border-red-500 bg-red-950/20 backdrop-blur-sm">
              <p className="text-white/80 italic">
                "Each frame tells a story, each transition carries purpose. From dynamic logo animations to cinematic epics, I bring visions to life with precision and artistry."
              </p>
            </div>

            <button
              onClick={() => scrollToSection('contact')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-white tracking-wide transition-all border border-white/30 hover:border-red-500"
            >
              Get In Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>

          {/* Right Column - Skills & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Workspace Visual */}
            <div className="relative p-8 border border-red-900/30 bg-gradient-to-br from-red-950/20 to-black backdrop-blur-sm">
              <div className="text-sm tracking-widest text-red-400 mb-4">Creative Workspace</div>
              
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-white/60 mb-2">
                  <span>Projects Completed</span>
                  <span>100%</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isVisible ? { width: '100%' } : {}}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="h-full bg-red-500"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 bg-black/40 border border-red-900/20">
                  <div className="text-2xl text-red-500 mb-1">24/7</div>
                  <div className="text-xs text-white/60">Available</div>
                </div>
                <div className="text-center p-3 bg-black/40 border border-red-900/20">
                  <div className="text-2xl text-red-500 mb-1">100%</div>
                  <div className="text-xs text-white/60">Dedication</div>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="px-3 py-2 bg-black/60 border border-red-900/30 text-xs text-white/70 text-center hover:border-red-500/50 hover:text-white transition-all"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
