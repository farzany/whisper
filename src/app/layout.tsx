import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import React from 'react';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Whisper',
  description: 'A lightweight and fully customizable React snackbar (toast) system built with Framer Motion and TailwindCSS.',
  openGraph: {
    title: 'A React Snackbar (Toast) System',
    description: 'A lightweight and fully customizable React snackbar (toast) system built with Framer Motion and TailwindCSS.',
    url: 'https://whisper-snackbar.vercel.app',
    siteName: 'Nobility Pay',
    images: [
      {
        url: 'https://whisper-snackbar.vercel.app/og.gif',
        width: 1203,
        height: 630,
        alt: 'Various snacks of different types being rendered',
      },
      {
        url: 'https://whisper-snackbar.vercel.app/og.jpg',
        width: 1203,
        height: 630,
        alt: 'Various snacks of different types being rendered',
      },
    ],
    locale: 'en',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
