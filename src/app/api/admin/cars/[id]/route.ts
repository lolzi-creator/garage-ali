import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Car } from '@/types';

const CARS_FILE_PATH = path.join(process.cwd(), 'src/data/cars.json');

// Read cars from JSON file
function readCarsFromFile(): Car[] {
  try {
    if (!fs.existsSync(CARS_FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(CARS_FILE_PATH, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading cars file:', error);
    return [];
  }
}

// Write cars to JSON file
function writeCarsToFile(cars: Car[]) {
  try {
    const dataDir = path.dirname(CARS_FILE_PATH);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    fs.writeFileSync(CARS_FILE_PATH, JSON.stringify(cars, null, 2));
  } catch (error) {
    console.error('Error writing cars file:', error);
    throw error;
  }
}

// PUT /api/admin/cars/[id] - Update a car
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const updatedCarData: Car = await request.json();
    
    const cars = readCarsFromFile();
    const carIndex = cars.findIndex(car => car.id === id);
    
    if (carIndex === -1) {
      return NextResponse.json({ error: 'Car not found' }, { status: 404 });
    }

    // Update the car while preserving the original ID and dateAdded
    cars[carIndex] = {
      ...updatedCarData,
      id,
      dateAdded: cars[carIndex].dateAdded || new Date().toISOString().split('T')[0]
    };

    writeCarsToFile(cars);

    return NextResponse.json(cars[carIndex]);
  } catch (error) {
    console.error('Error updating car:', error);
    return NextResponse.json({ error: 'Failed to update car' }, { status: 500 });
  }
}

// DELETE /api/admin/cars/[id] - Delete a car
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const cars = readCarsFromFile();
    const carIndex = cars.findIndex(car => car.id === id);
    
    if (carIndex === -1) {
      return NextResponse.json({ error: 'Car not found' }, { status: 404 });
    }

    const deletedCar = cars.splice(carIndex, 1)[0];
    writeCarsToFile(cars);

    return NextResponse.json({ message: 'Car deleted successfully', car: deletedCar });
  } catch (error) {
    console.error('Error deleting car:', error);
    return NextResponse.json({ error: 'Failed to delete car' }, { status: 500 });
  }
} 