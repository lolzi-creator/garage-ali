'use client';

import { motion } from 'framer-motion';
import { 
  Wrench, 
  CircleStop, 
  CircleDot, 
  Search, 
  Snowflake, 
  Cog,
  Clock,
  DollarSign,
  CheckCircle
} from 'lucide-react';
import { services } from '@/data/services';
import { fadeInUp, staggerContainer } from '@/lib/utils';

const iconMap = {
  Wrench,
  CircleStop,
  CircleDot,
  Search,
  Snowflake,
  Cog
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800">
      {/* Flowing Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-orange-500/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-red-500/2 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="block">PREMIUM</span>
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">SERVICES</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professionelle Automobile Services mit höchsten Qualitätsstandards. 
            Transparente Preise, modernste Technik, erfahrene Spezialisten.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 p-8 group hover:-translate-y-2 hover:border-orange-500/30"
              >
                {/* Service Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:from-orange-500 group-hover:to-red-600 group-hover:border-orange-400 transition-all">
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </div>

                {/* Service Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{service.description}</p>

                  {/* Price and Duration */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-orange-400 font-bold">
                      <DollarSign className="w-4 h-4" />
                      <span>{service.price}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  {service.features && (
                    <div className="space-y-2">
                      <h4 className="font-medium text-gray-400 text-sm uppercase tracking-wide">Inklusive:</h4>
                      <ul className="space-y-1">
                        {service.features.slice(0, 3).map((feature: string, featureIndex: number) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-orange-400 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className="w-full group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-2xl font-bold transition-all mt-6 shadow-xl">
                    <span className="relative z-10">SERVICE BUCHEN</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <div className="bg-blue-900 text-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold mb-4">Brauchen Sie einen speziellen Service?</h3>
            <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
              Finden Sie nicht, was Sie suchen? Wir bieten umfassende Autoreparatur-Services. 
              Kontaktieren Sie uns, um Ihre spezifischen Bedürfnisse zu besprechen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Kostenvoranschlag
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-bold transition-all">
                Jetzt Anrufen
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 