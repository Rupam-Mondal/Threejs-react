// Cube.js
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const Cube = () => {
    const meshRef = useRef();

    useFrame(() => {
        // Rotate the cube on each frame
        if (meshRef.current) {
            meshRef.current.rotation.x += 0.01;
            meshRef.current.rotation.y += 0.01;
        }
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="blue" />
        </mesh>
    );
};

export default Cube;
