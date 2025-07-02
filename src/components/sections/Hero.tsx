'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Star, CheckCircle } from 'lucide-react';
import { contactInfo, businessInfo } from '@/data/contact';
import { formatPhoneNumber, fadeInUp, fadeInLeft, fadeInRight } from '@/lib/utils';
import backgroundImage from '@/assets/images/123.png';

export default function Hero() {
  const goToAbout = () => {
    window.location.href = '/about';
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-24 md:pt-32 pb-0 overflow-hidden min-h-screen flex items-center">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-80"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage.src})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh] gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Premium seit {businessInfo.established} • {businessInfo.vehiclesSold} Verkaufte Fahrzeuge</span>
              </div>

              <h1 className="text-4xl md:text-6xl xl:text-8xl font-black leading-none tracking-tight">
                <span className="block">PREMIUM</span>
                <span className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">AUTOMOBILES</span>
                <span className="block text-2xl md:text-3xl xl:text-4xl text-gray-400 font-light mt-2">Lengnau • Schweiz</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Exklusive Fahrzeuge. Professionelle Beratung. Transparente Preise. 
                Ihr Partner für Premium-Automobile in der Region.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button
                onClick={() => window.location.href = '/cars'}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl border border-orange-400/30"
              >
                <span className="relative z-10">FAHRZEUGE ENTDECKEN</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
              <button
                onClick={goToAbout}
                className="group border-2 border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all backdrop-blur-sm"
              >
                ÜBER UNS
              </button>
            </motion.div>
          </div>

          {/* Right Content - Stats & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 max-w-lg mx-auto lg:mx-0"
          >
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{businessInfo.vehiclesSold}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Verkaufte Fahrzeuge</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white mb-2">{businessInfo.experience.split('+')[0]}+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Jahre Erfahrung</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-6 border border-white/10">
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">Telefon</div>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">Showroom</div>
                  <div className="text-white font-medium">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.zipCode} {contactInfo.address.city}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 uppercase tracking-wide mb-1">Öffnungszeiten</div>
                  <div className="text-white font-medium">
                    Mo-Fr: 08:00-18:00<br />
                    Sa: 09:00-16:00
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                  ))}
                </div>
                <p className="text-center text-gray-400 text-sm mt-2">
                  5.0 Google Bewertung
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Seamless Connection to Next Section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  );
} 