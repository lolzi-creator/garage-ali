'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';
import logoImage from '@/assets/images/143.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function to restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    if (href === '/') {
      window.location.href = '/';
    } else if (href.startsWith('#')) {
      scrollToElement(href.substring(1));
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Promotional Top Bar */}
      <div className="bg-gradient-to-r from-red-600 via-blue-500 via-yellow-500 to-blue-600 text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm font-medium">
            ⭐ <span className="font-bold">NEU:</span> Premium Auto-Services • MFK Bereitstellung • Klima Service • Professionelle Fahrzeug-Aufbereitung
          </p>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center">
            {/* Left Side Navigation - Close to Logo */}
            <nav className="hidden lg:flex items-center gap-6 mr-8">
              <button
                onClick={() => handleNavClick('/')}
                className="text-white hover:text-orange-400 font-bold text-lg uppercase tracking-wide transition-all cursor-pointer"
              >
                HOME
              </button>
              <button
                onClick={() => window.location.href = '/cars'}
                className="text-white hover:text-orange-400 font-bold text-lg uppercase tracking-wide transition-all cursor-pointer"
              >
                FAHRZEUGE
              </button>
            </nav>

            {/* Center Logo */}
            <Link href="/" className="group">
              <div className="w-16 h-16 md:w-20 md:h-20 group-hover:scale-105 transition-transform">
                <img 
                  src={logoImage.src} 
                  alt="Auto Checkpoint Garage Ali" 
                  className="w-full h-full object-contain -rotate-90 hover:animate-spin"
                  style={{
                    animation: 'spin 1s linear'
                  }}
                  onAnimationEnd={(e) => {
                    e.currentTarget.style.animation = '';
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.animation = 'spin 1s linear';
                  }}
                />
              </div>
            </Link>

            {/* Right Side Navigation - Close to Logo */}
            <nav className="hidden lg:flex items-center gap-6 ml-8">
              <button
                onClick={() => window.location.href = '/about'}
                className="text-white hover:text-orange-400 font-bold text-lg uppercase tracking-wide transition-all cursor-pointer"
              >
                ÜBER UNS
              </button>
              <button
                onClick={() => window.location.href = '/services'}
                className="relative group text-white hover:text-orange-400 font-bold text-lg uppercase tracking-wide transition-all cursor-pointer"
              >
                <span className="relative">
                  SERVICES
                  <span className="absolute -top-2 -right-8 bg-gradient-to-r from-blue-500 to-sky-600 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                    TOP
                  </span>
                </span>
              </button>
              <button
                onClick={() => window.location.href = '/admin'}
                className="text-gray-400 hover:text-orange-400 font-bold text-sm uppercase tracking-wide transition-all cursor-pointer"
              >
                ADMIN
              </button>
            </nav>

          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden absolute right-4 top-4 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center z-10"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Cool Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute top-1/4 right-1/4 w-64 h-64 bg-yellow-500 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-500 rounded-full blur-3xl"
              />
            </div>

            <div className="flex flex-col h-full">
              {/* Close Button */}
              <div className="flex justify-end p-6">
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all border border-white/20"
                >
                  <X className="w-6 h-6 text-white" />
                </motion.button>
              </div>

              {/* Navigation */}
              <div className="flex-1 flex items-center justify-center">
                <nav className="text-center space-y-8">
                  {/* Logo */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                    className="mb-12"
                  >
                    <motion.div 
                      className="w-20 h-20 mx-auto mb-4"
                      initial={{ rotate: -90, scale: 0 }}
                      animate={{ rotate: -90, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <img 
                        src={logoImage.src} 
                        alt="Auto Checkpoint Garage Ali" 
                        className="w-full h-full object-contain hover:animate-spin transition-transform"
                        loading="eager"
                        style={{ transform: 'rotate(-90deg)' }}
                      />
                    </motion.div>
                    <motion.h2 
                      className="text-white font-bold text-lg"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      AUTO CHECKPOINT
                    </motion.h2>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.25 }}
                    >
                      Premium Automobile
                    </motion.p>
                  </motion.div>

                  {/* Menu Items */}
                  {[
                    { name: 'HOME', href: '/', delay: 0.2 },
                    { name: 'FAHRZEUGE', href: '/cars', delay: 0.3 },
                    { name: 'ÜBER UNS', href: '/about', delay: 0.4 },
                    { name: 'SERVICES', href: '/services', delay: 0.5, special: true }
                  ].map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                    >
                      <button
                        onClick={() => {
                          if (item.href === '/') {
                            handleNavClick('/');
                          } else {
                            window.location.href = item.href;
                          }
                          setIsMenuOpen(false);
                        }}
                        className={`group relative block w-full py-4 px-8 ${
                          item.special 
                            ? 'text-white hover:text-yellow-400' 
                            : 'text-white hover:text-yellow-400'
                        } font-bold text-2xl uppercase tracking-wide transition-all`}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {item.name}
                          {item.special && (
                            <span className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                              TOP
                            </span>
                          )}
                        </span>
                        
                        {/* Hover Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${
                          item.special 
                            ? 'from-yellow-500/20 to-amber-500/20' 
                            : 'from-yellow-500/20 to-amber-500/20'
                        } rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100`}></div>
                        
                        {/* Active Indicator */}
                        <motion.div
                          className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 ${
                            item.special 
                              ? 'bg-gradient-to-r from-yellow-500 to-amber-600' 
                              : 'bg-gradient-to-r from-yellow-500 to-amber-600'
                          } rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300`}
                          initial={{ width: 0 }}
                          whileHover={{ width: '60%' }}
                        />
                      </button>
                    </motion.div>
                  ))}

                  {/* Contact Info */}
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-12 pt-8 border-t border-white/20"
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                      <p className="text-yellow-400 font-bold text-lg mb-2">032 530 39 99</p>
                      <p className="text-gray-300 text-sm">Solothurnstrasse 92</p>
                      <p className="text-gray-300 text-sm">2543 Lengnau</p>
                    </div>
                  </motion.div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 