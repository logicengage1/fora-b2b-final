import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://fora.ba'),
  title: 'Fora — Vrhunska obrada pleksiglasa u Srpcu, BiH',
  description:
    'Specijalizovana CNC obrada i rezanje pleksiglasa za arhitekte, retail, medicinsku i industrijsku primjenu. Srbac, Bosna i Hercegovina.',
  keywords: ['pleksiglas', 'CNC obrada', 'akril', 'Srbac', 'BiH', 'rezanje pleksiglasa', 'thermoformiranje', 'B2B'],
  openGraph: {
    title: 'Fora — Vrhunska obrada pleksiglasa',
    description: 'Precizna CNC obrada i rezanje pleksiglasa. Partner za arhitekte, retail i industriju.',
    type: 'website',
    locale: 'bs_BA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bs">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
