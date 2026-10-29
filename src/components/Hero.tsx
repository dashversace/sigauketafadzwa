import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-between pt-32 pb-16 px-6 max-w-7xl mx-auto">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(197,168,128,0.03),transparent_50%)] pointer-events-none"></div>

      <div className="space-y-6 my-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 font-mono text-xs text-[#C5A880] tracking-widest"
        >
          <span>[01]</span>
          <span className="w-8 h-[1px] bg-[#C5A880]/40"></span>
          <span>COMPUTER SCIENCE · SOFTWARE ENGINEERING · INTELLIGENT SYSTEMS</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-8xl font-serif tracking-tight text-[#F2EBDD] font-normal leading-[1.05]"
        >
          TAFADZWA <br />
          <span className="italic font-light text-[#C5A880]">SIGAUKE</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl"
        >
          <p className="text-xl md:text-2xl text-[#F2EBDD] font-light mb-4">
            &ldquo;Engineering ideas into reality.&rdquo;
          </p>
          <p className="text-base md:text-lg text-[#858585] font-light leading-relaxed">
            I build software, explore intelligent systems, and create digital experiences that solve real problems. Specializing in full-stack architecture, machine learning models, and reliable IT systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#F2EBDD] text-[#080808] font-sans font-medium text-xs tracking-widest rounded-full hover:bg-[#C5A880] transition-colors"
          >
            EXPLORE MY WORK
          </a>
          <a
            href="#about"
            className="px-6 py-3 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] text-[#F2EBDD] font-sans font-medium text-xs tracking-widest rounded-full transition-colors"
          >
            ABOUT ME
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] text-[#F2EBDD] font-sans font-medium text-xs tracking-widest rounded-full transition-colors"
          >
            GET IN TOUCH
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-start md:items-center pt-12 border-t border-[#222222] gap-6"
      >
        <div className="flex items-center gap-6">
          <a href="https://github.com/tafadzwasigauke" target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-[#F2EBDD] transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#858585] hover:text-[#F2EBDD] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="mailto:tafadzwa@example.com" className="text-[#858585] hover:text-[#F2EBDD] transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs text-[#858585]">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown className="w-4 h-4 text-[#C5A880] animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};