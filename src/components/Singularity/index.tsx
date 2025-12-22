"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const count = 10000;

function Particles() {
    const mesh = useRef<THREE.Points>(null);
    const leftLight = useRef<THREE.PointLight>(null);
    const rightLight = useRef<THREE.PointLight>(null);

    // Generate particles with specific anchors
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        const anchors = new Float32Array(count * 3); // Store initial home positions
        const offsets = new Float32Array(count); // Random time offsets for oscillation

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const isLeft = i % 2 === 0;
            const centerX = isLeft ? -12 : 12;

            // Create a sphere shape
            const r = Math.random() * 6 + 2; // Fixed Radius spread
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = centerX + r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            temp[i3] = x;
            temp[i3 + 1] = y;
            temp[i3 + 2] = z;

            anchors[i3] = x;
            anchors[i3 + 1] = y;
            anchors[i3 + 2] = z;

            offsets[i] = Math.random() * 100; // unique offset
        }
        return { pos: temp, anchors, offsets };
    }, []);

    useFrame((state) => {
        if (!mesh.current) return;

        const { mouse, clock } = state;
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;
        const time = clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const offset = particles.offsets[i];

            // Anchored base position
            const ax = particles.anchors[i3];
            const ay = particles.anchors[i3 + 1];
            const az = particles.anchors[i3 + 2];

            // "Breathing" / Floating in place
            // We add sine wave motion based on time and individual offset
            // This makes them move AROUND their anchor, but never leave it.
            const movementRadius = 0.5; // How far they wiggle

            const x = ax + Math.sin(time + offset) * movementRadius;
            const y = ay + Math.cos(time * 0.8 + offset) * movementRadius;
            const z = az + Math.sin(time * 1.2 + offset) * movementRadius;

            // Interaction: Subtle shift away from mouse (without permanently moving)
            const mouseDx = (mouse.x * 20) - x;
            const mouseDy = (mouse.y * 10) - y;
            const dSq = mouseDx * mouseDx + mouseDy * mouseDy;

            let finalX = x;
            let finalY = y;
            let finalZ = z;

            if (dSq < 16) {
                const push = (16 - dSq) * 0.02;
                finalX -= mouseDx * push;
                finalY -= mouseDy * push;
            }

            positions[i3] = finalX;
            positions[i3 + 1] = finalY;
            positions[i3 + 2] = finalZ;
        }

        mesh.current.geometry.attributes.position.needsUpdate = true;
        // mesh.current.rotation.y = time * 0.05; // Optional slow rotation
    });

    return (
        <>
            <pointLight ref={leftLight} position={[-12, 0, 5]} distance={25} intensity={6} color="#a855f7" />
            <pointLight ref={rightLight} position={[12, 0, 5]} distance={25} intensity={6} color="#ec4899" />

            <points ref={mesh}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        args={[particles.pos, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.12}
                    color="#ffffff"
                    vertexColors={false}
                    sizeAttenuation
                    transparent
                    opacity={0.9}
                    blending={THREE.AdditiveBlending}
                />
            </points>
        </>
    );
}

export default function Singularity() {
    return (
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-auto">
            <Canvas
                camera={{ position: [0, 0, 22], fov: 60 }}
                gl={{ alpha: true, antialias: false }}
                dpr={[1, 2]}
            >
                <Particles />
            </Canvas>
        </div>
    );
}
