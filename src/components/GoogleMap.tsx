'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

interface GoogleMapProps {
  address?: string;
  className?: string;
}

export default function GoogleMap({ 
  address = "Lengnau, Switzerland", 
  className = "" 
}: GoogleMapProps) {
  // For a more specific address, replace with your exact garage address
  const encodedAddress = encodeURIComponent(address);
  
  // Real Google Maps embed for Auto Checkpoint Garage Ali
  const simpleMapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.6027294969213!2d7.375784677534195!3d47.18521427115427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e205bb0a61a43%3A0xf4311b16fd0e5497!2sAuto%20Checkpoint%20Garage%20Ali!5e0!3m2!1sde!2sch!4v1751540617333!5m2!1sde!2sch`;

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className={`py-20 bg-gradient-to-b from-black to-gray-900 ${className}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <MapPin className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl lg:text-5xl font-bold text-white">
              UNSER <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">STANDORT</span>
            </h2>
          </motion.div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Besuchen Sie uns in unserem modernen Showroom in Lengnau. 
            Einfach zu finden, kostenlose Parkplätze verfügbar.
          </p>
        </div>

        {/* Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl bg-black/20 backdrop-blur-sm">
            {/* Map Iframe */}
            <iframe
              src={simpleMapSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[450px] rounded-2xl"
              title="Auto Checkpoint Garage Ali Location"
            />
            
            {/* Overlay for styling */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none rounded-2xl"></div>
          </div>

          {/* Address Info Overlay */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-md text-white p-6 rounded-xl border border-white/10 max-w-sm"
          >
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-orange-400" />
              <h3 className="font-bold text-lg">Auto Checkpoint</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">
              Solothurnstrasse 92<br />
              2543 Lengnau, Schweiz
            </p>
            <div className="flex gap-2">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Route planen
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/30">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-400 text-xl">🚗</span>
            </div>
            <h4 className="font-bold text-white mb-2">Kostenlose Parkplätze</h4>
            <p className="text-gray-400 text-sm">Direkt vor unserem Showroom verfügbar</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/30">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-400 text-xl">🚌</span>
            </div>
            <h4 className="font-bold text-white mb-2">Öffentliche Verkehrsmittel</h4>
            <p className="text-gray-400 text-sm">Bus-Haltestelle in 2 Min. zu Fuß</p>
          </div>
          
          <div className="text-center p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-gray-700/30">
            <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-400 text-xl">⏰</span>
            </div>
            <h4 className="font-bold text-white mb-2">Flexible Termine</h4>
            <p className="text-gray-400 text-sm">Auch außerhalb der Öffnungszeiten möglich</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
} 