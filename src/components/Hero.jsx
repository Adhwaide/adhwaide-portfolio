import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] pointer-events-none animate-spin-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none origin-bottom-right animate-spin-slow"></div>

      <div className="relative z-10 w-full">
        <div className="flex items-center gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Terminal size={20} className="text-cyan-500" />
          <span className="text-cyan-500 font-mono text-sm tracking-widest uppercase bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-500/20">adhwaide@ai-portfolio:~$ start --env=production</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Hi, I'm <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-500 bg-300% animate-gradient drop-shadow-[0_0_20px_rgba(6,182,212,0.6)]">Adhwaide Krishna.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mb-12 leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <strong className="text-slate-100 font-medium">I build intelligent systems</strong> that combine computer vision, AI reasoning, and real-world interaction. Focused on creating practical, high-impact solutions using modern AI and scalable architectures.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all duration-300 glow-cyan-hover flex items-center justify-center gap-3 hover:-translate-y-1">
            View My Work <ArrowRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 text-white font-medium rounded-xl border border-slate-700 hover:border-slate-500 transition-all duration-300 flex items-center justify-center backdrop-blur-md">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
