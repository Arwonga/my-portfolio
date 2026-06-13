"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-premium-black/90 backdrop-blur-md py-4 border-white/10 shadow-lg' : 'border-transparent bg-transparent py-6'
    }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold tracking-tighter text-white">
          ALEX<span className="text-premium-blue">.</span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-premium-gray">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact">
            <Button variant="primary" size="sm">Hire Me</Button>
          </a>
        </div>

        {/* Mobile Menu Toggle Placeholder */}
        <div className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;