'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Car,
  Heart,
  X,
  Star,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  MapPin,
  Eye,
  ArrowRight
} from 'lucide-react';
import { carBrands, priceRanges } from '@/data/cars';
import { Car as CarType, CarFilter } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/utils';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import CarDetailModal from '@/components/CarDetailModal';
// Note: Loading skeletons removed for build optimization

export default function CarsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<CarFilter>({});
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState<CarType[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Advanced filter states (for future use)
  // const [priceRange, setPriceRange] = useState([0, 100000]);
  // const [yearRange, setYearRange] = useState([2010, new Date().getFullYear()]);
  // const [mileageMax, setMileageMax] = useState(200000);
  // const [powerRange, setPowerRange] = useState([50, 500]);

  // Fetch cars from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched cars:', data); // Debug log
          setCars(data.filter((car: CarType) => car.isAvailable)); // Only show available cars
        } else {
          console.error('Failed to fetch cars, status:', response.status);
          const errorText = await response.text();
          console.error('Error response:', errorText);
          // NO STATIC DATA FALLBACK - FORCE REAL DATA ONLY
          setCars([]);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
        // NO STATIC DATA FALLBACK - FORCE REAL DATA ONLY
        setCars([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
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
      'Mercedes-Benz C 220 d T-Modell': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'Volkswagen Golf 1.5 TSI': 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'BMW 320d Touring': 'https://images.unsplash.com/photo-1617886903355-9354bb57751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'Toyota RAV4 Hybrid': 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    };

    const key = `${car.brand} ${car.model}`;
    return carImageMap[key] || 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80';
  };

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      // Search term filter
      if (searchTerm && searchTerm.trim()) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          car.brand.toLowerCase().includes(searchLower) ||
          car.model.toLowerCase().includes(searchLower) ||
          car.color.toLowerCase().includes(searchLower) ||
          car.fuelType.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }

      // Brand filter
      if (filters.brand && filters.brand !== '' && car.brand !== filters.brand) return false;

      // Price filter
      if (filters.priceMin !== undefined && car.price < filters.priceMin) return false;
      if (filters.priceMax !== undefined && car.price > filters.priceMax) return false;

      // Year filter
      if (filters.yearMin !== undefined && car.year < filters.yearMin) return false;
      if (filters.yearMax !== undefined && car.year > filters.yearMax) return false;

      // Mileage filter
      if (filters.mileageMax !== undefined && car.mileage > filters.mileageMax) return false;

      // Power filter
      if (filters.powerMin !== undefined && car.power < filters.powerMin) return false;
      if (filters.powerMax !== undefined && car.power > filters.powerMax) return false;

      // Fuel type filter
      if (filters.fuelType && filters.fuelType !== '' && car.fuelType !== filters.fuelType) return false;

      // Transmission filter
      if (filters.transmission && filters.transmission !== '' && car.transmission !== filters.transmission) return false;

      // Body type filter
      if (filters.bodyType && filters.bodyType !== '' && car.bodyType !== filters.bodyType) return false;

      return true;
    });
  }, [searchTerm, filters, cars]);

  const clearFilters = () => {
    setFilters({});
    setSearchTerm('');
    // setPriceRange([0, 100000]);
    // setYearRange([2010, new Date().getFullYear()]);
    // setMileageMax(200000);
    // setPowerRange([50, 500]);
  };

  const activeFiltersCount = Object.values(filters).filter(Boolean).length + (searchTerm ? 1 : 0);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <main className="relative pt-40 md:pt-44 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            className="text-center mb-16"
            >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-red-500/10 backdrop-blur-sm border border-red-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Car className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-medium">Premium Fahrzeuge</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              <span className="block">EXKLUSIVE</span>
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-rose-600 bg-clip-text text-transparent">
                FAHRZEUGE
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Entdecken Sie unsere handverlesene Auswahl an Premium-Automobilen. 
              Jedes Fahrzeug wurde sorgfältig geprüft und kommt mit umfassender Garantie.
            </p>
          </motion.div>

          {/* Search & Filter Section */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 mb-12 shadow-2xl"
            >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Marke, Modell oder Farbe suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-2xl focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white placeholder-gray-400 transition-all text-lg"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-3 px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:bg-gray-700/50 hover:border-red-500/30 rounded-2xl transition-all text-white text-lg"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-gradient-to-r from-red-500 to-rose-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-6 py-4 text-red-400 hover:bg-red-500/20 rounded-2xl transition-colors"
                >
                  <X className="w-5 h-5" />
                  <span>Zurücksetzen</span>
                </button>
              )}
            </div>

            {/* Advanced Filter Panel */}
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="border-t border-gray-600/30 mt-8 pt-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Brand Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">🏷️ Marke</label>
                    <select
                      value={filters.brand || ''}
                      onChange={(e) => setFilters({...filters, brand: e.target.value || undefined})}
                      className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500/50 transition-all"
                    >
                      <option value="">Alle Marken</option>
                      {carBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">💰 Preis</label>
                    <select
                      value={filters.priceMin && filters.priceMax ? `${filters.priceMin}-${filters.priceMax}` : ''}
                      onChange={(e) => {
                        if (e.target.value) {
                          const [min, max] = e.target.value.split('-').map(Number);
                          setFilters({...filters, priceMin: min, priceMax: max});
                        } else {
                          setFilters({...filters, priceMin: undefined, priceMax: undefined});
                        }
                      }}
                      className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500/50 transition-all"
                    >
                      <option value="">Alle Preise</option>
                      {priceRanges.map(range => (
                        <option key={range.label} value={`${range.min}-${range.max}`}>
                          {range.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Fuel Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">⛽ Kraftstoff</label>
                    <select
                      value={filters.fuelType || ''}
                      onChange={(e) => setFilters({...filters, fuelType: e.target.value || undefined})}
                      className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500/50 transition-all"
                    >
                      <option value="">Alle Kraftstoffe</option>
                      <option value="Benzin">Benzin</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Elektro">Elektro</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>

                  {/* Transmission */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">⚙️ Getriebe</label>
                    <select
                      value={filters.transmission || ''}
                      onChange={(e) => setFilters({...filters, transmission: e.target.value || undefined})}
                      className="w-full p-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-red-500 focus:border-red-500/50 transition-all"
                    >
                      <option value="">Alle Getriebe</option>
                      <option value="Manuell">Manuell</option>
                      <option value="Automatik">Automatik</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}
            </motion.div>

          {/* Results Counter */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="flex justify-between items-center mb-8"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 py-3">
              <p className="text-gray-300 font-medium">
                <span className="text-red-400 font-bold">{filteredCars.length}</span> Fahrzeuge gefunden
              </p>
            </div>
          </motion.div>

          {/* Cars Grid */}
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => openModal(car)}
              >
                <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:border-red-500/30 hover:shadow-red-500/20 h-full flex flex-col">
                {/* Mobile Compact Layout */}
                <div className="md:hidden flex h-32">
                  {/* Compact Image */}
                  <div className="relative w-1/3 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
                    <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
                      style={{
                        backgroundImage: `url(${getCarImage(car)})`
                      }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                    {car.isFeatured && (
                      <div className="absolute top-1 left-1">
                          <span className="bg-red-500 text-white px-2 py-0.5 rounded text-xs font-bold">
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
                  <div className="hidden md:flex md:flex-col md:h-full">
                  {/* Car Image */}
                    <div className="relative h-64 overflow-hidden">
                  <div 
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform group-hover:scale-110 transition-transform duration-700"
                    style={{
                      backgroundImage: `url(${getCarImage(car)})`
                    }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                  
                      {/* Status Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {car.isFeatured && (
                          <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            FEATURED
                          </span>
                        )}
                        <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                      {car.condition}
                    </span>
                  </div>

                      {/* Favorite Button */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                        className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all border border-white/20 group/fav"
                    >
                        <Heart className="w-4 h-4 text-white group-hover/fav:text-red-400 transition-colors" />
                    </button>
                  
                      {/* Car Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-white font-bold text-xl mb-1">
                          {car.brand} {car.model}
                        </h3>
                        <p className="text-gray-300 text-sm opacity-90">
                          {car.year} • {car.engine}
                        </p>
                  </div>
                  
                      {/* Hover Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Car Details */}
                    <div className="p-6 flex-1 flex flex-col">
                  {/* Key Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-700/30">
                          <div className="flex items-center justify-center mb-1">
                            <Gauge className="w-4 h-4 text-red-400 mr-1" />
                            <span className="text-white font-bold text-sm">{formatMileage(car.mileage)}</span>
                          </div>
                      <div className="text-gray-400 text-xs">Kilometerstand</div>
                    </div>
                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-700/30">
                          <div className="flex items-center justify-center mb-1">
                            <Fuel className="w-4 h-4 text-red-400 mr-1" />
                            <span className="text-white font-bold text-sm">{car.fuelType}</span>
                          </div>
                      <div className="text-gray-400 text-xs">Kraftstoff</div>
                    </div>
                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-700/30">
                          <div className="flex items-center justify-center mb-1">
                            <Settings className="w-4 h-4 text-red-400 mr-1" />
                            <span className="text-white font-bold text-sm">{car.transmission}</span>
                          </div>
                      <div className="text-gray-400 text-xs">Getriebe</div>
                    </div>
                        <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-3 text-center border border-gray-700/30">
                          <div className="flex items-center justify-center mb-1">
                            <Calendar className="w-4 h-4 text-red-400 mr-1" />
                            <span className="text-white font-bold text-sm">{car.power} PS</span>
                          </div>
                      <div className="text-gray-400 text-xs">Leistung</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {car.features.slice(0, 3).map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                              className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-xs border border-gray-600/50"
                        >
                          {feature}
                        </span>
                      ))}
                      {car.features.length > 3 && (
                            <span className="text-red-400 text-xs font-medium bg-red-500/10 px-2 py-1 rounded-full">
                              +{car.features.length - 3} weitere
                        </span>
                      )}
                    </div>
                  </div>

                      {/* Price and Location */}
                      <div className="flex items-center justify-between mb-6">
                      <div>
                          <div className="text-3xl font-black bg-gradient-to-r from-red-400 to-rose-500 bg-clip-text text-transparent">
                          {formatPrice(car.price)}
                        </div>
                          <div className="flex items-center text-gray-400 text-sm mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                          {car.location}
                          </div>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="mt-auto">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(car);
                      }}
                          className="w-full group relative overflow-hidden bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white py-4 px-6 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all shadow-xl hover:shadow-red-500/25"
                    >
                          <span className="relative z-10 flex items-center justify-center gap-2">
                            <Eye className="w-4 h-4" />
                            DETAILS ANSEHEN
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </button>
                  </div>
                    </div>
                </div>
                </div>
              </motion.div>
            ))}
            </motion.div>

          {/* No Results */}
          {!loading && filteredCars.length === 0 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-20"
            >
              <div className="bg-gray-900/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-12 max-w-md mx-auto">
                <Car className="w-16 h-16 text-gray-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">
                Keine Fahrzeuge gefunden
              </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Versuchen Sie es mit anderen Suchkriterien oder Filtern, um das perfekte Fahrzeug zu finden.
              </p>
              <button
                onClick={clearFilters}
                  className="bg-gradient-to-r from-red-500 to-rose-600 hover:from-red-600 hover:to-rose-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-xl"
              >
                Filter zurücksetzen
              </button>
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />

      {/* Car Detail Modal */}
      <CarDetailModal
        car={selectedCar}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
} 