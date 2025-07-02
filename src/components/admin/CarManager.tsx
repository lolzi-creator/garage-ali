'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit, 
  Trash2, 
  LogOut, 
  Car as CarIcon, 
  Search,
  Star,
  StarOff,
  Save,
  X
} from 'lucide-react';
import { Car } from '@/types';
import CarForm from './CarForm';

interface CarManagerProps {
  onLogout: () => void;
}

export default function CarManager({ onLogout }: CarManagerProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [isDeleting, setIsDeleting] = useState<string | null>(null);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('/api/admin/cars');
      if (response.ok) {
        const data = await response.json();
        setCars(data);
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddCar = () => {
    setEditingCar(null);
    setShowForm(true);
  };

  const handleEditCar = (car: Car) => {
    setEditingCar(car);
    setShowForm(true);
  };

  const handleDeleteCar = async (carId: string) => {
    if (!confirm('Sind Sie sicher, dass Sie dieses Fahrzeug löschen möchten?')) {
      return;
    }

    setIsDeleting(carId);
    try {
      const response = await fetch(`/api/admin/cars/${carId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCars(cars.filter(car => car.id !== carId));
      } else {
        alert('Fehler beim Löschen des Fahrzeugs');
      }
    } catch (error) {
      console.error('Error deleting car:', error);
      alert('Fehler beim Löschen des Fahrzeugs');
    } finally {
      setIsDeleting(null);
    }
  };

  const handleToggleFeatured = async (car: Car) => {
    try {
      const updatedCar = { ...car, isFeatured: !car.isFeatured };
      const response = await fetch(`/api/admin/cars/${car.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCar),
      });

      if (response.ok) {
        setCars(cars.map(c => c.id === car.id ? updatedCar : c));
      }
    } catch (error) {
      console.error('Error updating car:', error);
    }
  };

  const handleFormClose = () => {
    setShowForm(false);
    setEditingCar(null);
  };

  const handleCarSaved = (savedCar: Car) => {
    if (editingCar) {
      // Update existing car
      setCars(cars.map(car => car.id === savedCar.id ? savedCar : car));
    } else {
      // Add new car
      setCars([...cars, savedCar]);
    }
    handleFormClose();
  };

  const filteredCars = cars.filter(car =>
    car.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('de-CH', {
      style: 'currency',
      currency: 'CHF',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-xl border-b border-gray-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <CarIcon className="w-8 h-8 text-orange-500" />
              <div>
                <h1 className="text-2xl font-bold text-white">Fahrzeug Verwaltung</h1>
                <p className="text-gray-400 text-sm">Auto Checkpoint Garage Ali</p>
              </div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Abmelden
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Fahrzeuge suchen..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={handleAddCar}
            className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <Plus className="w-5 h-5" />
            Fahrzeug hinzufügen
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-black text-white mb-2">{cars.length}</div>
            <div className="text-gray-400">Gesamt Fahrzeuge</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-black text-orange-400 mb-2">
              {cars.filter(car => car.isFeatured).length}
            </div>
            <div className="text-gray-400">Featured</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
            <div className="text-3xl font-black text-green-400 mb-2">
              {cars.filter(car => car.isAvailable).length}
            </div>
            <div className="text-gray-400">Verfügbar</div>
          </div>
        </div>

        {/* Cars Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="text-white text-xl">Fahrzeuge laden...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.map((car) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-orange-500/50 transition-all"
              >
                {/* Car Image */}
                <div className="relative h-48 bg-gray-700">
                  {car.images && car.images.length > 0 ? (
                    <img
                      src={car.images[0]}
                      alt={`${car.brand} ${car.model}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <CarIcon className="w-16 h-16 text-gray-500" />
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {car.isFeatured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Car Info */}
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">
                    {car.year} • {car.mileage.toLocaleString()} km
                  </p>
                  <p className="text-2xl font-bold text-orange-400 mb-4">
                    {formatPrice(car.price)}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleToggleFeatured(car)}
                      className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-xl transition-colors ${
                        car.isFeatured
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {car.isFeatured ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                    </button>
                    <button
                      onClick={() => handleEditCar(car)}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-xl transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteCar(car.id)}
                      disabled={isDeleting === car.id}
                      className="flex-1 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white py-2 px-3 rounded-xl transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {filteredCars.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <CarIcon className="w-16 h-16 text-gray-500 mx-auto mb-4" />
            <div className="text-white text-xl mb-2">Keine Fahrzeuge gefunden</div>
            <p className="text-gray-400">
              {searchTerm ? 'Versuchen Sie einen anderen Suchbegriff' : 'Fügen Sie Ihr erstes Fahrzeug hinzu'}
            </p>
          </div>
        )}
      </div>

      {/* Car Form Modal */}
      {showForm && (
        <CarForm
          car={editingCar}
          onClose={handleFormClose}
          onSave={handleCarSaved}
        />
      )}
    </div>
  );
} 