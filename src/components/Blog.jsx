import React from 'react';
import { BookOpen, AlertCircle } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: "Optimizing Inference on Edge Devices with Quantization",
      date: "Oct 12, 2023",
      category: "Research",
      readTime: "8 min read"
    },
    {
      title: "Handling Concept Drift in Production ML Systems",
      date: "Sep 05, 2023",
      category: "Engineering",
      readTime: "5 min read"
    }
  ];

  return (
    <section data-animate="true" id="blog" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div data-animate="true" className="flex justify-between items-end mb-12 border-b border-white/5 pb-6"
      >
        <div>
          <h2 className="text-4xl font-extrabold text-white tracking-tight mb-3">Research & Writing</h2>
          <p className="text-slate-400 font-mono text-sm max-w-xl">Thoughts on AI, ML systems, and software engineering.</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {posts.map((post, i) => (
          <div
            key={i} 
            href="#"
            data-animate="true" className="block glass-card p-8 rounded-3xl hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group glow-cyan-hover"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-cyan-950/80 text-cyan-400 text-xs font-mono rounded-lg border border-cyan-900/50">
                {post.category}
              </span>
              <span className="text-slate-500 text-xs font-mono">{post.date}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
              <BookOpen size={16} className="text-slate-500" /> {post.readTime}
            </div>
          </div>
        ))}
      </div>

      {/* Currently Building */}
      <div data-animate="true" className="glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-6"
      >
        <div className="w-16 h-16 bg-slate-900/80 rounded-2xl flex items-center justify-center flex-shrink-0 border border-slate-700/50 shadow-inner">
          <AlertCircle className="text-amber-500 animate-pulse" size={32} />
        </div>
        <div className="text-center md:text-left">
          <h4 className="text-lg font-bold text-white mb-2">🚧 Currently building...</h4>
          <p className="text-slate-400">
            Digital Immortality Platform — an AI system focused on preserving human personality, memory, and conversational behavior using long-term data modeling and intelligent response generation.
          </p>
        </div>
      </div>
    </section>
  );
}
