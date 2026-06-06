import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section data-animate="true" id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow effects */}
      <div 
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none animate-spin-slow"
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none origin-bottom-right animate-spin-slow"
      ></div>

      <div className="relative z-10 w-full animate-fade-in-up">
        
        {/* Available for Work & Tagline */}
        <div className="flex flex-col gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="pulse-dot"></span>
            <span className="text-xs font-mono text-green-400 uppercase tracking-widest bg-green-950/30 px-3 py-1 rounded-full border border-green-500/20">Available for work</span>
          </div>
          
          <h2 className="text-lg md:text-xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-cyan-100 to-slate-300">
            "With AI, your imagination is your limit."
          </h2>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <Terminal size={20} className="text-cyan-500" />
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20">adhwaide@ai-portfolio:~$ start --env=production</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-300% animate-gradient drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">Adhwaide Krishna.</span>
        </h1>
        
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed font-light typewriter-text">
            <strong className="text-slate-100 font-medium">I build intelligent systems</strong> that combine computer vision, AI reasoning, and real-world interaction.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <a href="#projects" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] flex items-center justify-center gap-3 hover:-translate-y-1 hover:scale-105 active:scale-95">
            View My Work <ArrowRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center justify-center backdrop-blur-md hover:-translate-y-1 hover:scale-105 active:scale-95">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
