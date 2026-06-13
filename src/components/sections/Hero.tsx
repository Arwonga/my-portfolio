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
          {/* Right Column: Image & Orbital Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative flex justify-center items-center mt-12 lg:mt-0"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border border-white/10 glass p-2">
              {/* Profile Image Container */}
              <div className="w-full h-full rounded-full overflow-hidden relative bg-premium-navy">
                <img
                  src="/image_2b161c.jpg" 
                  alt="Alex Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 1. Top Left (Existing) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-6 -left-6 md:top-10 md:-left-10 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                Next.js 15
              </motion.div>

              {/* 2. Top Right (NEW) */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute top-4 -right-4 md:top-8 md:-right-8 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                TypeScript
              </motion.div>

              {/* 3. Middle Left (NEW) */}
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 -left-12 md:-left-16 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                Python
              </motion.div>

              {/* 4. Middle Right (NEW) */}
              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-1/2 -translate-y-1/2 -right-10 md:-right-14 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                React
              </motion.div>

              {/* 5. Bottom Left (Existing) */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut" }}
                className="absolute bottom-12 -left-4 md:bottom-16 md:-left-6 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                Quant Research
              </motion.div>

              {/* 6. Bottom Right (Existing) */}
              <motion.div
                animate={{ y: [3, -3, 3] }}
                transition={{ repeat: Infinity, duration: 4.2, ease: "easeInOut" }}
                className="absolute bottom-16 -right-6 md:bottom-20 md:-right-8 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                Spring Boot
              </motion.div>

              {/* 7. Bottom Center (NEW) */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 4.8, ease: "easeInOut" }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm font-medium text-white border border-white/10 shadow-lg z-10 whitespace-nowrap"
              >
                Laravel
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;