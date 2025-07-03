import { NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';

export const dynamic = 'force-dynamic';

// GET /api/cars/brands - Get available car brands
export async function GET() {
  try {
    const brands = await CarService.getCarBrands();
    return NextResponse.json(brands);
  } catch (error) {
    console.error('Error fetching car brands:', error);
    return NextResponse.json(
      { error: 'Failed to fetch car brands' },
      { status: 500 }
    );
  }
} 