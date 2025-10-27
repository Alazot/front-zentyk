'use client';

import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = (
  ref: RefObject<HTMLElement>,
  options?: { y?: number; opacity?: number; duration?: number }
) => {
  useEffect(() => {
    if (!ref.current) return;

    gsap.from(ref.current, {
      y: options?.y ?? 50,
      opacity: options?.opacity ?? 0,
      duration: options?.duration ?? 1,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });
  }, [ref, options]);
};
