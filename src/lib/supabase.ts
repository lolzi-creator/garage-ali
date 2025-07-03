import { createClient } from '@supabase/supabase-js';
import { Car } from '@/types';

// Debug environment variables
console.log('=== SUPABASE DEBUG INFO ===');
console.log('Node environment:', process.env.NODE_ENV);
console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing');
console.log('Supabase URL value:', process.env.NEXT_PUBLIC_SUPABASE_URL);
console.log('Supabase Anon Key:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing');
console.log('Supabase Anon Key length:', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.length || 0);

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  console.error('NEXT_PUBLIC_SUPABASE_URL is not set');
  throw new Error('supabaseUrl is required.');
}

if (!supabaseAnonKey) {
  console.error('NEXT_PUBLIC_SUPABASE_ANON_KEY is not set');
  throw new Error('supabaseAnonKey is required.');
}

console.log('Creating Supabase client...');
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
console.log('Supabase client created successfully');

// Database types for TypeScript
export interface Database {
  public: {
    Tables: {
      cars: {
        Row: Car;
        Insert: Omit<Car, 'id'> & { id?: string };
        Update: Partial<Car>;
      };
    };
  };
}

// Typed Supabase client
export const supabaseTyped = createClient<Database>(supabaseUrl, supabaseAnonKey); 