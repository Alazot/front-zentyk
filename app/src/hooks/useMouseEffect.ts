'use client';
import { useEffect, useState } from 'react';

export const useMouseEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false); // si el mouse está dentro del área

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!active) return; // solo actualizar si el mouse está dentro
      const x = (e.clientX / window.innerWidth - 0.5) * 2; // normalizado -1 a 1
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [active]);

  const handleMouseEnter = () => setActive(true);
  const handleMouseLeave = () => setActive(false);

  return { ...mousePosition, handleMouseEnter, handleMouseLeave };
};
