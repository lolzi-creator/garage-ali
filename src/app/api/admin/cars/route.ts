import { NextRequest, NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';
import { Car } from '@/types';

export const dynamic = 'force-dynamic';

// GET /api/admin/cars - Get all cars (including unavailable for admin)
export async function GET() {
  try {
    const cars = await CarService.getAllCarsAdmin();
    return NextResponse.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json(
      { error: 'Failed to fetch cars' },
      { status: 500 }
    );
  }
}

// POST /api/admin/cars - Create a new car
export async function POST(request: NextRequest) {
  try {
    const carData: Omit<Car, 'id'> = await request.json();
    
    // Validate required fields
    const requiredFields = ['brand', 'model', 'year', 'price', 'description'];
    for (const field of requiredFields) {
      if (!carData[field as keyof typeof carData]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    const newCar = await CarService.createCar(carData);
    return NextResponse.json(newCar, { status: 201 });
  } catch (error) {
    console.error('Error creating car:', error);
    return NextResponse.json(
      { error: 'Failed to create car' },
      { status: 500 }
    );
  }
} 