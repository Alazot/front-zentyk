'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const iconsOne = [
  '/images/icons/ia.png',
  '/images/icons/code.png',
  '/images/icons/brain.png',
  '/images/icons/network.png',
  '/images/icons/cloud.png',
];

export default function ProposalCard() {
  return (
    <section className="relative overflow-hidden py-20 bg-white text-gray-800">
      {/* ICONOS INTERACTIVOS flotando en el fondo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {iconsOne.map((icon, i) => (
          <motion.div
            key={i}
            className="absolute w-12 h-12 sm:w-16 sm:h-16 opacity-40"
            initial={{ y: 0 }}
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.6,
              ease: 'easeInOut',
            }}
            style={
              {
                left: `${11 + i * 18}%`,
                top: `${32 + (i % 1) * 30}%`,
                position: 'absolute',
              } as React.CSSProperties
            }
          >
            <Image
              src={icon}
              alt={`icon-${i}`}
              fill
              className="object-contain"
            />
          </motion.div>
        ))}
      </div>

      {/* SOBRE NOSOTROS */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center px-6 relative z-10"
      >
        <p className="text-gray-700 leading-relaxed">
          En ZENTYK creemos que la tecnología solo tiene sentido cuando está
          guiada por conocimiento. Diseñamos soluciones digitales con propósito,
          combinando ingeniería, análisis y creatividad. Cada proyecto refleja
          nuestra búsqueda de equilibrio entre lo humano y lo tecnológico, entre
          la lógica y la inspiración.
          <br />
          {/* <span className="block mt-4 text-black-600 font-semibold">
            ZENTYK — Tecnología guiada por conocimiento.
          </span> */}
        </p>
      </motion.div>

      {/* MISIÓN Y VISIÓN */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mt-36 px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-200 shadow-md p-8 rounded-2xl hover:shadow-lg transition-all"
        >
          <h3 className="text-2xl font-semibold text-black-600 mb-4">Misión</h3>
          <p className="text-gray-700">
            Desarrollar soluciones tecnológicas inteligentes, estables y
            sostenibles, basadas en el conocimiento y la comprensión profunda de
            cada desafío. Creamos tecnología que piensa y se adapta, impulsando
            el crecimiento de las personas y las organizaciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white border border-gray-200 shadow-md p-8 rounded-2xl hover:shadow-lg transition-all"
        >
          <h3 className="text-2xl font-semibold text-black-600 mb-4">Visión</h3>
          <p className="text-gray-700">
            Ser un referente en desarrollo tecnológico guiado por conocimiento,
            integrando ingeniería, estrategia y creatividad para crear
            soluciones que generen valor real.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
