import React, { useState } from 'react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, X, Github, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="font-mono text-xs text-[#C5A880] tracking-widest">[02] FEATURED WORK</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#F2EBDD] mt-2">
            Selected <span className="italic font-light text-[#C5A880]">Projects</span>
          </h2>
        </div>
        <p className="text-[#858585] max-w-md text-sm mt-4 md:mt-0 font-light leading-relaxed">
          Explore comprehensive showcases of intelligent machine learning systems, algorithmic trading bots, and full-stack operational web applications.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
        {PROJECTS_DATA.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-[#121212] hover:bg-[#161616] border border-[#222222] hover:border-[#C5A880]/50 p-8 md:p-12 transition-all duration-300 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.05),transparent_70%)] pointer-events-none"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-[#222222]">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-[#C5A880]">({project.number})</span>
                <span className="font-mono text-xs px-3 py-1 bg-[#1a1a1a] rounded-full text-[#858585] border border-[#222222]">
                  {project.category}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#C5A880] group-hover:translate-x-1 transition-transform">
                <span>VIEW CASE STUDY</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif text-[#F2EBDD] group-hover:text-[#C5A880] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base text-[#858585] font-light leading-relaxed">
                  {project.overview}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="font-mono text-xs px-2.5 py-1 bg-[#080808] text-[#858585] rounded border border-[#222222]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#080808] p-6 rounded-xl border border-[#222222] flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-[#858585] tracking-widest mb-2 block">ARCHITECTURE FOCUS</span>
                  <p className="text-xs text-[#F2EBDD] font-light leading-relaxed">
                    {project.architectureSummary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#C5A880]">
                  <span>SYSTEM ARCHITECTURE READY</span>
                  <Layers className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-[#080808]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#121212] border border-[#222222] max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl p-6 md:p-12 relative my-auto shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-[#1a1a1a] hover:bg-[#222222] text-[#F2EBDD] rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 font-mono text-xs text-[#C5A880] mb-4">
          <span>({project.number})</span>
          <span>·</span>
          <span>{project.category.toUpperCase()}</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-serif text-[#F2EBDD] mb-4">
          {project.title}
        </h2>
        <p className="text-lg text-[#858585] font-light mb-8">
          {project.subtitle}
        </p>

        <div className="space-y-8 text-sm text-[#F2EBDD] font-light">
          <div className="p-6 bg-[#080808] rounded-xl border border-[#222222]">
            <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-2">PROJECT OVERVIEW</h4>
            <p className="leading-relaxed text-[#858585]">{project.overview}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-[#080808] rounded-xl border border-[#222222]">
              <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-2">PROBLEM STATEMENT</h4>
              <p className="leading-relaxed text-[#858585]">{project.problem}</p>
            </div>
            <div className="p-6 bg-[#080808] rounded-xl border border-[#222222]">
              <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-2">SYSTEM SOLUTION</h4>
              <p className="leading-relaxed text-[#858585]">{project.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-3">KEY OBJECTIVES</h4>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-3 text-[#858585]">
                  <span className="text-[#C5A880] font-mono">0{i + 1}.</span>
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-3">SYSTEM ARCHITECTURE</h4>
            <p className="p-4 bg-[#080808] rounded-xl border border-[#222222] font-mono text-xs text-[#858585]">
              {project.architectureSummary}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-xs text-[#C5A880] tracking-widest mb-3">KEY FEATURES</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="p-3 bg-[#080808] rounded border border-[#222222] text-xs text-[#858585]">
                  ✓ {feat}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#222222]">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#222222] text-xs font-mono text-[#F2EBDD] rounded-full border border-[#222222] transition-colors"
              >
                <Github className="w-4 h-4 text-[#C5A880]" />
                <span>VIEW REPOSITORY</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-[#F2EBDD] text-[#080808] text-xs font-sans font-medium rounded-full hover:bg-[#C5A880] transition-colors ml-auto"
            >
              CLOSE CASE STUDY
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};