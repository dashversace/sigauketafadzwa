import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Expertise } from './components/Expertise';
import { About } from './components/About';
import { Contact } from './components/Contact';

export function App() {
  return (
    <div className="bg-[#080808] text-[#F2EBDD] min-h-screen selection:bg-[#C5A880] selection:text-[#080808]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Expertise />
        <About />
        <Contact />
      </main>
      <footer className="py-12 border-t border-[#222222] text-center font-mono text-xs text-[#858585]">
        <p>© {new Date().getFullYear()} TAFADZWA SIGAUKE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}

export default App;