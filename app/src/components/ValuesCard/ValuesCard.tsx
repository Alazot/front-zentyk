'use client';

import { valuesCards } from '@/common/objects/valuesImages';
import { motion } from 'framer-motion';
import Image from 'next/image';

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
