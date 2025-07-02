import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">PREMIUM</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">SERVICE</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Professionelle Automobile Services & Premium Wartung
            </p>
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 uppercase tracking-wide">UNSERE PREMIUM SERVICES</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <ul className="text-left space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Inspektion & Premium Wartung</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Reparaturen aller Marken</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">TÜV & Hauptuntersuchung</span>
                  </li>
                </ul>
                <ul className="text-left space-y-4">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Klimaservice & Diagnose</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Bremsenservice</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">Premium Qualitätsteile</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
} 