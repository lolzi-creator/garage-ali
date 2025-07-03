import { NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';

export const dynamic = 'force-dynamic';

// GET /api/cars/featured - Get featured cars
export async function GET() {
  try {
    const featuredCars = await CarService.getFeaturedCars();
    return NextResponse.json(featuredCars);
  } catch (error) {
    console.error('Error fetching featured cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch featured cars' },
      { status: 500 }
    );
  }
} 