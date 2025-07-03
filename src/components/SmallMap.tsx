'use client';

import { MapPin } from 'lucide-react';

export default function SmallMap() {
  // Real Google Maps embed for Auto Checkpoint Garage Ali
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.6027294969213!2d7.375784677534195!3d47.18521427115427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e205bb0a61a43%3A0xf4311b16fd0e5497!2sAuto%20Checkpoint%20Garage%20Ali!5e0!3m2!1sde!2sch!4v1751540617333!5m2!1sde!2sch`;

  return (
    <div className="space-y-4">
      <h4 className="text-xl font-bold mb-6 text-white uppercase tracking-wide flex items-center gap-2">
        <MapPin className="w-5 h-5 text-orange-400" />
        STANDORT
      </h4>
      
      {/* Small Map Container */}
      <div className="relative group">
        <div className="relative rounded-xl overflow-hidden border border-gray-700/50 shadow-lg bg-black/20 backdrop-blur-sm hover:border-orange-500/30 transition-all">
          <iframe
            src={mapSrc}
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[200px] rounded-xl group-hover:scale-105 transition-transform duration-300"
            title="Auto Checkpoint Garage Ali Location"
          />
          
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20 pointer-events-none rounded-xl"></div>
        </div>
        
        {/* Quick Info */}
        <div className="mt-3 p-3 bg-gray-900/50 rounded-xl border border-gray-800">
          <p className="text-sm text-gray-300 font-medium mb-1">Solothurnstrasse 92</p>
          <p className="text-sm text-gray-400">2543 Lengnau, Schweiz</p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Auto+Checkpoint+Garage+Ali+Lengnau"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded-lg font-medium transition-colors"
          >
            Route planen
          </a>
        </div>
      </div>
    </div>
  );
} 