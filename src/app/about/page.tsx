'use client';

import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import GoogleMap from '@/components/GoogleMap';
import { 
  Star, 
  Award, 
  Users, 
  Calendar,
  CheckCircle,
  Shield,
  Heart,
  Zap,
  Target,
  Wrench
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function AboutPage() {
  const achievements = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Seit 2015",
      description: "In Lengnau etabliert",
      highlight: "9+ Jahre Erfahrung"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "500+ Fahrzeuge",
      description: "Erfolgreich verkauft",
      highlight: "Premium Qualität"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Sterne",
      description: "Google Bewertung",
      highlight: "Kundenzufriedenheit"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Lizenziert",
      description: "Autohändler",
      highlight: "Zertifizierte Qualität"
    }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Vertrauen & Sicherheit",
      description: "Transparente Preise und ehrliche Beratung. Jedes Fahrzeug wird sorgfältig geprüft.",
      features: ["Transparente Preise", "Ehrliche Beratung", "Geprüfte Fahrzeuge"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kundenservice",
      description: "Ihre Zufriedenheit steht im Mittelpunkt. Persönliche Betreuung von A bis Z.",
      features: ["Persönliche Betreuung", "Kundenorientiert", "Nachbetreuung"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation & Qualität",
      description: "Modernste Technik und höchste Qualitätsstandards für Premium-Automobile.",
      features: ["Modernste Technik", "Qualitätsstandards", "Premium Service"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Zielorientiert",
      description: "Wir finden das perfekte Fahrzeug für Ihre individuellen Bedürfnisse.",
      features: ["Individuelle Beratung", "Maßgeschneiderte Lösungen", "Perfekte Matches"]
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white py-8 md:py-16 lg:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/30">
                <Star className="w-4 h-4" />
                Premium Autohaus seit 2015
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                Über <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">uns</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-8">
                Auto Checkpoint Garage Ali – Ihr vertrauensvoller Partner für exklusive Automobile 
                in Lengnau. Über 500 erfolgreich verkaufte Premium-Fahrzeuge sprechen für sich.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-black to-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Unsere <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Erfolge</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Zahlen und Fakten, die für unsere Expertise sprechen
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="bg-yellow-900/20 p-3 md:p-6 border-b border-yellow-500/30">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-lg mb-2 md:mb-4 mx-auto">
                      {achievement.icon}
                    </div>
                    <h3 className="text-sm md:text-lg font-bold text-white text-center">{achievement.title}</h3>
                    <p className="text-gray-300 text-xs md:text-sm text-center mt-1">{achievement.description}</p>
                  </div>
                  <div className="p-3 md:p-6 text-center">
                    <span className="text-yellow-400 font-semibold text-xs md:text-sm">{achievement.highlight}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>



        {/* Technical Excellence Video Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-500/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-yellow-500/30">
                <Wrench className="w-4 h-4" />
                Technische Exzellenz
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Fachkompetenz <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">in Aktion</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Sehen Sie, mit welcher Präzision und Hingabe wir an jedem Fahrzeug arbeiten.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 p-3 md:p-6 shadow-2xl">
                  <div className="relative aspect-video rounded-lg md:rounded-xl overflow-hidden bg-gray-800">
                                         <video
                       className="w-full h-full object-cover"
                       autoPlay
                       muted
                       loop
                       playsInline
                       poster="/images/video-poster.jpg"
                     >
                       <source src="/images/2.mov" type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-3 md:bottom-6 left-3 md:left-6 right-3 md:right-6">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3">
                        <h3 className="text-white font-semibold mb-1 text-sm md:text-base">Professionelle Fahrzeugbetreuung</h3>
                        <p className="text-gray-300 text-xs md:text-sm">Jedes Detail zählt – seit über 8 Jahren</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-10 blur-2xl hidden md:block"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl hidden md:block"></div>
              </motion.div>

              {/* Stats below video */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="mt-6 md:mt-12"
              >
                <div className="grid grid-cols-3 gap-3 md:gap-6">
                  <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-3 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <Calendar className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">8+</div>
                    <div className="text-gray-400 text-xs md:text-sm">Jahre Erfahrung</div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-3 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-gray-400 text-xs md:text-sm">Qualitätskontrolle</div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-3 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">5.0</div>
                    <div className="text-gray-400 text-xs md:text-sm">Google Bewertung</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-900 to-black">
          <div className="container mx-auto px-4">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Unsere <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Werte</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Was uns ausmacht und wofür wir stehen
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-yellow-500/30 shadow-lg hover:shadow-xl hover:shadow-yellow-500/10 transition-all duration-300 p-4 md:p-8"
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl md:rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      {value.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{value.title}</h3>
                      <p className="text-gray-300 mb-3 md:mb-4 leading-relaxed text-sm md:text-base">{value.description}</p>
                      <div className="space-y-1 md:space-y-2">
                        {value.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 md:gap-3">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-300 text-xs md:text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Location */}
        <GoogleMap />
      </main>

      <Footer />
    </div>
  );
} 