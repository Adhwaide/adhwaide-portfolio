import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const otherProjects = projects.slice(2);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <h2 className="text-4xl font-extrabold text-white tracking-tight">Recent Projects</h2>
        <div className="h-px bg-slate-800 flex-grow ml-4"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {otherProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
