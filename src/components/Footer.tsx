import { motion } from 'motion/react';

export function Footer() {
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
    <footer className="relative border-t border-red-900/30 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl tracking-wider mb-4">
              <span className="text-red-500">S</span>AHAL
            </div>
            <p className="text-white/50 text-sm">
              Forged in the fires of creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm tracking-wider text-red-400 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {['home', 'about', 'services', 'work', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-white/50 hover:text-red-400 transition-colors text-sm capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm tracking-wider text-red-400 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.instagram.com/xsahalx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-red-400 transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sahal-muhammed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-red-400 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:sahalm285@gmail.com"
                  className="text-white/50 hover:text-red-400 transition-colors text-sm"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-red-900/20 text-center">
          <p className="text-white/40 text-sm">
            © 2025 Sahal's Portfolio. Forged in the fires of creativity.
          </p>
        </div>
      </div>

      {/* Scroll to Top */}
      <motion.button
        onClick={() => scrollToSection('home')}
        className="absolute bottom-8 right-8 w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 hover:border-red-500 hover:bg-red-950/50 transition-all"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
}
