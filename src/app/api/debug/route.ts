import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const debug = {
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Set' : 'Missing',
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Set' : 'Missing',
      nodeEnv: process.env.NODE_ENV,
      netlifyContext: process.env.CONTEXT || 'Not Netlify',
      timestamp: new Date().toISOString()
    };
    
    return NextResponse.json(debug);
  } catch (error) {
    return NextResponse.json(
      { error: 'Debug endpoint failed', details: error },
      { status: 500 }
    );
  }
} 