import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { FileText, Scale, AlertCircle, Shield, Clock, Car } from 'lucide-react';

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">AGB</span>
              </h1>
              <p className="text-xl text-gray-300">
                Allgemeine Geschäftsbedingungen
              </p>
            </div>

            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Introduction */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-orange-400" />
                  <h2 className="text-2xl font-bold text-white">Allgemeine Geschäftsbedingungen</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Geschäftsbeziehungen 
                  zwischen Auto Checkpoint Garage und unseren Kunden.
                </p>
              </div>

              {/* General Provisions */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§1 Geltungsbereich</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>1.1 Diese AGB gelten für alle Verträge zwischen Auto Checkpoint Garage und dem Kunden.</p>
                  <p>1.2 Abweichende Bedingungen des Kunden werden nur bei ausdrücklicher schriftlicher Zustimmung anerkannt.</p>
                  <p>1.3 Sollten einzelne Bestimmungen unwirksam sein, bleibt die Gültigkeit der übrigen Bestimmungen unberührt.</p>
                </div>
              </div>

              {/* Vehicle Sales */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§2 Fahrzeugverkauf</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>2.1 Alle Fahrzeugangaben sind ohne Gewähr. Änderungen, Zwischenverkauf und Irrtümer vorbehalten.</p>
                  <p>2.2 Verbindlich sind nur die Angaben im schriftlichen Kaufvertrag.</p>
                  <p>2.3 Der Kunde hat das Recht, das Fahrzeug vor Vertragsabschluss zu besichtigen und Probe zu fahren.</p>
                  <p>2.4 Bei Gebrauchtwagen werden nur ausdrücklich zugesicherte Eigenschaften gewährleistet.</p>
                </div>
              </div>

              {/* Prices and Payment */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§3 Preise und Zahlung</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>3.1 Alle Preise verstehen sich in Schweizer Franken (CHF) inklusive der gesetzlichen Mehrwertsteuer.</p>
                  <p>3.2 Die Zahlung erfolgt bei Fahrzeugübergabe, sofern nicht anders vereinbart.</p>
                  <p>3.3 Bei Finanzierung gelten die separaten Finanzierungsverträge.</p>
                  <p>3.4 Zusatzleistungen werden gesondert berechnet.</p>
                </div>
              </div>

              {/* Delivery and Transfer */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§4 Lieferung und Übergabe</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>4.1 Die Fahrzeugübergabe erfolgt nach vollständiger Bezahlung in unseren Geschäftsräumen.</p>
                  <p>4.2 Das Fahrzeug wird mit den vereinbarten Papieren und Schlüsseln übergeben.</p>
                  <p>4.3 Bei der Übergabe geht das Risiko auf den Käufer über.</p>
                  <p>4.4 Transportschäden sind unverzüglich zu melden.</p>
                </div>
              </div>

              {/* Warranty */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§5 Gewährleistung</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>5.1 Bei Neuwagen gelten die Herstellergarantien.</p>
                  <p>5.2 Bei Gebrauchtwagen gilt die gesetzliche Gewährleistung von 2 Jahren.</p>
                  <p>5.3 Verschleißteile sind von der Gewährleistung ausgeschlossen.</p>
                  <p>5.4 Bei Mängeln ist zunächst eine Nachbesserung zu ermöglichen.</p>
                </div>
              </div>

              {/* Services */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Car className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§6 Dienstleistungen</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>6.1 Alle Reparatur- und Wartungsarbeiten werden fachgerecht ausgeführt.</p>
                  <p>6.2 Ersatzteile entsprechen Originalqualität oder gleichwertigen Standards.</p>
                  <p>6.3 Auf Arbeitsleistung gewähren wir 6 Monate Garantie.</p>
                  <p>6.4 Zusatzarbeiten bedürfen der Zustimmung des Kunden.</p>
                </div>
              </div>

              {/* Liability */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§7 Haftung</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>7.1 Wir haften nur bei Vorsatz und grober Fahrlässigkeit.</p>
                  <p>7.2 Die Haftung für Folgeschäden ist ausgeschlossen.</p>
                  <p>7.3 Bei Fahrzeugverwahrung haften wir nur bei eigenem Verschulden.</p>
                  <p>7.4 Während Reparaturarbeiten besteht Versicherungsschutz über unsere Betriebshaftpflicht.</p>
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§8 Datenschutz</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>8.1 Kundendaten werden vertraulich behandelt und nur geschäftlich verwendet.</p>
                  <p>8.2 Eine Weitergabe an Dritte erfolgt nur mit Einwilligung oder bei rechtlicher Verpflichtung.</p>
                  <p>8.3 Weitere Details regelt unsere Datenschutzerklärung.</p>
                </div>
              </div>

              {/* Applicable Law */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-5 h-5 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">§9 Anwendbares Recht</h3>
                </div>
                <div className="space-y-3 text-gray-300 text-sm">
                  <p>9.1 Es gilt schweizerisches Recht unter Ausschluss internationaler Verweisungsnormen.</p>
                  <p>9.2 Erfüllungsort und Gerichtsstand ist Lengnau, BE.</p>
                  <p>9.3 Bei Streitigkeiten ist zunächst eine außergerichtliche Einigung anzustreben.</p>
                </div>
              </div>

              {/* Contact and Updates */}
              <div className="border-t border-gray-700 pt-8">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
                  <div className="text-gray-300 space-y-1">
                    <p className="text-white font-medium">
                  <span className="text-blue-400">Auto</span>{' '}
                  <span className="text-yellow-400">Checkpoint</span>{' '}
                  <span className="text-red-500">Garage</span>
                </p>
                    <p>Solothurnstrasse 92, 2543 Lengnau</p>
                    <p>Tel: 032 530 39 99</p>
                    <p>E-Mail: info@autocheckpoint-ali.ch</p>
                  </div>
                </div>
                <p className="text-gray-500 text-sm">
                  Stand: {new Date().toLocaleDateString('de-CH')}
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