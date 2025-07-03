'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Car,
  Heart
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '@/lib/utils';
import CarDetailModal from '@/components/CarDetailModal';
import { Car as CarType } from '@/types';

export default function FeaturedCars() {
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [featuredCars, setFeaturedCars] = useState<CarType[]>([]);

  // Fetch featured cars from API
  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const response = await fetch('/api/cars/featured');
        if (response.ok) {
          const data = await response.json();
          const featured = data.filter((car: CarType) => car.isFeatured && car.isAvailable);
          setFeaturedCars(featured);
        } else {
          console.error('Failed to fetch featured cars, status:', response.status);
          const errorText = await response.text();
          console.error('Error response:', errorText);
          // NO STATIC DATA FALLBACK - FORCE REAL DATA ONLY
          setFeaturedCars([]);
        }
      } catch (error) {
        console.error('Error fetching featured cars:', error);
        // NO STATIC DATA FALLBACK - FORCE REAL DATA ONLY
        setFeaturedCars([]);
      }
    };

    fetchFeaturedCars();
  }, []);

  const openModal = (car: CarType) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('de-CH').format(mileage) + ' km';
  };

  const getCarImage = (car: CarType) => {
    // Use uploaded images if available, otherwise fallback to stock images
    if (car.images && car.images.length > 0) {
      return car.images[0]; // Use first uploaded image
    }
    
    // Fallback to stock images for existing cars
    const carImageMap: { [key: string]: string } = {
      'BMW X3 xDrive20d': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'Audi A4 Avant 2.0 TFSI': 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'Toyota RAV4 Hybrid': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    };

    const key = `${car.brand} ${car.model}`;
    return carImageMap[key] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Red Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">Premium</span> Auswahl
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Entdecken Sie unsere handverlesenen Top-Fahrzeuge. Jedes Auto wird 
            von Experten geprüft und kommt mit umfassender Garantie.
          </p>
        </motion.div>

        {/* Featured Cars Grid */}
        {featuredCars.length > 0 ? (
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-12"
          >
            {featuredCars.map((car) => (
            <motion.div
              key={car.id}
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-red-500/20 transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2 hover:border-red-500/30"
              onClick={() => openModal(car)}
            >
              {/* Mobile Compact Layout */}
              <div className="md:hidden flex h-32">
                {/* Compact Image */}
                <div className="relative w-1/3 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                    style={{
                      backgroundImage: `url(${getCarImage(car)})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
                  {car.isFeatured && (
                    <div className="absolute top-1 left-1">
                      <span className="bg-red-500 text-white px-1 py-0.5 rounded text-xs font-bold">
                        TOP
                      </span>
                    </div>
                  )}
                </div>

                {/* Compact Info */}
                <div className="flex-1 p-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1">
                      {car.brand} {car.model}
                    </h3>
                    <p className="text-gray-400 text-xs mb-2">
                      {car.year} • {formatMileage(car.mileage)} • {car.fuelType}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-black bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                      {formatPrice(car.price)}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(car);
                      }}
                      className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-1 rounded-lg text-xs font-bold"
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>

              {/* Desktop Full Layout */}
              <div className="hidden md:block">
              {/* Car Image */}
              <div className="relative h-72 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
                  style={{
                    backgroundImage: `url(${getCarImage(car)})`
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
                
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase border border-white/20">
                    {car.condition}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all border border-white/20">
                    <Heart className="w-4 h-4 text-white" />
                  </button>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-bold text-lg">{car.brand}</div>
                  <div className="text-gray-300 text-sm">{car.model}</div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Car Details */}
              <div className="p-6">
                <div className="mb-6">
                  <p className="text-gray-400 text-sm mb-1">{car.year} • {car.engine}</p>
                </div>

                {/* Key Specs */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{formatMileage(car.mileage)}</div>
                    <div className="text-gray-400 text-xs">Kilometerstand</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{car.fuelType}</div>
                    <div className="text-gray-400 text-xs">Kraftstoff</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{car.transmission}</div>
                    <div className="text-gray-400 text-xs">Getriebe</div>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                    <div className="text-white font-bold text-sm">{car.power} PS</div>
                    <div className="text-gray-400 text-xs">Leistung</div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {car.features.slice(0, 3).map((feature, featureIndex) => (
                      <span 
                        key={featureIndex}
                        className="bg-black/50 text-gray-300 px-2 py-1 rounded-full text-xs border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                    {car.features.length > 3 && (
                      <span className="text-red-400 text-xs font-medium">
                        +{car.features.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-black text-white">
                        {formatPrice(car.price)}
                      </div>
                      <div className="text-xs text-gray-500 uppercase tracking-wide">
                        {car.location}
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(car);
                    }}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white py-3 px-6 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all shadow-xl"
                  >
                    <span className="relative z-10">DETAILS ANSEHEN</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  </button>
                </div>
              </div>
              </div>
            </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center py-16">
            <Car className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">Keine Featured-Fahrzeuge verfügbar</p>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center"
        >
          <button
            onClick={() => window.location.href = '/cars'}
            className="group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 shadow-2xl"
          >
            <span className="relative z-10">ALLE FAHRZEUGE ANSEHEN</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </button>
        </motion.div>
      </div>

      {/* Car Detail Modal */}
      <CarDetailModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
} 