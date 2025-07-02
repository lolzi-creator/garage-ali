'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import { fadeInUp, staggerContainer } from '@/lib/utils';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-gray-800 via-gray-900 to-black -mt-32 pt-52">
      {/* Subtle Flow Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/2 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-red-500/2 rounded-full blur-3xl"></div>
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
            <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">BEWERTUNGEN</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Über 500 zufriedene Kunden vertrauen auf unsere Premium-Expertise. 
            Erfahren Sie, warum wir die erste Wahl für exklusive Automobile sind.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 p-8 relative hover:border-orange-500/30"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
                  <Quote className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-300 leading-relaxed mb-6 font-medium">
                "{testimonial.comment}"
              </p>

              {/* Customer Info */}
              <div className="border-t border-gray-700/50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-orange-400 font-medium">{testimonial.service}</p>
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">
                    {new Date(testimonial.date).toLocaleDateString('de-CH', {
                      month: 'long',
                      year: 'numeric'
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-8 lg:p-12 text-white"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">100+</div>
              <div className="text-blue-200">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">5000+</div>
              <div className="text-blue-200">Reparaturen</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">9+</div>
              <div className="text-blue-200">Jahre Erfahrung</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-blue-300 mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-blue-200">Google Bewertung</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 