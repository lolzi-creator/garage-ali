'use client';

import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Car, Wrench } from 'lucide-react';
import { contactInfo, businessInfo } from '@/data/contact';
import { fadeInUp, fadeInLeft, fadeInRight } from '@/lib/utils';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden -mt-16 pt-36">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-black/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                <span className="block">PREMIUM</span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">KONTAKT</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Exklusive Automobile Beratung in Lengnau. Direkter Draht zu unseren Premium-Experten. 
                Ihr Partner für erstklassige Fahrzeuge und professionellen Service.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div 
                variants={fadeInUp}
                className="flex items-center gap-4 p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-xl hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Telefon</p>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-xl font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-xl hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Showroom</p>
                  <p className="font-bold text-white">
                    {contactInfo.address.street}<br />
                    {contactInfo.address.zipCode} {contactInfo.address.city}
                  </p>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-xl hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-2xl flex items-center justify-center">
                  <Clock className="w-7 h-7 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">Öffnungszeiten</p>
                  <div className="space-y-1 text-sm font-medium text-white">
                    <p>Mo-Fr: 08:00-18:00</p>
                    <p>Sa: 09:00-16:00</p>
                    <p>So: Geschlossen</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-4 p-6 bg-black/40 border border-gray-700/50 rounded-2xl backdrop-blur-xl hover:border-orange-500/30 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-600 rounded-2xl flex items-center justify-center">
                  <Mail className="w-7 h-7 text-gray-300" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide">E-Mail</p>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="font-bold text-white hover:text-orange-400 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInRight}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8">
              <div className="text-center mb-8">
                <Car className="w-16 h-16 mx-auto mb-4 text-blue-200" />
                <h3 className="text-2xl font-bold mb-2">Termin vereinbaren</h3>
                <p className="text-blue-200">
                  Buchen Sie Ihren Service-Termin noch heute
                </p>
              </div>
              
              <div className="space-y-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="block w-full bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-xl font-bold text-center transition-colors"
                >
                  📞 Jetzt Anrufen
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="block w-full border-2 border-white text-white hover:bg-white hover:text-blue-900 py-4 px-6 rounded-xl font-bold text-center transition-all"
                >
                  ✉️ E-Mail Senden
                </a>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm">
              <div className="text-center mb-6">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-orange-400" />
                <h3 className="text-xl font-bold">Warum Auto Checkpoint?</h3>
              </div>
              
              <div className="space-y-3">
                {businessInfo.values.map((value, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 