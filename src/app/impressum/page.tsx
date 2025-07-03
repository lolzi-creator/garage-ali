import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Building, Phone, Mail, MapPin } from 'lucide-react';

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">IMPRESSUM</span>
              </h1>
              <p className="text-xl text-gray-300">
                Rechtliche Angaben gemäß schweizerischem Recht
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Company Information */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Building className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Firmenangaben</h2>
                </div>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <p className="text-white font-semibold text-lg">Auto Checkpoint Garage Ali</p>
                    <p>Einzelunternehmen</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                    <div>
                      <p>Solothurnstrasse 92</p>
                      <p>2543 Lengnau</p>
                      <p>Schweiz</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Kontaktdaten</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-orange-400" />
                    <span>032 530 39 99</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-orange-400" />
                    <span>info@autocheckpoint-ali.ch</span>
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Geschäftsinformationen</h3>
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-white font-medium">Geschäftsführer:</span> Ali</p>
                  <p><span className="text-white font-medium">Branche:</span> Automobilhandel & Service</p>
                  <p><span className="text-white font-medium">Gründungsjahr:</span> 2015</p>
                </div>
              </div>

              {/* Liability Disclaimer */}
              <div className="mb-12">
                <h3 className="text-xl font-bold text-white mb-4">Haftungsausschluss</h3>
                <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                  <p>
                    <span className="text-white font-medium">Inhalt der Website:</span> Die Informationen auf dieser Website wurden sorgfältig 
                    überprüft und werden regelmäßig aktualisiert. Jedoch übernehmen wir keine Haftung oder Garantie für die 
                    Aktualität, Richtigkeit und Vollständigkeit der bereitgestellten Informationen.
                  </p>
                  <p>
                    <span className="text-white font-medium">Externe Links:</span> Unsere Website enthält Links zu externen Websites Dritter. 
                    Auf deren Inhalte haben wir keinen Einfluss. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  </p>
                  <p>
                    <span className="text-white font-medium">Fahrzeugangaben:</span> Alle Angaben zu Fahrzeugen sind ohne Gewähr. 
                    Änderungen, Zwischenverkauf und Irrtümer vorbehalten. Verbindlich sind nur die Angaben im Kaufvertrag.
                  </p>
                </div>
              </div>

              {/* Copyright */}
              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Urheberrecht</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Die Inhalte und Werke auf dieser Website unterliegen dem schweizerischen Urheberrecht. 
                  Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung von Auto Checkpoint Garage Ali.
                </p>
              </div>

              {/* Last Updated */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <p className="text-gray-500 text-sm">
                  Letzte Aktualisierung: {new Date().toLocaleDateString('de-CH')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 