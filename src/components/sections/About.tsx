"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Delivered", value: "15+" },
    { label: "Technologies", value: "12+" },
    { label: "Lines of Code", value: "100k+" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-16 items-center"
        >
          {/* Left Side: Narrative */}
          <div className="flex-1 space-y-6">
            <h2 className="text-sm font-semibold tracking-widest text-premium-blue uppercase">
              About Me
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Engineering logic. <br />
              <span className="text-premium-gray">Designing experiences.</span>
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I am a hybrid technologist specializing in full-stack system architecture and quantitative research. From architecting scalable property management backends in Spring Boot and Laravel, to building high-probability predictive models for financial signals, I thrive at the intersection of data and design.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              My philosophy is simple: write clean code, build intuitive Apple-inspired interfaces, and deliver systems that solve real-world problems with mathematical precision.
            </p>
          </div>

          {/* Right Side: Animated Stats Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-premium-blue/30 transition-colors group"
              >
                <h4 className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-premium-blue transition-colors">
                  {stat.value}
                </h4>
                <p className="text-sm font-medium text-premium-gray uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;