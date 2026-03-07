import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, Stars, Box } from '@react-three/drei';
import * as THREE from 'three';

function TruckModel() {
  const group = useRef(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2;
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[4, 2, 2]} />
        <meshStandardMaterial color="#2563eb" />
      </mesh>
      <mesh position={[2.5, 0.25, 0]}>
        <boxGeometry args={[1.5, 1.5, 1.8]} />
        <meshStandardMaterial color="#1d4ed8" />
      </mesh>
      <mesh position={[2.8, 0.5, 0]}>
        <boxGeometry args={[1, 0.8, 1.81]} />
        <meshStandardMaterial color="#93c5fd" transparent opacity={0.6} />
      </mesh>
      {[[-1.2, -0.6, 0.9], [1.2, -0.6, 0.9], [-1.2, -0.6, -0.9], [1.2, -0.6, -0.9], [2.5, -0.6, 0.9], [2.5, -0.6, -0.9]].map((pos, i) => (
        <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
          <meshStandardMaterial color="#111" />
        </mesh>
      ))}
    </group>
  );
}

function FloatingBox({ position, color }) {
  const mesh = useRef(null);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
      mesh.current.position.y += Math.sin(state.clock.getElapsedTime() + position[0]) * 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Box ref={mesh} position={position} args={[1, 1, 1]}>
        <meshStandardMaterial color={color} />
      </Box>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 3, 8]} fov={40} />
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

        <TruckModel />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      </Canvas>
    </div>
  );
}

export function ServicesScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-40">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingBox position={[-4, 2, -5]} color="#3b82f6" />
        <FloatingBox position={[4, -2, -3]} color="#60a5fa" />
        <FloatingBox position={[0, 3, -8]} color="#2563eb" />
        <FloatingBox position={[-6, -3, -6]} color="#1d4ed8" />
      </Canvas>
    </div>
  );
}

export function PackageScene() {
  return (
    <div className="absolute inset-0 -z-10 opacity-20">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Float speed={5} rotationIntensity={2} floatIntensity={2}>
          <Box args={[1, 1, 1]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#f59e0b" />
          </Box>
        </Float>
      </Canvas>
    </div>
  );
}

function ParticlePoints({ count, positions }) {
  const points = useRef(null);
  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#94a3b8" transparent opacity={0.4} />
    </points>
  );
}

export function BackgroundParticles() {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <Canvas>
        <ParticlePoints count={count} positions={positions} />
      </Canvas>
    </div>
  );
}
