import { Canvas, useFrame } from '@react-three/fiber'
import { Float, ContactShadows, Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function LuxObject() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.25
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.4) * 0.1
  })
  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.7}>
      <mesh ref={ref} position={[0, 0, 0]}>
        <torusGeometry args={[1.2, 0.42, 64, 200]} />
        <meshPhysicalMaterial
          color="#0A0A0A"
          metalness={0.95}
          roughness={0.18}
          clearcoat={1}
          clearcoatRoughness={0.05}
          reflectivity={1}
        />
      </mesh>
    </Float>
  )
}

function LuxRing() {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.z += delta * 0.15
  })
  return (
    <Float speed={0.8} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ref} position={[0, 0, -0.5]} rotation={[Math.PI / 2.2, 0, 0]}>
        <torusGeometry args={[1.9, 0.018, 32, 200]} />
        <meshStandardMaterial color="#C12A16" metalness={0.6} roughness={0.3} />
      </mesh>
    </Float>
  )
}

export default function Scene3D({ variant = 'hero' }) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.3, 4.5], fov: 45 }}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 5]} intensity={1.2} color="#FFFFFF" />
      <directionalLight position={[-4, -2, 3]} intensity={0.45} color="#C12A16" />
      <pointLight position={[0, 3, 3]} intensity={0.6} />

      <Suspense fallback={null}>
        <LuxObject />
        {variant === 'hero' && <LuxRing />}
        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.35}
          scale={8}
          blur={2.5}
          far={3}
          color="#0A0A0A"
        />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  )
}
