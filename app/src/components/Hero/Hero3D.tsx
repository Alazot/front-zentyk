'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Hero.module.css';
import { useMouseEffect } from '@/hooks/useMouseEffect';
import { motion } from 'framer-motion';

interface ParticleProps {
  count: number;
  size: number;
  color: string;
  mouseX: number;
  mouseY: number;
}

const Particles: React.FC<ParticleProps> = ({
  count,
  size,
  color,
  mouseX,
  mouseY,
}) => {
  const pointsRef = useRef<THREE.Points>(null!);

  // Posiciones iniciales de partículas
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const aspect = window.innerWidth / window.innerHeight;
    const rangeX = 20 * aspect;
    const rangeY = 20;
    const rangeZ = 20;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * rangeX;
      positions[i3 + 1] = (Math.random() - 0.5) * rangeY;
      positions[i3 + 2] = (Math.random() - 0.5) * rangeZ;
    }
    return positions;
  }, [count]);

  // Velocidades aleatorias
  const randomSpeeds = useMemo(() => {
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) speeds[i] = Math.random() * 0.5 + 0.5;
    return speeds;
  }, [count]);

  // Textura circular para las partículas
  const texture = useMemo(() => {
    const size = 128;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.1, 'rgba(255,255,255,0.9)');
    gradient.addColorStop(0.25, 'rgba(255,255,255,0.4)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);
    const texture = new THREE.CanvasTexture(canvas);
    texture.anisotropy = 16;
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Animación de partículas
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    if (!pointsRef.current) return;

    const positions = pointsRef.current.geometry.attributes
      .position as THREE.BufferAttribute;
    const array = positions.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 1] += Math.sin(time * randomSpeeds[i] + array[i3]) * 0.002;
    }
    positions.needsUpdate = true;

    // Rotación según mouse o touch
    pointsRef.current.rotation.y = mouseX * 0.3;
    pointsRef.current.rotation.x = mouseY * 0.3;

    // Pulso dinámico (burbujas que respiran)
    const material = pointsRef.current.material as THREE.PointsMaterial;
    material.size = size + Math.sin(time * 2) * 0.02;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={particlesPosition}
          count={particlesPosition.length / 3}
          itemSize={3}
          args={[] as any}
        />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        color={color}
        size={size}
        sizeAttenuation
        transparent
        opacity={4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        alphaTest={0.01}
      />
    </points>
  );
};

const Hero3D: React.FC = () => {
  const {
    x: mouseX,
    y: mouseY,
    handleMouseEnter,
    handleMouseLeave,
  } = useMouseEffect();
  const heroRef = useRef<HTMLDivElement>(null);
  const [touchCoords, setTouchCoords] = useState({ x: 0, y: 0 });

  // Bloquear scroll dentro del Hero (solo mobile)
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const preventScroll = (e: TouchEvent) => {
      if (window.innerWidth < 768) {
        const rect = hero.getBoundingClientRect();
        const insideHero =
          e.touches[0].clientY > rect.top && e.touches[0].clientY < rect.bottom;
        if (insideHero) e.preventDefault();
      }
    };

    hero.addEventListener('touchmove', preventScroll, { passive: false });
    return () => hero.removeEventListener('touchmove', preventScroll);
  }, []);

  // Movimiento táctil (actualiza coordenadas)
  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((touch.clientY - rect.top) / rect.height) * 2 + 1;
    setTouchCoords({ x, y });
  };

  // Detecta si es mobile y selecciona fuente de coordenadas
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const finalX = isMobile ? touchCoords.x : mouseX;
  const finalY = isMobile ? touchCoords.y : mouseY;

  // Scroll suave al presionar “Conócenos”
  const scrollToSection = () => {
    const target = document.getElementById('proposalId');
    if (!target) return;

    const startY = window.scrollY;
    const targetY = target.getBoundingClientRect().top + startY - 40;
    const distance = targetY - startY;
    const duration = 1200;
    let startTime: number | null = null;

    const easeInOutExpo = (t: number) =>
      t === 0
        ? 0
        : t === 1
        ? 1
        : t < 0.5
        ? Math.pow(2, 20 * t - 10) / 2
        : (2 - Math.pow(2, -20 * t + 10)) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutExpo(progress);
      window.scrollTo(0, startY + distance * eased);

      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  return (
    <div
      ref={heroRef}
      className="w-full h-screen relative"
      onTouchMove={handleTouchMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo animado */}
      <div className={styles.heroBackground}></div>

      {/* Canvas 3D */}
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />

        <Particles
          count={1000}
          size={0.1}
          color="#00D1FF"
          mouseX={finalX}
          mouseY={finalY}
        />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      {/* Overlay con texto y botón */}
      <div className={styles.heroOverlay}>
        <motion.div
          className="flex items-center justify-center -ml-[15px] -mb-[15px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.img
            src="/images/icons/logo.png"
            alt="Zentyk Logo"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-20 h-20 sm:w-20 sm:h-20 -mr-[0px] object-contain drop-shadow-[0_0_1px_rgba(255,255,255,0.8)] relative -translate-y-[12px]"
          />
          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          >
            ZENTYK
          </motion.h1>
        </motion.div>

        <motion.h2
          className={styles.heroSubtitle}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
        >
          Tecnología guiada por conocimiento
        </motion.h2>
        <motion.h2
          className={styles.heroButton}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
          onClick={scrollToSection}
        >
          Conócenos
        </motion.h2>
      </div>
    </div>
  );
};

export default Hero3D;
