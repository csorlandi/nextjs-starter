import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import AppNavbar from '@/components/app-navbar';
import Providers from '@/components/providers';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Next.js Starter App',
  description: 'A starter template for Next.js applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          <AppNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
