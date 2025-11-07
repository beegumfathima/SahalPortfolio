import { motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Clock, Instagram, Linkedin } from 'lucide-react';

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    questType: 'video-editing',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        questType: 'video-editing',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden" ref={ref}>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 border border-red-900/50 bg-red-950/20 backdrop-blur-sm mb-6">
            <p className="text-xs tracking-[0.3em] text-red-400">GET IN TOUCH</p>
          </div>
          <h2 className="text-5xl md:text-7xl mb-6">
            Let's Create
            <br />
            <span className="text-red-500">Together</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto italic mb-4">
            "Every great project begins with a conversation."
          </p>
          <p className="text-white/50 max-w-2xl mx-auto">
            Ready to bring your vision to life with cinematic storytelling? Let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="p-6 border border-red-900/30 bg-gradient-to-br from-red-950/10 to-black hover:border-red-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 group-hover:border-red-500 transition-all">
                    <Mail className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider text-red-400 mb-2">EMAIL</h3>
                    <a href="mailto:sahalm285@gmail.com" className="text-lg text-white hover:text-red-400 transition-colors">
                      sahalm285@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-red-900/30 bg-gradient-to-br from-red-950/10 to-black hover:border-red-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 group-hover:border-red-500 transition-all">
                    <MapPin className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider text-red-400 mb-2">LOCATION</h3>
                    <p className="text-lg text-white">Available Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="p-6 border border-red-900/30 bg-gradient-to-br from-red-950/10 to-black hover:border-red-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 group-hover:border-red-500 transition-all">
                    <Clock className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-sm tracking-wider text-red-400 mb-2">RESPONSE TIME</h3>
                    <p className="text-lg text-white">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-sm tracking-wider text-red-400 mb-4">SOCIAL MEDIA</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/xsahalx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 hover:border-red-500 hover:bg-red-950/50 transition-all"
                >
                  <Instagram className="w-5 h-5 text-red-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sahal-muhammed/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center border border-red-900/50 bg-red-950/30 hover:border-red-500 hover:bg-red-950/50 transition-all"
                >
                  <Linkedin className="w-5 h-5 text-red-500" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-wider text-red-400 mb-2">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-black/60 border border-red-900/30 text-white placeholder-white/30 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-wider text-red-400 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black/60 border border-red-900/30 text-white placeholder-white/30 focus:border-red-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label htmlFor="questType" className="block text-sm tracking-wider text-red-400 mb-2">
                  PROJECT TYPE
                </label>
                <select
                  id="questType"
                  name="questType"
                  value={formData.questType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/60 border border-red-900/30 text-white focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="video-editing">Video Editing</option>
                  <option value="motion-design">Motion Design</option>
                  <option value="commercial">Commercial Production</option>
                  <option value="vfx">VFX & Post-Production</option>
                  <option value="youtube">YouTube Production</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wider text-red-400 mb-2">
                  PROJECT DETAILS
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 bg-black/60 border border-red-900/30 text-white placeholder-white/30 focus:border-red-500 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 disabled:bg-red-900 text-white tracking-wide transition-all border border-red-500 disabled:opacity-50"
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
