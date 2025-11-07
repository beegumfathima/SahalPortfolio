import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';

interface PortfolioSectionProps {
  scrollY: number;
}

const works = [
  {
    title: 'The Black Market',
    category: 'Motion Design & Editing',
    description: 'Cinematic storytelling with dynamic motion graphics and precise editing techniques.',
    tags: ['After Effects', 'Premiere Pro', 'Color Grading', 'VFX'],
    videoUrl: 'https://drive.google.com/file/d/13jg1rgXOfbe1l3e5hG5dBwV3GeDfH4Hh/view',
  },
  {
    title: 'Epic Cinematic Project',
    category: 'Video Editing',
    description: 'High-impact visual storytelling with seamless transitions and atmospheric pacing.',
    tags: ['Premiere Pro', 'Sound Design', 'Pacing', 'Storytelling'],
    videoUrl: 'https://drive.google.com/file/d/1zkg4r-6MJsFYII_hBQ6kMheZeoOrGBTp/view',
  },
  {
    title: 'Motion Graphics Showcase',
    category: 'Motion Design',
    description: 'Dynamic motion graphics with sophisticated animation and visual effects mastery.',
    tags: ['Motion Graphics', '2D Animation', 'Typography', 'Cinema 4D'],
    videoUrl: 'https://drive.google.com/file/d/1DOzRiunlq3PVQPjpg0ITVXFP3eAiihwS/view',
  },
  {
    title: 'Before/After Mastery',
    category: 'Editorial Breakdown',
    description: 'Detailed editing breakdown showcasing transformation techniques and creative vision.',
    tags: ['Video Editing', 'Before/After', 'Transformation', 'Creative Process'],
    videoUrl: 'https://www.linkedin.com/posts/sahal-muhammed_videoediting-contentcreation-beforeandafter-activity-7388196282323963904-h2HX/',
  },
];

interface WorkCardProps {
  work: typeof works[0];
  index: number;
  onOpenVideo: (url: string, title: string) => void;
}

function WorkCard({ work, index, onOpenVideo }: WorkCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Number */}
      <div className="absolute -left-6 top-0 text-6xl text-red-900/30 group-hover:text-red-500/30 transition-colors">
        {(index + 1).toString().padStart(2, '0')}
      </div>

      <div className="relative border border-red-900/30 bg-gradient-to-br from-red-950/10 to-black overflow-hidden group-hover:border-red-500/50 transition-all duration-300">
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10 transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-100'}`} />

        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]" />

        {/* Content */}
        <div className="relative z-20 p-8 min-h-[400px] flex flex-col justify-between">
          <div>
            {/* Category */}
            <div className="inline-block px-3 py-1 border border-red-900/50 bg-red-950/30 backdrop-blur-sm mb-4">
              <span className="text-xs tracking-wider text-red-400">{work.category}</span>
            </div>

            {/* Title */}
            <h3 className="text-3xl md:text-4xl mb-4 group-hover:text-red-400 transition-colors">
              {work.title}
            </h3>

            {/* Description */}
            <p className="text-white/60 mb-6 leading-relaxed">
              {work.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {work.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 bg-black/60 border border-red-900/30 text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => onOpenVideo(work.videoUrl, work.title)}
              className="group/btn flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white text-sm tracking-wide transition-all border border-red-500"
            >
              <Play className="w-4 h-4" />
              Watch Video
            </button>
          </div>
        </div>

        {/* Hover Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-1 bg-red-500 origin-left"
        />
      </div>
    </motion.div>
  );
}

export function PortfolioSection({ scrollY }: PortfolioSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState({ url: '', title: '' });
  const ref = useRef<HTMLDivElement>(null);

  const handleOpenVideo = (url: string, title: string) => {
    setSelectedVideo({ url, title });
    setIsVideoModalOpen(true);
  };

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

  return (
    <>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideo.url}
        title={selectedVideo.title}
      />

      <section id="work" className="relative py-32 overflow-hidden" ref={ref}>
        <div 
          className="absolute right-0 top-1/3 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="inline-block px-4 py-2 border border-red-900/50 bg-red-950/20 backdrop-blur-sm mb-6">
              <p className="text-xs tracking-[0.3em] text-red-400">SELECTED WORKS</p>
            </div>
            <h2 className="text-5xl md:text-7xl mb-6">
              Featured
              <br />
              <span className="text-red-500">Projects</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              Every project tells a story. Here are some of my works crafted with precision, creativity, and cinematic excellence.
            </p>
          </motion.div>

          {/* Works Grid */}
          <div className="space-y-12 mb-16">
            {works.map((work, index) => (
              <WorkCard key={work.title} work={work} index={index} onOpenVideo={handleOpenVideo} />
            ))}
          </div>

          {/* Instagram CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center"
          >
            <p className="text-white/60 mb-6">Explore More on Instagram</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://www.instagram.com/xsahalx/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-white/5 text-white tracking-wide transition-all border border-white/30 hover:border-red-500"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @xsahalx
              </a>
              <button
                onClick={() => handleOpenVideo('https://youtu.be/Mji3mu3V4os', 'Showreel')}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white tracking-wide transition-all border border-red-500"
              >
                <Play className="w-4 h-4" />
                Watch Showreel
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
