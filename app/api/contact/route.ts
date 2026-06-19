import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Dodajemo fallback string ('re_placeholder') da Next.js ne puca tokom build-a na Vercelu ako ključ nije tu
const apiKey = process.env.RESEND_API_KEY || 're_placeholder_key_for_build';
const resend = new Resend(apiKey);

export async function POST(request: Request) {
    try {
        const { name, email, company, message, attachments, hp_field, submission_speed } = await request.json();

        // 1. Anti-bot provjere (Honeypot i brzina)
        if (hp_field && hp_field.trim() !== '') {
            console.warn('Uočena bot aktivnost (Honeypot popunjen).');
            return NextResponse.json({ success: true }, { status: 200 });
        }

        if (submission_speed && submission_speed < 2) {
            console.warn(`Uočena bot aktivnost (Brzina unosa: ${submission_speed}s).`);
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // 2. Mapiranje priloga - preskačemo fajlove koji su potpuno prazni da Resend ne baca grešku
        const resendAttachments = attachments && attachments.length > 0
            ? attachments
                .filter((file: { content: string }) => file.content && file.content.trim() !== '')
                .map((file: { filename: string; content: string }) => ({
                    filename: file.filename,
                    content: file.content,
                }))
            : [];

        // 3. Slanje emaila sa prilozima za download
        const { data, error } = await resend.emails.send({
            from: 'Kontakt Forma <kontakt@forasrbac.com>',
            to: 'plexiglas@forasrbac.com',
            subject: `Novi upit sa sajta - Ime: ${name}`,
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
          <p style="font-size: 12px; color: #666;">Fajlovi su uspješno zakačeni uz ovaj email i možete ih preuzeti direktno klikom na priloge.</p>
        </div>
      `,
            attachments: resendAttachments,
        });

        if (error) {
            console.error("Resend greška:", error);
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ success: true, id: data?.id }, { status: 200 });

    } catch (error) {
        console.error("Interna greška na serveru:", error);
        return NextResponse.json({ error: 'Interna greška na serveru.' }, { status: 500 });
    }
}