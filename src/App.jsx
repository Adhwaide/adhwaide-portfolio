import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProject from './components/FeaturedProject';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <About />
        <Blog />
      </main>

      <Contact />
    </div>
  );
}

export default App;
