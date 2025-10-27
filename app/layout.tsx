import './globals.css';
import { ReactNode } from 'react';
import { ThemeProvider } from './src/context/ThemeContext';
import WhatsAppButton from './src/components/WhatsAppButton/WhatsAppButton';
export const metadata = {
  title: 'ZENTYK Software & Consulting SPA',
  description: 'Soluciones tecnológicas de alto impacto e innovación digital.',
};

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
