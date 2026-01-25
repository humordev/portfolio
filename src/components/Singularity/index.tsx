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
        const { width, height } = state.viewport.getCurrentViewport(state.camera, [0, 0, 0]);
        const positions = mesh.current.geometry.attributes.position.array as Float32Array;
        const time = clock.getElapsedTime();

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            const offset = particles.offsets[i];

            // Anchored base position
            const ax = particles.anchors[i3];
            const ay = particles.anchors[i3 + 1];
            const az = particles.anchors[i3 + 2];

            // Interaction Calculations
            // Properly map normalized mouse (-1..1) to world space at z=0
            const mouseX = (mouse.x * width) / 2;
            const mouseY = (mouse.y * height) / 2;

            // Use anchor for stable distance check
            const distDx = ax - mouseX;
            const distDy = ay - mouseY;
            const distSq = distDx * distDx + distDy * distDy;

            // Interaction Zone Radius - Bigger radius for visibility
            const interactionRadius = 40; // Squared radius (~6.3 units)

            let intensity = 0;
            if (distSq < interactionRadius) {
                intensity = 1 - (distSq / interactionRadius);
                intensity = Math.pow(intensity, 2); // Ease in
            }

            // breathing speed - faster when hovered
            const freq = 1 + (intensity * 10);
            const amp = 0.5 + (intensity * 1.5);

            // Base Oscillation
            let tx = ax + Math.sin(time * freq + offset) * amp;
            let ty = ay + Math.cos(time * freq * 0.8 + offset) * amp;
            let tz = az + Math.sin(time * freq * 1.2 + offset) * amp;

            // Apply Interaction Effects
            if (intensity > 0) {
                // 1. Repulsion (Push XY) - Stronger
                const pushFactor = 4 * intensity;
                tx += (distDx / Math.sqrt(distSq || 1)) * pushFactor;
                ty += (distDy / Math.sqrt(distSq || 1)) * pushFactor;

                // 2. Z-Pop (Pull towards camera) - MUCH Stronger
                tz += 8 * intensity;

                // 3. Noise/Glitch effect (random jitter)
                tx += (Math.random() - 0.5) * 0.2 * intensity;
                ty += (Math.random() - 0.5) * 0.2 * intensity;
            }

            positions[i3] = tx;
            positions[i3 + 1] = ty;
            positions[i3 + 2] = tz;
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
        <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 22], fov: 60 }}
                gl={{ alpha: true, antialias: false }}
                dpr={[1, 2]}
                style={{ pointerEvents: 'none' }}
                eventSource={undefined}
            >
                <Particles />
            </Canvas>
        </div>
    );
}
