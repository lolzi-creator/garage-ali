'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search,
  Filter,
  Car,
  Heart,
  X
} from 'lucide-react';
import { carBrands, priceRanges } from '@/data/cars';
import { Car as CarType, CarFilter } from '@/types';
import { fadeInUp, staggerContainer } from '@/lib/utils';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import CarDetailModal from '@/components/CarDetailModal';
import { 
  LoadingGridSkeleton, 
  SearchBarSkeleton, 
  PageHeaderSkeleton,
  ResultsCounterSkeleton 
} from '@/components/ui/LoadingSkeleton';

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
        const response = await fetch('/api/admin/cars');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched cars:', data); // Debug log
          setCars(data.filter((car: CarType) => car.isAvailable)); // Only show available cars
        } else {
          console.error('Failed to fetch cars, status:', response.status);
          // Fallback to static data if API fails
          const { cars: staticCars } = await import('@/data/cars');
          setCars(staticCars.filter((car: CarType) => car.isAvailable));
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
        // Fallback to static data if API fails
        try {
          const { cars: staticCars } = await import('@/data/cars');
          setCars(staticCars.filter((car: CarType) => car.isAvailable));
        } catch (staticError) {
          console.error('Error loading static cars:', staticError);
        }
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
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          {loading ? (
            <PageHeaderSkeleton />
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center mb-12"
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                <span className="block">PREMIUM</span>
                <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">FAHRZEUGE</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Exklusive Auswahl handverlesener Premium-Automobile. 
                Jedes Fahrzeug professionell geprüft mit umfassender Garantie.
              </p>
            </motion.div>
          )}

          {/* Search and Filter Bar */}
          {loading ? (
            <SearchBarSkeleton />
          ) : (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl p-6 mb-8 hover:border-orange-500/30 transition-all"
            >
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Marke, Modell oder Farbe suchen..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 text-white placeholder-gray-400 transition-all"
                />
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-6 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 hover:bg-gray-700/50 hover:border-orange-500/30 rounded-xl transition-all text-white"
              >
                <Filter className="w-5 h-5" />
                <span>Filter</span>
                {activeFiltersCount > 0 && (
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-2 py-1 rounded-full text-xs">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Clear Filters */}
              {activeFiltersCount > 0 && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
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
                className="border-t border-gray-600/30 mt-6 pt-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Brand Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">🏷️ Marke</label>
                    <select
                      value={filters.brand || ''}
                      onChange={(e) => setFilters({...filters, brand: e.target.value || undefined})}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all"
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
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all"
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
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all"
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
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all"
                    >
                      <option value="">Alle Getriebe</option>
                      <option value="Manuell">Manuell</option>
                      <option value="Automatik">Automatik</option>
                    </select>
                  </div>
                  
                  {/* Year Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">📅 Baujahr</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Von"
                        min="1990"
                        max={new Date().getFullYear()}
                        value={filters.yearMin || ''}
                        onChange={(e) => setFilters({...filters, yearMin: e.target.value ? parseInt(e.target.value) : undefined})}
                        className="w-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all placeholder-gray-400"
                      />
                      <input
                        type="number"
                        placeholder="Bis"
                        min="1990"
                        max={new Date().getFullYear()}
                        value={filters.yearMax || ''}
                        onChange={(e) => setFilters({...filters, yearMax: e.target.value ? parseInt(e.target.value) : undefined})}
                        className="w-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>

                  {/* Mileage Filter */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">🛣️ Max. Kilometerstand</label>
                    <input
                      type="number"
                      placeholder="z.B. 100000"
                      value={filters.mileageMax || ''}
                      onChange={(e) => setFilters({...filters, mileageMax: e.target.value ? parseInt(e.target.value) : undefined})}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all placeholder-gray-400"
                    />
                  </div>

                  {/* Body Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">🚗 Fahrzeugtyp</label>
                    <select
                      value={filters.bodyType || ''}
                      onChange={(e) => setFilters({...filters, bodyType: e.target.value || undefined})}
                      className="w-full p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all"
                    >
                      <option value="">Alle Typen</option>
                      <option value="Limousine">Limousine</option>
                      <option value="Kombi">Kombi</option>
                      <option value="SUV">SUV</option>
                      <option value="Coupé">Coupé</option>
                      <option value="Cabrio">Cabrio</option>
                      <option value="Kleinwagen">Kleinwagen</option>
                    </select>
                  </div>

                  {/* Power Range */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">⚡ Leistung (PS)</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        min="50"
                        max="1000"
                        value={filters.powerMin || ''}
                        onChange={(e) => setFilters({...filters, powerMin: e.target.value ? parseInt(e.target.value) : undefined})}
                        className="w-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all placeholder-gray-400"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        min="50"
                        max="1000"
                        value={filters.powerMax || ''}
                        onChange={(e) => setFilters({...filters, powerMax: e.target.value ? parseInt(e.target.value) : undefined})}
                        className="w-1/2 p-3 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl text-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500/50 transition-all placeholder-gray-400"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            </motion.div>
          )}

          {/* Results Count */}
          {loading ? (
            <ResultsCounterSkeleton />
          ) : (
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-300">
                {`${filteredCars.length} Fahrzeuge gefunden`}
              </p>
            </div>
          )}

          {/* Loading State */}
          {loading ? (
            <LoadingGridSkeleton />
          ) : (
            /* Cars Grid */
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
                className="bg-gray-900/50 backdrop-blur-xl border border-gray-700/50 rounded-2xl md:rounded-3xl shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden group cursor-pointer hover:-translate-y-2 hover:border-orange-500/30"
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
                        <span className="bg-orange-500 text-white px-1 py-0.5 rounded text-xs font-bold">
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
                      <div className="text-lg font-black text-orange-400">
                        {formatPrice(car.price)}
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(car);
                        }}
                        className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-lg text-xs font-bold"
                      >
                        DETAILS
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Full Layout */}
                <div className="hidden md:block">
                  {/* Car Image */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-800 via-gray-900 to-black overflow-hidden">
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
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to favorites logic here
                      }}
                      className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-all border border-white/20"
                    >
                      <Heart className="w-4 h-4 text-white" />
                    </button>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-bold text-lg">{car.brand}</div>
                    <div className="text-gray-300 text-sm">{car.model}</div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                        <span className="text-orange-400 text-xs font-medium">
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
                      className="w-full group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-6 rounded-2xl font-bold text-sm uppercase tracking-wide transition-all shadow-xl"
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
          )}

          {/* No Results */}
          {!loading && filteredCars.length === 0 && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={fadeInUp}
              className="text-center py-16"
            >
              <Car className="w-16 h-16 text-gray-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Keine Fahrzeuge gefunden
              </h3>
              <p className="text-gray-400 mb-6">
                Versuchen Sie es mit anderen Suchkriterien oder Filtern.
              </p>
              <button
                onClick={clearFilters}
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-xl font-medium transition-all"
              >
                Filter zurücksetzen
              </button>
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