import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    'System initialized. Type "help" or click commands below.'
  ]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    let res = '';

    switch (cmd) {
      case 'help':
        res = 'Available commands: whoami, skills, projects, contact, clear';
        break;
      case 'whoami':
        res = 'Tafadzwa Sigauke — Software Developer & AI/ML Enthusiast based in Harare.';
        break;
      case 'skills':
        res = 'Full-Stack Web Dev, Python, PyTorch, Computer Vision, React, TypeScript, Node.js';
        break;
      case 'projects':
        res = '1. AI Broiler Disease Detection | 2. SMC Trading Bot | 3. Paperless Dry-Cleaning System';
        break;
      case 'contact':
        res = 'Email: tafadzwa@example.com | Location: Harare, Zimbabwe';
        break;
      case 'clear':
        setTerminalOutput([]);
        setInputVal('');
        return;
      default:
        res = `Command not recognized: "${inputVal}". Type "help" for options.`;
    }

    setTerminalOutput(prev => [...prev, `$ ${inputVal}`, res]);
    setInputVal('');
  };

  const runQuickCmd = (cmd: string) => {
    setInputVal(cmd);
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-[#222222]">
      <div className="mb-16">
        <span className="font-mono text-xs text-[#C5A880] tracking-widest">[04] ABOUT TAFADZWA</span>
        <h2 className="text-4xl md:text-6xl font-serif text-[#F2EBDD] mt-2">
          Bridging Code & <span className="italic font-light text-[#C5A880]">Intelligence</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 text-lg text-[#858585] font-light leading-relaxed">
          <p className="text-[#F2EBDD] text-xl font-serif">
            I am a Computer Science graduate, software developer, and AI/ML enthusiast dedicated to bridging theoretical computer science with robust, practical software solutions.
          </p>
          <p>
            My background spans full-stack web application development, intelligent machine learning models, computer vision, database systems, and enterprise IT infrastructure support. Whether designing scalable backend architectures or analyzing complex spatial datasets, I focus on clean code, reliability, and meaningful impact.
          </p>
          <p>
            I combine technical rigor with creative problem-solving—drawing from diverse professional experiences in real estate technology, administrative leadership, and community data systems.
          </p>
        </div>

        {/* Extraordinary Feature: Interactive Live Dev Terminal */}
        <div className="bg-[#121212] border border-[#222222] rounded-2xl overflow-hidden shadow-2xl flex flex-col h-[400px]">
          <div className="bg-[#1a1a1a] px-4 py-3 border-b border-[#222222] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
              <span className="font-mono text-xs text-[#858585] ml-2">tafadzwa@terminal:~</span>
            </div>
            <TerminalIcon className="w-4 h-4 text-[#C5A880]" />
          </div>

          <div className="p-4 flex-1 overflow-y-auto font-mono text-xs text-[#F2EBDD] space-y-2 bg-[#080808]">
            {terminalOutput.map((line, i) => (
              <div key={i} className={line.startsWith('$') ? 'text-[#C5A880]' : 'text-[#858585]'}>
                {line}
              </div>
            ))}
          </div>

          <div className="p-2 bg-[#121212] border-t border-[#222222] flex gap-2 flex-wrap">
            {['help', 'whoami', 'skills', 'projects', 'contact'].map((c) => (
              <button
                key={c}
                onClick={() => runQuickCmd(c)}
                className="px-2 py-1 bg-[#080808] hover:bg-[#1a1a1a] border border-[#222222] rounded font-mono text-[10px] text-[#C5A880] transition-colors"
              >
                {c}
              </button>
            ))}
          </div>

          <form onSubmit={handleCommand} className="p-3 bg-[#121212] border-t border-[#222222] flex items-center gap-2">
            <span className="font-mono text-[#C5A880]">$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. skills)..."
              className="bg-transparent border-none outline-none font-mono text-xs text-[#F2EBDD] w-full"
            />
          </form>
        </div>
      </div>
    </section>
  );
};