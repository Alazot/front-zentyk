'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

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

export default function ValuesCard() {
  return (
    <section className="relative overflow-hidden py-20 bg-white text-gray-800">
      {/* VALORES */}
      <div className="max-w-6xl mx-auto mt-0 px-6 relative z-10">
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
