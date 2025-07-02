import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { Car } from '@/types';

const CARS_FILE_PATH = path.join(process.cwd(), 'src/data/cars.json');

// Ensure the data directory exists
function ensureDataDirectory() {
  const dataDir = path.dirname(CARS_FILE_PATH);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

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
    ensureDataDirectory();
    fs.writeFileSync(CARS_FILE_PATH, JSON.stringify(cars, null, 2));
  } catch (error) {
    console.error('Error writing cars file:', error);
    throw error;
  }
}

// GET /api/admin/cars - Get all cars
export async function GET() {
  try {
    const cars = readCarsFromFile();
    return NextResponse.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    return NextResponse.json({ error: 'Failed to fetch cars' }, { status: 500 });
  }
}

// POST /api/admin/cars - Create a new car
export async function POST(request: NextRequest) {
  try {
    const carData: Car = await request.json();
    
    // Validate required fields
    const requiredFields = ['brand', 'model', 'year', 'price', 'description'];
    for (const field of requiredFields) {
      if (!carData[field as keyof Car]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Generate ID if not provided
    if (!carData.id) {
      carData.id = `car-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }

    // Set default values
    carData.dateAdded = new Date().toISOString().split('T')[0];
    carData.isAvailable = carData.isAvailable ?? true;
    carData.isFeatured = carData.isFeatured ?? false;
    carData.contactPerson = carData.contactPerson || 'Ali';
    carData.location = carData.location || 'Lengnau';

    const cars = readCarsFromFile();
    cars.push(carData);
    writeCarsToFile(cars);

    return NextResponse.json(carData, { status: 201 });
  } catch (error) {
    console.error('Error creating car:', error);
    return NextResponse.json({ error: 'Failed to create car' }, { status: 500 });
  }
} 