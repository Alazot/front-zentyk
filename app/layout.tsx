import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';

// ✅ Esto le dice a Next y a los navegadores que tu sitio es solo "modo claro"
export const metadata = {
  title: 'ZENTYK | Tecnología guiada por conocimiento',
  description: 'Desarrollo de software y consultoría tecnológica.',
  colorScheme: 'light',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Fuerza modo claro en Safari, iPhone y navegadores móviles */}
        <meta name="color-scheme" content="light only" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="white-translucent"
        />
      </head>

      <body className="bg-white text-gray-900">
        <ThemeProvider>{children}</ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
