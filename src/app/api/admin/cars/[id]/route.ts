import { NextRequest, NextResponse } from 'next/server';
import { CarService } from '@/lib/cars';
import { Car } from '@/types';

export const dynamic = 'force-dynamic';

// PUT /api/admin/cars/[id] - Update a car
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updatedCarData: Partial<Car> = await request.json();
    
    const updatedCar = await CarService.updateCar(id, updatedCarData);
    return NextResponse.json(updatedCar);
  } catch (error) {
    console.error('Error updating car:', error);
    
    if (error instanceof Error && error.message === 'Failed to update car') {
      return NextResponse.json(
        { error: 'Car not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to update car' },
      { status: 500 }
    );
  }
}

// DELETE /api/admin/cars/[id] - Delete a car
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    await CarService.deleteCar(id);
    return NextResponse.json({ 
      message: 'Car deleted successfully' 
    });
  } catch (error) {
    console.error('Error deleting car:', error);
    return NextResponse.json(
      { error: 'Failed to delete car' },
      { status: 500 }
    );
  }
} 