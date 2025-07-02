import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import FeaturedCars from '@/components/sections/FeaturedCars';
import Services from '@/components/sections/Services';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <Hero />
      <FeaturedCars />
      <Services />
      <Footer />
    </main>
  );
}
