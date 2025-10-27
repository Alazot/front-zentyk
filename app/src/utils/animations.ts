'use client';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animación de fade-up para cualquier elemento
 * @param selector - Selector CSS o referencia del elemento
 * @param duration - Duración de la animación en segundos
 * @param y - Offset inicial en Y
 */
export const fadeUp = (selector: string | Element, duration = 1, y = 50) => {
  gsap.from(selector, {
    y,
    opacity: 0,
    duration,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};

/**
 * Animación de slide horizontal
 */
export const slideLeft = (
  selector: string | Element,
  duration = 1,
  x = 100
) => {
  gsap.from(selector, {
    x,
    opacity: 0,
    duration,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
  });
};
