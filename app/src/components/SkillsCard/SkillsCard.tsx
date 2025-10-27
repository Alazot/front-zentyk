'use client';

import Image from 'next/image';
import React from 'react';

interface Skill {
  title: string;
  image: string;
}

interface SkillProps {
  skills: Skill[];
  titleSection: string;
}

const ServicesCard: React.FC<SkillProps> = ({ skills, titleSection }) => {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto my-10 px-4 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900">{titleSection}</h2>

      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 gap-4 place-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-20 h-20 sm:w-24 sm:h-24"
          >
            {/* Contenedor de la imagen */}
            <div className="relative w-full h-full flex items-center justify-center bg-gray-50 p-2">
              <Image
                src={skill.image}
                alt={skill.title}
                fill
                className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Capa semitransparente con el título */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-[10px] sm:text-xs text-white text-center font-medium">
                {skill.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesCard;
