import { Car } from '@/types';

// Static fallback data for client-side rendering
// The admin panel will use the API to get real-time data
export const cars: Car[] = [
  {
    id: 'car-001',
    brand: 'BMW',
    model: 'X3 xDrive20d',
    year: 2021,
    price: 45900,
    mileage: 45000,
    fuelType: 'Diesel',
    transmission: 'Automatik',
    bodyType: 'SUV',
    color: 'Schwarz Metallic',
    doors: 5,
    seats: 5,
    power: 190,
    engine: '2.0L Diesel Turbo',
    features: [
      'Navigation Professional',
      'Panorama-Glasdach',
      'Leder Dakota Schwarz',
      'Sitzheizung vorn',
      'Klimaautomatik',
      'Xenon-Scheinwerfer',
      'Parksensoren hinten',
      'Bluetooth',
      'USB-Anschluss'
    ],
    description: 'Gepflegter BMW X3 mit umfangreicher Ausstattung. Regelmäßig gewartet, Nichtraucherfahrzeug. Sehr guter Zustand.',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1580414124304-5a2a62e8acea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '03/2021',
    previousOwners: 1,
    inspection: 'TÜV bis 03/2025',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: true,
    dateAdded: '2024-01-20'
  },
  {
    id: 'car-002',
    brand: 'Audi',
    model: 'A4 Avant 2.0 TFSI',
    year: 2020,
    price: 38500,
    mileage: 52000,
    fuelType: 'Benzin',
    transmission: 'Automatik',
    bodyType: 'Kombi',
    color: 'Grau Metallic',
    doors: 5,
    seats: 5,
    power: 190,
    engine: '2.0L TFSI Turbo',
    features: [
      'MMI Navigation plus',
      'Virtual Cockpit',
      'S line Exterieur',
      'LED-Scheinwerfer',
      'Sitzheizung vorn',
      '3-Zonen-Klimaautomatik',
      'Einparkhilfe plus',
      'Audi connect',
      'Bang & Olufsen Premium Sound'
    ],
    description: 'Sportlicher Audi A4 Avant in S line Ausstattung. Perfekt für Familie und Business. Gepflegt und technisch einwandfrei.',
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '07/2020',
    previousOwners: 1,
    inspection: 'TÜV bis 07/2024',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: true,
    dateAdded: '2024-01-18'
  },
  {
    id: 'car-003',
    brand: 'Mercedes-Benz',
    model: 'C 220 d T-Modell',
    year: 2019,
    price: 32900,
    mileage: 68000,
    fuelType: 'Diesel',
    transmission: 'Automatik',
    bodyType: 'Kombi',
    color: 'Silber Metallic',
    doors: 5,
    seats: 5,
    power: 194,
    engine: '2.1L CDI Diesel',
    features: [
      'COMAND Online',
      'Avantgarde Interieur',
      'LED Intelligent Light System',
      'Totwinkel-Assistent',
      'Parket-Paket',
      'Sitzheizung',
      'Klimaautomatik THERMOTRONIC',
      'Rückfahrkamera',
      'Harman Kardon Surround Sound'
    ],
    description: 'Eleganter Mercedes C-Klasse T-Modell mit Premium-Ausstattung. Ideal für anspruchsvolle Fahrer.',
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '11/2019',
    previousOwners: 2,
    inspection: 'TÜV bis 11/2024',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: false,
    dateAdded: '2024-01-15'
  },
  {
    id: 'car-004',
    brand: 'Volkswagen',
    model: 'Golf 1.5 TSI',
    year: 2022,
    price: 28900,
    mileage: 25000,
    fuelType: 'Benzin',
    transmission: 'Manuell',
    bodyType: 'Kleinwagen',
    color: 'Weiss',
    doors: 5,
    seats: 5,
    power: 130,
    engine: '1.5L TSI',
    features: [
      'Composition Media',
      'App-Connect',
      'Klimaanlage',
      'Sitzheizung vorn',
      'LED-Tagfahrlicht',
      'Einparkhilfe hinten',
      'Multifunktionslenkrad',
      'Bluetooth',
      'USB-C Anschluss'
    ],
    description: 'Junger VW Golf mit wenig Kilometern. Sparsam, zuverlässig und praktisch für den Alltag.',
    images: [
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '05/2022',
    previousOwners: 1,
    inspection: 'TÜV bis 05/2026',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: false,
    dateAdded: '2024-01-12'
  },
  {
    id: 'car-005',
    brand: 'BMW',
    model: '320d Touring',
    year: 2018,
    price: 29500,
    mileage: 89000,
    fuelType: 'Diesel',
    transmission: 'Automatik',
    bodyType: 'Kombi',
    color: 'Blau Metallic',
    doors: 5,
    seats: 5,
    power: 190,
    engine: '2.0L Diesel',
    features: [
      'BMW Professional Navigation',
      'Sport Line',
      'Automatische Heckklappe',
      'Sitzheizung vorn',
      'Bi-Xenon Scheinwerfer',
      'PDC vorn und hinten',
      'Klimaautomatik',
      'BMW ConnectedDrive',
      'Harman Kardon HiFi'
    ],
    description: 'BMW 3er Touring in Sport Line Ausstattung. Perfekte Kombination aus Sportlichkeit und Praktikabilität.',
    images: [
      'https://images.unsplash.com/photo-1617886903355-9354bb57751f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '09/2018',
    previousOwners: 1,
    inspection: 'TÜV bis 09/2024',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: false,
    dateAdded: '2024-01-10'
  },
  {
    id: 'car-006',
    brand: 'Toyota',
    model: 'RAV4 Hybrid',
    year: 2021,
    price: 41900,
    mileage: 35000,
    fuelType: 'Hybrid',
    transmission: 'Automatik',
    bodyType: 'SUV',
    color: 'Rot Metallic',
    doors: 5,
    seats: 5,
    power: 218,
    engine: '2.5L Hybrid',
    features: [
      'Toyota Touch 2',
      'Toyota Safety Sense 2.0',
      'Allradantrieb',
      'Sitzheizung vorn',
      'Klimaautomatik',
      'LED-Scheinwerfer',
      'Rückfahrkamera',
      'Wireless Charger',
      'JBL Premium Audio'
    ],
    description: 'Moderner Toyota RAV4 Hybrid mit Allradantrieb. Sparsam, zuverlässig und umweltfreundlich.',
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80'
    ],
    condition: 'Gebraucht',
    firstRegistration: '08/2021',
    previousOwners: 1,
    inspection: 'TÜV bis 08/2025',
    location: 'Lengnau',
    contactPerson: 'Ali',
    isAvailable: true,
    isFeatured: true,
    dateAdded: '2024-01-08'
  }
];

export const featuredCars = cars.filter(car => car.isFeatured);

export const carBrands = [...new Set(cars.map(car => car.brand))].sort();

export const priceRanges = [
  { label: 'Bis CHF 20\'000', min: 0, max: 20000 },
  { label: 'CHF 20\'000 - 30\'000', min: 20000, max: 30000 },
  { label: 'CHF 30\'000 - 40\'000', min: 30000, max: 40000 },
  { label: 'CHF 40\'000 - 50\'000', min: 40000, max: 50000 },
  { label: 'Über CHF 50\'000', min: 50000, max: 999999 }
]; 