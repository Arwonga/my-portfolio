"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Controls the mobile menu!

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <div className="hidden md:block">
          <a href="#contact" className="px-6 py-2 bg-premium-blue text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-premium-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 space-y-4 text-base font-medium text-gray-300">
              <a href="#about" onClick={closeMenu} className="block py-2 hover:text-white transition-colors">About</a>
              <a href="#skills" onClick={closeMenu} className="block py-2 hover:text-white transition-colors">Skills</a>
              <a href="#projects" onClick={closeMenu} className="block py-2 hover:text-white transition-colors">Projects</a>
              <a href="#contact" onClick={closeMenu} className="block py-2 hover:text-white transition-colors">Contact</a>
              <a href="#contact" onClick={closeMenu} className="w-full mt-4">
                <button className="w-full py-3 bg-premium-blue text-white rounded-lg font-medium">Hire Me</button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;