"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

// Helper function to format the camelCase keys into readable titles
const formatTitle = (key: string) => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest text-premium-blue uppercase mb-3">
            Technical Arsenal
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Tools of the Trade
          </h3>
        </motion.div>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-premium-purple/30 transition-all group shadow-lg"
            >
              <h4 className="text-xl font-bold text-white mb-6 group-hover:text-premium-purple transition-colors">
                {formatTitle(category)}
              </h4>
              <div className="flex flex-wrap gap-3">
                {items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-premium-navy/50 text-premium-gray text-sm rounded-lg border border-white/5 hover:text-white hover:border-premium-blue/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;