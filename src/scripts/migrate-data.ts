import dotenv from 'dotenv';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { cars } from '../data/cars';
import { Car } from '../types';

// Load environment variables from .env.local
dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Transform Car object to match database schema (snake_case)
function transformCarForDB(car: Car) {
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

async function migrateCarsToSupabase() {
  try {
    console.log('Starting migration of cars to Supabase...');
    
    // Transform all cars to database format
    const transformedCars = cars.map(transformCarForDB);
    
    // Insert cars in batches to avoid potential limits
    const batchSize = 10;
    for (let i = 0; i < transformedCars.length; i += batchSize) {
      const batch = transformedCars.slice(i, i + batchSize);
      
      const { error } = await supabase
        .from('cars')
        .upsert(batch, { onConflict: 'id' });
      
      if (error) {
        console.error(`Error inserting batch ${i / batchSize + 1}:`, error);
        throw error;
      }
      
      console.log(`Inserted batch ${i / batchSize + 1} (${batch.length} cars)`);
    }
    
    console.log(`✅ Successfully migrated ${transformedCars.length} cars to Supabase!`);
    
    // Verify the migration
    const { data: verifyData, error: verifyError } = await supabase
      .from('cars')
      .select('id')
      .eq('is_available', true);
    
    if (verifyError) {
      console.error('Error verifying migration:', verifyError);
    } else {
      console.log(`✅ Verified: ${verifyData?.length} cars found in database`);
    }
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Run migration if this script is executed directly
if (require.main === module) {
  migrateCarsToSupabase();
}

export { migrateCarsToSupabase }; 