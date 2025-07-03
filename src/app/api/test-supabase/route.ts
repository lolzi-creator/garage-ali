import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    console.log('Testing Supabase connection...');
    
    // Simple test query to check connection
    const { data, error } = await supabase
      .from('cars')
      .select('id')
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({
        status: 'error',
        error: error.message,
        details: error,
        timestamp: new Date().toISOString()
      }, { status: 500 });
    }
    
    console.log('Supabase connection successful');
    return NextResponse.json({
      status: 'success',
      message: 'Supabase connection working',
      recordCount: data?.length || 0,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Test Supabase error:', error);
    return NextResponse.json({
      status: 'error',
      error: 'Connection failed',
      details: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
} 