"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, Float } from "@react-three/drei";
import * as THREE from "three";

function NikaSphere() {
    const meshRef = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Gentle base rotation
        const time = state.clock.getElapsedTime();
        meshRef.current.rotation.x = time * 0.2;
        meshRef.current.rotation.y = time * 0.3;

        // Magnetic Mouse Interaction
        const { x, y } = state.mouse;

        // Move towards mouse with spring-like lag (Magnetic feel)
        const targetX = x * 2;
        const targetY = y * 2;

        // Smoothly interpolate position (Magnetic pull)
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);

        // Add subtle rotation based on movement for "weight"
        meshRef.current.rotation.x += -y * 0.2;
        meshRef.current.rotation.y += x * 0.2;
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <Sphere
                ref={meshRef}
                args={[1, 64, 64]}
                scale={2.2}
                onPointerOver={() => setHovered(true)}
                onPointerOut={() => setHovered(false)}
            >
                <MeshDistortMaterial
                    color={hovered ? "#e879f9" : "#ffffff"}
                    attach="material"
                    distort={0.6}
                    speed={hovered ? 4 : 2}
                    roughness={0.2}
                    metalness={0.9}
                    bumpScale={0.05}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    radius={1}
                />
            </Sphere>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} color={"#a855f7"} />
            <pointLight position={[-10, -10, -10]} color="#ec4899" intensity={2} />
        </Float>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                <NikaSphere />
            </Canvas>
        </div>
    );
}
