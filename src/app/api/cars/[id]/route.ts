import { NextRequest, NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';

export const dynamic = 'force-dynamic';

// GET /api/cars/[id] - Get a specific car by ID
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const car = await CarService.getCarById(id);
    
    if (!car) {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(car);
  } catch (error) {
    console.error('Error fetching car:', error);
    return NextResponse.json(
      { error: 'Failed to fetch car' },
      { status: 500 }
    );
  }
} 