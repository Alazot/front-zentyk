import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';

// ✅ SEO + OpenGraph + íconos
export const metadata = {
  title: 'ZENTYK | Tecnología guiada por conocimiento',
  description: 'Desarrollo de software y consultoría tecnológica.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/web-app-manifest-192x192.png', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
};

// ✅ NUEVO: configuración visual (antes en metadata)
export const viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ZENTYK Software & Consulting SpA',
  url: 'https://www.zentyk.cl',
  logo: 'https://www.zentyk.cl/favicon.ico',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="white-translucent"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body className="bg-white text-gray-900">
        <ThemeProvider>{children}</ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
