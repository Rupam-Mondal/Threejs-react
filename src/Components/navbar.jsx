// NavBar.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube'; // 3D Cube component

const NavBar = () => {
    return (
        <div className="relative w-full h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
            {/* Navbar */}
            <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-10 backdrop-blur-sm bg-gray-800 bg-opacity-30">
                <div className="text-white text-xl font-bold">3D Navbar</div>
                <ul className="flex space-x-8 text-white">
                    <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                    <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
                    <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
                    <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
                </ul>
            </nav>

            {/* 3D Canvas with Rotating Cube */}
            <div className="h-full flex justify-center items-center">
                <Canvas className="w-full h-[300px]">
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[5, 5, 5]} />
                    <Cube />
                    <OrbitControls enableZoom={false} />
                </Canvas>
            </div>
        </div>
    );
};

export default NavBar;

