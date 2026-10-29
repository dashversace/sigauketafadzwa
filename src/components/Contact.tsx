import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest">[05] GET IN TOUCH</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#F2EBDD] mt-2">
          Let&apos;s Build <span className="italic font-light text-[#C5A880]">Together</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-lg text-[#858585] font-light leading-relaxed">
            I am always open to discussing new software engineering projects, AI/ML initiatives, technical collaborations, or professional opportunities. Reach out directly through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 font-mono text-xs">
          <a
            href="https://wa.me/263780743102"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#C5A880]/50 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-[#C5A880]" />
              <div>
                <span className="text-[#858585] block text-[10px] tracking-widest mb-1">CALL & WHATSAPP</span>
                <span className="text-[#F2EBDD] text-sm">+263 78 074 3102</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="mailto:tafadzwasigauke2003@gmail.com"
            className="flex items-center justify-between p-6 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#C5A880]/50 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-[#C5A880]" />
              <div>
                <span className="text-[#858585] block text-[10px] tracking-widest mb-1">EMAIL ADDRESS</span>
                <span className="text-[#F2EBDD] text-sm">tafadzwasigauke2003@gmail.com</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-6 bg-[#121212] hover:bg-[#1a1a1a] border border-[#222222] hover:border-[#C5A880]/50 rounded-2xl transition-all group"
          >
            <div className="flex items-center gap-4">
              <Linkedin className="w-5 h-5 text-[#C5A880]" />
              <div>
                <span className="text-[#858585] block text-[10px] tracking-widest mb-1">LINKEDIN PROFILE</span>
                <span className="text-[#F2EBDD] text-sm">Connect on LinkedIn</span>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-[#C5A880] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>
    </section>
  );
};