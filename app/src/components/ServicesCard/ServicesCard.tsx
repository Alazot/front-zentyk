'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface Service {
  title: string;
  image: string;
  description?: string;
}

interface ServicesSectionProps {
  services: Service[];
}

const ServicesCard: React.FC<ServicesSectionProps> = ({ services }) => {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-6 sm:py-6 bg-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              {/* Imagen */}
              <div className="relative w-full h-32 sm:h-36 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Texto */}
              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2 group-hover:text-[#00D1FF] transition-colors">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>

              {/* Línea azul inferior */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#00D1FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ width: '0%' }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCard;
