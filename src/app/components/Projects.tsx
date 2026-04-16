import { ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect } from 'react';
import { storage, Project } from '../utils/storage';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    storage.getProjects().then(setProjects);
  }, []);

  if (projects.length === 0) {
    return null; // Don't show section if no projects
  }

  return (
    <section id="work" className="py-20 bg-[#0f172a]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-white mb-4 font-bold">Projects</h2>
          <div className="w-20 h-1 bg-[#3b82f6] mx-auto"></div>
          <p className="text-[#94a3b8] mt-4 max-w-2xl mx-auto">
            Here are some of my recent web development projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover rounded-2xl overflow-hidden group flex flex-col"
            >
              <div className="relative h-56 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-white text-2xl mb-4 font-bold group-hover:text-[#3b82f6] transition-colors">{project.title}</h3>
                <p className="text-[#94a3b8] mb-6 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#3b82f6]/10 text-[#3b82f6] text-xs font-semibold rounded-full border border-[#3b82f6]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="mt-auto flex items-center gap-2 text-[#3b82f6] hover:text-[#60a5fa] transition-all font-bold group/link">
                  View Project Details
                  <ExternalLink size={18} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}