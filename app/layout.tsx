import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://forasrbac.com'),
  title: {
    default: 'Fora — Vrhunska obrada pleksiglasa u Srpcu, BiH',
    template: '%s | Fora',
  },
  description:
    'Specijalizovana CNC obrada i rezanje pleksiglasa za arhitekte, retail, medicinsku i industrijsku primjenu. Srbac, Bosna i Hercegovina.',
  keywords: [
    'pleksiglas',
    'CNC obrada',
    'akril',
    'Srbac',
    'Banja Luka',
    'Republika Srpska',
    'BiH',
    'rezanje pleksiglasa',
    'izrada proizvoda od pleksiglasa',
    'polimerni materijali',
    'industrijska oprema',
    'B2B',
  ],
  authors: [{ name: 'Fora' }],
  creator: 'Fora',
  publisher: 'Fora',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'Fora — Vrhunska obrada pleksiglasa',
    description: 'Precizna CNC obrada i rezanje pleksiglasa. Partner za arhitekte, retail i industriju.',
    type: 'website',
    locale: 'bs_BA',
    url: '/',
    siteName: 'Fora',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fora — Vrhunska obrada pleksiglasa',
    description: 'Precizna CNC obrada i rezanje pleksiglasa. Partner za arhitekte, retail i industriju.',
  },
  category: 'business',
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
