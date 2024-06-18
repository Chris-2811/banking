import type { Metadata } from 'next';
import { Inter, IBM_Plex_Serif, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif',
});
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-manrope',
});

export const metadata: Metadata = {
  title: 'Horizon Bank',
  description: 'Horizon Bank is a digital bank for the future.',
  icons: {
    icon: '/icons/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
