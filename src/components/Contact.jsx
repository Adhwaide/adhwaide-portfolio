import React from 'react';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <footer id="contact" className="py-32 px-6 md:px-12 border-t border-slate-900 bg-slate-950 mt-12 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-cyan-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div data-animate="true" className="max-w-4xl mx-auto text-center relative z-10 glass-card p-12 md:p-20 rounded-[3rem] border-t-0 border-b-0 border-slate-900/50"
      >
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">Let's build something.</h2>
        <p className="text-slate-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to discuss ML architectures, my inbox is open.
        </p>

        <a 
          href="mailto:adhwaidekrishna@gmail.com" 
          className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 active:scale-95 shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] mb-20 text-lg"
        >
          <Mail size={24} />
          Say Hello
        </a>

        <div className="flex justify-center gap-10 mb-16">
          <a href="https://github.com/Adhwaide" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors group">
            <FaGithub size={24} className="group-hover:rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">GitHub</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:translate-x-1" />
          </a>
          <a href="https://www.linkedin.com/in/adhwaide-krishna" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-500 hover:text-[#0a66c2] transition-colors group">
            <FaLinkedin size={24} className="group-hover:-rotate-12 transition-transform" />
            <span className="font-semibold tracking-wide">LinkedIn</span>
            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-1 group-hover:translate-x-1" />
          </a>
        </div>
        
        <p className="text-slate-600 text-sm font-mono mt-8">
          © 2026 Adhwaide Krishna. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
