'use client';

import { motion } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import GoogleMap from '@/components/GoogleMap';
import { 
  Star, 
  Award, 
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
      
      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-black via-gray-900 to-yellow-900 text-white py-16 md:py-24 lg:py-32 min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(/images/test2.jpeg)`
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
          </div>
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
                Automobile Fachmann EFZ
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                Warum <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">mich wählen?</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4 md:mb-8">
                Als erfahrener <span className="text-yellow-400 font-semibold">Automobile Fachmann EFZ</span> mit über 
                8 Jahren Berufserfahrung biete ich Ihnen kompetente Beratung und erstklassigen Service. 
                Vertrauen Sie auf meine Expertise bei Premium-Automobilen – jedes Fahrzeug wird von mir 
                persönlich geprüft und mit größter Sorgfalt ausgewählt.
              </p>

            </motion.div>
          </div>
        </section>





        {/* Personal Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-black via-gray-900 to-gray-900 relative overflow-hidden">
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
                Fachkompetenz & Erfahrung
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                Ihr <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Automobile Experte</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Lernen Sie den Fachmann hinter Auto Checkpoint Garage kennen.
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Photo Section */}
                <div className="relative">
                  <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 p-4 md:p-6 shadow-2xl">
                    <div className="relative aspect-[4/5] rounded-lg md:rounded-xl overflow-hidden bg-gray-800">
                      <img
                        src="/images/owner-photo.jpg" // You'll need to add this image
                        alt="Automobile Fachmann - Auto Checkpoint Garage"
                       className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image doesn't exist
                          e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/80 backdrop-blur-sm rounded-lg px-4 py-3">
                          <h3 className="text-white font-semibold text-lg">Automobile Fachmann EFZ</h3>
                          <p className="text-yellow-400 text-sm">Über 8 Jahre Berufserfahrung</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative elements */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full opacity-10 blur-2xl hidden lg:block"></div>
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full opacity-20 blur-xl hidden lg:block"></div>
                </div>

                {/* Information Section */}
                <div className="space-y-6">
                  <div className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                      Qualifierte <span className="text-yellow-400">Expertise</span>
                    </h3>
                    
                    <div className="space-y-6">
                      {/* Qualification */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-lg">Automobile Fachmann EFZ</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Eidgenössisches Fähigkeitszeugnis als Automobile Fachmann mit Spezialisierung 
                            auf Premium-Fahrzeuge und moderne Fahrzeugtechnik.
                          </p>
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-lg">8+ Jahre Berufserfahrung</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Seit 2015 erfolgreich tätig im Bereich Premium-Automobile mit 
                                                         über 10 verkauften Fahrzeugen und zufriedenen Kunden.
                          </p>
                        </div>
                      </div>

                      {/* Specialization */}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Wrench className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-lg">Spezialisierung</h4>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            Fachkompetenz in der Bewertung, Aufbereitung und dem Verkauf 
                            von Premium-Automobilen aller namhaften Marken.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Contact CTA */}
                    <div className="mt-8 pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-medium">Persönliche Beratung gewünscht?</p>
                          <p className="text-gray-400 text-sm">Kontaktieren Sie mich direkt</p>
                        </div>
                        <a
                          href="tel:032 530 39 99"
                          className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                        >
                          Anrufen
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certificates Section */}
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
                Zertifikate & <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Qualifikationen</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Offizielle Bestätigungen unserer Fachkompetenz und Qualifikationen
              </p>
            </motion.div>

                         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {/* Certificate 1 - EFZ */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.1 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 p-4 md:p-6"
              >
                               <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 mb-4 max-h-48">
                   <img
                     src="/images/efz-certificate.jpg" // You'll need to add this image
                     alt="EFZ Automobile Fachmann Zertifikat"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder certificate
                      e.currentTarget.src = "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-500/30">
                      <p className="text-yellow-400 font-semibold text-sm">EFZ Zertifikat</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Automobile Fachmann EFZ</h3>
                <p className="text-gray-400 text-sm">Eidgenössisches Fähigkeitszeugnis</p>
              </motion.div>

              {/* Certificate 2 - Additional Qualification */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 p-4 md:p-6"
              >
                               <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 mb-4 max-h-48">
                   <img
                     src="/images/additional-certificate.jpg" // You'll need to add this image
                     alt="Zusätzliche Qualifikation"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder certificate
                      e.currentTarget.src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-500/30">
                      <p className="text-yellow-400 font-semibold text-sm">Weiterbildung</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Zusatzqualifikation</h3>
                <p className="text-gray-400 text-sm">Spezialisierung Premium-Fahrzeuge</p>
              </motion.div>

              {/* Certificate 3 - Business License */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
                className="bg-gray-900/50 backdrop-blur-xl rounded-xl md:rounded-2xl border border-gray-700/50 hover:border-yellow-500/30 transition-all duration-300 p-4 md:p-6"
              >
                               <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800 mb-4 max-h-48">
                   <img
                     src="/images/business-license.jpg" // You'll need to add this image
                     alt="Gewerbeberechtigung"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder certificate
                      e.currentTarget.src = "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1024&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="bg-yellow-500/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-yellow-500/30">
                      <p className="text-yellow-400 font-semibold text-sm">Lizenz</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">Gewerbeberechtigung</h3>
                <p className="text-gray-400 text-sm">Automobil-Handel Schweiz</p>
              </motion.div>
            </div>

            {/* Stats Section */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-4 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <Calendar className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">8+</div>
                    <div className="text-gray-400 text-xs md:text-sm">Jahre Erfahrung</div>
                  </div>
                  
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-4 md:p-6 text-center">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                    <Award className="w-4 h-4 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="text-lg md:text-2xl font-bold text-white mb-1">EFZ</div>
                  <div className="text-gray-400 text-xs md:text-sm">Qualifikation</div>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-4 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">100%</div>
                    <div className="text-gray-400 text-xs md:text-sm">Qualitätskontrolle</div>
                  </div>
                  
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-lg md:rounded-xl border border-gray-700/50 p-4 md:p-6 text-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <Star className="w-4 h-4 md:w-6 md:h-6 text-white" />
                    </div>
                    <div className="text-lg md:text-2xl font-bold text-white mb-1">5.0</div>
                    <div className="text-gray-400 text-xs md:text-sm">Google Bewertung</div>
                  </div>
                </div>
              </motion.div>
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