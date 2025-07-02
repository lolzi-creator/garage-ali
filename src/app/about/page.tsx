import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32">
        {/* Company Info Section */}
        <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-gray-800">
          {/* Flowing Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">PREMIUM</span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">ÜBER UNS</span>
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Auto Checkpoint Garage Ali - Exklusive Automobile seit 2015
              </p>
              <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">UNSER PREMIUM AUTOHAUS</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <ul className="text-left space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Seit 2015 in Lengnau etabliert</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Über 500 verkaufte Premium-Fahrzeuge</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Handverlesene Qualitäts-Automobile</span>
                    </li>
                  </ul>
                  <ul className="text-left space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Exklusive und transparente Beratung</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">Professioneller Service vor Ort</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-gray-300 font-medium">5-Sterne Google Bewertung</span>
                    </li>
                  </ul>
                </div>
                
                {/* Company Story */}
                <div className="text-left">
                  <h3 className="text-xl font-bold text-white mb-4">UNSERE GESCHICHTE</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Seit 2015 steht Auto Checkpoint Garage Ali für Exzellenz im Automobilbereich. Was als kleine Werkstatt begann, 
                    hat sich zu einem der führenden Premium-Autohäuser in der Region Lengnau entwickelt.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Mit über 500 erfolgreich verkauften Premium-Fahrzeugen und jahrelanger Erfahrung in der Automobilbranche 
                    sind wir Ihr vertrauensvoller Partner für exklusive Automobile. Jedes Fahrzeug wird von unseren Experten 
                    sorgfältig ausgewählt und geprüft, um höchste Qualitätsstandards zu gewährleisten.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smooth transition to next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-900"></div>
        </section>
        
        {/* Customer Testimonials */}
        <Testimonials />
        
        {/* Contact Information */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
} 