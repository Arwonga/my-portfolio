"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';
import Image from 'next/image';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % siteConfig.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background with Tech Imagery */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/laptop.jpg"
          alt="Tech Workspace"
          fill
          className="object-cover opacity-20 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-premium-black/70 via-premium-black/90 to-premium-black"></div>
        <div className="absolute inset-0 bg-hero-glow opacity-30 animate-blob"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full">
        
        {/* Left Column: Text Content & CTAs */}
        <div className="flex-1 text-left mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-premium-blue font-semibold tracking-widest uppercase text-xs md:text-sm mb-4">
              Premium Digital Experiences
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6">
              Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">{siteConfig.name}</span>
            </h1>
            
            {/* The Framer Motion Role Rotator */}
            <div className="h-12 md:h-16 mb-6">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-4xl font-medium text-premium-gray"
                >
                  {siteConfig.roles[currentRole]}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-gray-400 max-w-xl mb-10 leading-relaxed"
            >
              Based in {siteConfig.location}, I engineer high-performance systems, build intelligent AI solutions, and craft Apple-inspired interfaces that convert.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button variant="primary" size="lg">View Projects</Button>
              <Button variant="glass" size="lg">Contact Me</Button>
              <Button variant="outline" size="lg">Download CV</Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Profile Image & Floating Badges */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex-1 hidden lg:flex justify-end mt-12 lg:mt-0"
        >
          <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full p-2 border border-premium-blue/20 glass shadow-[0_0_40px_rgba(59,130,246,0.15)]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/alex-profile.jpeg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating Tech Badges */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-4 -left-6 glass px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg border-white/10"
            >
              Next.js 15
            </motion.div>
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-16 -right-8 glass px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg border-white/10"
            >
              Spring Boot
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 left-16 glass px-4 py-2 rounded-xl text-sm font-semibold text-white shadow-lg border-white/10"
            >
              Quant Research
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;