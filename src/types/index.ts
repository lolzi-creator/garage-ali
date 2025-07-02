// Auto Dealership Website Type Definitions

export interface Car {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuelType: 'Benzin' | 'Diesel' | 'Elektro' | 'Hybrid';
  transmission: 'Manuell' | 'Automatik';
  bodyType: 'Limousine' | 'Kombi' | 'SUV' | 'Coupé' | 'Cabrio' | 'Kleinwagen' | 'Van';
  color: string;
  doors: number;
  seats: number;
  power: number; // PS
  engine: string;
  features: string[];
  description: string;
  images: string[];
  condition: 'Neu' | 'Gebraucht' | 'Vorführwagen';
  firstRegistration: string;
  previousOwners: number;
  inspection: string; // TÜV
  location: string;
  contactPerson: string;
  isAvailable: boolean;
  isFeatured: boolean;
  dateAdded: string;
}

export interface CarFilter {
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  yearMin?: number;
  yearMax?: number;
  mileageMax?: number;
  powerMin?: number;
  powerMax?: number;
  fuelType?: string;
  transmission?: string;
  bodyType?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  service?: string;
  type: 'car_purchase' | 'service' | 'financing';
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: 'car_inquiry' | 'service' | 'financing' | 'general';
  message: string;
  carId?: string;
  preferredDate?: string;
  preferredTime?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FinancingOption {
  id: string;
  title: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  interestRate: number;
  termMonths: number[];
}

export interface ContactInfo {
  businessName: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  hours: {
    [key: string]: string;
  };
  socialMedia?: {
    facebook?: string;
    instagram?: string;
    google?: string;
  };
} 