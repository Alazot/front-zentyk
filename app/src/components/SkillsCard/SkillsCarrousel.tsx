'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

interface Skill {
  title: string;
  image: string;
}

interface SkillProps {
  skills: Skill[];
  titleSection: string;
}

const SkillsCarousel: React.FC<SkillProps> = ({ skills, titleSection }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(null);
  const position = useRef(0);
  const speed = 1; // px por frame, ajusta la velocidad

  // Duplicamos el array para scroll infinito
  const marqueeSkills = [...skills, ...skills];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      position.current += speed;
      if (position.current >= totalWidth) {
        position.current = 0;
      }
      track.style.transform = `translateX(-${position.current}px)`;
      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    // Cleanup correcto, devuelve void
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-2 mb-48 px-4 text-center relative overflow-hidden">
      <h2 className="text-3xl font-bold mb-2 text-gray-900">{titleSection}</h2>

      <div className="relative w-full overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-8 whitespace-nowrap"
          style={{ display: 'flex' }}
        >
          {marqueeSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center w-32 sm:w-36 flex-shrink-0"
            >
              <div className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden w-32 h-32 sm:w-36 sm:h-36">
                <div className="relative w-full h-full flex items-center justify-center bg-gray-50 p-4">
                  <Image
                    src={skill.image}
                    alt={skill.title}
                    fill
                    className="object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm sm:text-base text-white text-center font-medium">
                    {skill.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
