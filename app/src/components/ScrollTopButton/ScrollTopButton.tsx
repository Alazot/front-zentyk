'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react'; // ícono elegante (de lucide-react)
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const proposalSection = document.getElementById('proposalId');
      if (!proposalSection) return;

      const rect = proposalSection.getBoundingClientRect();
      // Se muestra cuando la parte superior de “Nuestra Propuesta” entra en pantalla
      setVisible(rect.top <= window.innerHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Volver arriba"
          className="
            fixed bottom-24 right-8.3 z-50 bg-gradient-to-r from-[#06b6d4] to-[#3b82f6]
            text-white p-3 rounded-full shadow-lg
            hover:scale-110 hover:shadow-xl transition-transform duration-300
          "
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
