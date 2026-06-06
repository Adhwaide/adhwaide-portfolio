import React from 'react';
import { Lightbulb, Code2, Wrench, Sparkles } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "AI/ML",
      icon: <Lightbulb size={24} className="text-cyan-400 mb-4" />,
      skills: ["Python", "YOLOv8", "NLP", "Computer Vision"]
    },
    {
      title: "Web Development",
      icon: <Code2 size={24} className="text-cyan-400 mb-4" />,
      skills: ["HTML, CSS, JavaScript", "React", "WebSockets"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} className="text-cyan-400 mb-4" />,
      skills: ["Git & GitHub", "Power BI", "APIs"]
    }
  ];

  return (
    <section data-animate="true" id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div data-animate="true" className="flex items-center gap-3 mb-10"
      >
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Technical Arsenal</h2>
        <div className="h-px bg-slate-800 flex-grow ml-4"></div>
      </div>

      {/* Core Strengths (Highlighted) */}
      <div className="flex flex-wrap gap-4 mb-16">
        <div data-animate="true" className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-500/50 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-105 transition-transform duration-300"
        >
          <Sparkles className="text-cyan-400 animate-pulse" size={20} />
          <span className="text-white font-bold tracking-wide">Vibe Coding</span>
        </div>
        <div data-animate="true" className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-950 to-purple-950 border border-indigo-500/50 rounded-2xl shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:scale-105 transition-transform duration-300"
        >
          <Sparkles className="text-indigo-400 animate-pulse" size={20} />
          <span className="text-white font-bold tracking-wide">Prompt Engineering</span>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {skillCategories.map((cat, i) => (
          <div
            key={i}
            data-animate="true" className="glass-card p-10 rounded-[2rem] group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500"
          >
            <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 origin-bottom-left">
              {cat.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 mt-4 group-hover:text-cyan-400 transition-colors">{cat.title}</h3>
            
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill, j) => (
                <span key={j} className="px-3 py-1.5 bg-slate-900/80 border border-slate-700/50 text-slate-300 text-xs font-mono rounded-lg shadow-sm hover:bg-cyan-950/50 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors cursor-default">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
