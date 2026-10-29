import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { num: "01", label: "HOME", href: "#home" },
  { num: "02", label: "PROJECTS", href: "#projects" },
  { num: "03", label: "EXPERTISE", href: "#expertise" },
  { num: "04", label: "ABOUT", href: "#about" },
  { num: "05", label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#222222]' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2"></div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121212] border border-[#222222] text-xs font-mono text-[#858585]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for opportunities</span>
            </div>

            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-3 px-4 py-2 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] rounded-full text-xs font-mono tracking-widest text-[#F2EBDD] transition-all group"
            >
              <span>MENU</span>
              <Menu className="w-4 h-4 text-[#C5A880] group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#080808] flex flex-col justify-between px-6 py-10 md:p-16"
          >
            <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
              <span className="font-mono text-xs text-[#858585] tracking-widest">NAVIGATION DIRECTORY</span>
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-2 px-4 py-2 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] rounded-full text-xs font-mono text-[#F2EBDD] transition-colors"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-auto">
              <nav className="flex flex-col space-y-4 md:space-y-6">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-4 text-3xl md:text-5xl font-serif text-[#858585] hover:text-[#F2EBDD] transition-colors"
                  >
                    <span className="font-mono text-sm md:text-lg text-[#C5A880]">({item.num})</span>
                    <span className="group-hover:translate-x-3 transition-transform duration-300 font-sans font-light">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>

              <div className="flex flex-col justify-end space-y-6 border-t md:border-t-0 md:border-l border-[#222222] pt-6 md:pt-0 md:pl-12">
                <div>
                  <h4 className="font-mono text-xs text-[#858585] tracking-widest mb-2">PROFESSIONAL FOCUS</h4>
                  <p className="text-sm text-[#F2EBDD] font-light leading-relaxed">
                    Software Development, Artificial Intelligence, Machine Learning, Computer Vision, and Robust IT Infrastructure.
                  </p>
                </div>
                <div>
                  <h4 className="font-mono text-xs text-[#858585] tracking-widest mb-2">DIRECT CONTACT</h4>
                  <a href="mailto:tafadzwasigauke2003@gmail.com" className="text-sm font-mono text-[#C5A880] hover:underline flex items-center gap-1">
                    <span>tafadzwasigauke2003@gmail.com</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center text-xs font-mono text-[#858585] border-t border-[#222222] pt-6">
              <span>© {new Date().getFullYear()} TAFADZWA SIGAUKE</span>
              <span>HARARE, ZIMBABWE</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};