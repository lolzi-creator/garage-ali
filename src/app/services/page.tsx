'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { 
  Wrench, 
  Shield, 
  Snowflake, 
  CircleDot, 
  Bike,
  CheckCircle,
  Sparkles,
  FileCheck,
  Wind,
  Phone,
  ArrowRight,
  Star,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  const mainServices = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "KFZ Service",
      description: "Service Arbeiten und Reparaturen aller Marken, nach Herstellervorgaben.",
      price: "Auf Anfrage",
      duration: "1-3 Std",
      features: ["Wartung nach Herstellervorgaben", "Reparaturen aller Marken", "Original-Ersatzteile", "Professionelle Diagnose"],
      color: "blue"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "MFK Bereitstellung",
      description: "Unser Ziel ist es jedes Fahrzeug beim Straßenverkehrsamt durchzubringen.",
      price: "Ab CHF 150.-",
      duration: "1-2 Std",
      features: ["Vorbereitung zur MFK", "Mängelbeseitigung", "Kompetente Beratung", "Hohe Erfolgsquote"],
      color: "indigo"
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Klima Service",
      description: "Kompletter Klimaanlagen-Service. Empfohlen alle 2 Jahre.",
      price: "Ab CHF 180.-",
      duration: "1-2 Std",
      features: ["Betriebsdruck prüfen", "Kältemittel Service", "Dichtheitsprüfung", "Kondensatorlüfter"],
      color: "cyan"
    },
    {
      icon: <CircleDot className="w-6 h-6" />,
      title: "Reifenservice",
      description: "Professioneller Reifenservice für beste Sicherheit auf der Straße.",
      price: "Ab CHF 50.-",
      duration: "30-60 Min",
      features: ["Reifenwechsel", "Auswuchten", "Einlagerung", "Sicherheitsprüfung"],
      color: "blue"
    },
    {
      icon: <Bike className="w-6 h-6" />,
      title: "Motorradservice",
      description: "Spezialisierte Servicearbeiten für Motorräder.",
      price: "Auf Anfrage",
      duration: "Nach Bedarf",
      features: ["Kleinere Servicearbeiten", "Wartung und Pflege", "Schnelle Abwicklung", "Fachgerechte Beratung"],
      color: "indigo"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fahrzeug-Aufbereitung",
      description: "Professionelle Fahrzeugreinigung innen und außen.",
      price: "Ab CHF 120.-",
      duration: "2-4 Std",
      features: ["Karosserie-Polierung", "Innenreinigung", "Außenreinigung", "Detailing Service"],
      color: "cyan"
    }
  ];

  const additionalServices = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Schadenmanagement",
      description: "Kompetente Beratung im Schadenfall. Direkte Kommunikation mit Versicherungen und Partnerbetrieben.",
      features: ["Schadenberatung", "Versicherungsabwicklung", "Partnerbetrieb-Koordination"]
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Scheiben & Kunststoff",
      description: "Fachmännischer Austausch von Windschutzscheiben nach Herstellerrichtlinien.",
      features: ["Scheibenaustausch", "Kunststoffreparaturen", "Originalteile"]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "from-blue-500 to-blue-600",
        border: "border-blue-500/30",
        text: "text-blue-400",
        bgLight: "bg-blue-900/20",
        hover: "hover:border-blue-400/50"
      },
      indigo: {
        bg: "from-indigo-500 to-indigo-600", 
        border: "border-indigo-500/30",
        text: "text-indigo-400",
        bgLight: "bg-indigo-900/20",
        hover: "hover:border-indigo-400/50"
      },
      cyan: {
        bg: "from-cyan-500 to-cyan-600",
        border: "border-cyan-500/30", 
        text: "text-cyan-400",
        bgLight: "bg-cyan-900/20",
        hover: "hover:border-cyan-400/50"
      }
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-8 md:py-16 lg:py-20">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <Star className="w-4 h-4" />
                Premium Autoservice
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
                Unsere <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Von der professionellen Wartung bis zur kompletten Fahrzeugaufbereitung – 
                wir bieten Ihnen alle Serviceleistungen aus einer Hand.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Services */}
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
                Haupt<span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">services</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Professionelle Serviceleistungen für Ihr Fahrzeug
              </p>
            </motion.div>

            {/* Desktop Grid View */}
            <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {mainServices.map((service, index) => {
                const colors = getColorClasses(service.color);
                return (
                  <motion.div
                    key={service.title}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.1 }}
                    className={`bg-gray-900/50 backdrop-blur-xl rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden`}
                  >
                    {/* Header */}
                    <div className={`${colors.bgLight} p-6 border-b ${colors.border}`}>
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${colors.bg} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          {service.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white">{service.title}</h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                            <span className={`font-medium ${colors.text}`}>{service.price}</span>
                            <span>•</span>
                            <span>{service.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-300 mb-3 text-sm uppercase tracking-wider">
                        Leistungen
                      </h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <CheckCircle className={`w-4 h-4 ${colors.text} flex-shrink-0`} />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      
                      <button className={`w-full mt-6 bg-gradient-to-r ${colors.bg} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group`}>
                        Service anfragen
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Accordion View */}
            <div className="md:hidden space-y-3">
              {mainServices.map((service, index) => {
                const colors = getColorClasses(service.color);
                const isExpanded = expandedService === index;
                
                return (
                  <motion.div
                    key={service.title}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: index * 0.05 }}
                    className={`bg-gray-900/50 backdrop-blur-xl rounded-xl border ${colors.border} overflow-hidden transition-all duration-300`}
                  >
                    {/* Compact Header - Always Visible */}
                    <button
                      onClick={() => toggleService(index)}
                      className={`w-full ${colors.bgLight} p-4 border-b ${colors.border} text-left`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${colors.bg} rounded-lg flex items-center justify-center text-white shadow-lg`}>
                            {service.icon}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-white">{service.title}</h3>
                            <div className="flex items-center gap-2 text-xs text-gray-400 mt-0.5">
                              <span className={`font-medium ${colors.text}`}>{service.price}</span>
                              <span>•</span>
                              <span>{service.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="ml-2">
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 space-y-4">
                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed">
                              {service.description}
                            </p>
                            
                            {/* Features */}
                            <div>
                              <h4 className="font-semibold text-gray-300 mb-2 text-xs uppercase tracking-wider">
                                Leistungen
                              </h4>
                              <div className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                  <div key={featureIndex} className="flex items-center gap-2">
                                    <CheckCircle className={`w-3 h-3 ${colors.text} flex-shrink-0`} />
                                    <span className="text-gray-300 text-xs">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {/* CTA Button */}
                            <button className={`w-full bg-gradient-to-r ${colors.bg} text-white py-2.5 px-4 rounded-lg font-medium text-sm flex items-center justify-center gap-2 group`}>
                              Service anfragen
                              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Expertise Video Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-500/30">
                <Wrench className="w-4 h-4" />
                Technische Expertise
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
                So funktioniert <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Motor-Technik</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Tiefes Verständnis für Motortechnik seit über 8 Jahren. Sehen Sie, wie wir arbeiten.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              {/* Video Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-4 shadow-2xl">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
                                         <video
                       className="w-full h-full object-cover"
                       autoPlay
                       muted
                       loop
                       playsInline
                       poster="/images/video-poster.jpg"
                     >
                       <source src="/images/3.MP4" type="video/mp4" />
                       Your browser does not support the video tag.
                     </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2">
                        <p className="text-white text-sm font-medium">Motor-Technik im Detail</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-3 -right-3 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-xl hidden md:block"></div>
                <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-10 blur-2xl hidden md:block"></div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-8">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    Warum unsere <span className="text-blue-400">Expertise</span> wichtig ist
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Tiefes Verständnis</h4>
                        <p className="text-gray-400 text-sm">8+ Jahre Erfahrung mit modernster Motortechnik</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Präzise Diagnose</h4>
                        <p className="text-gray-400 text-sm">Moderne Technik für exakte Problemidentifikation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">Qualitätsgarantie</h4>
                        <p className="text-gray-400 text-sm">Transparente Arbeitsweise mit nachvollziehbaren Ergebnissen</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-700/50">
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-blue-400" />
                        <span>Seit 2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-blue-400" />
                        <span>500+ Reparaturen</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-400" />
                        <span>Lizenziert</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional Services */}
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
                Zusätzliche <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                Spezialisierte Dienstleistungen für besondere Anforderungen
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/30 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
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

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Bereit für professionellen Service?
              </h2>
              <p className="text-blue-100 text-lg mb-8 leading-relaxed">
                Kontaktieren Sie uns für eine kostenlose Beratung und Terminvereinbarung. 
                Wir kümmern uns um Ihr Fahrzeug mit der Sorgfalt, die es verdient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:032 530 39 99"
                  className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Phone className="w-5 h-5" />
                  032 530 39 99
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-xl transition-all"
                >
                  Kontakt aufnehmen
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 