import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className={`fixed top-0 w-full z-50 transition-all duration-500 py-4 ${
        isScrolled ? 'bg-slate-950/70 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-xl font-extrabold tracking-tighter text-white flex items-center gap-1 group relative">
          <div className="w-8 h-8 rounded bg-cyan-500 text-slate-950 flex items-center justify-center text-sm mr-1 group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.8)]">A</div>
          Adhwaide<span className="text-cyan-500 ml-1">K.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 bg-slate-900/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white relative group transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4 border-l border-slate-800 pl-6">
            <a href="https://github.com/Adhwaide" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/adhwaide-krishna" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
              <FaLinkedin size={20} />
            </a>

            {/* Resume Dropdown */}
            <div className="relative group/resume ml-2">
              <button className="flex items-center gap-2 px-4 py-1.5 bg-cyan-950/50 text-cyan-400 border border-cyan-500/30 rounded-full font-mono text-xs uppercase tracking-widest hover:bg-cyan-900/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:-translate-y-0.5 transition-all">
                Resume <span className="text-[10px]">▼</span>
              </button>
              
              <div className="absolute right-0 top-full mt-2 w-44 bg-slate-900 border border-slate-700/50 rounded-xl shadow-2xl opacity-0 invisible group-hover/resume:opacity-100 group-hover/resume:visible group-hover/resume:translate-y-0 translate-y-2 transition-all duration-300 overflow-hidden flex flex-col z-50">
                <a href="/Adhwaide_Krishna_Resume.pdf" target="_blank" rel="noreferrer" className="px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors border-b border-slate-800/50 flex items-center gap-2 font-medium">
                  <ExternalLink size={14} /> View
                </a>
                <a href="/Adhwaide_Krishna_Resume.pdf" download="Adhwaide_Krishna_Resume.pdf" className="px-4 py-3 text-sm text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors flex items-center gap-2 font-medium">
                  <Download size={14} /> Download
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-slate-400 hover:text-cyan-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 flex flex-col gap-4 shadow-xl overflow-hidden"
          >
            <div className="py-4 px-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-base font-medium text-slate-300 hover:text-cyan-400 w-full transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="h-px w-full bg-slate-800 my-1"></div>
              
              <a 
                href="/Adhwaide_Krishna_Resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center gap-2 text-base font-medium text-cyan-400 hover:text-cyan-300 w-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ExternalLink size={18} /> View Resume
              </a>
              <a 
                href="/Adhwaide_Krishna_Resume.pdf" 
                download="Adhwaide_Krishna_Resume.pdf"
                className="flex items-center gap-2 text-base font-medium text-cyan-400 hover:text-cyan-300 w-full transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={18} /> Download Resume
              </a>
            </div>
          </div>
        )}
      
    </div>
  );
}
