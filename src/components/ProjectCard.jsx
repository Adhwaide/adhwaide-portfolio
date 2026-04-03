import React, { useState } from 'react';
import { Maximize2, ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <div 
        className="glass-card rounded-[1.5rem] overflow-hidden flex flex-col group hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative h-full glow-cyan-hover"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="p-8 flex-grow flex flex-col relative z-10">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-400 transition-colors">{project.title}</h3>
            <button 
              onClick={handleOpenModal}
              className="text-slate-500 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all p-2 bg-slate-900 border border-slate-700 hover:border-cyan-500/50 rounded-full"
              aria-label="View Details"
            >
              <Maximize2 size={16} />
            </button>
          </div>
          
          <div className="mb-4 flex-grow">
            <p className="text-sm text-slate-300 mb-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-800/50">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Repository">
                <FaGithub size={18} />
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors" aria-label="Live Demo">
                <ExternalLink size={18} />
              </a>
            )}
            <button 
              onClick={handleOpenModal}
              className="ml-auto text-xs font-mono text-cyan-500 hover:text-cyan-400 uppercase tracking-wider"
            >
              Details &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Modal View */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm transition-opacity"
            onClick={handleCloseModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col z-10 animate-fade-in-up">
             {/* Modal Header */}
             <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-slate-800 p-6 flex justify-between items-center z-20">
               <div>
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded border border-slate-700 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
               </div>
               <button 
                 onClick={handleCloseModal}
                 className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-full transition-colors flex-shrink-0"
               >
                 <X size={20} />
               </button>
             </div>

             {/* Modal Body */}
             <div className="p-6 md:p-8 flex flex-col gap-8 text-slate-300">
               
               <section>
                 <p className="text-lg leading-relaxed text-slate-200 font-light border-l-2 border-cyan-500 pl-4 py-1 italic">
                   {project.details.extendedDescription}
                 </p>
               </section>

               <section>
                 <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                   <span className="w-6 h-px bg-cyan-500"></span>
                   Architecture & Design
                 </h4>
                 <p className="leading-relaxed">{project.details.architecture}</p>
               </section>

               <section>
                 <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                   <span className="w-6 h-px bg-cyan-500"></span>
                   Key Features
                 </h4>
                 <ul className="list-disc list-inside space-y-2 marker:text-cyan-500">
                   {project.features.map((feature, i) => (
                     <li key={i}>{feature}</li>
                   ))}
                 </ul>
               </section>

               <div className="grid md:grid-cols-2 gap-8">
                 <section className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                   <h4 className="text-base font-semibold text-white mb-2">Challenges Faced</h4>
                   <p className="text-sm leading-relaxed">{project.details.challenges}</p>
                 </section>

                 <section className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                   <h4 className="text-base font-semibold text-white mb-2">Key Learnings</h4>
                   <p className="text-sm leading-relaxed">{project.details.learnings}</p>
                 </section>
               </div>
               
               {project.details.future && (
                  <section>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-6 h-px bg-cyan-500"></span>
                      Future Improvements
                    </h4>
                    <p className="leading-relaxed">{project.details.future}</p>
                  </section>
               )}

             </div>
          </div>
        </div>
      )}
    </>
  );
}
