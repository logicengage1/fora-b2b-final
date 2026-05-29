import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { name, email, company, message, file_names } = await request.json();

        const { data, error } = await resend.emails.send({
            from: 'Kontakt Forma <onboarding@resend.dev>',
            to: '@gmail.com', // <-- Ostavi svoj Resend mail ovdje
            subject: `Lokalni Test Forme - Ime: ${name}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; max-width: 600px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #b91c1c; border-bottom: 2px solid #f8fafc; padding-bottom: 10px;">Novi upit sa sajta Fora</h2>
          <p><strong>Ime i prezime:</strong> ${name}</p>
          <p><strong>Firma:</strong> ${company}</p>
          <p><strong>Email pošiljaoca:</strong> ${email}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Opis projekta:</strong></p>
          <p style="white-space: pre-wrap; background: #f8fafc; padding: 15px; border-radius: 8px; line-height: 1.6;">${message}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Priloženi fajlovi:</strong> ${file_names && file_names.length > 0 ? file_names.join(', ') : 'Nema priloženih fajlova'}</p>
        </div>
      `,
        });

        if (error) {
            console.error("Resend greška:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: 'Interna greška na serveru.' }, { status: 500 });
    }
}