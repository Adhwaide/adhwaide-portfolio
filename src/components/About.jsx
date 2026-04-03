import React from 'react';
import { Network } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="glass-card rounded-[2rem] p-10 md:p-16 relative overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">
        {/* Background Accent */}
        <div className="absolute -top-10 -right-10 p-12 opacity-5 text-slate-100 group-hover:scale-110 transition-transform duration-700">
          <Network size={250} />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8 w-full">
            <div className="h-px bg-slate-800 flex-grow max-w-[100px]"></div>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">About Me</h2>
            <div className="h-px bg-slate-800 flex-grow max-w-[100px]"></div>
          </div>
          
          <div className="text-slate-300 leading-relaxed text-[19px] font-light max-w-3xl space-y-6">
            <p>
              I’m an AI & ML engineer focused on building real-world intelligent systems that go beyond theory. My work combines computer vision, automation, and AI-driven interaction to solve practical problems. I’m particularly interested in creating systems that interact with the real world and evolve with data.
            </p>
            <p className="text-slate-400 text-[17px]">
              When I'm not training models or optimizing inference pipelines, I'm exploring open-source AI, reading about computational neuroscience, or tinkering with edge-device hardware.
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-800/50 flex items-center justify-center w-full">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse shadow-[0_0_15px_rgba(6,182,212,0.8)]"></span>
              <span className="text-cyan-400 font-mono text-sm tracking-widest uppercase font-semibold">Ready to scale your next idea</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
