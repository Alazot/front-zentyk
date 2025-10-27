'use client';

import { useSmoothScroll } from '@/hooks/useSmoothScroll';

export default function Footer() {
  const { smoothScroll } = useSmoothScroll();

  return (
    <footer className="relative bg-[#010B14] text-gray-300 pt-20 pb-8 overflow-hidden border-t border-[#0a1a2f]">
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_top,rgba(0,209,255,0.1)_0%,transparent_70%)]" />
        <div className="absolute w-full h-full animate-pulse bg-[linear-gradient(120deg,rgba(0,209,255,0.1)_25%,transparent_25%,transparent_50%,rgba(0,209,255,0.1)_50%,rgba(0,209,255,0.1)_75%,transparent_75%,transparent)] bg-[length:200%_200%]" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo y frase */}
        <div>
          <h2 className="text-3xl font-bold text-[#00D1FF] mb-3">ZENTYK</h2>
          <p className="text-gray-400 text-sm">
            Tecnología guiada por conocimiento.
            <br />
            Desarrollo, innovación y estrategia digital.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explorar</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <button
                onClick={() => smoothScroll('proposalId')}
                className="hover:text-[#00D1FF] transition"
              >
                Nuestra Propuesta
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScroll('valuesId')}
                className="hover:text-[#00D1FF] transition"
              >
                Valores
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScroll('servicesId')}
                className="hover:text-[#00D1FF] transition"
              >
                Servicios
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScroll('tecnologiesId')}
                className="hover:text-[#00D1FF] transition"
              >
                Tecnologías
              </button>
            </li>
            <li>
              <button
                onClick={() => smoothScroll('contactId')}
                className="hover:text-[#00D1FF] transition"
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>

        {/* Redes sociales */}
        {/* <div>
          <h3 className="text-white font-semibold mb-3">Conecta</h3>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://www.linkedin.com/company/zentyk"
              target="_blank"
              className="hover:text-[#00D1FF] transition"
            >
              <i className="fa-brands fa-linkedin text-2xl"></i>
            </a>
            <a
              href="mailto:contacto@zentyk.cl"
              className="hover:text-[#00D1FF] transition"
            >
              <i className="fa-solid fa-envelope text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com/zentyk.cl"
              target="_blank"
              className="hover:text-[#00D1FF] transition"
            >
              <i className="fa-brands fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>*/}
      </div>

      {/* Línea divisoria */}
      <div className="relative z-10 mt-12 border-t border-[#0a1a2f] pt-6 text-center text-xs text-gray-500">
        © 2025 ZENTYK. Todos los derechos reservados.
      </div>
    </footer>
  );
}
