'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X,
  Phone,
  Mail,
  MapPin,
  Gauge,
  Fuel,
  Settings,
  Users,
  CheckCircle,
  Heart,
  Share,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Car } from '@/types';
import { contactInfo } from '@/data/contact';

interface CarDetailModalProps {
  car: Car | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CarDetailModal({ car, isOpen, onClose }: CarDetailModalProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    if (car?.images && car.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
    }
  };

  const prevImage = () => {
    if (car?.images && car.images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
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

  const getCarImages = (car: Car | null) => {
    if (!car) return ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'];
    
    // Fallback images for when car.images is not available
    const carImageMap: { [key: string]: string[] } = {
      'BMW X3 xDrive20d': [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1580414124304-5a2a62e8acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ],
      'Audi A4 Avant 2.0 TFSI': [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ],
      'Mercedes-Benz C 220 d T-Modell': [
        'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ],
      'Volkswagen Golf 1.5 TSI': [
        'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ],
      'BMW 320d Touring': [
        'https://images.unsplash.com/photo-1617886903355-9354bb57751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ],
      'Toyota RAV4 Hybrid': [
        'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
      ]
    };

    // Use car.images if available, otherwise fallback to mapped images
    if (car.images && car.images.length > 0) {
      return car.images;
    }

    const key = `${car.brand} ${car.model}`;
    return carImageMap[key] || ['https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'];
  };

  const carImages = getCarImages(car);
  const currentImage = carImages[currentImageIndex];

  // Reset image index when modal opens or car changes
  useEffect(() => {
    if (isOpen && car) {
      setCurrentImageIndex(0);
    }
  }, [isOpen, car?.id]);

  // Keyboard navigation for gallery
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (carImages.length > 1) {
          setCurrentImageIndex((prev) => (prev - 1 + carImages.length) % carImages.length);
        }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (carImages.length > 1) {
          setCurrentImageIndex((prev) => (prev + 1) % carImages.length);
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, carImages.length, onClose, car]);

  return (
    <AnimatePresence>
      {isOpen && car && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl md:rounded-3xl w-full max-w-sm sm:max-w-lg md:max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl mx-2 sm:mx-4"
            >
              {/* Header */}
              <div className="relative">
                {/* Car Image Gallery */}
                <div className="relative h-56 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-t-2xl md:rounded-t-3xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
                    style={{
                      backgroundImage: `url(${currentImage})`
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>

                  {/* Navigation Arrows */}
                  {carImages.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          prevImage();
                        }}
                        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all z-10 touch-manipulation"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          nextImage();
                        }}
                        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all z-10 touch-manipulation"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Dots Indicator */}
                  {carImages.length > 1 && (
                    <div className="absolute bottom-16 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                      {carImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            goToImage(index);
                          }}
                          className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all touch-manipulation ${
                            index === currentImageIndex
                              ? 'bg-orange-500 scale-125'
                              : 'bg-white/50 hover:bg-white/80'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Image Counter */}
                  {carImages.length > 1 && (
                    <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-black/80 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm border border-white/20">
                      {currentImageIndex + 1} / {carImages.length}
                    </div>
                  )}
                  
                  {/* Close Button */}
                  <button
                    onClick={onClose}
                    className="absolute top-3 right-3 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all z-10 touch-manipulation"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  {/* Condition Badge */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6">
                    <span className="bg-black/80 backdrop-blur-sm text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wide border border-white/20">
                      {car.condition}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-3 right-14 sm:top-6 sm:right-20 flex gap-2 sm:gap-3">
                    <button
                      onClick={() => setIsFavorite(!isFavorite)}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 transition-all touch-manipulation ${
                        isFavorite 
                          ? 'bg-red-500 text-white' 
                          : 'bg-black/50 text-white hover:bg-red-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-current' : ''}`} />
                    </button>
                    <button className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 text-white hover:bg-black/70 transition-all touch-manipulation">
                      <Share className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>

                  {/* Car Title */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2">
                      {car.brand} {car.model}
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base lg:text-lg">{car.year} • {car.engine} • {car.color}</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                                      {/* Left Column */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Price */}
                      <div className="bg-black/40 rounded-2xl p-4 sm:p-6 text-center">
                        <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2">
                          {formatPrice(car.price)}
                        </div>
                        <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Inkl. MwSt. und Überführung</p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <button 
                            onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                            className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 px-4 rounded-2xl font-bold transition-all shadow-xl touch-manipulation"
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              <Phone className="w-4 h-4" />
                              <span className="text-sm sm:text-base">ANRUFEN</span>
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                          </button>
                          <button 
                            onClick={() => window.open(`mailto:${contactInfo.email}?subject=Interesse an ${car.brand} ${car.model}`, '_self')}
                            className="border-2 border-white/30 text-white hover:bg-white hover:text-black py-3 px-4 rounded-2xl font-bold transition-all backdrop-blur-sm flex items-center justify-center gap-2 touch-manipulation"
                          >
                            <Mail className="w-4 h-4" />
                            <span className="text-sm sm:text-base">E-MAIL</span>
                          </button>
                        </div>
                        
                        <p className="text-gray-400 text-sm mt-4">
                          <MapPin className="w-4 h-4 inline mr-1" />
                          Verfügbar in {car.location}
                        </p>
                      </div>

                                          {/* Key Specs */}
                      <div className="bg-black/40 rounded-2xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">Fahrzeugdaten</h3>
                        
                        <div className="grid grid-cols-2 gap-2 sm:gap-3">
                          <div className="bg-gray-800/50 rounded-xl p-2 sm:p-3 text-center">
                            <Gauge className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-1" />
                            <div className="text-white font-bold text-xs sm:text-sm">{formatMileage(car.mileage)}</div>
                            <div className="text-gray-400 text-xs">Kilometerstand</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-2 sm:p-3 text-center">
                            <Fuel className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-1" />
                            <div className="text-white font-bold text-xs sm:text-sm">{car.fuelType}</div>
                            <div className="text-gray-400 text-xs">Kraftstoff</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-2 sm:p-3 text-center">
                            <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-1" />
                            <div className="text-white font-bold text-xs sm:text-sm">{car.transmission}</div>
                            <div className="text-gray-400 text-xs">Getriebe</div>
                          </div>
                          <div className="bg-gray-800/50 rounded-xl p-2 sm:p-3 text-center">
                            <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 mx-auto mb-1" />
                            <div className="text-white font-bold text-xs sm:text-sm">{car.power} PS</div>
                            <div className="text-gray-400 text-xs">Leistung</div>
                          </div>
                        </div>
                      </div>

                                          {/* Vehicle History */}
                      <div className="bg-black/40 rounded-2xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">Fahrzeughistorie</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                              <Calendar className="w-4 h-4" />
                              Erstzulassung
                            </span>
                            <span className="text-white font-bold text-sm sm:text-base">{car.firstRegistration}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 flex items-center gap-2 text-sm sm:text-base">
                              <User className="w-4 h-4" />
                              Vorbesitzer
                            </span>
                            <span className="text-white font-bold text-sm sm:text-base">{car.previousOwners}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300 text-sm sm:text-base">TÜV/AU</span>
                            <span className="text-white font-bold text-sm sm:text-base">{car.inspection}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-4 sm:space-y-6">
                      {/* Description */}
                      <div className="bg-black/40 rounded-2xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">Beschreibung</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {car.description}
                        </p>
                      </div>

                      {/* Features */}
                      <div className="bg-black/40 rounded-2xl p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 uppercase tracking-wide">Ausstattung</h3>
                        <div className="grid grid-cols-1 gap-2 max-h-48 sm:max-h-64 overflow-y-auto">
                          {car.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Contact Section */}
                  <div className="mt-4 sm:mt-6 lg:mt-8 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-4 sm:p-6">
                    <div className="text-center">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Interesse an diesem Fahrzeug?</h3>
                      <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                        Kontaktieren Sie {car.contactPerson} direkt für eine Probefahrt oder weitere Informationen.
                      </p>
                      
                      <button 
                        onClick={() => window.open(`tel:${contactInfo.phone}`, '_self')}
                        className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-2xl font-bold transition-all shadow-xl touch-manipulation w-full sm:w-auto"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span className="text-sm sm:text-base">{contactInfo.phone}</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      </button>
                    </div>
                  </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
} 