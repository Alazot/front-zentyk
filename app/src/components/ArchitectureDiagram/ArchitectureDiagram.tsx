'use client';

import { motion } from 'framer-motion';
import { FaServer, FaDatabase, FaDesktop } from 'react-icons/fa';

export default function ArchitectureDiagram() {
  return (
    <section className="flex flex-col items-center justify-center py-16 relative">
      <div className="relative w-full flex items-center justify-center">
        {/* SVG con líneas rectas y puntos animados */}
        <svg
          className="absolute w-full h-64"
          viewBox="0 0 1000 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Línea superior */}
          <line
            x1="0"
            y1="100"
            x2="1000"
            y2="100"
            stroke="#9ca3af"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
          {/* Punto animado ida */}
          <circle
            r="8"
            fill="#3b82f6"
            style={{
              offsetPath: 'path("M0 100 L1000 100")',
              animation: 'moveDot 2s linear infinite',
            }}
          />

          {/* Línea inferior */}
          <line
            x1="0"
            y1="200"
            x2="1000"
            y2="200"
            stroke="#9ca3af"
            strokeWidth="4"
            strokeDasharray="12 12"
          />
          {/* Punto animado vuelta */}
          <circle
            r="8"
            fill="#ef4444"
            style={{
              offsetPath: 'path("M1000 200 L0 200")',
              animation: 'moveDotReverse 2s linear infinite',
            }}
          />
        </svg>

        {/* BLOQUES PRINCIPALES */}
        <div className="flex items-center justify-between w-[80%] relative z-10">
          {/* FRONTEND */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-6 w-48 h-48 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <FaDesktop className="text-blue-500 text-6xl mb-3" />
            <p className="font-semibold text-gray-800 text-lg">Web / App</p>
          </motion.div>

          {/* BACKEND */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-2xl p-6 w-48 h-48 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <FaServer className="text-green-500 text-6xl mb-3" />
            <p className="font-semibold text-gray-800 text-lg">Servicios</p>
          </motion.div>

          {/* BASE DE DATOS */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-lg rounded-2xl p-6 w-48 h-48 flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <FaDatabase className="text-yellow-500 text-6xl mb-3" />
            <p className="font-semibold text-gray-800 text-lg">Base de Datos</p>
          </motion.div>
        </div>
      </div>

      {/* Animaciones de los puntos */}
      <style jsx>{`
        @keyframes moveDot {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }

        @keyframes moveDotReverse {
          0% {
            offset-distance: 0%;
          }
          100% {
            offset-distance: 100%;
          }
        }
      `}</style>
    </section>
  );
}
