-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id TEXT PRIMARY KEY,
  brand TEXT NOT NULL,
  model TEXT NOT NULL,
  year INTEGER NOT NULL,
  price NUMERIC NOT NULL,
  mileage INTEGER NOT NULL,
  fuel_type TEXT NOT NULL CHECK (fuel_type IN ('Benzin', 'Diesel', 'Elektro', 'Hybrid')),
  transmission TEXT NOT NULL CHECK (transmission IN ('Manuell', 'Automatik')),
  body_type TEXT NOT NULL CHECK (body_type IN ('Limousine', 'Kombi', 'SUV', 'Coupé', 'Cabrio', 'Kleinwagen', 'Van')),
  color TEXT NOT NULL,
  doors INTEGER NOT NULL,
  seats INTEGER NOT NULL,
  power INTEGER NOT NULL,
  engine TEXT NOT NULL,
  features JSONB NOT NULL DEFAULT '[]'::jsonb,
  description TEXT NOT NULL,
  images JSONB NOT NULL DEFAULT '[]'::jsonb,
  condition TEXT NOT NULL CHECK (condition IN ('Neu', 'Gebraucht', 'Vorführwagen')),
  first_registration TEXT NOT NULL,
  previous_owners INTEGER NOT NULL DEFAULT 0,
  inspection TEXT NOT NULL,
  location TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  is_available BOOLEAN NOT NULL DEFAULT true,
  is_featured BOOLEAN NOT NULL DEFAULT false,
  date_added DATE NOT NULL DEFAULT CURRENT_DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cars_brand ON cars(brand);
CREATE INDEX IF NOT EXISTS idx_cars_price ON cars(price);
CREATE INDEX IF NOT EXISTS idx_cars_year ON cars(year);
CREATE INDEX IF NOT EXISTS idx_cars_fuel_type ON cars(fuel_type);
CREATE INDEX IF NOT EXISTS idx_cars_body_type ON cars(body_type);
CREATE INDEX IF NOT EXISTS idx_cars_is_available ON cars(is_available);
CREATE INDEX IF NOT EXISTS idx_cars_is_featured ON cars(is_featured);
CREATE INDEX IF NOT EXISTS idx_cars_date_added ON cars(date_added);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_cars_updated_at BEFORE UPDATE ON cars
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to available cars
CREATE POLICY "Allow public read access to available cars" ON cars
    FOR SELECT USING (is_available = true);

-- Create policy to allow all operations for authenticated users (admin)
-- Note: You may want to adjust this based on your authentication setup
CREATE POLICY "Allow all operations for authenticated users" ON cars
    FOR ALL USING (auth.role() = 'authenticated');

-- For now, allow all operations (you can restrict this later)
CREATE POLICY "Allow all operations for development" ON cars
    FOR ALL USING (true); 