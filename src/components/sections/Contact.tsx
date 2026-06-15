"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { siteConfig } from '../../data/siteConfig';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Replace the URL below with your actual Formspree endpoint URL
      const response = await fetch("https://formspree.io/f/mpqekdby", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-sm font-semibold tracking-widest text-premium-blue uppercase mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
            Let's Build Something
          </h3>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 space-y-8"
          >
            <h4 className="text-2xl font-bold text-white mb-6">Contact Information</h4>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-premium-blue">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-medium">{siteConfig.email}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-premium-blue">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-medium">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-4">Connect on social media</p>
              <div className="flex gap-4">
                
                <a href={siteConfig.socials.github} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-premium-blue hover:border-premium-blue transition-all">
  <GithubIcon className="w-5 h-5" />
</a>
<a href={siteConfig.socials.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 glass rounded-full flex items-center justify-center text-white hover:bg-premium-blue hover:border-premium-blue transition-all">
  <LinkedinIcon className="w-5 h-5" />
</a>

              </div>
            </div>
          </motion.div>

          {/* Right Column: The Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex-[1.5]"
          >
            <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl relative overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-premium-blue/10 blur-[100px] rounded-full"></div>

              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Your Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-premium-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-premium-blue focus:ring-1 focus:ring-premium-blue transition-all"
                      placeholder="Alex James"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-300">Your Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-premium-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-premium-blue focus:ring-1 focus:ring-premium-blue transition-all"
                      placeholder="alexjamesarwonga@gmail.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-premium-navy/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-premium-blue focus:ring-1 focus:ring-premium-blue transition-all resize-none"
                    placeholder="How can I help you?"
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full flex items-center justify-center gap-2"
                  disabled={isSubmitting || isSubmitted}
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : isSubmitted ? (
                    <span>Message Sent!</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;