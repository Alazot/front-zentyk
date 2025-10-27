'use client';

import React, { ReactNode } from 'react';
import { ThemeProvider, useTheme } from '../context/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

// Componente interno para aplicar el tema
const LayoutContent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === 'dark'
          ? 'bg-background-dark text-white'
          : 'bg-background-light text-black'
      }`}
    >
      {/* Navbar */}
      <header className="w-full py-4 px-8 bg-primary shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold font-display">ZENTYK</h1>
          <nav>
            <ul className="flex gap-6">
              <li>
                <a href="#hero" className="hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="flex-1 w-full">{children}</main>

      {/* Footer */}
      <footer className="w-full py-6 bg-primary text-center text-gray-300">
        © {new Date().getFullYear()} ZENTYK Software & Consulting SPA. Todos los
        derechos reservados.
      </footer>
    </div>
  );
};

// Layout principal envuelto con ThemeProvider
const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <LayoutContent>{children}</LayoutContent>
    </ThemeProvider>
  );
};

export default MainLayout;
