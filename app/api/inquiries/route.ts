import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { full_name, company_name, email, project_description, file_names } = body;

    if (!full_name || !company_name || !email || !project_description) {
      return NextResponse.json(
        { error: 'Sva obavezna polja moraju biti popunjena.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Unesite ispravnu email adresu.' },
        { status: 400 }
      );
    }

    const { error } = await supabase.from('inquiries').insert({
      full_name,
      company_name,
      email,
      project_description,
      file_names: file_names || [],
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Greška pri slanju upita. Pokušajte ponovo.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('API error:', err);
    return NextResponse.json(
      { error: 'Interna greška servera.' },
      { status: 500 }
    );
  }
}
