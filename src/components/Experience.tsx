import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest">[04] PROFESSIONAL BACKGROUND</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#F2EBDD] mt-2">
          Experience & <span className="italic font-light text-[#C5A880]">Leadership</span>
        </h2>
      </div>

      <div className="space-y-8">
        {EXPERIENCE_DATA.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-[#121212] border border-[#222222] p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 hover:border-[#C5A880]/50 transition-colors"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs px-3 py-1 bg-[#080808] rounded-full text-[#C5A880] border border-[#222222]">
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-[#858585]">{exp.location}</span>
              </div>
              <h3 className="text-2xl font-serif text-[#F2EBDD]">{exp.role}</h3>
              <p className="text-sm font-mono text-[#C5A880]">{exp.company}</p>
              <p className="text-sm text-[#858585] font-light leading-relaxed pt-2">
                {exp.description}
              </p>
            </div>

            <div className="p-4 bg-[#080808] rounded-xl border border-[#222222] text-[#858585]">
              <Briefcase className="w-6 h-6 text-[#C5A880]" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};