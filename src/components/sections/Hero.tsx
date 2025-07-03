'use client';

import { motion } from 'framer-motion';
import { contactInfo, businessInfo } from '@/data/contact';
import backgroundImage from '@/assets/images/123.png';

export default function Hero() {
  const goToAbout = () => {
    window.location.href = '/about';
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-40 md:pt-44 pb-0 overflow-hidden min-h-screen flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0">
                 <video
           className="absolute inset-0 w-full h-full object-cover"
           autoPlay
           muted
           loop
           playsInline
           poster={backgroundImage.src}
         >
           <source src="/images/1.mp4" type="video/mp4" />
           Your browser does not support the video tag.
         </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
      </div>

      {/* Yellow Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
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


              <h1 className="text-4xl md:text-6xl xl:text-8xl font-black leading-none tracking-tight">
                <span className="block">PREMIUM</span>
                <span className="block bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">AUTOMOBILES</span>
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
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl border border-yellow-400/30"
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
                    className="text-xl font-bold text-white hover:text-yellow-400 transition-colors"
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
                    <div key={i} className="w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
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