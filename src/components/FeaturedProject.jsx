import React from 'react';
import { ExternalLink, Cpu } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data/projects';

export default function FeaturedProject() {
  const featuredProjects = projects.slice(0, 2); // Get top 2 projects

  return (
    <section data-animate="true" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div data-animate="true" className="flex items-center gap-3 mb-10"
      >
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Featured Work</h2>
        <div className="h-px bg-slate-800 flex-grow ml-4"></div>
      </div>

      <div className="flex flex-col gap-12">
        {featuredProjects.map((featured, index) => (
          <div
            key={featured.id}
            data-animate="true" className="glass-card rounded-[2rem] overflow-hidden group hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 hover:scale-[1.01]"
          >
            <div className="grid md:grid-cols-2 gap-0 relative">
              
              {/* Image / Graphic Visual representation */}
              <div className={`bg-slate-900/40 p-8 md:p-12 flex items-center justify-center relative overflow-hidden border-slate-800 min-h-[400px] ${index % 2 === 0 ? 'border-b md:border-b-0 md:border-r' : 'md:order-last border-b md:border-b-0 md:border-l'}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${index === 0 ? 'from-cyan-900/20 to-blue-900/10' : 'from-indigo-900/20 to-cyan-900/10'} z-0`}></div>
                
                {/* Abstract visual since we don't have images */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out">
                  <div className={`w-24 h-24 rounded-2xl bg-slate-900 border flex items-center justify-center mb-6 glow-cyan ${index === 0 ? 'border-cyan-500/30' : 'border-indigo-500/30'}`}>
                    <Cpu size={40} className={index === 0 ? "text-cyan-400" : "text-indigo-400"} />
                  </div>
                  <div className="flex flex-col gap-2 w-full max-w-xs opacity-70">
                    <div className="h-2 w-full bg-slate-700 rounded overflow-hidden">
                      <div className={`h-full w-3/4 ${index === 0 ? 'bg-cyan-500' : 'bg-indigo-500'}`}></div>
                    </div>
                    <div className="h-2 w-full bg-slate-700 rounded overflow-hidden">
                      <div className={`h-full w-1/2 ${index === 0 ? 'bg-blue-500' : 'bg-cyan-500'}`}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative z-10">
                <div className={`font-mono text-sm mb-3 font-semibold tracking-wider ${index === 0 ? 'text-cyan-400' : 'text-indigo-400'}`}>Highlight 0{index + 1}</div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">{featured.title}</h3>
                
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6 mb-8 opacity-95 shadow-lg relative glow-cyan-hover">
                  <p className="text-slate-300 text-[15px] leading-relaxed mb-4">
                    {featured.description}
                  </p>
                  <p className="text-slate-300 text-[15px] leading-relaxed">
                    {featured.details.extendedDescription}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-10">
                  {featured.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 text-slate-300 text-xs rounded-full font-mono shadow-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 mt-auto">
                  {featured.github && (
                    <a href={featured.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white font-medium transition-colors group/link">
                      <FaGithub size={20} className="group-hover/link:rotate-12 transition-transform" /> View Source
                    </a>
                  )}
                  {featured.liveUrl && (
                    <a href={featured.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 font-medium transition-colors">
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
