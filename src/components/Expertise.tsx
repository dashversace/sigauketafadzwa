import React from 'react';
import { EXPERTISE_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Layout, HardDrive } from 'lucide-react';

export const Expertise: React.FC = () => {
  const icons = [Terminal, Cpu, Layout, HardDrive];

  return (
    <section id="expertise" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest">[03] TECHNICAL EXPERTISE</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#F2EBDD] mt-2">
          Capabilities & <span className="italic font-light text-[#C5A880]">Domains</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {EXPERTISE_DATA.map((domain, index) => {
          const IconComponent = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#121212] border border-[#222222] p-8 rounded-2xl relative group hover:border-[#C5A880]/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-[#C5A880]">0{index + 1}</span>
                <IconComponent className="w-5 h-5 text-[#858585] group-hover:text-[#C5A880] transition-colors" />
              </div>

              <h3 className="text-xl font-serif text-[#F2EBDD] mb-4">
                {domain.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {domain.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-[#080808] border border-[#222222] rounded-full text-xs font-mono text-[#858585]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};