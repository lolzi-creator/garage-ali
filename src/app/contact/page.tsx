import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import Contact from '@/components/sections/Contact';
import GoogleMap from '@/components/GoogleMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-40 md:pt-44">
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              <span className="block">PREMIUM</span>
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">KONTAKT</span>
            </h1>
            <p className="text-xl text-gray-300">
              Exklusive Beratung für Premium-Automobile
            </p>
          </div>
        </div>
        <Contact />
        <GoogleMap />
      </main>

      <Footer />
    </div>
  );
} 