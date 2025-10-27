import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import WhatsAppButton from '@/components/WhatsAppButton/WhatsAppButton';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <WhatsAppButton />
      </body>
    </html>
  );
}
