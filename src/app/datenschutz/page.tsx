import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Shield, Eye, Lock, Database, Globe, FileText } from 'lucide-react';

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">DATENSCHUTZ</span>
              </h1>
              <p className="text-xl text-gray-300">
                Transparenz im Umgang mit Ihren Daten
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Datenschutzerklärung</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Auto Checkpoint Garage nimmt den Schutz Ihrer persönlichen Daten sehr ernst. 
                  Diese Datenschutzerklärung informiert Sie darüber, wie wir Ihre Daten erheben, 
                  verarbeiten und schützen.
                </p>
              </div>

              {/* Data Controller */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Verantwortliche Stelle</h3>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="text-white font-medium">
                  <span className="text-blue-400">Auto</span>{' '}
                  <span className="text-yellow-400">Checkpoint</span>{' '}
                  <span className="text-red-500">Garage</span>
                </p>
                  <p>Solothurnstrasse 92, 2543 Lengnau, Schweiz</p>
                  <p>Tel: 032 530 39 99</p>
                  <p>E-Mail: info@autocheckpoint-ali.ch</p>
                </div>
              </div>

              {/* Data Collection */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Welche Daten wir erheben</h3>
                </div>
                <div className="space-y-4 text-gray-300 text-sm">
                  <div>
                    <h4 className="text-white font-medium mb-2">Kontaktformular:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>Name und Vorname</li>
                      <li>E-Mail-Adresse</li>
                      <li>Telefonnummer (optional)</li>
                      <li>Nachrichteninhalt</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Website-Nutzung:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li>IP-Adresse (anonymisiert)</li>
                      <li>Browser-Typ und Version</li>
                      <li>Besuchte Seiten und Verweildauer</li>
                      <li>Referrer-URL</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Usage */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Verwendung Ihrer Daten</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p><span className="text-white font-medium">Kontaktanfragen:</span> Zur Bearbeitung Ihrer Anfragen und Kommunikation</p>
                  <p><span className="text-white font-medium">Service-Verbesserung:</span> Zur Optimierung unserer Website und Services</p>
                  <p><span className="text-white font-medium">Rechtliche Verpflichtungen:</span> Zur Erfüllung gesetzlicher Anforderungen</p>
                </div>
              </div>

              {/* Cookies */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Cookies & Tracking</h3>
                </div>
                <div className="space-y-4 text-gray-300 text-sm">
                  <p>
                    Unsere Website verwendet Cookies zur Verbesserung der Benutzererfahrung. 
                    Diese helfen uns dabei, die Website-Performance zu analysieren und Ihnen 
                    relevante Inhalte anzuzeigen.
                  </p>
                  <div>
                    <h4 className="text-white font-medium mb-2">Arten von Cookies:</h4>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      <li><span className="font-medium">Erforderliche Cookies:</span> Für grundlegende Website-Funktionen</li>
                      <li><span className="font-medium">Analytische Cookies:</span> Zur Website-Analyse (anonymisiert)</li>
                      <li><span className="font-medium">Funktionale Cookies:</span> Für erweiterte Funktionen</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Data Sharing */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Datenweitergabe</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>
                    Wir geben Ihre persönlichen Daten nicht an Dritte weiter, außer:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bei Ihrer ausdrücklichen Einwilligung</li>
                    <li>Zur Erfüllung rechtlicher Verpflichtungen</li>
                    <li>An vertrauensvolle Dienstleister (unter Datenschutzvereinbarungen)</li>
                  </ul>
                </div>
              </div>

              {/* Your Rights */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Ihre Rechte</h3>
                </div>
                <div className="space-y-2 text-gray-300 text-sm">
                  <p>Sie haben folgende Rechte bezüglich Ihrer Daten:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><span className="font-medium">Auskunftsrecht:</span> Information über gespeicherte Daten</li>
                    <li><span className="font-medium">Berichtigungsrecht:</span> Korrektur falscher Daten</li>
                    <li><span className="font-medium">Löschungsrecht:</span> Entfernung Ihrer Daten</li>
                    <li><span className="font-medium">Widerspruchsrecht:</span> Widerspruch gegen Datenverarbeitung</li>
                    <li><span className="font-medium">Datenübertragbarkeit:</span> Erhalt Ihrer Daten in strukturierter Form</li>
                  </ul>
                </div>
              </div>

              {/* Data Security */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Datensicherheit</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Wir verwenden technische und organisatorische Sicherheitsmaßnahmen, um Ihre Daten 
                  vor Verlust, Zerstörung, Manipulation und unberechtigtem Zugriff zu schützen. 
                  Unsere Sicherheitsmaßnahmen werden entsprechend der technologischen Entwicklung 
                  fortlaufend verbessert.
                </p>
              </div>

              {/* External Services */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Externe Dienste</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <div>
                    <h4 className="text-white font-medium mb-2">Google Maps:</h4>
                    <p>Zur Anzeige unserer Lage verwenden wir Google Maps. Datenschutzrichtlinie: 
                       <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                          className="text-orange-400 hover:text-orange-300 underline ml-1">
                         Google Privacy Policy
                       </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact for Privacy */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Datenschutz-Kontakt</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Bei Fragen zum Datenschutz oder zur Ausübung Ihrer Rechte kontaktieren Sie uns:
                </p>
                <div className="mt-3 text-gray-300">
                  <p>E-Mail: info@autocheckpoint-ali.ch</p>
                  <p>Tel: 032 530 39 99</p>
                </div>
              </div>

              {/* Updates */}
              <div className="border-t border-gray-700 pt-8">
                <h3 className="text-xl font-bold text-white mb-4">Änderungen der Datenschutzerklärung</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf zu aktualisieren. 
                  Die aktuelle Version finden Sie stets auf dieser Seite.
                </p>
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