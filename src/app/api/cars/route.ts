import { NextRequest, NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';
import { CarFilter } from '@/types';

export const dynamic = 'force-dynamic';

// GET /api/cars - Get all available cars with optional filtering
export async function GET(request: NextRequest) {
  try {
    console.log('Cars API called at:', new Date().toISOString());
    console.log('Environment check:');
    console.log('- Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
    console.log('- Supabase Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');
    
    const { searchParams } = new URL(request.url);
    
    // Parse query parameters for filtering
    const filters: CarFilter = {};
    
    if (searchParams.get('brand')) {
      filters.brand = searchParams.get('brand')!;
    }
    if (searchParams.get('priceMin')) {
      filters.priceMin = parseInt(searchParams.get('priceMin')!);
    }
    if (searchParams.get('priceMax')) {
      filters.priceMax = parseInt(searchParams.get('priceMax')!);
    }
    if (searchParams.get('yearMin')) {
      filters.yearMin = parseInt(searchParams.get('yearMin')!);
    }
    if (searchParams.get('yearMax')) {
      filters.yearMax = parseInt(searchParams.get('yearMax')!);
    }
    if (searchParams.get('mileageMax')) {
      filters.mileageMax = parseInt(searchParams.get('mileageMax')!);
    }
    if (searchParams.get('powerMin')) {
      filters.powerMin = parseInt(searchParams.get('powerMin')!);
    }
    if (searchParams.get('powerMax')) {
      filters.powerMax = parseInt(searchParams.get('powerMax')!);
    }
    if (searchParams.get('fuelType')) {
      filters.fuelType = searchParams.get('fuelType')!;
    }
    if (searchParams.get('transmission')) {
      filters.transmission = searchParams.get('transmission')!;
    }
    if (searchParams.get('bodyType')) {
      filters.bodyType = searchParams.get('bodyType')!;
    }

    console.log('Filters applied:', filters);
    console.log('Calling CarService...');

    // If any filters are applied, use search, otherwise get all cars
    const cars = Object.keys(filters).length > 0 
      ? await CarService.searchCars(filters)
      : await CarService.getAllCars();
    
    console.log('Cars fetched successfully, count:', cars.length);
    return NextResponse.json(cars);
  } catch (error) {
    console.error('Detailed error in cars API:', error);
    console.error('Error name:', error instanceof Error ? error.name : 'Unknown');
    console.error('Error message:', error instanceof Error ? error.message : error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack');
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch cars',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
} 