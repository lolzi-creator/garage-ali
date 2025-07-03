'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  X, 
  Save, 
  Upload, 
  Car as CarIcon,
  AlertCircle,
  Camera
} from 'lucide-react';
import { Car } from '@/types';

interface CarFormProps {
  car?: Car | null;
  onClose: () => void;
  onSave: (car: Car) => void;
}

export default function CarForm({ car, onClose, onSave }: CarFormProps) {
  const [formData, setFormData] = useState<Partial<Car>>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price: 0,
    mileage: 0,
    fuelType: 'Benzin',
    transmission: 'Manuell',
    bodyType: 'Limousine',
    color: '',
    doors: 4,
    seats: 5,
    power: 0,
    engine: '',
    features: [],
    description: '',
    images: [],
    condition: 'Gebraucht',
    firstRegistration: '',
    previousOwners: 1,
    inspection: '',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: false,
    dateAdded: new Date().toISOString().split('T')[0]
  });

  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [featureInput, setFeatureInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [uploadingImage, setUploadingImage] = useState(false);

  useEffect(() => {
    if (car) {
      setFormData(car);
      setImageUrls(car.images || []);
    }
  }, [car]);

  const handleInputChange = (field: keyof Car, value: string | number | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addImage = () => {
    if (newImageUrl.trim()) {
      setImageUrls(prev => [...prev, newImageUrl.trim()]);
      setNewImageUrl('');
    }
  };

  const removeImage = (index: number) => {
    setImageUrls(prev => prev.filter((_, i) => i !== index));
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploadingImage(true);

    try {
      for (const file of Array.from(files)) {
        if (file.type.startsWith('image/')) {
          // Convert to base64
          const reader = new FileReader();
          reader.onload = (e) => {
            const base64String = e.target?.result as string;
            setImageUrls(prev => [...prev, base64String]);
          };
          reader.readAsDataURL(file);
        }
      }
    } catch (error) {
      console.error('Error uploading images:', error);
      alert('Fehler beim Hochladen der Bilder');
    } finally {
      setUploadingImage(false);
      // Reset the input
      event.target.value = '';
    }
  };

  const addFeature = () => {
    if (featureInput.trim() && !formData.features?.includes(featureInput.trim())) {
      setFormData(prev => ({
        ...prev,
        features: [...(prev.features || []), featureInput.trim()]
      }));
      setFeatureInput('');
    }
  };

  const removeFeature = (index: number) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features?.filter((_, i) => i !== index) || []
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.brand?.trim()) newErrors.brand = 'Marke ist erforderlich';
    if (!formData.model?.trim()) newErrors.model = 'Modell ist erforderlich';
    if (!formData.year || formData.year < 1900 || formData.year > new Date().getFullYear() + 1) {
      newErrors.year = 'Gültiges Jahr erforderlich';
    }
    if (!formData.price || formData.price <= 0) newErrors.price = 'Preis muss größer als 0 sein';
    if (!formData.mileage && formData.mileage !== 0) newErrors.mileage = 'Kilometerstand ist erforderlich';
    if (!formData.color?.trim()) newErrors.color = 'Farbe ist erforderlich';
    if (!formData.engine?.trim()) newErrors.engine = 'Motor ist erforderlich';
    if (!formData.description?.trim()) newErrors.description = 'Beschreibung ist erforderlich';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('🚗 Form submitted!');
    console.log('📝 Form data:', formData);
    
    if (!validateForm()) {
      console.log('❌ Form validation failed');
      return;
    }

    console.log('✅ Form validation passed');
    setIsSubmitting(true);

    try {
      const carData: Car = {
        id: car?.id || `car-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        brand: formData.brand!,
        model: formData.model!,
        year: formData.year!,
        price: formData.price!,
        mileage: formData.mileage!,
        fuelType: formData.fuelType!,
        transmission: formData.transmission!,
        bodyType: formData.bodyType!,
        color: formData.color!,
        doors: formData.doors!,
        seats: formData.seats!,
        power: formData.power!,
        engine: formData.engine!,
        features: formData.features!,
        description: formData.description!,
        images: imageUrls,
        condition: formData.condition!,
        firstRegistration: formData.firstRegistration!,
        previousOwners: formData.previousOwners!,
        inspection: formData.inspection!,
        location: formData.location!,
        contactPerson: formData.contactPerson!,
        isAvailable: formData.isAvailable!,
        isFeatured: formData.isFeatured!,
        dateAdded: formData.dateAdded!
      };

      const method = car ? 'PUT' : 'POST';
      const url = car ? `/api/admin/cars/${car.id}` : '/api/admin/cars';
      
      console.log('📡 Sending request:', method, url);
      console.log('📦 Car data:', carData);

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData),
      });

      console.log('📊 Response status:', response.status);
      console.log('📊 Response ok:', response.ok);

      if (response.ok) {
        const savedCar = await response.json();
        console.log('✅ Car saved successfully:', savedCar);
        onSave(savedCar);
      } else {
        console.error('❌ Save failed:', response.status);
        const errorText = await response.text();
        console.error('❌ Error response:', errorText);
        alert('Fehler beim Speichern des Fahrzeugs: ' + response.status);
      }
    } catch (error) {
      console.error('❌ Network error saving car:', error);
      alert('Fehler beim Speichern des Fahrzeugs: ' + error);
    } finally {
      setIsSubmitting(false);
      console.log('🏁 Form submission completed');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-gray-900 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl border border-gray-700"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CarIcon className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {car ? 'Fahrzeug bearbeiten' : 'Neues Fahrzeug'}
                </h2>
                <p className="text-orange-100 text-sm">
                  {car ? `${car.brand} ${car.model}` : 'Fahrzeug hinzufügen'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Marke *
                </label>
                <input
                  type="text"
                  value={formData.brand || ''}
                  onChange={(e) => handleInputChange('brand', e.target.value)}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.brand ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. BMW, Audi, Mercedes"
                />
                {errors.brand && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.brand}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Modell *
                </label>
                <input
                  type="text"
                  value={formData.model || ''}
                  onChange={(e) => handleInputChange('model', e.target.value)}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.model ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. A4, X3, C-Klasse"
                />
                {errors.model && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.model}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Jahr *
                </label>
                <input
                  type="number"
                  min="1900"
                  max={new Date().getFullYear() + 1}
                  value={formData.year || ''}
                  onChange={(e) => handleInputChange('year', parseInt(e.target.value))}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.year ? 'border-red-500' : 'border-gray-600'
                  }`}
                />
                {errors.year && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.year}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Preis (CHF) *
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.price || ''}
                  onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.price ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. 25000"
                />
                {errors.price && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.price}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kilometerstand *
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.mileage || ''}
                  onChange={(e) => handleInputChange('mileage', parseInt(e.target.value))}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.mileage ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. 50000"
                />
                {errors.mileage && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.mileage}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Farbe *
                </label>
                <input
                  type="text"
                  value={formData.color || ''}
                  onChange={(e) => handleInputChange('color', e.target.value)}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.color ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. Schwarz Metallic"
                />
                {errors.color && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.color}
                  </p>
                )}
              </div>
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Kraftstoff
                </label>
                <select
                  value={formData.fuelType || ''}
                  onChange={(e) => handleInputChange('fuelType', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Benzin">Benzin</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Elektro">Elektro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Getriebe
                </label>
                <select
                  value={formData.transmission || ''}
                  onChange={(e) => handleInputChange('transmission', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Manuell">Manuell</option>
                  <option value="Automatik">Automatik</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Fahrzeugtyp
                </label>
                <select
                  value={formData.bodyType || ''}
                  onChange={(e) => handleInputChange('bodyType', e.target.value)}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="Limousine">Limousine</option>
                  <option value="Kombi">Kombi</option>
                  <option value="SUV">SUV</option>
                  <option value="Coupé">Coupé</option>
                  <option value="Cabrio">Cabrio</option>
                  <option value="Kleinwagen">Kleinwagen</option>
                </select>
              </div>
            </div>

            {/* Engine & Power */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Motor *
                </label>
                <input
                  type="text"
                  value={formData.engine || ''}
                  onChange={(e) => handleInputChange('engine', e.target.value)}
                  className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                    errors.engine ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="z.B. 2.0L TFSI Turbo"
                />
                {errors.engine && (
                  <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.engine}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Leistung (PS)
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.power || ''}
                  onChange={(e) => handleInputChange('power', parseInt(e.target.value))}
                  className="w-full bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="z.B. 190"
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Beschreibung *
              </label>
              <textarea
                rows={4}
                value={formData.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none ${
                  errors.description ? 'border-red-500' : 'border-gray-600'
                }`}
                placeholder="Beschreibung des Fahrzeugs..."
              />
              {errors.description && (
                <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.description}
                </p>
              )}
            </div>

            {/* Images */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-4">
                Fahrzeug Bilder
              </label>
              
              {/* Upload Options */}
              <div className="space-y-4">
                {/* File Upload Section */}
                <div className="border-2 border-dashed border-gray-600 rounded-xl p-6 text-center hover:border-orange-500 transition-colors">
                  <input
                    type="file"
                    id="image-upload"
                    multiple
                    accept="image/*"
                    capture="environment"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={uploadingImage}
                  />
                  <label
                    htmlFor="image-upload"
                    className={`cursor-pointer block ${uploadingImage ? 'opacity-50' : ''}`}
                  >
                                          <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center border border-orange-500/30">
                            {uploadingImage ? (
                              <div className="animate-spin w-8 h-8 border-2 border-orange-400 border-t-transparent rounded-full"></div>
                            ) : (
                              <Camera className="w-10 h-10 text-orange-400" />
                            )}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {uploadingImage ? 'Bilder werden hochgeladen...' : 'Fahrzeug fotografieren'}
                          </h3>
                          <p className="text-gray-300 text-base mb-2">
                            📱 Kamera öffnen oder Galerie durchsuchen
                          </p>
                          <p className="text-gray-500 text-sm">
                            Mehrere Bilder auswählen • JPG, PNG • Touch-optimiert für Mobilgeräte
                          </p>
                        </div>
                        <div className="space-y-2">
                          <button
                            type="button"
                            className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all disabled:opacity-50 transform hover:scale-105 shadow-xl"
                            disabled={uploadingImage}
                          >
                            {uploadingImage ? (
                              <span className="flex items-center justify-center gap-2">
                                <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                                Hochladen...
                              </span>
                            ) : (
                              <span className="flex items-center justify-center gap-2">
                                <Camera className="w-6 h-6" />
                                Fotos aufnehmen
                              </span>
                            )}
                          </button>
                          <p className="text-center text-xs text-gray-500">
                            Tippen um Kamera zu öffnen oder aus Galerie zu wählen
                          </p>
                        </div>
                      </div>
                  </label>
                </div>

                {/* URL Input as Alternative */}
                <div className="bg-gray-800/50 rounded-xl p-4">
                  <h4 className="text-sm font-medium text-gray-300 mb-3">
                    Oder Bild-URL hinzufügen
                  </h4>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="https://beispiel.com/bild.jpg"
                    />
                    <button
                      type="button"
                      onClick={addImage}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-3 rounded-xl transition-colors"
                    >
                      <Upload className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Image Preview Grid */}
                {imageUrls.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-300 mb-3">
                      Ausgewählte Bilder ({imageUrls.length})
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {imageUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Car image ${index + 1}`}
                            className="w-full h-24 object-cover rounded-lg border border-gray-600"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAzaDE2YTEgMSAwIDAgMSAxIDF2MTZhMSAxIDAgMCAxLTEgMUg0YTEgMSAwIDAgMS0xLTFWNGExIDEgMCAwIDEgMS0xem0xIDJ2MTRoMTRWNUg1em0yIDJ2MTBoMTBWN0g3em0yIDJ2Nmg2VjloLTZ6IiBmaWxsPSIjNjc3NDg5Ii8+PC9zdmc+';
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>
                          <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-1 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity">
                            #{index + 1}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Ausstattung
              </label>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
                    className="flex-1 bg-gray-800 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="z.B. Navigation, Klimaanlage..."
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl transition-colors"
                  >
                    Hinzufügen
                  </button>
                </div>
                
                {formData.features && formData.features.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {formData.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {feature}
                        <button
                          type="button"
                          onClick={() => removeFeature(index)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Toggles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.isFeatured || false}
                  onChange={(e) => handleInputChange('isFeatured', e.target.checked)}
                  className="w-5 h-5 text-orange-500 bg-gray-800 border-gray-600 rounded focus:ring-orange-500"
                />
                <label htmlFor="featured" className="text-gray-300">
                  Als Featured markieren
                </label>
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="available"
                  checked={formData.isAvailable || false}
                  onChange={(e) => handleInputChange('isAvailable', e.target.checked)}
                  className="w-5 h-5 text-green-500 bg-gray-800 border-gray-600 rounded focus:ring-green-500"
                />
                <label htmlFor="available" className="text-gray-300">
                  Verfügbar
                </label>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-6 border-t border-gray-700">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl font-medium transition-colors"
              >
                Abbrechen
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 px-6 rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <Save className="w-5 h-5" />
                {isSubmitting ? 'Speichern...' : 'Speichern'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
} 