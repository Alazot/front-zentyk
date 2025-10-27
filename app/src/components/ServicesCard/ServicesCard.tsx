'use client';

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
    <section id="services" className="max-w-7xl mt-2 mb-8 mx-auto my-20 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="service-card group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
          >
            <div className="relative w-full h-43">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              {service.description && (
                <p className="text-gray-600 text-sm">{service.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
