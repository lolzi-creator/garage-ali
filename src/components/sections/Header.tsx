'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';
import logoImage from '@/assets/images/143.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      {/* Main Header */}
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
                className="w-full h-full object-contain"
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
              onClick={() => window.location.href = '/contact'}
              className="text-white hover:text-orange-400 font-bold text-lg uppercase tracking-wide transition-all cursor-pointer"
            >
              KONTAKT
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
          className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <Menu className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/90 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 py-8">
              <nav className="flex flex-col gap-6 text-center">
                <button
                  onClick={() => {
                    handleNavClick('/');
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-orange-400 font-bold text-xl uppercase tracking-wide transition-all"
                >
                  HOME
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/cars';
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-orange-400 font-bold text-xl uppercase tracking-wide transition-all"
                >
                  FAHRZEUGE
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/about';
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-orange-400 font-bold text-xl uppercase tracking-wide transition-all"
                >
                  ÜBER UNS
                </button>
                <button
                  onClick={() => {
                    window.location.href = '/contact';
                    setIsMenuOpen(false);
                  }}
                  className="text-white hover:text-orange-400 font-bold text-xl uppercase tracking-wide transition-all"
                >
                  KONTAKT
                </button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 