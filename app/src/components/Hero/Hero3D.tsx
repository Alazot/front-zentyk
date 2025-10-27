'use client';

import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import styles from './Hero.module.css';
import { useMouseEffect } from './../../hooks/useMouseEffect';

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

  // Generar posiciones de partículas
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

  // Velocidades aleatorias para el movimiento ondulante
  const randomSpeeds = useMemo(() => {
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) speeds[i] = Math.random() * 0.5 + 0.5;
    return speeds;
  }, [count]);

  // Textura circular nítida generada en canvas
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

    // Movimiento ondulante
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      array[i3 + 1] += Math.sin(time * randomSpeeds[i] + array[i3]) * 0.002;
    }
    positions.needsUpdate = true;

    // Interacción con mouse solo si hay movimiento
    pointsRef.current.rotation.y = mouseX * 0.3;
    pointsRef.current.rotation.x = mouseY * 0.3;

    // Pulso dinámico en tamaño
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
        vertexColors={false}
      />
    </points>
  );
};

const Hero3D: React.FC = () => {
  const { x, y, handleMouseEnter, handleMouseLeave } = useMouseEffect();

  return (
    <div
      className="w-full h-screen relative"
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
          mouseX={x}
          mouseY={y}
        />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>

      {/* Overlay con texto */}
      <div className={styles.heroOverlay}>
        <h1 className={styles.heroTitle}>ZENTYK</h1>
        <p className={styles.heroSubtitle}>
          Tecnología guiada por conocimiento
        </p>
        <button className={styles.heroButton}>Conócenos</button>
      </div>
    </div>
  );
};

export default Hero3D;
