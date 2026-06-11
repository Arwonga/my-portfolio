"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Search, ExternalLink } from 'lucide-react';
import { projects } from '../../data/projects';


const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const categories = ['All', 'Featured', 'Web', 'Quant', 'Design'];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    let matchesFilter = true;
    if (filter === 'Featured') matchesFilter = project.featured;
    if (filter === 'Web') matchesFilter = project.technologies.some(t => ['Next.js', 'React', 'Laravel', 'Spring Boot'].includes(t));
    if (filter === 'Quant') matchesFilter = project.technologies.some(t => ['Python', 'Data Visualization', 'Flask'].includes(t));
    if (filter === 'Design') matchesFilter = project.technologies.some(t => ['Canva', 'MJML', 'Figma', 'Brand Strategy'].includes(t));

    return matchesSearch && matchesFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="mb-12 md:flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-sm font-semibold tracking-widest text-premium-blue uppercase mb-3">
              Portfolio
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Featured Works
            </h3>
          </motion.div>

          {/* Search and Filter System */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-premium-navy/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-premium-blue transition-colors"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all whitespace-nowrap ${
                    filter === cat 
                      ? 'bg-premium-blue text-white shadow-[0_0_15px_rgba(59,130,246,0.4)]' 
                      : 'glass text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dynamic Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative glass rounded-3xl overflow-hidden border border-white/5 hover:border-premium-blue/30 transition-all duration-500"
              >
                {/* Image Container with Hover Scale Parallax */}
                <div className="relative h-64 w-full overflow-hidden bg-premium-navy">
                  <div className="absolute inset-0 bg-gradient-to-t from-premium-black to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>

                {/* Content Overlay */}
                <div className="p-8 relative z-20 -mt-12 bg-gradient-to-b from-transparent to-premium-black">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold text-white group-hover:text-premium-blue transition-colors">
                      {project.title}
                    </h4>
                    <div className="flex gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-white/10 transition-colors text-white z-30">
                        <GithubIcon className="w-5 h-5" />
                      </a>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="p-2 glass rounded-full hover:bg-white/10 transition-colors text-white z-30">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium text-premium-blue bg-premium-blue/10 rounded-full border border-premium-blue/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center text-gray-500 glass rounded-3xl border border-white/5"
          >
            No projects found matching your search criteria.
          </motion.div>
        )}

      </div>
    </section>
  );
}