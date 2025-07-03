import { supabase } from './supabase';
import { Car, CarFilter } from '@/types';

// Transform database row (snake_case) to Car object (camelCase)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformDBRowToCar(dbRow: any): Car {
  return {
    id: dbRow.id,
    brand: dbRow.brand,
    model: dbRow.model,
    year: dbRow.year,
    price: dbRow.price,
    mileage: dbRow.mileage,
    fuelType: dbRow.fuel_type,
    transmission: dbRow.transmission,
    bodyType: dbRow.body_type,
    color: dbRow.color,
    doors: dbRow.doors,
    seats: dbRow.seats,
    power: dbRow.power,
    engine: dbRow.engine,
    features: dbRow.features || [],
    description: dbRow.description,
    images: dbRow.images || [],
    condition: dbRow.condition,
    firstRegistration: dbRow.first_registration,
    previousOwners: dbRow.previous_owners,
    inspection: dbRow.inspection,
    location: dbRow.location,
    contactPerson: dbRow.contact_person,
    isAvailable: dbRow.is_available,
    isFeatured: dbRow.is_featured,
    dateAdded: dbRow.date_added,
  };
}

// Transform Car object (camelCase) to database format (snake_case)
function transformCarToDBRow(car: Car) {
  return {
    id: car.id,
    brand: car.brand,
    model: car.model,
    year: car.year,
    price: car.price,
    mileage: car.mileage,
    fuel_type: car.fuelType,
    transmission: car.transmission,
    body_type: car.bodyType,
    color: car.color,
    doors: car.doors,
    seats: car.seats,
    power: car.power,
    engine: car.engine,
    features: car.features,
    description: car.description,
    images: car.images,
    condition: car.condition,
    first_registration: car.firstRegistration,
    previous_owners: car.previousOwners,
    inspection: car.inspection,
    location: car.location,
    contact_person: car.contactPerson,
    is_available: car.isAvailable,
    is_featured: car.isFeatured,
    date_added: car.dateAdded,
  };
}

export class CarService {
  // Get all cars
  static async getAllCars(): Promise<Car[]> {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('is_available', true)
      .order('date_added', { ascending: false });

    if (error) {
      console.error('Error fetching cars:', error);
      throw new Error('Failed to fetch cars');
    }

    return data.map(transformDBRowToCar);
  }

  // Get car by ID
  static async getCarById(id: string): Promise<Car | null> {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('id', id)
      .eq('is_available', true)
      .single();

    if (error) {
      if (error.code === 'PGRST116') {
        return null; // Car not found
      }
      console.error('Error fetching car:', error);
      throw new Error('Failed to fetch car');
    }

    return transformDBRowToCar(data);
  }

  // Get featured cars
  static async getFeaturedCars(): Promise<Car[]> {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .eq('is_available', true)
      .eq('is_featured', true)
      .order('date_added', { ascending: false });

    if (error) {
      console.error('Error fetching featured cars:', error);
      throw new Error('Failed to fetch featured cars');
    }

    return data.map(transformDBRowToCar);
  }

  // Search and filter cars
  static async searchCars(filters: CarFilter): Promise<Car[]> {
    let query = supabase
      .from('cars')
      .select('*')
      .eq('is_available', true);

    // Apply filters
    if (filters.brand) {
      query = query.eq('brand', filters.brand);
    }
    if (filters.priceMin !== undefined) {
      query = query.gte('price', filters.priceMin);
    }
    if (filters.priceMax !== undefined) {
      query = query.lte('price', filters.priceMax);
    }
    if (filters.yearMin !== undefined) {
      query = query.gte('year', filters.yearMin);
    }
    if (filters.yearMax !== undefined) {
      query = query.lte('year', filters.yearMax);
    }
    if (filters.mileageMax !== undefined) {
      query = query.lte('mileage', filters.mileageMax);
    }
    if (filters.powerMin !== undefined) {
      query = query.gte('power', filters.powerMin);
    }
    if (filters.powerMax !== undefined) {
      query = query.lte('power', filters.powerMax);
    }
    if (filters.fuelType) {
      query = query.eq('fuel_type', filters.fuelType);
    }
    if (filters.transmission) {
      query = query.eq('transmission', filters.transmission);
    }
    if (filters.bodyType) {
      query = query.eq('body_type', filters.bodyType);
    }

    query = query.order('date_added', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Error searching cars:', error);
      throw new Error('Failed to search cars');
    }

    return data.map(transformDBRowToCar);
  }

  // Admin: Get all cars (including unavailable)
  static async getAllCarsAdmin(): Promise<Car[]> {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('date_added', { ascending: false });

    if (error) {
      console.error('Error fetching cars for admin:', error);
      throw new Error('Failed to fetch cars');
    }

    return data.map(transformDBRowToCar);
  }

  // Admin: Create new car
  static async createCar(carData: Omit<Car, 'id'>): Promise<Car> {
    // Generate ID if not provided
    const id = `car-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    const car: Car = {
      ...carData,
      id,
      dateAdded: new Date().toISOString().split('T')[0],
      isAvailable: carData.isAvailable ?? true,
      isFeatured: carData.isFeatured ?? false,
      contactPerson: carData.contactPerson || 'Ali',
      location: carData.location || 'Lengnau',
    };

    const dbRow = transformCarToDBRow(car);

    const { data, error } = await supabase
      .from('cars')
      .insert(dbRow)
      .select()
      .single();

    if (error) {
      console.error('Error creating car:', error);
      throw new Error('Failed to create car');
    }

    return transformDBRowToCar(data);
  }

  // Admin: Update car
  static async updateCar(id: string, carData: Partial<Car>): Promise<Car> {
    const dbRow = transformCarToDBRow({ ...carData, id } as Car);
    
    // Remove undefined values
    Object.keys(dbRow).forEach(key => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((dbRow as any)[key] === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        delete (dbRow as any)[key];
      }
    });

    const { data, error } = await supabase
      .from('cars')
      .update(dbRow)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating car:', error);
      throw new Error('Failed to update car');
    }

    return transformDBRowToCar(data);
  }

  // Admin: Delete car
  static async deleteCar(id: string): Promise<void> {
    const { error } = await supabase
      .from('cars')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting car:', error);
      throw new Error('Failed to delete car');
    }
  }

  // Get unique brands
  static async getCarBrands(): Promise<string[]> {
    const { data, error } = await supabase
      .from('cars')
      .select('brand')
      .eq('is_available', true);

    if (error) {
      console.error('Error fetching car brands:', error);
      throw new Error('Failed to fetch car brands');
    }

    const brands = [...new Set(data.map(item => item.brand))].sort();
    return brands;
  }
} 