'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const valuesCards = [
  {
    title: 'Conocimiento',
    description: 'La base de cada decisión y cada estrategia.',
    image: '/images/values/knowledge.jpg',
  },
  {
    title: 'Claridad',
    description: 'Comunicamos y construimos con transparencia y propósito.',
    image: '/images/values/clarity.png',
  },
  {
    title: 'Evolución',
    description: 'Aprendemos de cada experiencia para mejorar continuamente.',
    image: '/images/values/evolution.jpg',
  },
  {
    title: 'Equilibrio',
    description: 'Buscamos armonía entre tecnología, diseño y funcionalidad.',
    image: '/images/values/balance.png',
  },
  {
    title: 'Innovación consciente',
    description: 'Innovar no es hacer más, es hacer mejor.',
    image: '/images/values/innovation.png',
  },
];

const iconsOne = [
  '/images/icons/ia.png',
  '/images/icons/code.png',
  '/images/icons/brain.png',
  '/images/icons/network.png',
  '/images/icons/cloud.png',
];

const iconsTwo = ['/images/icons/cloud.png'];

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
            style={{
              left: `${12 + i * 18}%`,
              top: `${14 + (i % 1) * 30}%`,
            }}
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

      {/* VALORES */}
      <div className="max-w-6xl mx-auto mt-36 px-6 relative z-10">
        <h3 className="text-3xl font-semibold text-center mb-12 text-black-600">
          Nuestros Valores
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {valuesCards.map((valor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 text-center border border-gray-200 hover:border-black-400 transition-all shadow-sm hover:shadow-lg"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={valor.image}
                  alt={valor.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-semibold text-black-600 mb-2">
                {valor.title}
              </h4>
              <p className="text-gray-600 text-sm">{valor.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
