"use client"

import { useEffect, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float } from "@react-three/drei"
import { TypeAnimation } from "react-type-animation"
import type * as THREE from "three"

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.scale.x = hovered ? 1.2 : 1
      meshRef.current.scale.y = hovered ? 1.2 : 1
      meshRef.current.scale.z = hovered ? 1.2 : 1
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#00ffff" : "#0088cc"}
          wireframe
          emissive={hovered ? "#00ffff" : "#0088cc"}
          emissiveIntensity={0.5}
        />
      </mesh>
    </Float>
  )
}

function Scene3D() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <FloatingCube position={[-3, 2, 0]} />
      <FloatingCube position={[3, -1, 0]} />
      <FloatingCube position={[0, 1, -2]} />
      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  )
}

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        {mounted && (
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <Scene3D />
          </Canvas>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="font-mono text-primary text-sm mb-4 animate-in fade-in slide-in-from-top-4 duration-700">
            $ whoami
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-top-6 duration-700 delay-200 text-balance">
            Frontend Developer
          </h1>

          <div className="text-xl md:text-2xl text-muted-foreground mb-8 h-16 animate-in fade-in slide-in-from-top-8 duration-700 delay-300">
            <TypeAnimation
              sequence={[
                "HTML, CSS və JavaScript ilə responsiv interfeyslər qururam",
                2000,
                "Tailwind və Bootstrap ilə modern dizaynlar hazırlayıram",
                2000,
                "React ilə dinamik və sürətli web tətbiqlər yaradıram",
                2000,
                "REST API-lərlə işləyərək real data inteqrasiyası edirəm",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />

          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="font-mono text-sm px-4 py-2 bg-secondary rounded-md border border-border">HTML5</div>
            <div className="font-mono text-sm px-4 py-2 bg-secondary rounded-md border border-border">CSS3</div>
            <div className="font-mono text-sm px-4 py-2 bg-secondary rounded-md border border-border">JavaScript</div>
            <div className="font-mono text-sm px-4 py-2 bg-secondary rounded-md border border-border">Tailwind CSS</div>
            <div className="font-mono text-sm px-4 py-2 bg-secondary rounded-md border border-border">React</div>
          </div>

          <div className="pt-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-700">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              Əlaqə saxlayın
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
